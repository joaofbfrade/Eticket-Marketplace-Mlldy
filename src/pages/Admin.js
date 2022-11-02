import React, { useState, useEffect } from "react";

import { Tag, Widget, Blockie, Tooltip, Icon, Form, Table } from '@web3uikit/web3';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { CryptoCards, Button } from '@web3uikit/core';


const Admin = () => {

    async function CreateContest() {
      
      console.log('a');
      
        let options = {
          contractAddress: "0x26192DD913F0b6E8E3b2E526Aa8adB9CdFc38CDa",
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
            artist_addresses: [0x2ac16289a4c64327d5Eb5F17c70426012bDbCA27,0x01c9706A9C5Ac381c538859B2e905aAf96513F8C],
          },
        };
    }
    return (

        <Button     onClick={() => CreateContest()}
        text="Create Contest"
      />

      );
}
 
export default Admin;