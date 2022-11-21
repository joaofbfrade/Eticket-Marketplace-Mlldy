import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useState } from 'react';
import { abiCreateContest, abiEndContest, abiLaunchContest, abiReadContest, abiVote} from "./abis";


export const Vote = (id_contest, artist_address, mldy_value) => {
    const { Moralis } = useMoralis();
    const [setSub] = useState();
    Moralis.enableWeb3();
    const contractProcessor = useWeb3ExecuteFunction();

      let options = {
        chain: "mumbai",
        contractAddress: '0x987334A7B1FCdaB2c5938921F59efe060Dc696Bb',
        functionName: "vote",
        abi : abiEndContest,
        params: {
          id_contest: id_contest,
          artist_address
        },
      };

      const res = contractProcessor.fetch({
        params: options,
        onSuccess: () => {
          console.log("Vte submitted Succesful");
          setSub(false);
        },
        onError: (error) => {
          alert(error);
          setSub(false);
        },
      });
      console.log("Result: " + JSON.stringify(res));
}

export const EndContest = (id) => {
    const { Moralis } = useMoralis();
    const [setSub] = useState();
    Moralis.enableWeb3();
    const contractProcessor = useWeb3ExecuteFunction();

      let options = {
        chain: "mumbai",
        contractAddress: '0x987334A7B1FCdaB2c5938921F59efe060Dc696Bb',
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

export const LaunchContest = (id) => {
    const { Moralis } = useMoralis();
    const [setSub] = useState();
    Moralis.enableWeb3();
    const contractProcessor = useWeb3ExecuteFunction();

      let options = {
        chain: "mumbai",
        contractAddress: '0x987334A7B1FCdaB2c5938921F59efe060Dc696Bb',
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

export const CreateContest = (title, endTime, artists_addresses) => {
    const { Moralis } = useMoralis();
    const [setSub] = useState();
    Moralis.enableWeb3();
    const contractProcessor = useWeb3ExecuteFunction();

      let options = {
        chain: "mumbai",
        contractAddress: '0x987334A7B1FCdaB2c5938921F59efe060Dc696Bb',
        functionName: "createContest",
        abi : abiCreateContest,
        params: {
          title: "Concurso de Rock Lisboeta",
          endTime: 1761474561,
          artist_addresses: ['0x2ac16289a4c64327d5Eb5F17c70426012bDbCA27','0x01c9706A9C5Ac381c538859B2e905aAf96513F8C'],
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

