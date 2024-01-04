import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle=' Our real estate portal is structured to provide wider exposure, so your property will be seen by as many buyers as possible for a fast response to your listing.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
