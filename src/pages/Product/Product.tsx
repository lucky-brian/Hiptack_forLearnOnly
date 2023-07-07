import banner from '../../data/images/Slice/banerx.png'
import ProductItem from '../../components/Products/ProductItem'
import { products } from '../../data/Products'


const Product = () => {
  return (
    <div className='w-2/3 m-auto pt-16 text-black'>
      <div className='flex justify-center'>
        <img src={banner} alt="" className='w-2/3' />
      </div>
      <div className='flex justify-between items-center py-5'>
        <div>
          <p className='text-xl'>All Product</p>
        </div>
        <div>
          <p>Sort by</p>
        </div>
      </div>
      <div>
        <ProductItem products={products} />
      </div>
    </div>
  );
};

export default Product;