import { useState, ChangeEvent, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { toastOption } from "../../toastOption/toastOption"
import { useNavigate, Link } from 'react-router-dom'
import Modal from "../../components/Dashbords/Modal"
import signin from "../../data/Users"
import { useDispatch } from "react-redux"
import { login } from "../../store/slices/authSlice"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }


  const handleValidation = () => {
    if (username === '' || password === '') {
      toast.error(
        "Username and password is required.", toastOption);
      return false;
    }
    return true;
  }

  useEffect(() => {
    if (localStorage.getItem('react-app')) {
      navigate('/')
    }
  })

  // const handleSubmit = async () => {
  //   event?.preventDefault();
  //   if (handleValidation()) {
  //     const { data } = await axios.post(loginRoute, {
  //       username, password
  //     });
  //     if (data.status === false) {
  //       toast.error('Incorrent username or password', toastOption);
  //     }
  //     if (data.status === true) {
  //       dispatch(login(data.user))
  //       localStorage.setItem('react-app', JSON.stringify(data.user))
  //       navigate('/')
  //     }
  //   }
  // }

  const handleSubmitLogin = async () => {
    event?.preventDefault();
    if (handleValidation()) {
      const data = await signin(username,password)
      if (data.status === false) {
        toast.error(
          "Username or password is Incorrect.", toastOption);
          return;
      }
      console.log(data)

      dispatch(login(data))
      localStorage.setItem('react-app', JSON.stringify(data))
      navigate('/')
    }
  }


  const handleChangUsernameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handleChangPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-black w-96 p-5 py-10 flex flex-col rounded-xl ">
          <div>
            <p className="text-white text-2xl font-black text-center py-2">SIGN IN</p>
          </div>
          <form onSubmit={() => handleSubmitLogin()}>
            <div className="text-lg">
              <label htmlFor="username" className="text-white">Username</label>
              <input
                type="text"
                name="username"
                onChange={handleChangUsernameInput}
                placeholder="Username"
                className="p-1 w-full rounded-md"
              />
            </div>
            <div className="text-lg">
              <label htmlFor="password" className="text-white">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChangPasswordInput}
                placeholder="Password"
                className="p-1 w-full rounded-md"
              />
              <p
                className="text-white text-sm text-end hover:underline cursor-pointer"
                onClick={handleShowModal}
              >
                Forgot your password?
              </p>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="bg-white p-2 rounded-md items-center px-4 hover:bg-gray-200">Sigin</button>
            </div>
          </form>
          <div>
            <p className="text-white text-center mt-1">if u don't have account <Link to={'/register'}> <span className="text-white hover:text-gray-300 underline cursor-pointer">Sign up</span></Link></p>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} title='Forgot your password?' msg="Relex and try to remember your password." />
      <ToastContainer />
    </div>
  )
}

export default Login