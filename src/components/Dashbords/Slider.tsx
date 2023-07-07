import Img from '../../data/images/png/x.png'
import { useNavigate } from "react-router-dom";


const Slider = () => {
    const navigate = useNavigate();

    return (
        <div className="m-auto flex items-center pt-10 w-2/3">
            <div className="flex justify-center max-lg:flex-col max-lg:justify-center max-lg:items-center">
                <div className="flex flex-col gap-2 pt-20 xl:pt-40 max-md:px-1">
                    <div>
                        <p className="text-lg p-1 bg-gray-200 rounded-md w-fit">
                            <span className="px-1 bg-black text-white rounded-md font-medium mx-1">NEW</span>
                            The best premium t-shirt for everyone </p>
                    </div>
                    <div>
                        <p className="text-6xl max-md:text-2xl font-bold">Experience the ultimate streetwear style with Hiptrack!</p>
                    </div>
                    <div className="flex gap-3 py-5" onClick={()=> navigate('/product')}>
                        <button className="rounded-xl p-2 px-4 bg-black text-white text-xl font-medium">All product</button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img src={Img} alt=""
                        className="w-full"
                    />
                    {/* <img
                        src={sliceImages[currentIndex]} alt=""
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Slider;