
import { Navigate, useNavigate } from 'react-router-dom';
import { Alert, CloseButton } from 'react-bootstrap';


export default function Auth(props) {

    const isLoggedIn = false;
    const navigate = useNavigate();

    const variant = 'danger';

    // if(!isLoggedIn){
    //     // alert('Login error. Please try again!');
    //     navigate('/');
    // }

    return <>
        {
            isLoggedIn ? props.children :
            <div>
                <Alert key={variant} variant={variant}>
                    Login error. Please try again!
                    <CloseButton onClick={()=>{navigate('/')}} variant={variant} >
                    </CloseButton>
                </Alert>
            </div>
        }
        
    </>
}
