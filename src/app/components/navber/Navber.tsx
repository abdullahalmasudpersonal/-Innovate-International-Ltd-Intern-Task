import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navber = () => {
    return (
        <div className="text-white bg-customGray h-101 flex justify-center items-center border-b border-black">
            <div className=" h-87 w-1253 flex justify-between items-center">
                <div className="flex justify-between w-5/12">

                    <div className="p-2 flex items-center ">
                        <p>Home</p>
                        <FontAwesomeIcon className='w-20 h-20 p-1' icon={faAngleDown} />
                    </div>
                    <div className="p-2 flex items-center ">
                        <p>Event</p>
                        <FontAwesomeIcon className='w-20 h-20 p-1' icon={faAngleDown} />
                    </div>
                    <div className="p-2 flex items-center ">
                        <p>Contact</p>
                        <FontAwesomeIcon className='w-20 h-20 p-1' icon={faAngleDown} />
                    </div>
                    <div className="p-2 flex items-center ">
                        <p>Blog</p>
                        <FontAwesomeIcon className='w-20 h-20 p-1' icon={faAngleDown} />
                    </div>

                </div>

                <div className='bg-white w-298 h-44 flex items-center justify-between p-20 rounded-full'>
                    <input className='text-xl w-235 mr-1' placeholder='Search' />
                    <FontAwesomeIcon icon={faSearch} className="text-black text-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Navber;