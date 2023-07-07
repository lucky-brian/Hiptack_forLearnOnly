import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Product } from '../../data/Products'
import getProduct from '../../data/Route/getProductDetail'
import { Loading } from '../loading'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { addToCart } from '../../store/slices/cartSlice'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { toastOption } from "../../toastOption/toastOption"
import { BiCartAdd } from 'react-icons/bi'

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user } = useSelector((state: RootState) => state.auth);

  let { productId } = useParams()
  const [product, setProduct] = useState<any>(null)
  const [productImageDetail, setProductImageDetail] = useState<any>([])
  const [isLoadig, setIsLoading] = useState(true)


  const [amount, setAmount] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      if (productId) {
        try {
          const data = await getProduct(parseInt(productId)) as Product
          setProduct(data)
          setIsLoading(false)
          setProductImageDetail(data.imageDetail)
        } catch (error) {
          throw (error)
        }
      }
    };

    fetchData();
  }, [productId])

  const handleValidation = () => {
    if (selectedSize === '') {
      toast.error("Pleace select size !", toastOption);
      return false;
    }
  }

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login')
    } else if (handleValidation() !== false) {
      setAmount(1)
      setSelectedSize('')
      toast.success("Add to cart now", toastOption);
      dispatch(addToCart({ ...product, quantity: amount, size: selectedSize }));
    }
  }

  const handleChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value))
  }

  const handleSizeChange = (size: string) => {
    setSelectedSize(size)
  }

  return (
    <>
      {isLoadig ? <Loading /> :
        <div className='w-2/3 m-auto pt-16 text-black'>
          <div className='flex gap-3 py-5'>
            <div className='w-1/2 flex flex-col justify-center'>
              <div>
                <img
                  src={product.image}
                  alt=""
                  className='w-96 h-96 object-cover'
                />
              </div>
              <div className='flex gap-2 mt-2'>
                {
                  productImageDetail.map((item: string, index: number) =>
                    <div key={index}>
                      <img src={item} alt="" />
                    </div>
                  )
                }
              </div>
            </div>
            <div className='w-1/2 text-2xl flex flex-col gap-3'>
              <div>
                <p className=''>{product.name}</p>
              </div>
              <div className=' bg-gray-200 p-1'>
                <p className=''> ฿ {product.price} .-</p>
              </div>
              <div className='text-xl'>
                <p>{product.description}</p>
              </div>
              <div className='flex items-center gap-2 text-lg'>
                <p className='w-20'>size</p>
                <button
                  onClick={() => handleSizeChange('M')}
                  className={`w-20 border hover:bg-black hover:text-white ${selectedSize === 'M' ? 'bg-black text-white' : ''}`}
                >
                  M
                </button>
                <button
                  onClick={() => handleSizeChange('L')}
                  className={`w-20 border hover:bg-black hover:text-white ${selectedSize === 'L' ? 'bg-black text-white' : ''}`}
                >
                  L
                </button>
                <button
                  onClick={() => handleSizeChange('XL')}
                  className={`w-20 border hover:bg-black hover:text-white ${selectedSize === 'XL' ? 'bg-black text-white' : ''}`}
                >
                  XL
                </button>
                <button
                  onClick={() => handleSizeChange('XXL')}
                  className={`w-20 border hover:bg-black hover:text-white ${selectedSize === 'XXL' ? 'bg-black text-white' : ''}`}
                >
                  XXL
                </button>
              </div>

              <div className='flex items-center text-lg'>
                <p className='w-20'>amount</p>
                <button
                  className='border p-1 w-7'
                  onClick={() => setAmount(amount - 1)}
                >
                  -
                </button>
                <input
                  type="text"
                  className='border p-1 text-center w-16'
                  value={amount}
                  onChange={handleChang}
                />
                <button
                  className='border p-1 w-7'
                  onClick={() => setAmount(amount + 1)}
                >
                  +
                </button>

                <p className='text-gray-500 text-lg pl-5'>There are {product.stock} products in total. </p>
              </div>

              <div className='text-lg my-10'>
                <button
                  onClick={handleAddToCart}
                  className='p-1 border'
                >
                  <BiCartAdd size={30} /> Add
                </button>
              </div>

            </div>
          </div>
          <ToastContainer />
        </div>
      }
    </>
  )
}

export default ProductDetail