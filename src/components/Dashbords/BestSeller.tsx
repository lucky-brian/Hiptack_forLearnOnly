import React, { useRef } from 'react';
import { Product } from '../../data/Products';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi'

interface ProductProps {
    products: Product[];
}

const BestSeller: React.FC<ProductProps> = ({ products }) => {
    const navigate = useNavigate()
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -200,
                behavior: 'smooth',
            })
        }
    }

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 200,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className='py-10 w-2/3 m-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-3xl font-black uppercase'>Best Seller</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <button
                        onClick={scrollLeft}
                        className='p-1 bg-gray-200 hover:bg-gray-300 rounded-full'
                    >
                        <BiChevronLeft size={30} />
                    </button>
                    <button
                        onClick={scrollRight}
                        className='p-1 bg-gray-200 hover:bg-gray-300 rounded-full'

                    >
                        <BiChevronRight size={30} />
                    </button>
                </div>

            </div>
            <div className="overflow-hidden py-5" ref={carouselRef}>
                <div className="flex gap-3" >
                    {products.map((product) => (
                        <div
                            onClick={() => navigate(`/product/detail/${product.id}`)}
                            key={product.id}
                            className="flex-shrink-0 w-64 transition-opacity duration-300 rounded-md hover:cursor-pointer border hover:border-black">
                            <img src={product.image} alt={product.name} className="w-full h-70 object-cover rounded-md" />
                            <div className=' relative'>
                                <div className='absolute bottom-1 left-1 text-white flex gap-2'>
                                    <BiShoppingBag size={25} /> <p>{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
