import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';









const Contests = () => {


  const [contests, setcontests] = useState([
    { musictype: 'Best Indie Rock', img: 'https://bit.ly/3SiQAhe', id: 1 },
    { musictype: 'Live Performance', img: 'https://bit.ly/3TrlsNQ', id: 2 },
    { musictype: 'Best HipHop', img: 'https://bit.ly/3F2n5xa', id: 3 },
    { musictype: 'Best PopMusic', img: 'https://bit.ly/3gvVN81', id: 4 }
  ]);



  return (
    <div style={{ "background-color": "#1F1F1F" }}
      className='min-h-screen p-1   sm:p-10  '  >


      {/* FEATURING CARD */}

      <div style={{ "background-color": "#222222" }}
        className="rounded-2xl grid grid-cols-1 lg:grid-cols-2 place-content-center mt-10  sm:m-10    ">



        {/* FEATURING CARD ESQUERDA */}
        <div   className='lg:p-5'  >


          <h1 id="Maintext" style={{ "color": "#b9b9b9" }}
            className='text-6xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-1  sm:p-10'> Experimental Jazz</h1>


          <p style={{ "color": "#b9b9b9" }}
            className='text-base lg:text-xs text-center m-10 lg:m-5 text-lg '>Decide together with the community who is the best rising legend in the experimental jazz.</p>

          <h3 style={{ "color": "#b9b9b9" }}
            className='text-center text-3xl mt-10  '> Rewards</h3>

          <div
            className="flex justify-center gap-4 p-10" >

            <div style={{ "background-color": "#ffffff" }} class=" h-10 w-10  rounded-full " > </div>
            <div style={{ "background-color": "#ffffff" }} class="h-10 w-10  rounded-full" > </div>
            <div style={{ "background-color": "#ffffff" }} class="h-10 w-10  rounded-full" ></div>
            <div style={{ "background-color": "#ffffff" }} class="h-10 w-10  rounded-full" > </div>


          </div>

        </div>



        {/* FEATURING CARD DIREITA(IMAGEM) */}

        <div
          className='flex flex-column lg:p-5      '>
          <div id="module-border-wrap" >
            <img id="module" class="w-full h-full " src={'https://bit.ly/3SiQAhe'} />;
          </div>


        </div>
      </div>


      <br />



      {/* TOP CONTESTS */}

      <div >

        <h1 style={{ "color": "#b9b9b9" }}
          className='text-LEFT p-10'> Top Contests</h1>


        <div
          className="rounded-2xl grid grid-cols-2 sm:grid-cols-4  place-content-center p-10 gap-4 ">


          {contests.map((contest) => (
            <div
              className=' flex flex-column ' >

              <div >
                <img class="block rounded-lg  w-full h-60 object-cover    " src={contest.img} key={contest.id} />;
                <h3 className='text-white text-center p-2'>{contest.musictype}</h3>
              </div>

            </div>






          ))}
        </div>

      </div>
    </div>
  );
};


export default Contests;