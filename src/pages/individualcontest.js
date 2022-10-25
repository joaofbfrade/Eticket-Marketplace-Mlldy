import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import Timer from '../components/Timer'

import { useState, useRef, useEffect  } from 'react';


const IndividualContest = () => {

  const [artists, setartists] = useState([
    { artistsname: 'Artist1', artistsrole: "Producer", img: 'https://64.media.tumblr.com/e775f7195176c4e70f2654f1d5ff0bfe/tumblr_inline_phvike3zgg1t0myks_500.png', id: 1 },
    { artistsname: 'Artist2', artistsrole: "Producer", img: 'https://cdna.artstation.com/p/assets/images/images/017/787/280/large/annika-soljander-icons2.jpg?1557336279', id: 2 },
    { artistsname: 'Artist3', artistsrole: "Producer", img: 'https://i.pinimg.com/564x/b3/f7/00/b3f70014d73b6ad9311a0f197976b555.jpg', id: 3 },
    { artistsname: 'Artist4', artistsrole: "Producer", img: 'https://uploads.scratch.mit.edu/users/avatars/58329667.png', id: 4 }
  ]);

  const [id, setId] = useState(0);

  return (
    <div style={{ "background-color": "#1F1F1F" }} className='min-h-screen p-1 sm:p-10'  >


      {/* FEATURING CARD */}

      <div id="maincard" style={{ "background-color": "" }} className="rounded-2xl grid grid-cols-1 place-content-center ml-10 mr-10">



        {/* FEATURING CARD ESQUERDA */}
        <div style={{ "background-color": "" }}  >


            <p id="Maintext" style={{ "color": "#b9b9b9"}} 
                className='text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                            md:text-7xl md:mt-24
                            sm:text-8xl
                            text-4xl mb-0 mt-6'> 
                Experimental Jazz
            </p>


            <p style={{ "color": "#b9b9b9"}} 
                className='text-center  
                            md:text-2xl md:pt-8
                            text-sm'>
                Decide together with the community who is the  <br></br> best rising legend in the experimental jazz.
            </p>

            <Timer />

            <div className='flex justify-center mt-20'>
                <a id='GetRewardsIndividualButton' href='#'>
                    <span style={{ "color": "white" }} className='text-center'>
                        Get Rewards
                    </span>
                </a>
            </div>
            
            <div className="rounded-lg grid grid-cols-4 place-content-center pl-20 pt-10  " >
            
            </div>

        </div>

      </div>


      <br />


      <div id="maincard" style={{ "background-color": "#222222" }} className="rounded-2xl grid place-content-center ml-10  ">

        <h3 style={{ "color": "#b9b9b9" }} className='text-LEFT pt-4 pb-3'> Contest Artists</h3>

        {/* <div className="rounded-2xl grid grid-cols-4 gap-4 place-content-center"> */}
        <div className="rounded-2xl grid grid-cols-4 gap-4">

          {artists.map((artists) => (
            <div className='w-80' >
              <div class="linearBorder center-img" style={{ backgroundColor: artists.id == id ? '#363636' : ''}} onClick={() => setId(artists.id)}>
                <div className='pt-20 pb-12'>
                  <img className='' class="profileImg" src={artists.img} key={artists.id} />;
                </div>
                <h3 className='text-white text-center p-1'>{artists.artistsname}</h3>
                <p className='text-white text-center p-1'>{artists.artistsrole}</p>
              </div>
            </div>
          ))}

        </div>

        <p style={{ "color": "#b9b9b9" }} className='text-center pt-3 pb-1'>Select you artist</p>

      </div>

    </div>
  );
};


export default IndividualContest;