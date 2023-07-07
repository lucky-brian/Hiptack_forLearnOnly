import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store';
import { useNavigate, Link } from 'react-router-dom'
import { BiCategory, BiCart, BiHomeAlt2 } from 'react-icons/bi'
import { logout } from '../store/slices/authSlice';
import { login } from "../store/slices/authSlice";
import { useEffect } from 'react';


const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.auth.user);

    const logOut = () => {
        localStorage.clear()
        dispatch(logout())
        // window.location.reload();
        navigate('/')
    }

    useEffect(() => {
        const isUserLogin = async () => {
            if (localStorage.getItem('react-app')) {
                const user = await JSON.parse(localStorage.getItem('react-app') || '');
                dispatch(login(user));
            }
        }
        isUserLogin();
    }, [dispatch, navigate]);

    return (
        <div className="py-2 px-3 border-b m-auto flex justify-center items-center w-full bg-white fixed">
            <div className="m-auto w-2/3 flex justify-between items-center">
                <div className="Logo">
                    <div>
                        <p className="font-black text-2xl cursor-pointer" onClick={() => navigate('/')}>Hiptrack</p>
                    </div>
                </div>
                <div className="Router flex gap-3 items-center">
                    <div><Link to='/'><BiHomeAlt2 size={25} /></Link></div>
                    <div> <Link to='/product'> <BiCategory size={25} /> </Link></div>
                    <div> <Link to='/cart'><BiCart size={25} /></Link></div>
                </div>
                {
                    user ? (
                        <div className="profile">
                            <button
                                className="border border-black p-1 font-black"
                                onClick={() => logOut()}
                            >
                                LOGOUT
                            </button>
                        </div>
                    ) : (
                        <div className="profile">
                            <button
                                className="border border-black p-1 font-black hover:bg-black hover:text-white"
                                onClick={() => navigate('/login')}
                            >
                                SIGN IN
                            </button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Nav