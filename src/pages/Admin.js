import { Form } from '@web3uikit/core';
import { useState } from 'react';
//import { findAllInRenderedTree } from 'react-dom/test-utils/index.js';

import { useMoralis, useMoralisWeb3Api, useWeb3ExecuteFunction } from "react-moralis";
import {abiCreateContest, abiLaunchContest,abiEndContest } from "./blockchain/abis.js";

import Ipfs from '../components/IpfsUploader';


const Admin = () => {

    const { Moralis, isInitialized } = useMoralis();
    const [sub, setSub] = useState();
    const contractProcessor = useWeb3ExecuteFunction();
    const Web3Api = useMoralisWeb3Api();

    const contractAddress = '0xd88B9206D3eeE0200D090Bea671fD084827042a9';

    async function CreateContest() {

      //const web3Provider = await Moralis.enableWeb3();

      var title = document.getElementById("CreateContestForm").children[1].children[0].children[0].value;
      
      var endDate = Date(document.getElementById("CreateContestForm").children[2].children[0].children[0].value);
      var endTime = Math.floor(new Date(endDate).getTime() / 1000);

//      alert("endTime: " + endTime);

      var artists_addresses = document.getElementById("CreateContestForm").children[3].children[0].children[0].value.split(",");

  //    alert("!! artists_addresses: " + artists_addresses);

//      alert("calling CreateContest: " + title, endTime, artists_addresses);


      let options = {
        chain: "mumbai",
        contractAddress: contractAddress,
        functionName: "createContest",
        abi : abiCreateContest,
        params: {
          title: title,
          endTime: endTime,
          artist_addresses: artists_addresses,
        },
      };

      const res = contractProcessor.fetch({
        params: options,
        onSuccess: () => {
          console.log("Contest Creation Succesful");
          setSub(false);
        },
        onError: (error) => {
          alert(error);
          setSub(false);
        },
      });
      console.log("Result: " + JSON.stringify(res));
    }
    
    async function LaunchContest() {
    
      var id = document.getElementById("LaunchContestForm").children[1].children[0].children[0].value
    
      const web3Provider = await Moralis.enableWeb3();

      let options = {
        chain: "mumbai",
        contractAddress: contractAddress,
        functionName: "launchContest",
        abi : abiLaunchContest,
        params: {
          id: id
        },
      };

      const res = contractProcessor.fetch({
        params: options,
        onSuccess: () => {
          console.log("Contest Launched Succesful");
          setSub(false);
        },
        onError: (error) => {
          alert(error);
          setSub(false);
        },
      });
      console.log("Result: " + JSON.stringify(res));
    } 
    
    async function EndContest() {
      const web3Provider = await Moralis.enableWeb3();

      var id = document.getElementById("EndContestForm").children[1].children[0].children[0].value

      let options = {
        chain: "mumbai",
        contractAddress: contractAddress,
        functionName: "endContest",
        abi : abiEndContest,
        params: {
          id: id
        },
      };

      const res = contractProcessor.fetch({
        params: options,
        onSuccess: () => {
          console.log("Contest Ended Succesful");
          setSub(false);
        },
        onError: (error) => {
          alert(error);
          setSub(false);
        },
      });
      console.log("Result: " + JSON.stringify(res));
}
    
    return (
      // <div style={{ "backgroundColor": "#1F1F1F", "color":"white"}}>
      <div>
        <Form
            id ="CreateContestForm"
            buttonConfig={{
            onClick: async () => await CreateContest(),
            theme: 'primary'
            }}
            data={[
              {
                id : "titleInput",
                inputWidth: '30%',
                name: 'Contest Title',
                type: 'text',
                value: ''
              },
              {
                inputWidth: '30%',
                name: 'Contest End Date',
                type: 'date',
                value: '31/12/2023'
              },
              {
                inputWidth: '100%',
                name: 'Artists Addresses',
                type: 'text',
                value: "0x2ac16289a4c64327d5Eb5F17c70426012bDbCA27,0x01c9706A9C5Ac381c538859B2e905aAf96513F8C"
              }
          ]}
        onSubmit={async () => await CreateContest()}
        title="Create Contest"
        />

        <Form
            id ="LaunchContestForm"
            buttonConfig={{
            onClick: async () => await LaunchContest(),
            theme: 'primary'
            }}
            data={[
              {
                inputWidth: '30%',
                name: 'Contest Id',
                type: 'number',
                value: ''
              }
            ]}
          onSubmit={async () => await LaunchContest()}
          title="Launch Contest"
        />

        <Form
            id ="endContestForm"
            buttonConfig={{
            onClick: async () => await EndContest(),
            theme: 'primary'
            }}
            data={[
              {
                inputWidth: '30%',
                name: 'Contest Id',
                type: 'number',
                value: ''
              }
            ]}
          onSubmit={async () => await EndContest()}
          title="End Contest"
        />

        <Ipfs />

      </div>
        );
}
 
export default Admin;
