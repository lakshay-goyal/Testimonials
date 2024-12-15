import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
    return (
        <div className='relative bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-cyan-500/20 border border-gray-700'>
            <div className='relative mb-12'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='relative group'>
                        <div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000'></div>
                        <div className='relative'>
                            <img 
                                className="w-32 h-32 rounded-full object-cover border-4 border-gray-800"
                                src={review.image}
                                alt={review.name}
                            />
                            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center space-y-3'>
                <h2 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                    {review.name}
                </h2>
                <p className='text-gray-400 font-medium'>{review.job}</p>
            </div>

            <div className='mt-8 text-center relative'>
                <FaQuoteLeft className='text-cyan-400/30 absolute -top-4 left-0 text-4xl'/>
                <p className='text-gray-300 leading-relaxed px-8'>
                    {review.text}
                </p>
                <FaQuoteRight className='text-cyan-400/30 absolute -bottom-4 right-0 text-4xl'/>
            </div>

            <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 -z-10'></div>
        </div>
    )
}

export default Card;