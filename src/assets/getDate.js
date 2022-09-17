import getEstimateSecondsPerBlock from './getEstimateSecondsPerBlock'
import moment from 'moment'

async function getDate(web3, blockNumber) {
  let estimates = await getEstimateSecondsPerBlock(web3, 100)
  let now = await web3.eth.getBlockNumber()

  let diff = (now - blockNumber) * estimates

  let current = Math.round(new Date().getTime() / 1000)

  let date = new Date((current - diff) * 1000)

  return moment(date).format('MMM Do YY, h:mm a')
}

export default getDate
