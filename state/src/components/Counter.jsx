import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const decreaseHandlerBy1 = () => {
        setCounter(counter - 1)
    }
    const decreaseHandlerBy10 = () => {
        setCounter(counter - 10)
    }
    const decreaseHandlerBy100 = () => {
        setCounter(counter - 100)
    }

    const increaseHandlerBy1 = () => {
        setCounter(counter + 1)
    }
    const increaseHandlerBy10 = () => {
        setCounter(counter + 10);
    }
    const increaseHandlerBy100 = () => {
        setCounter(counter + 100);
    }
    return (
        <div className='max-w-6xl mx-auto text-center'>
            <h2 className='text-4xl my-8'>Counter value is {counter}</h2>
            <div className='border border-gray-300 rounded-sm inline-block p-1 text-center mr-2 px-4 py-2'>
                <h2 className='text-lg my-2 font-semibold'>Decrease value by</h2>
                <div className='flex items-center justify-center gap-2'>
                    <button
                        onClick={decreaseHandlerBy1}
                        type='button'
                        className='bg-gray-300 px-3 py-1 text-gray-700 rounded-sm font-semibold '>
                        1
                    </button>
                    <button
                        onClick={decreaseHandlerBy10}
                        type='button'
                        className='bg-gray-300 px-3 py-1 text-gray-700 rounded-sm font-semibold '>
                        10
                    </button>
                    <button
                        onClick={decreaseHandlerBy100}
                        type='button'
                        className='bg-gray-300 px-3 py-1 text-gray-700 rounded-sm font-semibold '>
                        100
                    </button>
                </div>
            </div>
            <div className='border border-gray-300 rounded-sm inline-block p-1 text-center px-4 py-2'>
                <h2 className='text-lg my-2 font-semibold'>Increase value by</h2>
                <div className='flex items-center justify-center gap-2'>
                    <button
                        onClick={increaseHandlerBy1}
                        type='button'
                        className='bg-gray-300 px-3 py-1 text-gray-700 rounded-sm font-semibold '>
                        1
                    </button>
                    <button
                        onClick={increaseHandlerBy10}
                        type='button'
                        className='bg-gray-300 px-3 py-1 text-gray-700 rounded-sm font-semibold '>
                        10
                    </button>
                    <button
                        onClick={increaseHandlerBy100}
                        type='button'
                        className='bg-gray-300 px-3 py-1 text-gray-700 rounded-sm font-semibold '>
                        100
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
