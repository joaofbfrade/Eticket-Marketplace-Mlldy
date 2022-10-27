import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState, useRef, useEffect  } from 'react';
import { Dropdown } from 'bootstrap';
import ArtistsDropdown from './ArtistsDropdown';



const GetRewardsPopUp = ({artists, selectedArtistId}) => {

    const [votedAmount, setVoteAmount] = useState(0);


    // Using state to keep track of what the selected fruit is
    let [artistSelected, setArtistSelected] = useState("")
    
    // Using this function to update the state of fruit
    // whenever a new option is selected from the dropdown
    let handleArtistChange = (e) => {
        setArtistSelected(e.target.value)
    }

    let nameToDisplay;
    
    return (  

            <div id='linearBorder' className='ml-48 mr-48' style={{"zIndex":"1"}}>
                <div className='rounded-2xl grid place-content-center '>

                    <p style={{ "color": "#F3F3F3"}} 
                        className='text-center font-semibold text-transparent bg-clip-tex
                                    xl:text-7xl md:mt-16 md:text-6xl
                                    sm:pt-4 sm:pb-4
                                    text-5xl'> 
                        Voting Rewards
                    </p>

                    <p style={{ "color": "#b9b9b9"}} 
                        className='text-center  
                                    md:text-2xl
                                    text-sm'>
                        By voting on your favourite artist both are <br /> winning, unlock new tiers and discover new <br /> exclusive rewards for the participants.
                    </p>

                    <div className='w-96'>
                        <ProgressBar variant="COLOR" now={votedAmount} max={100000} />;
                    </div>
                    
                    <div className='inline-flex w-full justify-center'>
                        <p style={{ "color": "#b9b9b9"}} 
                            className='text-center  
                                        md:text-2xl
                                        text-sm'>
                            Your voting on
                        </p>
                        <p style={{ "color": "white"}} 
                        className='text-center  
                                    md:text-3xl
                                    text-sm ml-3'>
                        Hibinger
                        </p>

                        {artists.map((artists) => ( artists.id == selectedArtistId ? nameToDisplay = artists.artistsname : '' ))}

                        {console.log(artists.id == selectedArtistId)}
                        {console.log(nameToDisplay)}

                        <h1>
                            {nameToDisplay}
                        </h1>

    

                        
                        <ArtistsDropdown options={artists} />

                        <select style={{"zIndex":"10"}} onChange={handleArtistChange}> 
                                    {/* Mapping through each fruit object in our fruits array
                                and returning an option element with the appropriate attributes / values.
                                */}
                            {artists.map((wtv) => <option value={wtv.artistsname}>{wtv.artistsname}</option>)}
                        </select>

                    </div>

                    
                    <div className='inline-flex w-full justify-center'>
                        <input className='mb-6 mr-4 w-56 rounded-md border  bg-zinc-800 px-4 py-2 text-sm font-medium text-white shadow-sm ease-in duration-200 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
                                onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={(e)=>{setVoteAmount(e.target.value)}} style={{"zIndex":"2"}}>
                        </input>

                        <button className='mb-6 w-10 h-10 rounded-md border  bg-zinc-800 px-4 py-2 text-sm font-medium text-white shadow-sm ease-in duration-200 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100' />
                    </div>
                

                    
                </div>
            </div>

            

    );
}
 
export default GetRewardsPopUp;