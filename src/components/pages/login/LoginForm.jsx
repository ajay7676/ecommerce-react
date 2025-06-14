import React, { useContext, useState } from 'react'
// import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import MyContext from '../../../context/MyContext'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../firebase/FirebaseConfig'
import { useNavigate } from 'react-router-dom';
import Loader from '../../ui/loader/Loader'



const LoginForm = () => {
    const context = useContext(MyContext);
     const {loading , setLoading} = context;
     const[email , setEmail] = useState("")
     const[password , setPassword] = useState("")
    const navigate = useNavigate();


     const handleLogin  =  async() =>{
         setLoading(true)
         if(email === "" || password ===""){
           return toast.error("All fileds are requird");
         }
         try {
               const result = await signInWithEmailAndPassword(auth, email, password);
                console.log(result)
                toast.success("Login Successfully")
                localStorage.setItem("ecommerce-token" , JSON.stringify(result))
                setLoading(false)
                navigate('/'); // Redirect to home page after successful login
            } catch (err) {
                toast.error("Login Failed")
                console.log(err)
                setLoading(false);
            }


     }
     
  return (
    <div className=' flex justify-center items-center h-screen'>
        {
            loading && (<Loader /> )
        }
        <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
            <div className="">
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
            </div>
            <div>
                <input type="email"
                    name='email'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className=' flex justify-center mb-3'>
                <button
                    className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'
                    onClick={handleLogin }
                    >
                    Login
                </button>
            </div>
            <div>
                <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
            </div>
        </div>
    </div>
  )
}

export default LoginForm