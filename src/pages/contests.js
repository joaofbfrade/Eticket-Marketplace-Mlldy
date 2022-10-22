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
    <div style={{ "background-color": "#1F1F1F" }} className='min-h-screen p-1  sm:p-10  '  >


      {/* FEATURING CARD */}

      <div  style={{ "background-color": "#222222" }} className="rounded-2xl grid grid-cols-1 sm:grid-cols-2 place-content-center mt-10  sm:m-10   ">



        {/* FEATURING CARD ESQUERDA */}
        <div     >


          <h1 id="Maintext" style={{ "color": "#b9b9b9" }} className='text-center  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:p-10'> Experimental Jazz</h1>


          <p style={{ "color": "#b9b9b9" }} className='text-center m-10 '>Decide together with the community who is the best rising legend in the experimental jazz.</p>

          <h3 style={{ "color": "#b9b9b9" }} className='text-center mt-20 '> Rewards</h3>

          <div className="rounded-lg grid grid-cols-4 place-content-center pl-20 pt-10  " >

            <div style={{ "background-color": "#ffffff" }} class="h-10 w-10 m-1 rounded-full" > </div>


          </div>

        </div>



        {/* FEATURING CARD DIREITA(IMAGEM) */}

        <div className='p-10 flex flex-column '>
          <div id="module-border-wrap" >
            <img id="module" class="w-full " src={'https://bit.ly/3SiQAhe'} />;
          </div>


        </div>
      </div>


      <br />
      <div >

        <h3 style={{ "color": "#b9b9b9" }} className='text-LEFT p-10'> Top Contests</h3>


        <div className="rounded-2xl grid grid-cols-2 sm:grid-cols-4  place-content-center p-10 gap-4 ">


          {contests.map((contest) => (
            <div className=' flex flex-column ' >

              <div className=''>
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