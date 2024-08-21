import AngolaPessoas from './AngolaPessoas'
import './Header.css'


function Header() {

    return (
  
      <div className='header-container'>
        
        <h1>INFORMAÇÕES SOBRE ANGOLA</h1>

        <h2>Bandeira da República de Angola</h2> 
        <img className="imagens-body" src="public/images/bandeira-angola.avif" alt="" />

        <AngolaPessoas/>
  
      </div>
  
    )
  }
  
  export default Header