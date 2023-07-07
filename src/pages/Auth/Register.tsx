import { useState, ChangeEvent, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { toastOption } from "../../toastOption/toastOption"
import axios from 'axios'
import { registerRoute } from "../../utils/APIRoute"
import { useDispatch } from "react-redux/es/exports"
import { login } from "../../store/slices/authSlice"

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleChangUsernameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handleChangPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const handleChangConfirmPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }
  const handleChangEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleValidation = () => {
    if (password !== confirmPassword) {
      toast.error('password and comfirm password should be same.',
        toastOption
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be grater than 3 characters",
        toastOption
      );
      return false;
    } else if (email === '') {
      toast.error(
        "Email is required",
        toastOption
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters",
        toastOption
      );
      return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    event?.preventDefault();
    if (handleValidation()) {
      const { data } = await axios.post(registerRoute, {
        username,
        password,
        email
      });
      if (data.status === false) {
        toast.error(data.mag, toastOption)
      }
      if (data.status === true) {
        dispatch(login(data.user))
        localStorage.setItem('react-app', JSON.stringify(data.user))
        navigate("/")
      }
    }
  }

  useEffect(() => {
    if (localStorage.getItem('react-app')) {
      navigate('/')
    }
  })


  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-black w-96 p-5 flex flex-col rounded-xl ">
          <div>
            <p className="text-white text-2xl font-black text-center py-2">SIGN UP</p>
          </div>
          <form onSubmit={() => handleSubmit()}>
            <div className="text-lg">
              <label htmlFor="username" className="text-white">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChangUsernameInput}
                className="p-1 w-full rounded-md"
              />
            </div>
            <div className="text-lg">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChangEmailInput}
                className="p-1 w-full rounded-md"
              />
            </div>
            <div className="text-lg">
              <label htmlFor="password" className="text-white">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChangPasswordInput}
                className="p-1 w-full rounded-md"
              />
            </div>
            <div className="text-lg">
              <label htmlFor="password" className="text-white">Confirm Password</label>
              <input
                type="password"
                name='confirmPassword'
                onChange={handleChangConfirmPasswordInput}
                placeholder="Confirm Password"
                className="p-1 w-full rounded-md"
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="bg-white p-2 rounded-md items-center px-4 hover:bg-gray-200 uppercase">Sign up</button>
            </div>
            <div>
              <p className="text-white text-center mt-1">if u have account <Link to={'/login'}> <span className="text-white hover:text-gray-300 underline cursor-pointer">Sign in</span></Link></p>
            </div>
          </form>
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Register