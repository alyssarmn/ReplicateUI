import Product from "./Product";
import seventeenAlbums from "./svtData";

function ProductList() {
  const svt = seventeenAlbums;
  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4">Our Products</h4>
          </div>
          {svt.map((svt) => (
            <Product svtObj={svt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
