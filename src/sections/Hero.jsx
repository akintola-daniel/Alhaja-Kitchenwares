import React from 'react'
import { Button } from '@/components/ui/button'
import { image4 } from '@/assets/images'

const Hero = () => {
  return (

      <section className="relative bg-emerald-50 pt-[95px]  md:pt-[80px] lg:pt-[100px]  pb-8 md:pb-0 " id='home' >

        <div className='md:h-screen md:flex md:items-center  '>
          

          <div className="px-4 md:pl-6 md:pr-0 mx-auto container max-w-screen-xl flex justify-center mb-[60px]">
            
           
            <div className="flex gap-6 md:gap-12 ">

              <div className="flex flex-col justify-center gap-3">

                <div className="flex flex-col justify-center items-center ">

                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-[37px] lg:text-6xl/none text-center mb-2  ">
                    Alhaja Kitchen Wares
                 </h1>

                  <h1 className="text-lg font-semibold tracking-tighter sm:text-3xl md:text-[26px] lg:text-4xl text-emerald-950 text-center">
                    Premium Kitchen Essentials for Every Home
                  </h1>

                  <p className="max-w-[600px] text-gray-700 md:text-xl text-center ">
                    Our collection of high-quality kitchenware with style, durability, and
                    functionality.
                  </p>

                  

                  <div className="flex md:hidden items-center justify-center mt-5">
                    <img
                      src={image4}
                      
                      alt="Kitchen Essentials"
                      className="rounded-xl object-cover max-h-[400px] "
                    />
                  </div>
                </div>

                <div className="flex flex-row mx-auto">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 mt-4">SHOP NOW</Button>
                </div>
               </div>
              
              <div className="hidden md:flex items-center justify-center md:justify-end">
                <img
                  src={image4}
                  alt="Kitchen Essentials"
                  className="rounded-lg md:rounded-none object-cover"
                />
              </div>

            </div>
            
          </div>

        </div>
        </section>
    
  )
}

export default Hero
