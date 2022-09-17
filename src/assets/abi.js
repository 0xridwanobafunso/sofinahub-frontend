export const ABI = {
  SOFINAHUB: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'LogClaimSent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'LogContributionSent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'LogDepositSent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'message',
          type: 'string',
        },
      ],
      name: 'LogFailure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'title',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'creator',
          type: 'address',
        },
      ],
      name: 'LogProjectCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'LogRefundSent',
      type: 'event',
    },
    {
      inputs: [],
      name: 'numOfProjects',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'projects',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'fundingGoal',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'title',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'description',
              type: 'string',
            },
            {
              internalType: 'string[]',
              name: 'images',
              type: 'string[]',
            },
            {
              internalType: 'string[]',
              name: 'videos',
              type: 'string[]',
            },
            {
              internalType: 'string[]',
              name: 'documents',
              type: 'string[]',
            },
            {
              internalType: 'uint256',
              name: 'roi',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'roiDuration',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'tokenName',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'tokenSymbol',
              type: 'string',
            },
            {
              internalType: 'uint8',
              name: 'tokenDecimal',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'tokenTotalSupply',
              type: 'uint256',
            },
          ],
          internalType: 'struct ISofinaHub.SofinaHubOptions',
          name: 'sofinaHub',
          type: 'tuple',
        },
      ],
      name: 'create',
      outputs: [
        {
          internalType: 'contract IProject',
          name: 'projectAddress',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_projectAddress',
          type: 'address',
        },
      ],
      name: 'contribute',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_projectAddress',
          type: 'address',
        },
      ],
      name: 'refund',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_projectAddress',
          type: 'address',
        },
      ],
      name: 'deposit',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_projectAddress',
          type: 'address',
        },
      ],
      name: 'claim',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_projectAddress',
          type: 'address',
        },
      ],
      name: 'toggleVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  PROJECT: [
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: '_fundingGoal',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: '_deadline',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: '_title',
              type: 'string',
            },
            {
              internalType: 'string',
              name: '_description',
              type: 'string',
            },
            {
              internalType: 'address payable',
              name: '_creator',
              type: 'address',
            },
            {
              internalType: 'string[]',
              name: '_images',
              type: 'string[]',
            },
            {
              internalType: 'string[]',
              name: '_videos',
              type: 'string[]',
            },
            {
              internalType: 'string[]',
              name: '_documents',
              type: 'string[]',
            },
            {
              internalType: 'uint256',
              name: '_roi',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: '_roiDuration',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: '_tokenName',
              type: 'string',
            },
            {
              internalType: 'string',
              name: '_tokenSymbol',
              type: 'string',
            },
            {
              internalType: 'uint8',
              name: '_tokenDecimal',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: '_tokenTotalSupply',
              type: 'uint256',
            },
          ],
          internalType: 'struct IProject.ProjectOptions',
          name: 'project',
          type: 'tuple',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'refundAmount',
          type: 'uint256',
        },
      ],
      name: 'LogClaimSent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'LogContributionReceived',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'message',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'LogDeposited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'message',
          type: 'string',
        },
      ],
      name: 'LogFailure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalFunding',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalContributions',
          type: 'uint256',
        },
      ],
      name: 'LogFundingFailed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalFunding',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalContributions',
          type: 'uint256',
        },
      ],
      name: 'LogFundingGoalReached',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalPayout',
          type: 'uint256',
        },
      ],
      name: 'LogPayoutInitiated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'projectAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'refundAmount',
          type: 'uint256',
        },
      ],
      name: 'LogRefundIssued',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'contributions',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'contributionsCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'contributors',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'contributorsCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'projectToken',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'properties',
      outputs: [
        {
          internalType: 'uint256',
          name: 'goal',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'title',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
        {
          internalType: 'address payable',
          name: 'creator',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'roi',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'roiDuration',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'tokenName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'tokenSymbol',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'tokenDecimal',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: 'tokenTotalSupply',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'verified',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sofinaHub',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalFunding',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
    {
      inputs: [],
      name: 'getProject',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'goal',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'title',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'description',
              type: 'string',
            },
            {
              internalType: 'address payable',
              name: 'creator',
              type: 'address',
            },
            {
              internalType: 'string[]',
              name: 'images',
              type: 'string[]',
            },
            {
              internalType: 'string[]',
              name: 'videos',
              type: 'string[]',
            },
            {
              internalType: 'string[]',
              name: 'documents',
              type: 'string[]',
            },
            {
              internalType: 'uint256',
              name: 'roi',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'roiDuration',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'tokenName',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'tokenSymbol',
              type: 'string',
            },
            {
              internalType: 'uint8',
              name: 'tokenDecimal',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'tokenTotalSupply',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'tokenAddress',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'verified',
              type: 'bool',
            },
          ],
          internalType: 'struct IProject.Properties',
          name: '',
          type: 'tuple',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_id',
          type: 'uint256',
        },
      ],
      name: 'getContribution',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_contributor',
          type: 'address',
        },
      ],
      name: 'fund',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'payout',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_contributor',
          type: 'address',
        },
      ],
      name: 'refund',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_creator',
          type: 'address',
        },
      ],
      name: 'deposit',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_contributor',
          type: 'address',
        },
      ],
      name: 'claim',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleVerify',
      outputs: [
        {
          internalType: 'bool',
          name: 'successful',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  TOKEN: [
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_symbol',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: '_decimals',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: '_totalSupply',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'sendReward',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
}
