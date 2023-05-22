"use client"
import Image from 'next/image'
import React from 'react'
import "./style.css"
const Aday = ({ oy, setOy, data }) => {
    const handleOy = (type) => {
        if (type === "UP") {
            setOy(oy + 1);
            localStorage.setItem(data.id, oy + 1)
        } else if (type === "DOWN") {
            if (oy !== 0) {
                setOy(oy - 1);
                localStorage.setItem(data.id, oy - 1)
            }
        }
    }
    const handleMan = (oy) => {
        localStorage.setItem(data.id, oy)
        setOy(oy);
    }
    return (
        <div className='flex items-center justify-between my-10 text-black mx-3'>
            <div className='flex items-center space-x-2'>
                <div className='relative w-7 h-7 bg-[#da2323] rounded-lg bg-opacity-20'>
                    {data.url && <Image className='object-cover rounded-lg' src={data.url} fill />}
                </div>
                <div className='text-black font-medium'>{data.title}</div>
            </div>
            <div className='flex items-center space-x-0 bg-black bg-opacity-10 rounded-md'>
                <button onClick={() => handleOy("DOWN")} className='text-black px-1.5 py-0.5'><svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 11V13H19V11H5Z"></path></svg></button>
                <input type='number' defaultValue={0} className='w-12 text-center py-0.5 border-t border-b border-black border-opacity-10' value={oy} min={0} onChange={(e) => handleMan(parseInt(e.target.value))} />
                <button onClick={() => handleOy("UP")} className='px-1.5 py-0.5'><svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg></button>
            </div>
        </div>
    )
}

export default Aday