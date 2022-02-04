import { icons } from 'react-icons'
import './links.css'
import { FiArrowLeft, Filink, FiTrash } from 'react-icons/fi'

export default function Links(){
    return(
      <div className='"link-container'>
        <div className='links-header'>
          <FiArrowLeft size={38} color="#FFF" />
          <h1> Meus Links</h1>
        </div>

        <div className='Links-item'>
          <button className="link">
            <Filink size={18} color="#FFF" />
            httpS://sujeitoprogramador.com
          </button>
          <button>
            <FiTrash size={24} color="#FF5454"/>
          </button>
        </div>

      </div>
    )
  }
  