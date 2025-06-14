import React, { useContext, useState } from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import MyContext from '../../context/MyContext'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth, fireDB} from '../../firebase/FirebaseConfig'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import Loader from '../ui/loader/Loader'


const SignupForm = () => {
     console.log(auth)
    const context = useContext(MyContext);
    const {loading, setLoading} = context;
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('');

     const signup = async() => {
         if(name === "" || email ==="" || password ==="")   {
            return toast.error("All fileds are requird");
         } 

         setLoading(true)
        
        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);
             const  user = {
                name: name ,
                uid : users.user.uid,
                email: users.user.email,
                time : Timestamp.now()
             }
             const userRefrence  = collection(fireDB, "user");
             await addDoc(userRefrence , user)
            toast.success("Signup Success")
             setName("")
             setEmail("");
             setPassword("");
             setLoading(false)

            
        } catch (error) {
            console.log("Signup Failed" , error)
            setLoading(false)
        }

     }
  return (
      <div className=' flex justify-center items-center h-screen'>
            {
                loading && (<Loader />)
            }
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'
                        onClick={signup}
                        >
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
  )
}

export default SignupForm