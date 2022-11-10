

const ContestList = ({ contests }) => {

  const contestUpdatedArray = contests;
  {contestUpdatedArray.map((contestUpdatedArray) => (

    contestUpdatedArray.contestname = contestUpdatedArray.contestname.replaceAll(' ', '-')

  ))}

  console.log(contestUpdatedArray);

  return (

    <div
      className="rounded-2xl grid grid-cols-2 sm:grid-cols-4  place-content-center p-10 gap-4 text-center ">

      {contests.map((contestUpdatedArray) => (

        <a href={"/contests/" + contestUpdatedArray.contestname} id="imgcont" class='relative hover:shadow-inner'>
          <img id ="img1" class=" rounded-lg  w-full h-60 object-cover" src={contestUpdatedArray.img} key={contestUpdatedArray.id} />
          <h3 className='absolute  text-white bottom-1 left-1/2 -translate-x-1/2 ' >{contestUpdatedArray.contesttype}</h3>      
        </a>

      ))}

    </div>

  );
}

export default ContestList;