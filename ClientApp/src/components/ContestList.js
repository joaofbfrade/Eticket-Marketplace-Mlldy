

const ContestList = ({ contests,filter,options }) => {

  // const contests = props.contests;
   

  return (

    <div
      className="rounded-2xl grid grid-cols-2 sm:grid-cols-4  place-content-center p-10 gap-4 text-center ">

          {contests.map((contest) => (
              <button onClick={() => { location.href = 'individualcontest/' + contest.hash }}>
              <div id="imgcont" className='relative'  key={contest.hash} >
                 
          <img  id ="img1" className=" rounded-lg  w-full h-60 object-cover    " src={contest.img}  />
          <h3 className='absolute  text-white bottom-1 left-1/2 -translate-x-1/2 ' >{contest.musictype} </h3>      
              </div>
              </button>

      ))}

    </div>

  );
}

export default ContestList;