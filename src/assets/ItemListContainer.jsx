const ItemListContainer = () => {
    return (
      <div className="item-list-container">
        <h2>Ofertas en telescopios Hokenn</h2>
        <ul className="itemList">
          <li className="Item1">
            <h3> Telescopio Hokenn H76900</h3>
            <img src="images/Telescopio H76900 Eq1 Hokenn.jpg" alt="" />
            <p>Precio: $155.000 </p>
            <h5>en 6 cuotas de $38.000</h5>
            <button> Comprar </button>
          </li>
          <li className="Item2">
            <h3> Telescopio Hokenn </h3>
            <img src="images/Telescopio Hokenn 1.jpg" alt="" />
            <p>Precio: $499.999 </p>
            <h5>En 6 cuotas de $120.000</h5>
            <button> Comprar </button>
          </li>
          <li className="Item3">
            <h3> Telescopio Hokenn HPR50360 </h3>
            <img src="images/TELESCOPIO HOKENN HPR50360.jpg" alt="" />
            <p>Precio: $203.000</p>
            <h5>Hasta 6 cuotas sin interes de $33.800</h5>
            <button> Comprar </button>
          </li>
          <li>
            <h3> Telescopio Hokenn H50080</h3>
            <img src="images/telescopio Hokenn H50080.webp" alt="" />
            <p> Precio: $408.000</p>
            <h5> En 6 cuotas de $83.000 </h5>
        <button> Comprar </button>            
          </li>
        </ul>
      </div>
    );
  }
  
  export default ItemListContainer;