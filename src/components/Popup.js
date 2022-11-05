import Awards from "./Awards";
import {useRef} from 'react'

const Popupclean = ({popChanger}) => {

    const ref = useRef(null);


    const rato = event => {
        console.log(event.target.id);

        if(event.target.id == "over"){
            popChanger(false);
        }

        
    
        
      };
    
    
    
    return (



        <div className='modo' id='12' >
            <div className='overlay' id='over' onClick={rato} >
                <div id='modo-content' >

              
                <Awards/>
                   
                    
                </div>
            </div>
        </div>
    );
}

export default Popupclean;