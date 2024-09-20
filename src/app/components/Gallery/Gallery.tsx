

const Gallery = () => {
    return (
        <div className="flex justify-center">
            <div className="w-1263 h-603  mt-426  bg-gray-200 flex"  >

                <div className="h-603 w-614 " style={{ border: '1px solid gray' }}>

                </div>

                <div className="w-649 h-603 bg-slate-300 flex items-center justify-center">
                    <div>
                        <div className="w-469 h-345 bg-slate-400 text-2xl flex items-center justify-center">
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