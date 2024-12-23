import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../css/Product.css"


function ProductDetails() {
    const {id} = useParams();
    const {products , selectedProduct} = useSelector((store)=>store.product)
     
    const { price , image , title , description  } = selectedProduct;
    
    const dispatch = useDispatch();
    
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
            <h1>{price}</h1>
        </div>
     
    </div>
  )
}

export default ProductDetails
