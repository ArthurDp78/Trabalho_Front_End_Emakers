import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css';  


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbarn'>
      <button className="imagembotaoN"><img src='/src/imgs/imagem2.png' className='fotoN'></img></button>

      <div className={`barraclicksN ${isMenuOpen ? "show" : ""}`}>
        <a href="/Lancamentos">Lançamentos</a>
        <a href="/popular">Populares</a>
        <a href="/Generos">Gêneros</a>
        <a href="/Promocoes">Promoções</a>
        <a href="/account">Conta</a>
      </div>

      <div className={`searchN ${isMenuOpen ? "hidden" : ""}`}>
        <input type="search" placeholder="Pesquisar..." />
        <SearchIcon />
      </div>

      <div className="hamburgerN" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div className="boxofcartN">
        <button className="carrinhoN"><ShoppingCartIcon /></button>
      </div> 
    </div>
  );
}

export default Navbar;
