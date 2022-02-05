import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
import Container from './Container'

export default function Navbar(){
    return (

    <Container>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo projeto</Link>
    </nav>  
    </Container>
    )
}