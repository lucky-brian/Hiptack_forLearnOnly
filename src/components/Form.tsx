import { FC, ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction } from 'react'
import { SeriesProps } from '../interfaces/SeriesProps'

interface Props {
    seriesList: SeriesProps["seriesList"],
    setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>
}

const Form: FC<Props> = ({ seriesList, setSeriesList }) => {

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [cover, setCover] = useState('')

    const setNameinputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const setGenreinputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setGenre(e.target.value)
    }
    const setCoverinputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCover(e.target.value)
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (!name || !genre || !cover) {
            alert('เจ้าคือบ่กรอก');
            return;
        }

        const seriesData = { name, genre, cover };
        setSeriesList([...seriesList, seriesData]);
        setName('')
        setGenre('')
        setCover('')
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='m-5 p-5 bg-gray-200 rounded-xl'>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            value={name}
                            className='p-1 border rounded-md'
                            onChange={setNameinputHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">genre</label>
                        <input
                            type="text"
                            value={genre}
                            className='p-1 border rounded-md'
                            onChange={setGenreinputHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">cover</label>
                        <input
                            type="text"
                            value={cover}
                            className='p-1 border rounded-md'
                            onChange={setCoverinputHandler}
                        />
                    </div>
                </form>
                <button
                    onClick={handleClick}
                    className='bg-green-500 rounded-md p-1'>
                    add
                </button>
            </div>
        </div>
    )
}

export default Form