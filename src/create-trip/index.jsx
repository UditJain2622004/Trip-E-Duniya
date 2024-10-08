import React from 'react'
import {Input} from "../components/ui/input";
import {SelectBudgetOptions} from "./../constants/options.jsx";
import {SelectTravelesList} from "./../constants/options.jsx";

console.log(SelectBudgetOptions);

// function CreateTrip() {
  
//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
//       <p className='mt-3 text-gray-500 text-xl'>just provide some basic information and we will get you the best and affordable itinerary</p>
//       <div className='mt-20 flex flex-col gap-10'>
//         <div>
//           <h2 className='text-xl my-3 font-medium'>What is your preferred destination ?</h2>
//           <button>Enter destination</button>
//         </div>
//         <div>
//           <h2 className='font-bold text-3xl'>For how many days you are planning your trip</h2>
//           <Input placeholder={'Ex.3'} type="number" />
//         </div>

//        </div> 
//      <div>
//       <h2 className='font-bold text-3xl'>What is your budget?</h2>
//       <div className='grid grid-cols-3 gap-5 mt-5'>
//         {SelectBudgetOptions.map((item,index)=>(
//           <div key={index} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'>
//             <h2 className='text-4xl'>{item.icon}</h2>
//             <h2 className='font-bold text-lg'>{item.title}</h2>
//             <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//           </div>
//         ))}
//         </div>
//       </div>



//       <div>
//       <h2 className='font-bold text-3xl'>With whom are you planning your next trip-e ride?</h2>
//       <div className='grid grid-cols-3 gap-5 mt-5'>
//         {SelectTravelesList.map((item,index)=>(
//           <div key={index} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'>
//             <h2 className='text-4xl'>{item.icon}</h2>
//             <h2 className='font-bold text-lg'>{item.title}</h2>
//             <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//           </div>
//         ))}
//         </div>
//       </div>
//       <div className='my-10 justify-end flex'>
//       <button style={{color:'white'}}>Generate Trip</button>
//       </div>
//     </div>
//   )
// }

// export default CreateTrip


function CreateTrip() {
  
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>just provide some basic information and we will get you the best and affordable itinerary</p>
      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is your preferred destination ?</h2>
          <button style={{color: 'white'}}>Enter destination</button>
        </div>
        <div>
          <h2 className='font-bold text-3xl'>For how many days you are planning your trip</h2>
          <Input placeholder={'Ex.3'} type="number" />
        </div>
       </div> 
     <div>
      <h2 className='font-bold text-3xl'>What is your budget?</h2>
      <div className='grid grid-cols-3 gap-5 mt-5'>
        {SelectBudgetOptions.map((item,index)=>(
          <div key={index} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'>
            <h2 className='text-4xl'>{item.icon}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
          </div>
        ))}
        </div>
      </div>

      <div>
      <h2 className='font-bold text-3xl'>With whom are you planning your next trip-e ride?</h2>
      <div className='grid grid-cols-3 gap-5 mt-5'>
        {SelectTravelesList.map((item,index)=>(
          <div key={index} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'>
            <h2 className='text-4xl'>{item.icon}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
          </div>
        ))}
        </div>
      </div>
      <div className='my-10 justify-end flex'>
      <button style={{color:'white'}}>Generate Trip</button>
      </div>
    </div>
  )
}

export default CreateTrip
