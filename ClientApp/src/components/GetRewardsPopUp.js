import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState, useRef, useEffect  } from 'react';
import { Dropdown } from 'bootstrap';
import ArtistsDropdown from './ArtistsDropdown';

import { useMoralis, useMoralisWeb3Api, useWeb3ExecuteFunction } from "react-moralis";
import {abiCreateContest, abiLaunchContest,abiEndContest, abiVote } from "../pages/blockchain/abis.js";



const GetRewardsPopUp = ({artists, selectedArtistId, stateChanger, votedAmountChanger}) => {

    const [votedAmountProgressBar, setVoteAmountProgressBar] = useState(0);


    // Using state to keep track of what the selected fruit is
    let [artistSelected, setArtistSelected] = useState("")
    
    // Using this function to update the state of fruit
    // whenever a new option is selected from the dropdown
    let handleArtistChange = (e) => {
        setArtistSelected(e.target.value);
    }

    let handleVotedAmount = (e) => {
        votedAmountChanger(e.target.value);
        setVoteAmountProgressBar(e.target.value);
    }

    let nameToDisplay;
    

    async function Vote(){

        console.log('im alive');

    } 
      
    
    return (  
             
        <div id='' className='' style={{"zIndex":"1"}}>
            <div className='rounded-2xl grid place-content-center '>

                <p style={{ "color": "#F3F3F3"}} 
                    className='text-center font-semibold text-transparent bg-clip-tex
                                xl:text-7xl md:mt-16 md:text-6xl
                                sm:pt-4 sm:pb-4
                                pt-2
                                text-5xl'> 
                    Voting Rewards
                </p>

                <p style={{ "color": "#b9b9b9"}} 
                    className='text-center  
                                md:text-2xl
                                sm:text-lg
                                text-sm'>
                    By voting on your favourite artist both are <br /> winning, unlock new tiers and discover new <br /> exclusive rewards for the participants.
                </p>

                <div className='md:mt-32 mt-12'>
                    <ProgressBar variant="COLOR" now={votedAmountProgressBar} max={100000} />;
                </div>
                
                <div className='inline-flex w-full justify-center
                                md: mt-6'>
                    
                    <p style={{ "color": "#b9b9b9"}} 
                        className='text-center  
                                    md:text-3xl pt-3 pr-2
                                    text-lg'>
                        Your voting on
                    </p>

                    <select style={{"zIndex":"10", "backgroundColor": "#1F1F1F", "color": "white"}} className="md:text-3xl sm:text-2xl" onChange={handleArtistChange}> 
                        <option value="" selected disabled hidden >
                            {artists.map((artists) => ( artists.id == selectedArtistId ? nameToDisplay = artists.artistsname : '' ))}
                        </option>
                        {artists.map((wtv) => 
                        <option value={wtv.id} onClick={() => stateChanger(wtv.id)}>
                            {wtv.artistsname}
                        </option>)}
                    </select>

                    {console.log(selectedArtistId)}

                </div>
           
                <div className='inline-flex w-full justify-center md:mt-16 md:mb-10 sm:mt-8 sm:mb-4 '>
                    <input className='mr-4 w-56 rounded-xl border  bg-zinc-800 px-4 py-2 text-sm font-medium text-white shadow-sm ease-in duration-200 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
                            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={handleVotedAmount} style={{"zIndex":"2"}}
                            placeholder="Enter your amount of MLDY$">
                    </input>
                    <button onClick={async () => await Vote()} id='buttonborder' className='h-14 w-14 rounded-xl border  bg-zinc-800  text-sm font-medium text-white shadow-sm ease-in duration-200 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100' />
                </div>
                
            </div>
        </div>  

    );
}
 
export default GetRewardsPopUp;