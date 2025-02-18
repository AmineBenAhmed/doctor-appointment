import React, { useState } from 'react'
import {assets} from '../assets/assets'

const MyProfile = () => {
  
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'edward.vincent@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: "57th Cross, Richmod",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2000-01-20'
  })
  
  const [isEdit, setIsEdit] = useState(false)

  const updateUserData = (e) => {
    setUserData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  return (
    <div className='max-w-lg flex flex-col gap2 text-sm' >

      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'  id='name' type="text" value={userData.name}  onChange={updateUserData} />
        : <p className='font-medium text-3xl text-neutral-800 mt-4' >{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3' >CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700' >
          <p className='font-medium' >Email id:</p>
          <p className='text-blue-500' >{userData.email}</p>
          <p className='font-medium' >Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-53' type='text' value={userData.phone} onChange={e => setUserData(prev => ({...prev, phone: e.target.value}))} />
              : <p className='text-blue-400' >{userData.phone}</p>
          }

          <p className='font-medium' >Address:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50' type="text" value={userData.address.line1} onChange={e =>   setUserData(prev => ({ ...prev, address: {...prev.address, line1: e.target.value }}))} />
                <br />
                <input type="text" className='bg-gray-50' value={userData.address.line2} onChange={e =>   setUserData(prev => ({ ...prev, address: {...prev.address, line2: e.target.value }}))} />  
              </p>
              : <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }

        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3' >BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700' >
          <p className='font-medium' >Gender:</p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100'  id='gender' onChange={updateUserData} >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
              </select>
              : <p className='text-gray-400' >{userData.gender}</p>
          }

          <p className='font-medium'>Birthday</p>
          {
            isEdit 
            ? <input className='max-w-28 bg-gray-100' type='date' id='dob' onChange={updateUserData} value={userData.dob} />
            : <p className='text-gray-400' >{userData.dob}</p>
          }
        </div>
      </div>

      <div>
        {
          isEdit
          ? <button className='border border-primary my-6 px-8 py-2 rounded-full hover:text-white hover:bg-primary transition-all' onClick={() => setIsEdit(false)} >Save information</button>
          : <button className='border border-primary px-8 my-6 py-2 rounded-full hover:text-white hover:bg-primary transition-all' onClick={() => setIsEdit(true)} >Edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile