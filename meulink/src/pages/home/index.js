import { FiLink } from 'react-icons/fi';
import './home.css';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu';


export default function Home() {
  return (
    <div className="containter-home" >
      <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo" />
        <h1> Registrodelink</h1>
        <span>Cole seu link aqui para encurta-lo.</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="Cole seu link aqui"
          />
        </div>
 
          <button> Encurtar link</button>

      </div>

      <Menu/>

    </div>
  )
}
