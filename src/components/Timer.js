import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import { useState, useRef, useEffect  } from 'react';

const Timer = () => {

	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor((total / 1000 / 60 / 60 / 24) % 7)
		return {
			total, days, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, days, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
                (days > 9 ? days : '0' + days) + " " + ':' + " " +
				(hours > 9 ? hours : '0' + hours) + " " + ':' + " " +
				(minutes > 9 ? minutes : '0' + minutes) + " " + ':'+ " " +
                (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {

		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next	
		setTimer('01 : 05 : 31 : 11');

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 86400*1.23);
		return deadline;
	}

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button
	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

	return (
        <div>
            <h2 id="Maintext" style={{"color": "#b9b9b9"}}
                className='text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                md:text-7xl md:mt-16

                text-4xl mb-0'>
                {timer}
            </h2>

            <div style={{"color":"white"}} className='text-center space-x-4
                    md:text-base md:pt-4 md:space-x-20
                    text-xs'>

                    <p style={{"display": "inline-block"}} className='text-center'>
                        DAYS
                    </p>
                    <p style={{"display": "inline-block"}} className='text-center'>
                        HOURS
                    </p>
                    <p style={{"display": "inline-block"}} className='text-center'>
                        MINUTES
                    </p>
                    <p style={{"display": "inline-block"}} className='text-center'>
                        SECONDS
                    </p>
            </div>

            {/* <div style={{"color":"white"}} className='text-center space-x-16 ml-8'>

                <div style={{"display": "inline-block"}} className='text-center space-x-20
                    md:text-base md:pt-4
                    text-xs'>
                    
                    <p style={{"display": "inline-block"}} className='text-center'>
                        DAYS
                    </p>
                    <p style={{"display": "inline-block"}} className='text-center'>
                        HOURS
                    </p>
    
                </div>

                <div style={{"display": "inline-block"}} className='text-center space-x-14
                    md:text-base md:pt-4
                    text-xs'>

                    <p style={{"display": "inline-block"}} className='text-center'>
                        MINUTES
                    </p>
                    <p style={{"display": "inline-block"}} className='text-center'>
                        SECONDS
                    </p>
                </div>
            </div> */}

			{/* <button onClick={onClickReset} style={{"color":"white"}}>Reset</button> */}
		</div>
	)
}
 
export default Timer;