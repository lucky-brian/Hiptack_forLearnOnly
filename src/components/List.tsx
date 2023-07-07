import { FC } from 'react'
import { SeriesProps } from '../interfaces/SeriesProps'

const List: FC<SeriesProps> = ({ seriesList }) => {
    return (
        <div className='w-2/3 m-auto'>
            <div className='flex gap-2'>
                {seriesList.map((series, index) => (
                    <div key={index} className='bg-gray-200 p-3 rounded-xl'>
                        <img src={series.cover} alt="series-cover" className='w-32' />
                        <p>{series.name}</p>
                        <p>{series.genre}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List