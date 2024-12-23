import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';

function ProductList() {
    
    const dispatch = useDispatch();
    const {products} = useSelector((store)=>store.product)
    console.log(products);

    useEffect(()=>{ // useeffect sayfa ilk yüklendiğinde çalışır.
        dispatch(getAllProducts());

    } , [])
  return (
    <div>
      
    </div>
  )
}

export default ProductList