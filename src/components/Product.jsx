import "../css/Product.css"

function Product({product}) {
    const {id , price , image , title , description , } = product;
    console.log(product.price);
  return (
    <div className="card" >
      <img className="image" src={image}/>
      <div>
        <p style={{textAlign:"center" , height:"50px"}} >{title}</p>
        <h3 style={{textAlign:"center"}}>{price}₺</h3>
      </div>

      <div className="flex-row" >  
        <button className="detail-button">Ürün Detayına Git</button>
      </div>
    </div>
  )
}

export default Product
