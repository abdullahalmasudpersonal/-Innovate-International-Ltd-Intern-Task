import Image from "next/image";
import man from '../../../assets/image3.jpg'


const Explore = () => {
    return (
        <div className="flex justify-center">
            <div className="w-1263 h-603  mt-230  bg-gray-200 flex"  >

                <div className=" w-649 h-603 bg-slate-300 flex items-center justify-center">
                    <div>
                        <div className=" h-345 bg-slate-400 text-2xl flex items-center justify-center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  qui officia deserunt mollit anim id est laborum. </p>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-base bg-transparent hover:bg-buttonColor text-buttonColor font-semibold hover:text-white py-3 px-6 border border-buttonColor hover:border-transparent duration-300 rounded-2xl">
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>


                <div className="h-603 w-614 flex relative items-center justify-end" style={{ border: '1px solid gray' }}>



                    <div className="w-[316px] h-[316px] bg-deepIndigo rounded-2xl absolute">

                    </div>

                    <div className="w-[358px] h-[359px] bg-purplishMagenta rounded-2xl absolute mr-6">

                    </div>



                    <div className=" mr-12">
                        <div className=" relative w-395 h-395 bg-darkBlue rounded-2xl text-white pt-6 ps-10">
                            <h5 className="text-4xl italic font-bold">Lorem ipsum</h5>
                            <div className="flex gap-2 mt-3">
                                <Image height={25} width={25} src={man} className="rounded-full" alt="" />
                                <p>Wade Warren</p>
                            </div>
                            <div className="w-[316px] h-[71px] bg-whiteBlue p-1 rounded-lg border border-gray-400 px-3 absolute bottom-7">
                                <h5 className="text-2xl"> Lawrance Stroll</h5>
                                <p>Hegifueshho dhfsui foiehhsio</p>
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Explore;