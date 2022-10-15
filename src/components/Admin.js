import { useState } from "react";
function Admin(){

    const [info, setInfo] = useState(true);
    const handleFunc = () => {
        setInfo(!info)
    }

    return(
        <>
        <div className="Admin">
            <div className="categories">
                <div className="cat_buttons">
                    <button onClick={handleFunc}>MALUMOTLAR</button>
                </div>
                <div className="cat_buttons">
                    <button>TRENDING</button>
                </div>
            </div>
            <div className={info ? "table_1" : "table_1 active"}>
                <table border={1}>
                    <thead>
                        <tr>
                            <th colSpan={4}>Products</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan={4}>id</th>
                        </tr>
                        <tr>
                            <td>img</td>
                            <td>par</td>
                            <td>span</td>
                            <td>price</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="admin_input">
                <div className="inputs">
                    <input type="number" placeholder="id"/>
                    <input type="file"/>
                    <input type="text" placeholder="par"/>
                    <input type="text" placeholder="span"/>
                    <input type="text" placeholder="price"/>
                    <button>add</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Admin;