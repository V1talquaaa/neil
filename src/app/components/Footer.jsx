import React from 'react'

function Footer() {
  return (
    <footer className='bg-mainBlue pt-[32px] pb-[75px] px-[386px]'>
        <div className='container'>
            <ul className='flex justify-center text-mainWhite text-base gap-[24px]'>
                <li className='hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="">About me</a></li>
                <li className='hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="">Services</a></li>
                <li className='hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="">Reviews</a></li>
                <li className='hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="">Privacy Policy</a></li>
                <li className='hover:-translate-y-2 hover:border-b ease-in duration-200'><a href="">Cookie Policy</a></li>
            </ul>
            <p className='mt-[24px] text-[#0E1267] text-center text-base'>2024 Neil Meyrick</p>
        </div>
    </footer>
  )
}

export default Footer