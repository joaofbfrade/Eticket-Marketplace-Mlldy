
const ContestList = ({ contests }) => {

  // const contests = props.contests;


  return (

    <div
      className="rounded-2xl grid grid-cols-2 sm:grid-cols-4  place-content-center p-10 gap-4 text-center ">


      {contests.map((contest) => (


        <a href="../individualcontest" id="imgcont" class='relative  duration-300  hover:scale-105 ease-in  hover:shadow-inner ' >
          <img  id ="img1" class=" rounded-lg  w-full h-60 object-cover    " src={contest.img} key={contest.id} />
          <h3 className='absolute  text-white bottom-1 left-1/2 -translate-x-1/2 ' >{contest.musictype}</h3>

          
        </a>

      





      ))}


      
      
    </div>





  );
}

export default ContestList;