import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';


export default function Menu() {
    return (
        <div className='menu'>
            <a className="social" href='https://www.youtube.com/channel/UCe6CYSbp6_YpWPoCCQICsXQ'>
                <BsYoutube color='#fff' size={24} />
            </a>
            <a className="social" href='https://www.instagram.com/diegodsilva87/'>
                <BsInstagram color='#fff' size={24} />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}