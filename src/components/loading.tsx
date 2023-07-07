import Lottie from "lottie-react";
import loadingAnimation from "../lottie/94101-quad-cube-shifter-2-small-cubes.json";

export const Loading = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <Lottie animationData={loadingAnimation} loop={true} />
        </div>
    )
}
