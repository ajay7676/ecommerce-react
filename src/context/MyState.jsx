import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { addDoc, collection, onSnapshot, orderBy, query, QuerySnapshot, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../firebase/FirebaseConfig';


const MyState = (props) => {
   const [mode , setMode] = useState("light");
   const [loading, setLoading] = useState(false)
   const toggleMode = () => {
       if(mode === "light"){
          setMode("dark");
          document.body.style.backgroundColor ="rgb(17, 24, 39)"
       }else{
         setMode('light')
         document.body.style.backgroundColor = "#fff"
       }
   }

   const [products , setProducts] = useState({
     title: null,
     price: null,
    imageUrl: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
   })
    console.log("products" , products)

  // Addd Product Section
   const handleaddProduct = async() =>{
    
    if (products.title == "" || products.price == "" || products.imageUrl == "" || products.category == "" || products.description == "") {
      return toast.error('Please fill all fields')
    }
    setLoading(true);
     try {
          const productRef = collection(fireDB, "products")
          await addDoc(productRef , products );
          toast.success("Product Add successfully")
          getProduct();
          setLoading(false)
      
     } catch (error) {
       console.log(error)
      
     }

   }
   // get product data section
    const[product,setProduct]= useState([]);

    const getProduct = async () => {
      setLoading(true)
      try{
        const q = query(collection(fireDB,'products'), orderBy('time'))
        const data = onSnapshot(q , (QuerySnapshot) => {
          let productArray = [];
          QuerySnapshot.forEach((doc) => {

            productArray.push({...doc.data() , id: doc.id})
          })
          setProduct(productArray)
          setLoading(false)

        });
        return () => data;
      }catch(error){
         console.log(error);
         setLoading(false)
      }

    }
    useEffect(() => {
       getProduct();
    } , [])
  return (
    <MyContext.Provider value={{mode ,toggleMode , loading , setLoading , products , setProducts , handleaddProduct ,getProduct , product , setProduct}} >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState