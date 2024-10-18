import Marquee from "react-fast-marquee";

const Try = () => {

    return (
        <section className="c-space my-20">
            <div className='w-full h-[50vh] flex flex-col justify-center items-center shadow-2xl shadow-black-200' id='certificates'>
                <div className='flex justify-center items-center flex-row mb-16'>
                    <span className='waving-hand text-4xl'>🎉</span> <span className="head-text">Certifications</span> <span className='waving-hand text-4xl'>🎉</span>
                </div>                

                <Marquee pauseOnHover={true} gradientWidth={50} speed={200} className="flex justify-center items-center w-full h-full bg-black-200 rounded-lg border border-black-300">
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <div className='w-full h-1/2 flex justify-center items-center'>
                            <div className='flex justify-center items-center w-full h-full'>
                                <div className='flex mx-2 w-full h-full justify-center items-center'>
                                    <img src='/assets/review1.png' alt="Review 1" className="w-full h-full" />
                                </div>
                                <div className='flex mx-2 w-full h-full justify-center items-center'>
                                    <img src='/assets/review2.png' alt="Review 2" />
                                </div>
                                <div className='flex mx-2 w-full h-full justify-center items-center'>
                                    <img src='/assets/review3.png' alt="Review 3" />
                                </div>
                                <div className='flex mx-2 w-full h-full justify-center items-center'>
                                    <img src='/assets/review4.png' alt="Review 4" />
                                </div>
                            </div>
                        </div>

                        <div className='relative w-full h-1/2 transform scale-y-[-1] flex mt-4'>
                            <div className='flex relative opacity-90 glassy'>
                                <div className='flex mx-2'>
                                    <img src='/assets/review1.png' alt="Review 1" className="w-full h-full object-cover" />
                                    <div className='w-full absolute inset-0 bg-gradient-to-t from-transparent to-black-200 opacity-100' />
                                </div>

                                <div className='flex mx-2'>
                                    <img src='/assets/review2.png' alt="Review 2" className="w-full h-full object-cover" />
                                    <div className='w-full absolute inset-0 bg-gradient-to-t from-transparent to-black-200 opacity-100' />
                                </div>

                                <div className='flex mx-2'>
                                    <img src='/assets/review3.png' alt="Review 3" className="w-full h-full object-cover" />
                                    <div className='w-full absolute inset-0 bg-gradient-to-t from-transparent to-black-200 opacity-100' />
                                </div>

                                <div className='flex mx-2'>
                                    <img src='/assets/review4.png' alt="Review 4" className="w-full h-full object-cover" />
                                    <div className='w-full absolute inset-0 bg-gradient-to-t from-transparent to-black-200 opacity-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default Try;
