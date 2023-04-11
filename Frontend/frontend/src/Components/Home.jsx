import React from 'react'
import About from './About'
import Banner from './Banner'
import ProjectHomeCards from './ProjectHomeCards'


function Home({user}) {
  return (
    <div className='bg-white'>
        <Banner name="developer's or project" page="DevXplore" tag="Let the world know your work" />
        <ProjectHomeCards user={user}/>
        <About/>
    </div>
  )
}

export default Home