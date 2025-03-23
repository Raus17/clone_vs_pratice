import React from 'react'

const Mainbanner = () => {
    return (
        <div className='bg-[#202020]'>
            <div className='flex flex-col text-center h-[22rem] justify-center items-center '>
                <div className=' text-6xl  mb-6   text-white' >
                    <h1>Your code Editor<br /> Refined by AI</h1>
                </div>
                <div className='flex flex-row gap-5 mb-2'>
                    <button className='bg-blue-500 p-2 rounded shadow-lg border-black text-white'>
                        Download for Windows
                    </button>
                    <button className='bg-inherit p-2 border-white border rounded shadow-lg  text-white'>
                        Get Co-Pilot for Free
                    </button>
                </div>
                <div className="flex flex-row gap-2 text-sm text-white">
                    <a href="#" className="hover:underline text-blue-400">Web</a>,
                    <a href="#" className="hover:underline  text-blue-400">Insider Edition</a>,
                    <a href="#" className="hover:underline  text-blue-400">Other platforms</a>
                </div>

            </div>
        </div>
    )
}

export default Mainbanner