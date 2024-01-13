const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Kafi Sinema</h1>
            <div className="links">
                <a href="/">Ana Sayfa</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Film Ekle</a>
            </div>
        </nav>
     );
}
 
export default Navbar;