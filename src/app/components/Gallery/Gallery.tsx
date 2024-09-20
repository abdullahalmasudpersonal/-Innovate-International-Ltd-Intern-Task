import Image from "next/image";
import man from '../../../assets/image2.jpg'
import man2 from '../../../assets/image3.jpg'
import man3 from '../../../assets/image.png'


const Gallery = () => {
    return (
        <div className="flex justify-center">
            <div className="w-1263 h-603  mt-426   flex"  >

                <div className="h-603 w-614 flex">

                    <div className=" relative w-[314px] h-603 ">

                        <div className="relative w-[254px] h-[264px] bg-gradient-to-b from-galleryPhoto1Gradient to-galleryPhoto1GradientEnd rounded-3xl flex  items-center">
                            <p className="text-3xl text-white ml-7">Photo 1</p>
                            <Image src={man} className="h-16 w-16 rounded-full absolute -bottom-9 -right-9 border-[5px] border-white" alt="" />
                        </div>

                        <div className="absolute bottom-10 right-10 w-[204px] h-[224px] bg-gradient-to-b from-galleryPhoto2Gradient to-galleryPhoto2GradientEnd rounded-3xl flex items-center">
                            <p className="text-3xl text-white ml-7">Photo 3</p>
                            <Image src={man2} className="h-16 w-16 rounded-full absolute -bottom-6 -right-6 border-[5px] border-white" alt="" />
                        </div>

                    </div>
                    <div className=" flex justify-center items-center w-[300px] h-603 ">

                        <div className=" relative w-[214px] h-[234px] bg-gradient-to-b from-pink-400 to-indigo-500 rounded-3xl flex items-center">

                            <p className="text-3xl text-white ml-7">Photo 2</p>

                            <Image src={man3} className="absolute -bottom-7 -right-7 h-16 w-16 rounded-full border-[5px] border-white" alt="" />

                        </div>

                    </div>

                </div>

                <div className="w-649 h-603  flex items-center justify-center">
                    <div>
                        <div className="w-469 h-345  text-2xl flex items-center justify-center">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&nbsp;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-transparent hover:bg-buttonColor text-buttonColor font-semibold hover:text-white py-3 px-6 border-2 border-buttonColor hover:border-transparent duration-300 rounded-2xl">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;