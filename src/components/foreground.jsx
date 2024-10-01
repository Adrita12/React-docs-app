import React, { useState,useRef } from 'react'
import Card from './Card'

function foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Data desc is working perfectly",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "Data desc is working perfectly",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"},
        },
        {
            desc: "Data desc is working perfectly",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"},
        }
    ]

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
       ))}
    </div>
  )
}

export default foreground
