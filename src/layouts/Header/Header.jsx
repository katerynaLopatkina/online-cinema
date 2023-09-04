import './Header.css';
import Logo from '../../components/logo';

function Header(){
    return(
        <div className='header fixed-container'>
            <Logo/>
        </div>
    );
}

export default Header;