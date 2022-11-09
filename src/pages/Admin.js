
import { Tag, Widget, Blockie, Tooltip, Icon, Form, Table } from '@web3uikit/web3';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useState, useRef, useEffect  } from 'react';

import { useMoralis, useMoralisWeb3Api, useWeb3ExecuteFunction } from "react-moralis";
import { CryptoCards, Button } from '@web3uikit/core';


const Admin = () => {

    const { Moralis, isInitialized } = useMoralis();
    const [sub, setSub] = useState();
    const contractProcessor = useWeb3ExecuteFunction();
    const Web3Api = useMoralisWeb3Api()
    

    async function CreateContest() {

      const web3Provider = await Moralis.enableWeb3();

      console.log('a');
      
        let options = {
          chain: "mumbai",
          contractAddress: '0x987334A7B1FCdaB2c5938921F59efe060Dc696Bb',
          functionName: "createContest",
          abi: [
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
              stateMutability: "view",
              type: "function",
            },
          ],
          params: {
            title: "Concurso de Rock Lisboeta",
            endTime: 1761474561,
            artist_addresses: ['0x2ac16289a4c64327d5Eb5F17c70426012bDbCA27','0x01c9706A9C5Ac381c538859B2e905aAf96513F8C'],
          },
        };

        const res = await contractProcessor.fetch({
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
        console.log("Result: " + res);
    }
    return (

        <Button     onClick={async () => await CreateContest()}
        text="Create Contest"
        />
        

      

      );
}
 
export default Admin;