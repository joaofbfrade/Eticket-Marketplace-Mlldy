import Awards from "./Awards";

const Popupclean = ({popChanger}) => {
    return (



        <div className='modo' >
            <div className='overlay' onClick={() => popChanger(false)} >
                <div className='modo-content' onClick={() => console.log("modo-content")}>

                    <Awards/>
                    
                </div>
            </div>
        </div>
    );
}

export default Popupclean;