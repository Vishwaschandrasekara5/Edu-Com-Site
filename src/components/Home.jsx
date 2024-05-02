import React from 'react';
import banner from '../assets/banner.png';
import Banner from '../shared/Banner';

function Home() {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id="home">
     <Banner banner={banner} heading={"Develop Your Skills without Dilligence"} subheading={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eveniet quis nisi soluta, amet voluptates."} btn1={"Get Started"} btn2={"Discount"}/>
    </div>
  );
}

export default Home;
