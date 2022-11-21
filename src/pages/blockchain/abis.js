export const abiCreateContest = [
    {
      inputs: [
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "endTime",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "artist_addresses",
          type: "address[]",
        },
      ],
      name: "createContest",
      outputs: [
         {
          internalType: "uint256",
          name: "id",
          type: "uint256",
         }   	
      ],
      stateMutability: "nonpayable",
      type: "function",
    }
  ];

export const abiLaunchContest = [
{
    inputs:[
    {
        internalType:"uint256",
        name:"id",
        type:"uint256"
    }],
    name:"launchContest",
    outputs:[],
    stateMutability:"nonpayable",
    type:"function"
}];

export const abiEndContest = [
{
    inputs:[
    {
        internalType:"uint256",
        name:"id_contest",
        type:"uint256"
    }],
    name:"endContest",
    outputs:[],
    stateMutability:"nonpayable",
    type:"function"
}];

export const abiVote =  [
{
    inputs:[
    {
        internalType:"uint256",
        name:"id_contest",
        type:"uint256"},
    {
        internalType:"address",
        name:"artist_address",
        type:"address"
    }],
    name:"vote",
    outputs:[],
    stateMutability:"payable",
    type:"function"
}];

export const abiReadContest = [
{
    inputs:[
    {
        internalType:"uint256",
        name:"id",
        type:"uint256"
    }],
    name:"readContest",
    outputs:[
    {
        components:[
            {
                internalType:"uint256",
                name:"id",
                type:"uint256"
            },
            {
                internalType:"string",
                name:"title",
                type:"string"
            },
            {
                internalType:"uint256",
                name:"endTime",
                type:"uint256"
            },
            {
                internalType:"uint256",
                name:"status",
                type:"uint256"
            },
            {
                internalType:"uint256",
                name:"balance",
                type:"uint256"
            },
            {
                internalType:"address[]",
                name:"artist_addresses",
                type:"address[]"
            },
            {
                components:[
                    {
                        internalType:"address",
                        name:"artist_address",
                        type:"address"
                    },
                    {
                        internalType:"uint256",
                        name:"voteCount",
                        type:"uint256"
                    }
                ],
                internalType:"struct Contests.ContestVote[]",
                name:"votes",
                type:"tuple[]"}
            ],
            internalType:"struct Contests.Contest",
            name:"",
            type:"tuple"
    }],
    "stateMutability":"view",
    "type":"function"
}];
    