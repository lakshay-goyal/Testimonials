import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className='max-w-4xl mx-auto'>
            <div className='transform transition-all duration-500'>
                <Card review={reviews[index]}></Card>
            </div>

            <div className='flex justify-center gap-6 mt-12'>
                <button 
                    onClick={leftShiftHandler}
                    className='p-4 rounded-full bg-gray-800/50 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 border border-gray-700 hover:border-cyan-400'
                >
                    <FiChevronLeft className='text-2xl'/>
                </button>
                <button 
                    onClick={rightShiftHandler}
                    className='p-4 rounded-full bg-gray-800/50 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 border border-gray-700 hover:border-cyan-400'
                >
                    <FiChevronRight className='text-2xl'/>
                </button>
            </div>

            <div className='text-center mt-12'>
                <button
                    onClick={surpriseHandler}
                    className='group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold hover:scale-105 transition-all duration-300'
                >
                    <span className='relative z-10'>Surprise Me</span>
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300'></div>
                </button>
            </div>
        </div>
    )
}

export default Testimonials;