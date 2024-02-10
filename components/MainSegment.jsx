import React from 'react'
import Carousel from './Carousel'
const MainSegment = () => {
  return (
    <div className=' flex flex-row h-screen'>
    <div className=' w-1/2 h-full '>
    <Carousel className="w-full" items={["/graza.jpg","/graza1.jpg","/graza2.jpg","/graza3.jpg"]}/>
    </div>


    <div className=' flex flex-col h-full w-1/2 items-center pt-16 text-center'>
    <div className=' h-fit w-full text-center text-4xl'>"DRIZZLE & SIZZLE"</div>
    <div className=' h-fit w-full text-center text-4xl underline'>Extra Virgin Olive Oil</div>
    <div>
    <div className="flex flex-row align-middle justify-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          className={`text-2xl focus:outline-none ${
            index <= 5 ? 'text-black-400' : 'text-gray-300'
          }`}
        >
          ★
        </button>
      ))}
      
    </div>
    1573 reviews
    </div>

    <div className=' flex flex-col justify-evenly w-3/4 pl-4 pr-4 border-2 border-black rounded-md'>
    <h1>Quantity</h1>
    <div className=' flex flex-row w-full mt-2 mb-2 justify-evenly'>
        <div className=' flex flex-col p-3 border-2 border-black rounded-md'>
            <h1>1</h1>
            <h1>SET</h1>
            <h6>10% off</h6>
        </div>

        <div className=' flex flex-col p-3 border-2 border-black rounded-md'>
            <h1>2</h1>
            <h1>SET</h1>
            <h6>10% off</h6>
        </div>

        <div className=' flex flex-col p-3 border-2 border-black rounded-md'>
            <h1>1</h1>
            <h1>SET</h1>
            <h3>10% off</h3>
        </div>

        <div className=' flex flex-col p-3 border-2 border-black rounded-md'>
            <h1>1</h1>
            <h1>SET</h1>
            <h3>10% off</h3>
        </div>
    </div>
    <div className=' border-t border-b mt-1 mb-1 border-dotted border-black '>
        ONE TIME PURCHASE
    </div>
    <div className=' mt-1 mb-1'>
        SUBSCIRBE AND SAVE
    </div>

    <div className=' flex flex-col mt-1 mb-1'>
        <div className=' w-full'>
        SUBSCIRBE AND SAVE
        </div>
        <div className=' w-full'>
             Frequency Every Month
        </div>

    </div>

    <div>
        <button className=' w-3/4 rounded-2xl mt-2 mb-2 text-center bg-green-500'>SUBSCIRBE 30$</button>
    </div>
    <div> Skip Anytime</div>

    </div>
    <div className=' rounded-2xl mt-4 w-3/4 p-4 border-2 border-black'>
    Buying multiple gifts? Send to multiple addresses here.
    </div>

    </div>

    </div>
  )
}

export default MainSegment