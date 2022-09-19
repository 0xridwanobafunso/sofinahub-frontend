import { defineStore } from 'pinia'
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'
import Web3 from 'web3/dist/web3.min.js'
import BN from 'bignumber.js'

import getEstimateSecondsPerBlock from '../assets/getEstimateSecondsPerBlock'
import getDate from '../assets/getDate'

import { ABI } from '../assets/abi'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    CONFIG: {
      INFURA_ID: '4885e870e57a4b27b8b80466b0be302d',
      NETWORK: 'ropsten',
      SOFINAHUB_CONTRACT_ADDRESS: '0xd8DdDB6a7AdfC782f9976860039908d5D1Ac9e46',
    },
    walletconnect: {
      is_connected: false,
      provider: {},
      accounts: [],
      web3: {},
      // getAccount
      address: '',
      balance: '',
      company: {
        projects: {
          total: 0,
          data: [],
        },
      },
      backer: {
        projects: {
          total: 0,
          data: [],
        },
      },
      backed: {
        projects: {
          total: 0,
          data: [],
        },
      },
    },
    web3: {},
    projects: {
      total: 0,
      data: [],
    },
    project: {
      data: {},
      contributors: {},
    },
    error: {},
  }),
  getters: {
    _wallet: (state) => ({
      is_connected: state.walletconnect.is_connected,
      address: state.walletconnect.address,
      balance: state.walletconnect.balance,
      company: state.walletconnect.company,
      backer: state.walletconnect.backer,
      backed: state.walletconnect.backed,
      web3: state.walletconnect.web3,
    }),
    _projects: (state) => state.projects,
    _project: (state) => state.project,
    _web3: (state) => state.web3,
    _error: (state) => state.error,
  },
  actions: {
    async connect() {
      try {
        this.walletconnect.provider = new WalletConnectProvider({
          infuraId: this.CONFIG.INFURA_ID,
        })

        // show qr code and return wallet accounts
        this.walletconnect.accounts = await this.walletconnect.provider.enable()
        this.walletconnect.web3 = new Web3(this.walletconnect.provider)

        // is connected
        if (this.walletconnect.accounts) {
          // get accounts in the wallet
          this.walletconnect.accounts =
            await this.walletconnect.web3.eth.getAccounts()

          // get address and its balance
          this.walletconnect.address = this.walletconnect.accounts[0]
          this.walletconnect.balance =
            await this.walletconnect.web3.eth.getBalance(
              this.walletconnect.accounts[0],
              'latest'
            )

          this.walletconnect.is_connected = true
        }

        // Subscribe to accounts change
        this.walletconnect.provider.on('accountsChanged', (accounts) => {
          console.log('Account changed')

          this.walletconnect.address = accounts[0]
        })

        // Subscribe to chainId change
        this.walletconnect.provider.on('chainChanged', (chainId) => {
          console.log(chainId)

          console.log('chainID changed')
        })

        // Subscribe to session disconnection
        this.walletconnect.provider.on('disconnect', (code, reason) => {
          if (code == 1000) {
            this.walletconnect.is_connected = false

            // clear everything
            localStorage.clear()

            console.log(reason)
          }
        })

        return true
      } catch (error) {
        console.log(error)

        this.error = error

        return false
      }
    },
    async getProjectsForGuest() {
      try {
        this.projects.data = []

        this.web3 = new Web3(
          `https://${this.CONFIG.NETWORK}.infura.io/v3/${this.CONFIG.INFURA_ID}`
        )

        let contract = new this.web3.eth.Contract(
          ABI.SOFINAHUB,
          this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
        )

        let _data = []
        let _total = await contract.methods.numOfProjects().call()

        for (let _project = _total - 1; _project >= 0; _project--) {
          let projectAddress = await contract.methods.projects(_project).call()

          let _contract = new this.web3.eth.Contract(
            ABI.PROJECT,
            projectAddress
          )

          let data = await _contract.methods.getProject().call()

          data[6] = await getDate(this.web3, data[0][1]) // deadline date
          data[7] = await getDate(this.web3, data[0][9]) // roiDuration date

          _data.push(data)
        }

        this.projects.data = _data
        this.projects.total = _total

        return true
      } catch (error) {
        console.log(error)
        this.error = error

        return false
      }
    },
    async getProjectsForCompany() {
      try {
        this.walletconnect.company.projects.data = []

        let contract = new this.walletconnect.web3.eth.Contract(
          ABI.SOFINAHUB,
          this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
        )

        this.walletconnect.company.projects.total = 0

        let totalNumOfProjectInSofinaHub = await contract.methods
          .numOfProjects()
          .call()
        let _count = 0
        let _data = []

        for (
          let _project = totalNumOfProjectInSofinaHub - 1;
          _project >= 0;
          _project--
        ) {
          let projectAddress = await contract.methods.projects(_project).call()

          let _contract = new this.web3.eth.Contract(
            ABI.PROJECT,
            projectAddress
          )

          let data = await _contract.methods.getProject().call()

          if (data[0][4] != this.walletconnect.address) continue

          data[6] = await getDate(this.web3, data[0][1]) // deadline date
          data[7] = await getDate(this.web3, data[0][9]) // roiDuration date

          _count++
          _data.push(data)
        }

        this.walletconnect.company.projects.total = _count
        this.walletconnect.company.projects.data = _data

        return true
      } catch (error) {
        console.log(error)
        this.error = error

        return false
      }
    },
    async getProject(address) {
      try {
        this.project.contributors = {}
        let _contributors = {}

        this.web3 = new Web3(
          `https://${this.CONFIG.NETWORK}.infura.io/v3/${this.CONFIG.INFURA_ID}`
        )

        let _contract = new this.web3.eth.Contract(ABI.PROJECT, address)

        this.project.data = await _contract.methods.getProject().call()

        this.project.data[6] = await getDate(this.web3, this.project.data[0][1]) // deadline date
        this.project.data[7] = await getDate(this.web3, this.project.data[0][9]) // roiDuration date

        // total contribution
        // this.project.data[2]
        for (let _id = 0; _id <= this.project.data[2] - 1; _id++) {
          let contribution = await _contract.methods.getContribution(_id).call()

          // check if this contributor has donated before
          // add up his/her balance
          if (Object.keys(_contributors).includes(contribution[1])) {
            _contributors[contribution[1]] =
              _contributors[contribution[1]] +
              contribution[0] / Math.pow(10, 18)
          } else
            _contributors[contribution[1]] = contribution[0] / Math.pow(10, 18)
        }

        this.project.contributors = _contributors

        return true
      } catch (error) {
        console.log(error)
        this.error = error

        return false
      }
    },
    async createProject(payload) {
      try {
        console.log(payload)

        let contract = new this.walletconnect.web3.eth.Contract(
          ABI.SOFINAHUB,
          this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
        )

        let estimates = await getEstimateSecondsPerBlock(
          this.walletconnect.web3,
          100
        )
        let now = await this.walletconnect.web3.eth.getBlockNumber()

        let date = Math.round(new Date().getTime() / 1000)
        let deadline = Math.round(
          new Date(payload.project.deadline).getTime() / 1000
        )
        let duration = Math.round(
          new Date(payload.roi.duration).getTime() / 1000
        )

        let imageSources = payload.project.imageSources
          .replace(' ', '')
          .split(',')
        let _imageSources = []

        let videoSources = payload.project.videoSources
          .replace(' ', '')
          .split(',')
        let _videoSources = []

        let documentSources = payload.project.documentSources
          .replace(' ', '')
          .split(',')
        let _documentSources = []

        for (let each of imageSources) {
          if (
            each
              .replace('\n', '')
              .startsWith('https://drive.google.com/file/d/')
          ) {
            _imageSources.push(
              `https://drive.google.com/uc?export=view&id=${
                each
                  .replace('\n', '')
                  .replace('https://drive.google.com/file/d/', '')
                  .split('/')[0]
              }`
            )
          } else _imageSources.push(each)
        }

        for (let each of videoSources) {
          _videoSources.push(each.replace('\n', ''))
        }

        for (let each of documentSources) {
          _documentSources.push(each.replace('\n', ''))
        }

        let _goal = this.walletconnect.web3.utils.toWei(
          payload.project.goal,
          'ether'
        )
        let _deadline = Math.round(now + (deadline - date) / estimates)
        let _duration = Math.round(now + (duration - date) / estimates)

        let response = await contract.methods
          .create({
            fundingGoal: _goal,
            deadline: _deadline,
            title: payload.project.title,
            description: payload.project.description,
            images: _imageSources,
            videos: _videoSources,
            documents: _documentSources,
            roi: payload.roi.roi,
            roiDuration: _duration,
            tokenName: payload.token.name,
            tokenSymbol: payload.token.symbol,
            tokenDecimal: payload.token.decimal,
            tokenTotalSupply: payload.token.totalSupply,
          })
          .send({ from: this.walletconnect.address })

        if (response) return true
      } catch (error) {
        console.log(error)

        this.error = error

        return false
      }
    },
    async getProjectsForBacker() {
      try {
        this.walletconnect.backer.projects.data = []

        let contract = new this.walletconnect.web3.eth.Contract(
          ABI.SOFINAHUB,
          this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
        )

        this.walletconnect.backer.projects.total = 0

        let totalNumOfProjectInSofinaHub = await contract.methods
          .numOfProjects()
          .call()
        let _count = 0
        let _data = []

        for (
          let _project = totalNumOfProjectInSofinaHub - 1;
          _project >= 0;
          _project--
        ) {
          let projectAddress = await contract.methods.projects(_project).call()

          let _contract = new this.web3.eth.Contract(
            ABI.PROJECT,
            projectAddress
          )

          let data = await _contract.methods.getProject().call()

          data[6] = await getDate(this.web3, data[0][1]) // deadline date
          data[7] = await getDate(this.web3, data[0][9]) // roiDuration date

          _count++
          _data.push(data)
        }

        this.walletconnect.backer.projects.total = _count
        this.walletconnect.backer.projects.data = _data

        return true
      } catch (error) {
        console.log(error)
        this.error = error

        return false
      }
    },
    async getBackedProjectsForBacker() {
      try {
        this.walletconnect.backed.projects.data = []

        let contract = new this.walletconnect.web3.eth.Contract(
          ABI.SOFINAHUB,
          this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
        )

        this.walletconnect.backed.projects.total = 0

        let totalNumOfProjectInSofinaHub = await contract.methods
          .numOfProjects()
          .call()
        let _count = 0
        let _data = []

        for (
          let _project = totalNumOfProjectInSofinaHub - 1;
          _project >= 0;
          _project--
        ) {
          let projectAddress = await contract.methods.projects(_project).call()

          let _contract = new this.web3.eth.Contract(
            ABI.PROJECT,
            projectAddress
          )

          let data = await _contract.methods.getProject().call()

          let foundAsBacker = false

          for (let _id = 0; _id <= data[2] - 1; _id++) {
            let contribution = await _contract.methods
              .getContribution(_id)
              .call()

            if (contribution[1] == this._wallet.address) foundAsBacker = true
          }

          if (!foundAsBacker) continue

          data[6] = await getDate(this.web3, data[0][1]) // deadline date
          data[7] = await getDate(this.web3, data[0][9]) // roiDuration date

          _count++
          _data.push(data)
        }

        this.walletconnect.backed.projects.total = _count
        this.walletconnect.backed.projects.data = _data

        return true
      } catch (error) {
        console.log(error)
        this.error = error

        return false
      }
    },
    async donate(projectAddress, amount) {
      try {
        if (!this._wallet.is_connected)
          throw new Error('Make sure you have connected your wallet')

        let contract = new this.walletconnect.web3.eth.Contract(
          ABI.SOFINAHUB,
          this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
        )

        let response = await contract.methods.contribute(projectAddress).send({
          from: this.walletconnect.address,
          value: this.walletconnect.web3.utils.toWei(amount, 'ether'),
        })

        if (Object.keys(response).includes('events')) {
          if (Object.keys(response.events).includes('LogFailure')) {
            throw new Error({
              message: response.events.LogFailure.returnValues.message,
            })
          }
        }

        if (response) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.log(error)
        this.error = error

        return false
      }
    },
    async deposit(address) {
      try {
        let contract = new this.walletconnect.web3.eth.Contract(
          ABI.PROJECT,
          address
        )

        let project = await contract.methods.getProject().call()

        let goalInWei = new BN(project[0][0])
        let roiInWei = new BN(new BN(project[0][8]).div(new BN(100))).times(
          goalInWei
        )

        let depositInWei = goalInWei.plus(roiInWei)

        let _contract = new this.walletconnect.web3.eth.Contract(
          ABI.SOFINAHUB,
          this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
        )

        let response = await _contract.methods.deposit(address).send({
          from: this.walletconnect.address,
          value: depositInWei,
        })

        if (Object.keys(response).includes('events')) {
          if (Object.keys(response.events).includes('LogFailure')) {
            throw new Error({
              message: response.events.LogFailure.returnValues.message,
            })
          }
        }

        if (response) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.log(error)

        this.error = error

        return false
      }
    },
    async toggleVerify(address) {
      try {
        let _contract = new this.walletconnect.web3.eth.Contract(
          ABI.SOFINAHUB,
          this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
        )

        let response = await _contract.methods.toggleVerify(address).send({
          from: this.walletconnect.address,
        })

        if (response) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.log(error)

        this.error = error

        return false
      }
    },
    async refund(address) {
      try {
        // allowance... then refund
        let p_contract = new this.walletconnect.web3.eth.Contract(
          ABI.PROJECT,
          address
        )

        let p_data = await p_contract.methods.getProject().call()

        console.log(p_data[0][14])

        let t_contract = new this.walletconnect.web3.eth.Contract(
          ABI.TOKEN,
          p_data[0][14]
        )

        let balance = await t_contract.methods
          .balanceOf(this.walletconnect.address)
          .call()

        let t_response = await t_contract.methods
          .approve(p_data[5], balance)
          .send({
            from: this.walletconnect.address,
          })

        if (t_response) {
          let _contract = new this.walletconnect.web3.eth.Contract(
            ABI.SOFINAHUB,
            this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
          )

          let response = await _contract.methods.refund(address).send({
            from: this.walletconnect.address,
          })

          if (response) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } catch (error) {
        console.log(error)

        this.error = error

        return false
      }
    },
    async claim(address) {
      try {
        // allowance... then claim
        let p_contract = new this.walletconnect.web3.eth.Contract(
          ABI.PROJECT,
          address
        )

        let p_data = await p_contract.methods.getProject().call()

        let t_contract = new this.walletconnect.web3.eth.Contract(
          ABI.TOKEN,
          p_data[0][14]
        )

        let balance = await t_contract.methods
          .balanceOf(this.walletconnect.address)
          .call()

        let t_response = await t_contract.methods
          .approve(p_data[5], balance)
          .send({
            from: this.walletconnect.address,
          })

        // if allowance successful
        if (t_response) {
          let _contract = new this.walletconnect.web3.eth.Contract(
            ABI.SOFINAHUB,
            this.CONFIG.SOFINAHUB_CONTRACT_ADDRESS
          )

          let response = await _contract.methods.claim(address).send({
            from: this.walletconnect.address,
          })

          if (response) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } catch (error) {
        console.log(error)

        this.error = error

        return false
      }
    },
  },
})
