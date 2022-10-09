import { useState } from "react";
import sec3_1 from "../img/sec3_1.png";
import sec3_2 from "../img/sec3_2.png";
import sec3_3 from "../img/sec3_3.png";
import sec3_4 from "../img/sec3_4.png";
import sec3_5 from "../img/sec3_5.png";
import sec3_6 from "../img/sec3_6.png";
import sec3_7 from "../img/sec3_7.png";
import sec3_8 from "../img/sec3_8.png";

function Section_3(){

    let [malumot, setMalumot] = useState([
        {
            id: 1,
            img: sec3_1,
            par: "Chair",
            span: "Minimal LCD chair",
            price: "$180"
        },
        {
            id: 2,
            img: sec3_2,
            par: "Chair",
            span: "Minimal iconic chair",
            price: "$120"
        },
        {
            id: 3,
            img: sec3_3,
            par: "Chair",
            span: "Dining chairs",
            price: "$100"
        },
        {
            id: 4,
            img: sec3_4,
            par: "Chair",
            span: "Buskbo armchair ",
            price: "$130"
        },
        {
            id: 5,
            img: sec3_5,
            par: "Chair",
            span: "Minimal LCD chair",
            price: "$180"
        },
        {
            id: 6,
            img: sec3_6,
            par: "Chair",
            span: "Modern chairs",
            price: "$100"
        },
        {
            id: 7,
            img: sec3_7,
            par: "Chair",
            span: "Plastic dining chair",
            price: "$130"
        },
        {
            id: 8,
            img: sec3_8,
            par: "Chair",
            span: "Minimal Wood chair",
            price: "$180"
        },
    ]
    );

    return(
        <>
        <div className="Section_3">
            <span>TRENDING</span>
            <div className="sec3_links">
                <a href="#">Top Products</a>
                <a href="#">New Arrivals</a>
                <a href="#">Best Sellers</a>
            </div>
            <div className="sec3_products">
            {
                malumot.map((item) => {
                return(
                     <div className="sec3_product"  key={item.id}>
                    <img src={item.img} alt={item.img + ".png"} />
                    <p>{item.par}</p>
                    <span>{item.span}</span>
                    <b>{item.price}</b>
                    <button onClick={() => local()}>loc strg</button>
                     </div>
                );
            })
            }                   
            </div>

        </div>
        </>
    )
}

export default Section_3;