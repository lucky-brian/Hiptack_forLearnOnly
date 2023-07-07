import React from 'react'
import { Product } from '../../data/Products';
import { useNavigate } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi'


interface ProductItemProps {
    products: Product[];
}

const CollecitonItem: React.FC<ProductItemProps> = ({ products }) => {
    const navigate = useNavigate()
    return (
        <div>
            {products && (
                <div className="grid grid-cols-4 max-xl:grid-cols-4 gap-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => navigate(`/product/detail/${product.id}`)}
                            className="w-60 mx-auto cursor-pointer border rounded-xl hover:border-black"
                        >
                            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-xl" />
                            <div className=' relative'>
                                <div className='absolute bottom-1 left-1 text-white flex gap-2'>
                                    <BiShoppingBag size={25} /> <p>{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }

        </div>
    )
}

export default CollecitonItem