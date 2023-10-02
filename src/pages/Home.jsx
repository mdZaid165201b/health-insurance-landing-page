import React from 'react';
import HeroStar from '../assets/HeaderStar.png';
import Hero from "../components/hero";
import Header from "../components/header";
import Chooseus from "../components/chooseus";
import HowItWorkComponent from "../components/howItWorkComponent";
import FeelingConfident from "../components/feelingConfident";

function Home() {
    return (
        <main className='w-screen h-screen border border-red-500 relative overflow-x-hidden'>
            <div className='absolute w-full h-full'>
                <div className=' w-[300px] absolute hidden sm:block'>
                    <img src={HeroStar} alt="hero star" className='absolute opacity-20' />
                </div>
                <Header />
                <section className='absolute left-0 w-full h-[90%] '>
                    <Hero />
                    {/*<div className='h-[400px] bg-teal-200 absolute'> helooooo</div>*/}
                    <Chooseus />
                    <HowItWorkComponent />
                    <FeelingConfident />
                </section>
            </div>


        </main>
    );
}

export default Home;