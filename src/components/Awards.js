const Awards = ({artists1}) => {

    const artists = [
        { artistsname: 'Artist1', artistsrole: "Producer", img: 'https://bit.ly/3zqfeWF', id: 10 },
        { artistsname: 'Artist2', artistsrole: "Producer", img: 'https://bit.ly/3zqfeWF', id: 20 },
        { artistsname: 'Artist3', artistsrole: "Producer", img: 'https://bit.ly/3zqfeWF', id: 30 },
        { artistsname: 'Artist4', artistsrole: "Producer", img: 'https://bit.ly/3zqfeWF', id: 40 }
    ];

    return (

        <div id='' className='' style={{ "zIndex": "1" }}>
                           <div className='rounded-2xl grid place-content-center '>

                <div>
                    <p style={{ "color": "#F3F3F3" }}
                        className='text-center font-semibold text-transparent bg-clip-tex
                            xl:text-7xl md:mt-16 md:text-6xl
                            sm:pt-4 sm:pb-4
                            pt-2
                            text-5xl'>
                        Artist Rewards
                    </p>

                    <p style={{ "color": "#b9b9b9" }}
                        className='text-center  
                            md:text-2xl
                            sm:text-lg
                            text-sm'>
                        By voting on your favourite artist both are <br /> winning, unlock new tiers and discover new <br /> exclusive rewards for the participants.
                    </p>
                </div>

            </div>
            <div className="rounded-2xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-20">
                {artists.map((artists) => (


                    <div className='2xl:w-80 xl:w-64 md:w-60 sm:w-60 w-48 h-48 ' >


                        <div class="linearBorder center-img h-48 " >
                            <div className='mt-10'>
                                <img className='' class="profileImg" src={artists.img} key={artists.id} />;
                            </div>

                        
                            <br/>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Awards;