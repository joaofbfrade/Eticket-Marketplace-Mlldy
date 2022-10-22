import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import Timer from '../components/Timer'

import { useState, useRef, useEffect  } from 'react';


const IndividualContest = () => {


  const [contests, setcontests] = useState([
    { musictype: 'Best Indie Rock', img: 'https://bit.ly/3SiQAhe', id: 1 },
    { musictype: 'Live Performance', img: 'https://bit.ly/3TrlsNQ', id: 2 },
    { musictype: 'Best HipHop', img: 'https://bit.ly/3F2n5xa', id: 3 },
    { musictype: 'Best PopMusic', img: 'https://bit.ly/3gvVN81', id: 4 }
  ]);



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

            {/* flex justify-center content-center text-center items-center place-content-center */}

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
      <div >

        <h3 style={{ "color": "#b9b9b9" }} className='text-LEFT ml-10'> Top Contests</h3>


        <div className="rounded-2xl grid grid-cols-4 place-content-center ">


          {contests.map((contest) => (
            <div className='ml-10 mt-10 ' >

              <div>
                <img class="rounded-lg  bg-contain " src={contest.img} key={contest.id} />;
                <h3 className='text-white text-center p-2'>{contest.musictype}</h3>
              </div>

            </div>

          ))}
        </div>

      </div>
    </div>
  );
};


export default IndividualContest;