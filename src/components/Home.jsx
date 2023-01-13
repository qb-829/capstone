
import LoginForm from './sub-components/LoginForm';
import "./assets/styles/baselayout.css";
import Nav from '../components/sub-components/Nav';
import Footer from './sub-components/Footer';

export default function Home() {
    return <>
        <div className='background'>
            <Nav />
            <div className='pb-5'>
                <LoginForm />
            </div>
            <Footer />
        </div>
    </>
}

  