import { whyUs } from '@/constants'
import { Clock, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'

const WhyUs = () => {
  return (
    <section id="why-us" className="py-12 md:py-24 lg:py-32 bg-emerald-50">
    <div className="container px-4 md:px-6 mx-auto">

      <div className="flex flex-col items-center justify-center space-y-4 text-center">

        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>

          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed  dark:text-gray-400">
            We pride ourselves on customer satisfaction and high-quality kitchenware with style, durability, and functionality..
          </p>
        </div>
      </div>



      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 ">

        {whyUs.map((whyus, index)=>
        <div className="flex flex-col items-center justify-start md:h-[220px]   space-y-2 rounded-lg border p-6 bg-white shadow-inner max-w-[400px] mx-auto " key={index}>

        <div className="rounded-full bg-emerald-100 p-3 ">
          <p className="text-[24px] text-emerald-950">  {React.createElement(whyus.icon)} </p>
        </div>
        
        <h3 className="text-xl font-bold">{whyus.title}</h3>
       
        <p className="text-center text-gray-500 dark:text-gray-400">
          {whyus.text}
        </p>
       </div>
        )}

      </div>
    </div>
  </section>
  )
}

export default WhyUs
