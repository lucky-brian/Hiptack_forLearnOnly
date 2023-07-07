import { useState, useEffect } from 'react'
import collection1 from '../../data/images/callection/1.png'
import collection2 from '../../data/images/callection/2.png'
import { products } from '../../data/Products'
import CollecitonItem from './CollectionItem'

const Collection = () => {

    const [blackCollection, setBlackCollection] = useState<any>(null);
    const [whiteCollection, setWhiteCollection] = useState<any>(null);

    useEffect(() => {
        getBlackCollection()
        getWhiteCollection()
    }, [])

    const getBlackCollection = () => {
        const data = products.filter(product => product.collection === 'black')
        setBlackCollection(data)
    }

    const getWhiteCollection = () => {
        const data = products.filter(product => product.collection === 'white')
        setWhiteCollection(data)
    }

    return (
        <div className=' w-2/3 m-auto flex justify-center mt-16'>
            <div>
                <div className='flex justify-center items-center py-24 bg-black relative rounded-xl'>
                    <div className=' absolute left-10 bottom-0'>
                        <img
                            src={collection1} alt=""
                            className=' w-72'
                        />
                    </div>
                    <div className='px-10 relative'>
                        <div className='text-white'>
                            <p className='uppercase text-6xl font-black'>Black Collection</p>
                        </div>
                    </div>
                </div>

                <div className='py-10'>
                    <CollecitonItem products={blackCollection} />
                </div>


                <div className='flex justify-center items-center py-24 bg-black relative rounded-xl mt-20'>
                    <div className=' absolute right-10 bottom-0'>
                        <img
                            src={collection2} alt=""
                            className=' w-72'
                        />
                    </div>
                    <div className='px-10 relative'>
                        <div className='text-white'>
                            <p className='uppercase text-6xl font-black'>White Collection</p>
                        </div>
                    </div>
                </div>

                <div className='py-10'>
                    <CollecitonItem products={whiteCollection} />
                </div>




            </div>
        </div>
    )
}

export default Collection