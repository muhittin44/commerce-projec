import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "../css/Product.css"
import { addToBasket } from "../redux/slices/basketSlice";


function ProductDetails() {
    const {id} = useParams();
    const {products , selectedProduct} = useSelector((store)=>store.product)
     
    const { price , image , title , description  } = selectedProduct;
    
    const dispatch = useDispatch(); 

    const [count , setCount] = useState(0); 

    const increment = () =>{
        setCount(count + 1)
    } 

    const decrement = () => {
        setCount(count ? count -1 : 0)
    }

    const addBasket = () =>{
        const payload = {
            id ,
            price, 
            image,
            title,
            description,
            count

        } 
        dispatch(addToBasket(payload));
    } 
    
    useEffect(()=>{
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product)=>{
           if(product.id==id){
            dispatch(setSelectedProduct(product));
           }
        })
    }
  return (
    <div style={{marginTop:"50px" , display:"flex" , flexDirection:"row" ,  justifyContent:"center"}}>
        <div style={{marginRight:"40px"}}><img src={image} className="image"/></div>
        <div>
            <h1 style={{fontFamily:"arial"}}>{title}</h1>
            <p style={{fontFamily:"arial" , fontSize:"20px"}}>{description}</p>
            <h1 style={{fontSize:"50px" , fontFamily:"arial" , fontWeight:"bold" , color:"red" }}>{price}₺</h1>
            

            <div style={{display:"flex" , alignItems:"center"}} >
            <CiCirclePlus onClick={increment} style={{fontSize:"40px" , marginLeft:"7px" , cursor:"pointer"}}/> <span style={{fontSize:"35px" , marginRight:"5px"}} >{count}</span> <CiCircleMinus  onClick={decrement} style={{fontSize:"40px",  cursor:"pointer"}}/>
           </div> 

           <div>
            <button onClick={addBasket} style={{marginTop:"25px" , border:"none" , padding:"10px" , backgroundColor:"rgb(185, 83, 91)", color:"#fff" ,borderRadius:"5px" ,  cursor:"pointer" }}>Sepete Ekle</button>
           </div>
        
        
        </div>

        
     
    </div>
  )
}



export default ProductDetails
