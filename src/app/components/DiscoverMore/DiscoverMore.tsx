import { } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import man from '../../../assets/image.png';
import man2 from '../../../assets/image2.jpg';
import man3 from '../../../assets/image3.jpg';
import man4 from '../../../assets/image4.jpg';


const DiscoverMore = () => {
    return (
        <div className="flex justify-center">
            <div className="w-1240 mb-24 bg-gray-100">

                <h4 className="text-3xl font-bold mb-8 mt-20" style={{ fontFamily: 'inter' }}>DISCOVER MORE</h4>

                <div className="flex justify-between items-center mb-16">
                    <div className="flex gap-4">
                        <p className="bg-buttonColor px-3 py-1.5 inline text-white rounded-full">All Categories</p>
                        <p className="bg-gray-300 px-3.5 py-2.5 inline text-black text-xs font-bold rounded-full">Art</p>
                        <p className="bg-gray-300 px-3.5 py-2.5 inline text-black text-xs font-bold rounded-full">Celebrities</p>
                        <p className="bg-gray-300 px-3.5 py-2.5 inline text-black text-xs font-bold rounded-full">Geming</p>
                        <p className="bg-gray-300 px-3.5 py-2.5 inline text-black text-xs font-bold rounded-full">Sport</p>
                        <p className="bg-gray-300 px-3.5 py-2.5 inline text-black text-xs font-bold rounded-full">Music</p>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 font-serif text-xs font-bold bg-gray-300 rounded-full ">
                        <div className="">
                            <FontAwesomeIcon className="text-filterColor" icon={faFilter} />
                        </div>
                        <p className="text-filterColor">All Filter</p>
                    </div>
                </div>


                <div className="mt-20 pb-20 flex justify-between">

                    <div className="w-[291.53px] h-[402.74px] shadow rounded-2xl border py-3 flex justify-center">
                        <div className="relative">
                            <div className="w-[260.24px] h-[212.28px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                                <div className="absolute -bottom-4 left-3">
                                    <div className="flex ">
                                        <Image height={28} width={28} src={man} className="absolute z-50 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man2} className=" ml-5 z-40 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man3} className=" -ml-2 z-30 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man4} className=" -ml-2 rounded-full border-2 border-white" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between text-coustomBlue mt-5">
                                <p className="text-base font-bold mt-2 ml-3">Art Stuff</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="absolute bottom-0 left-0">
                                    <p className="ml-2 mb-3 text-xs text-purple">598 Tk</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-buttonColor rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <p className="ml-4 mb-3 text-xs">1 of 09</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-darkBlue rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[291.53px] h-[402.74px] shadow rounded-2xl border py-3 flex justify-center">
                        <div className="relative">
                            <div className="w-[260.24px] h-[212.28px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                                <div className="absolute -bottom-4 left-3">
                                    <div className="flex ">
                                        <Image height={28} width={28} src={man} className="absolute z-50 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man2} className=" ml-5 z-40 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man3} className=" -ml-2 z-30 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man4} className=" -ml-2 rounded-full border-2 border-white" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between text-coustomBlue mt-5">
                                <p className="text-base font-bold mt-2 ml-3">Art Stuff</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="absolute bottom-0 left-0">
                                    <p className="ml-2 mb-3 text-xs text-purple">598 Tk</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-buttonColor rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <p className="ml-4 mb-3 text-xs">1 of 09</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-darkBlue rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[291.53px] h-[402.74px] shadow rounded-2xl border py-3 flex justify-center">
                        <div className="relative">
                            <div className="w-[260.24px] h-[212.28px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                                <div className="absolute -bottom-4 left-3">
                                    <div className="flex ">
                                        <Image height={28} width={28} src={man} className="absolute z-50 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man2} className=" ml-5 z-40 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man3} className=" -ml-2 z-30 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man4} className=" -ml-2 rounded-full border-2 border-white" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between text-coustomBlue mt-5">
                                <p className="text-base font-bold mt-2 ml-3">Art Stuff</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="absolute bottom-0 left-0">
                                    <p className="ml-2 mb-3 text-xs text-purple">598 Tk</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-buttonColor rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <p className="ml-4 mb-3 text-xs">1 of 09</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-darkBlue rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[291.53px] h-[402.74px] shadow rounded-2xl border py-3 flex justify-center">
                        <div className="relative">
                            <div className="w-[260.24px] h-[212.28px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                                <div className="absolute -bottom-4 left-3">
                                    <div className="flex ">
                                        <Image height={28} width={28} src={man} className="absolute z-50 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man2} className=" ml-5 z-40 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man3} className=" -ml-2 z-30 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man4} className=" -ml-2 rounded-full border-2 border-white" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between text-coustomBlue mt-5">
                                <p className="text-base font-bold mt-2 ml-3">Art Stuff</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="absolute bottom-0 left-0">
                                    <p className="ml-2 mb-3 text-xs text-purple">598 Tk</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-buttonColor rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <p className="ml-4 mb-3 text-xs">1 of 09</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-darkBlue rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-20 flex justify-between">

                    <div className="w-[291.53px] h-[402.74px] shadow rounded-2xl border py-3 flex justify-center">
                        <div className="relative">
                            <div className="w-[260.24px] h-[212.28px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                                <div className="absolute -bottom-4 left-3">
                                    <div className="flex ">
                                        <Image height={28} width={28} src={man} className="absolute z-50 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man2} className=" ml-5 z-40 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man3} className=" -ml-2 z-30 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man4} className=" -ml-2 rounded-full border-2 border-white" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between text-coustomBlue mt-5">
                                <p className="text-base font-bold mt-2 ml-3">Art Stuff</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="absolute bottom-0 left-0">
                                    <p className="ml-2 mb-3 text-xs text-purple">598 Tk</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-buttonColor rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <p className="ml-4 mb-3 text-xs">1 of 09</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-darkBlue rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[291.53px] h-[402.74px] shadow rounded-2xl border py-3 flex justify-center">
                        <div className="relative">
                            <div className="w-[260.24px] h-[212.28px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                                <div className="absolute -bottom-4 left-3">
                                    <div className="flex ">
                                        <Image height={28} width={28} src={man} className="absolute z-50 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man2} className=" ml-5 z-40 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man3} className=" -ml-2 z-30 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man4} className=" -ml-2 rounded-full border-2 border-white" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between text-coustomBlue mt-5">
                                <p className="text-base font-bold mt-2 ml-3">Art Stuff</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="absolute bottom-0 left-0">
                                    <p className="ml-2 mb-3 text-xs text-purple">598 Tk</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-buttonColor rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <p className="ml-4 mb-3 text-xs">1 of 09</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-darkBlue rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[291.53px] h-[402.74px] shadow rounded-2xl border py-3 flex justify-center">
                        <div className="relative">
                            <div className="w-[260.24px] h-[212.28px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                                <div className="absolute -bottom-4 left-3">
                                    <div className="flex ">
                                        <Image height={28} width={28} src={man} className="absolute z-50 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man2} className=" ml-5 z-40 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man3} className=" -ml-2 z-30 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man4} className=" -ml-2 rounded-full border-2 border-white" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between text-coustomBlue mt-5">
                                <p className="text-base font-bold mt-2 ml-3">Art Stuff</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="absolute bottom-0 left-0">
                                    <p className="ml-2 mb-3 text-xs text-purple">598 Tk</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-buttonColor rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <p className="ml-4 mb-3 text-xs">1 of 09</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-darkBlue rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[291.53px] h-[402.74px] shadow rounded-2xl border py-3 flex justify-center">
                        <div className="relative">
                            <div className="w-[260.24px] h-[212.28px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                                <div className="absolute -bottom-4 left-3">
                                    <div className="flex ">
                                        <Image height={28} width={28} src={man} className="absolute z-50 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man2} className=" ml-5 z-40 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man3} className=" -ml-2 z-30 rounded-full border-2 border-white" alt="" />
                                        <Image height={28} width={28} src={man4} className=" -ml-2 rounded-full border-2 border-white" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between text-coustomBlue mt-5">
                                <p className="text-base font-bold mt-2 ml-3">Art Stuff</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="absolute bottom-0 left-0">
                                    <p className="ml-2 mb-3 text-xs text-purple">598 Tk</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-buttonColor rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <p className="ml-4 mb-3 text-xs">1 of 09</p>
                                    <div className="w-[73.89px] h-[40.01px] bg-darkBlue rounded-3xl text-white flex justify-center items-center"><p className="text-xs">DSVBD</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default DiscoverMore;