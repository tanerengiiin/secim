import Image from 'next/image'
import React from 'react'

const Oran = ({ total, oy, data }) => {
    return (
        <div className='flex items-center justify-between my-4 text-black mx-3 bg-black bg-opacity-5 py-2 px-2 rounded-md'>
            <div className='flex items-center space-x-2'>
                <div className='relative w-7 h-7 bg-black rounded-lg bg-opacity-20'>
                    {data.url && <Image className='object-cover rounded-lg' src={data.url} fill />}
                </div>
                <div className='text-black font-medium'>{data.title}</div>
            </div>
            <div className='font-extrabold'>
                %{((oy/total)*100).toFixed(2)}
            </div>
        </div>
    )
}

export default Oran