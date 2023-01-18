
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert, CloseButton } from 'react-bootstrap';


export default function Auth(props) {

    const isLoggedIn = false;
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const variant = 'danger';

    // if(!isLoggedIn){
    //     // alert('Login error. Please try again!');
    //     navigate('/');
    // }
    return props.children
    // return <>
    //     {
    //         location.state !== null ? props.children :
    //         <div>
    //             <Alert key={variant} variant={variant}>
    //                 Login error. Please try again!
    //                 <CloseButton onClick={()=>{navigate('/')}} variant='white' >
    //                 </CloseButton>
    //             </Alert>
    //         </div>
    //     }
        
    // </>
}
