function Product(props) {
  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          if (svtObj.quantity === 0)
          <label className="stock bg-success">In Stock</label>
          <img src={props.svtObj.picture} alt="Laptop" />
        </div>
        <div className="product-card-body">
          <p className="product-brand">{props.svtObj.brand}</p>
          <h5 className="product-name">
            <a href=""> {props.svtObj.title} </a>
          </h5>
          <div>
            <span className="selling-price">${props.svtObj.price}</span>
          </div>
          <div>
            <span className="discounted-price">{props.svtObj.quantity}</span>
          </div>
          <div className="mt-2">
            <a href="" className="btn btn1">
              Add To Cart
            </a>
            <a href="" className="btn btn1">
              {" "}
              <i className="fa fa-heart"></i>{" "}
            </a>
            <a href="" className="btn btn1">
              {" "}
              View{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
