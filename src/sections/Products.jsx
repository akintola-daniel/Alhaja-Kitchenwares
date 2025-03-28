import { placeholder } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { kitchenWares } from '@/constants'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const Products = () => {
  return (
    <section id="products" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center space-y-2 text-center">

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-950">
            Our Products
          </h2>
          
          <p className="max-w-[600px] md:max-w-[700px] text-gray-500 md:text-xl/relaxed  dark:text-gray-400 ">
            Explore our wide range of kitchen essentials designed to make cooking a delightful experience.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mx-auto grid max-w-5xl justify-items-center gap-6 pt-10 pb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {kitchenWares.map((product, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border bg-white hover:border-emerald-900 max-w-[350px] w-full shadow-md hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="h-[160px] w-full overflow-hidden rounded-t-md">
                <img
                  src={product.image || placeholder}
                  alt={product.name || 'Product image'}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="bg-white p-4 border-t">
                <h3 className="font-bold text-gray-800">{product.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-semibold text-emerald-600">{product.price}</span>
                  <Button
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            aria-label="View all products"
          >
            View All Products <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Products
