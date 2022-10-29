import Awards from "./Awards";

const Popupclean = (data) => {
    return (



        <div className='modo' >
            <div className='overlay' onClick={()=> data.setIsSlider(false)}>
                <div className='modo-content'>

                    <Awards/>
                    
                </div>
            </div>
        </div>
    );
}

export default Popupclean;