

import Carrinho from './Carrinho'
import './Header.css'
import Logo from './Logo'

function Header() {
  return (
    <div className='container-Header'>
      <Logo/>
      <input className='pesquisa' type="text" placeholder='O que você procura?' />
      <Carrinho/>
      
    </div>
  )
}

export default Header
