import React from 'react'

const ColsAni = () => {
  return (
    <div className='overflow-x-hidden'>
        <div className='absolute h-[100vh] w-full flex justify-center items-center text-white z-10'>
            SCROLL DOWN
        </div>
        <div className='grid place-items-center w-[100%] relative'>
            <div className='columns w-full max-w-[1200px] relative px-[0] py-[20px] grid place-items-center grid-cols-[repeat(3, _1fr)] gap-[2vw] mt-[500px]'>
                <div className='column w-full relative grid gap-[2vw] grid-cols-[100%]'>
                    <div className='col-item m-0 relative z-1'>
                        <div className='img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none'>
                            <img src='/assets/grid1.png' className='img absolute top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility:hidden]' width="100px" height="100px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ColsAni;