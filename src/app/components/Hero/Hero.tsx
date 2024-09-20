

const Hero = () => {
    return (
        <div className='relative'>

            <div className=" bg-customGray h-258 semi-circular relative">
            </div>

            <div className=' flex justify-center absolute transform -translate-x-1/2' style={{ top: '130px', left: '50%' }} >

                <div className='w-1240 h-300 flex items-center justify-between space-x-4'>
                    <div className='relative bg-coustomRed w-300 h-300 hover:scale-150 hover:translate-x-10 hover:translate-y-10 transform transition-transform duration-300 ease-in-out'>

                    </div>
                    <div className='w-260 h-260 bg-coustomBlue'>

                    </div>
                    <div className='bg-redPink w-300 h-300'>

                    </div>
                    <div className='w-260 h-260 bg-lightGreen'>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Hero;