import Awards from "./Awards";
import { useRef } from 'react'
import GetRewardsPopUp from "./GetRewardsPopUp";

const Popup = ({ popChanger, ShowPop, artists, selectedArtistId, stateChanger, votedAmountChanger }) => {

    const ref = useRef(null);


    const rato = event => {
        console.log(event.target.id);

        if (event.target.id == "over") {
            popChanger(false);
            console.log("showpop -> " + ShowPop);
        }




    };



    return (



        <div className='modo'  >
            <div className='overlay' id='over' onClick={rato} >

                
                    <div id='modo-content' >

                        {ShowPop == 'rewards' ? <Awards /> : null}

                        {ShowPop == 'claim' ? <GetRewardsPopUp artists={artists} selectedArtistId={selectedArtistId}
                            stateChanger={stateChanger} votedAmountChanger={votedAmountChanger} /> : null}

                   

                </div>
            </div>
        </div>
    );
}

export default Popup;