import React from "react";
import { Product } from '../../data/Products';

interface ProductSliderProps {
    products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <div className="product-slider overflow-auto w-full">
            <div className="flex justify-center items-center space-x-4 overflow-auto">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className={`${index === currentIndex ? "active" : ""} w-64 transition-opacity duration-300 shadow-lg`}
                    >
                        <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
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
        </div>
    );
};

export default ProductSlider;
