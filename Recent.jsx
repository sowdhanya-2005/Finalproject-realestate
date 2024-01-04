import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='If you are interested in purchasing a home or locate a rental property, you can search properties using our portal to find the right residential property or commercial property to fit your needs.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
