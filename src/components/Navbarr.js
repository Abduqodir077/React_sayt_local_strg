function Navbarr(){
    return(
        <>
        <div className="Navbar">
        <div className="nav_chap">
            <p>Welcome to our online shop</p>
        </div>
        <div className="nav_ong">
            <select>
                <option value="">English (USD)</option>
                <option value="">Русский (RUS)</option>
                <option value="">O'zbek (UZB)</option>
            </select>
            <p>|</p>
            <a href="#">Login or Sign up</a>
        </div>
    </div>
        </>
    )
}

export default Navbarr;