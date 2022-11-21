import React from 'react';
import mouse from '../assets/MouseIcon.png';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Timer from '../components/Timer'
import Dropdown from '../components/Dropdown'
import ContestList from '../components/ContestList';


const showcaseContest = { contesttitle:'Experimental Jazz', contestdescription:'Decide together with the community who is the best rising legend in the experimental jazz.', musictype: 'Jazz', img: 'https://bit.ly/3SiQAhe', id: 1};
const showcaseTitleHref = showcaseContest.contesttitle.replaceAll(' ', '-');

const json = [
  { musictype: 'Best Indie Rock', img: 'https://bit.ly/3SiQAhe', id: 1 },
  { musictype: 'Live Performance', img: 'https://bit.ly/3TrlsNQ', id: 2 },
  { musictype: 'Best HipHop', img: 'https://bit.ly/3F2n5xa', id: 3 },
  { musictype: 'Best PopMusic', img: 'https://bit.ly/3gvVN81', id: 4 }
];

const jsonTest = [
  { contestname: 'Best Indie Rock', contestdescription: '', contesttype: 'Indie Rock', img: 'https://bit.ly/3SiQAhe', id: 1 },
  { contestname: 'Live Performance', contestdescription: '', contesttype: 'Live Performance', img: 'https://bit.ly/3TrlsNQ', id: 2 },
  { contestname: 'Best HipHop', contestdescription: '', contesttype: 'HipHop', img: 'https://bit.ly/3F2n5xa', id: 3 },
  { contestname: 'Best PopMusic', contestdescription: '', contesttype: 'PopMusic', img: 'https://bit.ly/3gvVN81', id: 4 }
];

const Contests = () => {

  const options = jsonTest;
  const [contests, setcontests] = useState(jsonTest);

  const filter2 = () => {
    setcontests(jsonTest);
  }

  const filter = (contestname) => {

    let newContests = contests.filter(contest => contest.contestname == contestname)
    setcontests(newContests);

  }

  return (

    <div>
      <div style={{ "backgroundColor": "#1F1F1F" }}
        className='min-h-screen p-1   sm:p-10  '  >

        {/* FEATURING CARD */}
        <div style={{ "backgroundColor": "#222222" }}
          className="rounded-2xl grid grid-cols-1 lg:grid-cols-2 place-content-center mt-10  sm:m-10    ">

          {/* FEATURING CARD ESQUERDA */}
          <div className=''  >

            <h1 id="Maintext" style={{ "color": "#b9b9b9" }}
              className='text-5xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:p-5 lg:pt-10 '> {showcaseContest.contesttitle}</h1>

            <div className=' '>
              <p style={{ "color": "#b9b9b9" }}
                className='text-base  text-center  lg:m-5  '>{showcaseContest.contestdescription}</p>
            </div>

            <h3 style={{ "color": "#b9b9b9" }}
              className='text-center text-3xl mt-10 lg:pb-5 '> Rewards</h3>

            <div
              className="flex justify-center gap-4 p-10 lg:p-1" >

              <div style={{ "backgroundColor": "#ffffff" }} className=" h-10 w-10  rounded-full " > </div>
              <div style={{ "backgroundColor": "#ffffff" }} className="h-10 w-10  rounded-full" > </div>
              <div style={{ "backgroundColor": "#ffffff" }} className="h-10 w-10  rounded-full" ></div>
              <div style={{ "backgroundColor": "#ffffff" }} className="h-10 w-10  rounded-full" > </div>

            </div>

            < Timer />

          </div>

          {/* FEATURING CARD DIREITA(IMAGEM) */}
          <a href={"/contests/" + showcaseTitleHref}
            className='flex place-self-center center  w-96 lg:w-8/12  md:p-10 lg:p-0 lg:pt-10 lg:pb-10  '>
            <div id="module-border-wrap" >
              <img id="module" className="w-full h-full " src={showcaseContest.img} />
            </div>
          </a>
        </div>

        <br />
        <div className='flex flex-col   items-center '>
          <img className=" -z-10 sm:z-0  w-20 animate-bounce " src={mouse} />;
        </div>
        <br />

        {/* TOP CONTESTS */}
        <div >
          <div >
            <div className=' p-10 float-right '><Dropdown contests={contests} filter={filter} filter2={filter2} options={options} /></div>
            <h1 style={{ "color": "#b9b9b9" }} className='text-LEFT p-10'> Top Contests</h1>
            <div />
            <ContestList contests={contests} filter={filter} options={options} />
          </div>
        </div>
      </div>

    </div>
  );
};


export default Contests;
