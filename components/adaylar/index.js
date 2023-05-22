"use client"
import React, { useEffect, useState } from 'react'
import Aday from '../aday'
import Oran from '../oran'
const adaylar = [
    {
        id: 1,
        title: "Erdoğan",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Recep_Tayyip_Erdogan_in_Ukraine.jpg/220px-Recep_Tayyip_Erdogan_in_Ukraine.jpg"
    },
    {
        id: 2,
        title: "Kılıçdaroğlu",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Kemal_Kılıçdaroğlu_in_May_2023_%28cropped%29.jpg/220px-Kemal_Kılıçdaroğlu_in_May_2023_%28cropped%29.jpg"
    },
    {
        id: 3,
        title: "Boş/Geçersiz",
    },
]
const Adaylar = () => {
    var [kk, setKK] = useState(0);
    var [rte, setRTE] = useState(0);
    var [bos, setBos] = useState(0);
    var [sandık, setSandık] = useState("");
    useEffect(() => {
        if (localStorage.getItem(1)) {
            setRTE(parseInt(localStorage.getItem(1)))
        }
        if (localStorage.getItem(2)) {
            setKK(parseInt(localStorage.getItem(2)))
        }
        if (localStorage.getItem(3)) {
            setBos(parseInt(localStorage.getItem(3)))
        }
        if (localStorage.getItem("sandık")) {
            setSandık(localStorage.getItem("sandık"))
        }
    }, [])
    const handleSandık = (txt) => {
        setSandık(txt);
        localStorage.setItem("sandık", txt)
    }
    return (
        <div className='text-black w-full'>
            <div className='mx-3 my-4 text-center font-extrabold text-lg'>
                SANDIĞINI TAKİP ET!
            </div>
            <hr />
            <div className='mx-3 my-4 flex items-center space-x-3'>
                <div>Sandık: </div>
                <input value={sandık} onChange={(e) => handleSandık(e.target.value)} className='w-full bg-black bg-opacity-5 px-2 py-1 rounded-lg' />
            </div>
            <hr />
            <Aday oy={rte} setOy={setRTE} data={adaylar[0]} />
            <Aday oy={kk} setOy={setKK} data={adaylar[1]} />
            <Aday oy={bos} setOy={setBos} data={adaylar[2]} />
            <hr />
            <div className='mx-3 my-4 flex items-center justify-between'>
                <div></div>
                <div>
                    <div>Toplam Oy: <span className='w-6 font-semibold'>{(kk + rte + bos)}</span></div>
                </div>
            </div>
            <hr />
            <Oran total={(kk + rte)} oy={rte} data={adaylar[0]} />
            <Oran total={(kk + rte)} oy={kk} data={adaylar[1]} />
            <hr />
            <div className='mx-3 my-4 text-center opacity-60 text-xs'>
                Bu uygulama seçmen olarak oy sayımını takip etmek için yapılmıştır. Herhangi bir siyasi amacı yoktur. 
            </div>
            
        </div>
    )
}

export default Adaylar