import React from 'react'
import BannerCard from '../Home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24  bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* Left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell your Books <span className='text-blue-700'>for the Best Prices</span> </h2>
                <p className='md:4/5'>The main objective of the is project to devlop a digital platform for buying and selling used books. the system 
                aims to provide students,reader and book lovers with and affroad and eco-friendly way to exchange books.</p>
                <div>
                    <input type='search' name='search' id='search' placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none bg-white'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>
                        Search
                    </button>
                </div>
            </div>
            {/* right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner