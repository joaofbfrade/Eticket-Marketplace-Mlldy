import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown = ({ contests, filter, options ,filter2 }) => {






  return (
    <Menu as="div" className="relative inline-block text-left">
      <div onClick={() => filter2(contests.musictype)} >
        <Menu.Button className="inline-flex w-full justify-center rounded-md border  bg-zinc-800 px-4 py-2 text-sm font-medium text-white shadow-sm ease-in duration-200 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <button  className='  '  >      Music Types     </button>

          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div >

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="">



            {options.map((contest) => (
              // <div
              //   className=' flex flex-column ' >

              //   <div >
              //     <img class="block rounded-lg  w-full h-60 object-cover  " src={contest.img} key={contest.id} />;
              //     <h3 className='text-white text-center p-2'>{contest.musictype}</h3>
              //   </div>




              // </div>

              <Menu.Item>
                <button onClick={() => filter(contest.musictype)} className='bg-gray-100 text-gray-900 p-3 rounded-lg '  >      {contest.musictype}     </button>
              </Menu.Item>





            ))}












          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown;