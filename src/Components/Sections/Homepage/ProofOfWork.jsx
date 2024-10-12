import React from 'react'
import sample1 from '../../../assets/images/sample1.jpg'
import sample2 from '../../../assets/images/sample2.jpg'
import sample3 from '../../../assets/images/sample3.jpeg'
import image from '../../../assets/images/yelan.png'

const ProofOfWork = () => {
    return (
        <section className='w-full mt-[5rem] mb-[10rem] flex flex-col px-[10%]'>
            <h2 className='text-[36px] text-center font-semibold font-nunito mb-[85px]'>Work (antiques)</h2>
            <div className='w-full relative flex gap-[20px]'>

                {/* first column */}
                <div className='flex-1 flex flex-col gap-[20px]'>
                    <div className='h-[200px] rounded-[20px] w-full p-[35px] bg-accent'>
                        <h4 className='text-[36px] font-nunito font-bold text-white'>Design Portfolio</h4>
                        <p className='text-[16px] font-nunito text-white'>Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.</p>
                    </div>
                    <div className='h-[200px] rounded-[20px] w-full p-[35px] bg-[#f5f5f5]'>
                        <h4 className='text-[36px] font-nunito font-semibold'>Front-end</h4>
                        <p className='text-[16px] font-nunito'>Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.</p>
                    </div>
                    <div className='h-[200px] rounded-[20px] w-full p-[35px] bg-[#f5f5f5]'>
                        <h4 className='text-[36px] font-nunito font-semibold'>Back-end</h4>
                        <p className='text-[16px] font-nunito'>Lorem ipsum dolor sit amet consectetur. Dolor at ullamcorper aliquam facilisis arcu.</p>
                    </div>
                </div>

                {/* second column */}
                <div className='flex-1 grid grid-cols-2 gap-[20px] grid-rows-3'>
                    <div className='overflow-hidden rounded-[20px] row-span-3'>
                        <img className='w-full h-full object-cover' src={sample1} alt="yelan genshin impact" />
                    </div>
                    <div className='overflow-hidden rounded-[20px] row-span-2'>
                        <img className='w-full h-full object-cover' src={sample2} alt="yelan genshin impact" />
                    </div>
                    <div className='overflow-hidden rounded-[20px] row-span-3'>
                        <img className='w-full h-full object-cover row-span-1' src={sample3} alt="yelan genshin impact" />
                    </div>
                    <div className='overflow-hidden rounded-[20px] row-span-2'>
                        <img className='w-full h-full object-cover' src={image} alt="yelan genshin impact" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProofOfWork