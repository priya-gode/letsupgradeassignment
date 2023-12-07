import { useState } from "react";

function Product(props)
{
    let [available,setAvailable]=useState("yes")
    function isNotAvailable()
    {
        setAvailable("no");
    }
    return(
        <div className="product">
            <img className="imges" src={props.url} alt=""/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{available}</p>
            <button  className="btn"onClick={isNotAvailable}>click</button>

        </div>
    )
}

export default Product;