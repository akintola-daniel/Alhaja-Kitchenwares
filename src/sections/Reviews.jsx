import { reviews } from '@/constants'
import { Star } from 'lucide-react'
import React from 'react'

const Reviews = () => {
  return (
    <section id="reviews" className="py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center ">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-950">Customer Reviews</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed  dark:text-gray-400">
            See what our customers have to say about their experience with Alhaja Kitchen Ware.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col justify-between rounded-lg border p-6 bg-white shadow-md mx-auto max-w-[400px]">
            <div>
              <div className="flex items-center space-x-1 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">"{review.review}"</p>
            </div>
            <div className="font-semibold">{review.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Reviews
