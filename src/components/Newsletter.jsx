import React from 'react'
import Banner from '../shared/Banner'
import banner2 from '../assets/banner2.png';

function Newsletter() {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
        {
            <Banner banner={banner2} heading={"Each student an share their discount code for friends"} subheading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam distinctio ipsam sapiente saepe magni fugiat architecto iste! Esse, itaque architecto!"} btn1={"I have code"} btn2={"Share"}/>
        }
    </div>
  )
}


export default Newsletter