import React from 'react'
import About from './About'
import Banner from './Banner'
import bannv from "../assets/banner.mp4";
import ProjectHomeCards from './ProjectHomeCards'


function Home({user}) {
  return (
    <div className='bg-white'>
        <Banner name="developer's or project" video ={bannv} />
        <ProjectHomeCards user={user}/>
        <About/>
    </div>
  )
}

export default Home