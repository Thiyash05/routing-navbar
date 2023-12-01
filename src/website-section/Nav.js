import React from "react";
import { Link } from "react-router-dom"

function Nav(){
    return(
        <div>
            <nav>
                <ul>
                    <h1>LITTLE SHOP</h1>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="product">Product</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
             </nav>

        </div>
    )
}
export default Nav;