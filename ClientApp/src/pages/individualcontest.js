import React from 'react';
import ReactDOM from 'react-dom/client';

import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import 'reactjs-popup/dist/index.css';

import Timer from '../components/Timer'
import GetRewardsPopUp from '../components/GetRewardsPopUp';
import Awards from '../components/Awards';
import Popup from '../components/Popup';

import { useState, useRef, useEffect } from 'react';

import { useParams } from "react-router-dom";




const IndividualContest = (data) => {

    const [ShowPop, setShowPop] = useState();

  function oC(artist) {

    setId(artist);
    setShowPop('rewards');
    console.log("showopop -> " + ShowPop)
  }

  const contest = { contestname: 'Experimental Jazz', contestdescription: '', contesttype: "Alternative", img: 'https://64.media.tumblr.com/e775f7195176c4e70f2654f1d5ff0bfe/tumblr_inline_phvike3zgg1t0myks_500.png', id: 1 };

  //const artists = [
  //  { artistsname: 'Artist1', artistsrole: "Producer", img: 'https://64.media.tumblr.com/e775f7195176c4e70f2654f1d5ff0bfe/tumblr_inline_phvike3zgg1t0myks_500.png', id: 10 },
  //  { artistsname: 'Artist2', artistsrole: "Producer", img: 'https://cdna.artstation.com/p/assets/images/images/017/787/280/large/annika-soljander-icons2.jpg?1557336279', id: 20 },
  //  { artistsname: 'Artist3', artistsrole: "Producer", img: 'https://i.pinimg.com/564x/b3/f7/00/b3f70014d73b6ad9311a0f197976b555.jpg', id: 30 },
  //  { artistsname: 'Artist4', artistsrole: "Producer", img: 'https://uploads.scratch.mit.edu/users/avatars/58329667.png', id: 40 }
  //  ];
    const [artists, setcontests] = useState([]);
    let { id } = useParams();
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://localhost:44370/individualContests/'+id );
            const artists = await response.json();
            console.log(artists);
            setcontests(artists);
        }
        fetchData()
            .catch(console.error);;

    }, [])
 


  const [selectedArtistId, setId] = useState(0);
  const [votedAmount, setVotedAmount] = useState(0);

  console.log(selectedArtistId);

  return (
    <div style={{ "backgroundColor": "#1F1F1F" }} className='min-h-screen p-1 sm:p-10'  >

      {ShowPop == 'rewards' ? <div   > <Popup popChanger={setShowPop} ShowPop={ShowPop} /> </div> : null}

      <div id="maincard" style={{ "backgroundColor": "" }} className="rounded-2xl grid grid-cols-1 place-content-center ml-10 mr-10">

        <div style={{ "backgroundColor": "" }}  >

          <p id="Maintext" style={{ "color": "#b9b9b9" }}
            className='text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                          xl:text-9xl md:mt-20 md:text-7xl
                          sm:pt-4 sm:pb-10
                          text-5xl'>
            {contest.contestname}
          </p>

          <Timer />

          <div className="rounded-lg grid grid-cols-4 place-content-center pl-20 pt-8 " ></div>

        </div>

      </div>

      <br />

      <div id="maincard" style={{ "BackgroundColor": "#222222" }} className="rounded-2xl grid place-content-center md:mr-24 md:ml-24 mr-12 ml-12 mb-16 ">

        <h3 style={{ "color": "#F3F3F3" }} className='text-LEFT pt-4 pb-3'> Contest Artists</h3>

        <div className="rounded-2xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          {artists.map((artists) => (
            <div className='2xl:w-80 xl:w-64 md:w-60 sm:w-60 w-48' key={artists.id} >


              <div className="linearBorder center-img" style={{ backgroundColor: artists.id == selectedArtistId ? '#363636' : '' }} onClick={() => oC(artists.id)}>



                <div className='pt-20 pb-12'>
                  <img  className="profileImg" src={artists.img}  />;
                </div>
                <h3 className='text-white text-center p-1'>{artists.artistsname}</h3>
                <p className='text-white text-center p-1'>{artists.artistsrole}</p>
              </div>

            </div>
          ))}

        </div>

        <p style={{ "color": "#b9b9b9" }} className='text-center text-xl pt-3 pb-1'>Select you artist</p>

      </div>

      <div className='flex justify-center' onClick={() => setShowPop('claim')} >
        <a id='GetRewardsIndividualButton'>
          <span style={{ "color": "white" }} className='text-center'>
            Claim Rewards
          </span>
        </a>
      </div>
      {ShowPop == 'claim' ? <Popup popChanger={setShowPop} ShowPop={ShowPop}  artists={artists} selectedArtistId={selectedArtistId} stateChanger={setId} votedAmountChanger={setVotedAmount} /> : null}

      {console.log({ votedAmount })}

      <p style={{ "color": "#F3F3F3" }}
        className='text-center font-semibold text-transparent bg-clip-tex
                    xl:text-7xl md:mt-16 md:text-6xl
                    sm:pt-4 sm:pb-4
                    text-5xl'>
        Voting Rewards
      </p>

      <p style={{ "color": "#b9b9b9" }}
        className='text-center  
                    md:text-2xl
                    text-sm'>
        By voting on your favourite artist both are <br /> winning, unlock new tiers and discover new <br /> exclusive rewards for the participants.
      </p>

      <div className='rounded-2xl grid place-content-center '>
        <div className='w-96'>
          <ProgressBar variant="COLOR" now={67} max={100} />;
        </div>
      </div>

      {/* <GetRewardsPopUp artists={artists} selectedArtistId={selectedArtistId} /> */}

    </div>
  );
};


export default IndividualContest;