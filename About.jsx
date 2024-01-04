import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p> Our single platform is designed to meet the needs of buyers, sellers and brokers of properties. Our success is attributed to our understanding of the needs of our customers and consistently working to meet those needs utilizing innovative e-commerce solutions.</p>
            <p> Our real estate portal is structured to provide wider exposure, so your property will be seen by as many buyers as possible for a fast response to your listing. There is no charge for listing your property, just register with us and enter details and images of your property to get started.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
