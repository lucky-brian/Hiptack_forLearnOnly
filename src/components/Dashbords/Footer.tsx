import { BiLogoFacebookCircle, BiLogoTwitter,BiLogoInstagram } from 'react-icons/bi'
const Footer = () => {
  return (
    <div className='m-auto bg-black flex justify-center'>
      <div className='w-2/3 h-52 py-10 flex justify-center text-white'>
        <div>
          <p className="text-xl font-bold text-center">HipTack</p>
          <div className='flex gap-3 items-center justify-center pt-5'>
            <div className=' cursor-pointer'>
              <BiLogoFacebookCircle size={25} />
            </div>
            <div className=' cursor-pointer'>
              <BiLogoTwitter size={25} />
            </div>
            <div className=' cursor-pointer'>
              <BiLogoInstagram size={25} />
            </div>
          </div>
          <p className='py-5'>For learning purposes only.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer