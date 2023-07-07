import React from 'react'
import { Product } from '../../data/Products';
import { useNavigate } from 'react-router-dom';

interface ProductItemProps {
  products: Product[];
}

const ProductItem: React.FC<ProductItemProps> = ({ products }) => {
  const navigate = useNavigate()
  return (
    <div>
      {products && (
        <div className="grid grid-cols-4 max-xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/detail/${product.id}`)}
              className="w-60 shadow-lg mx-auto mb-5 border hover:border-black cursor-pointer"
            >
              <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
              <div className='p-2'>
                <div className='flex justify-between'>
                  <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                  <h3 className="text-lg font-bold mt-2">{product.price} .-</h3>
                </div>
                <p className="text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
      }

    </div>
  )
}

export default ProductItem