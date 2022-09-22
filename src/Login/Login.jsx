import './Login.scss'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <div className='Login-Container'>
                <div className='Login-Container-Logo'>
                    <div className='Login-Container-Logo-Img'>

                    </div>
                </div>
                <div className='Login-Container-Form'>
                    <div className='Login-Container-Form-Container'>
                        <div className='Login-Container-Form-Container-Title'>
                            <div className='Login-Container-Form-Container-Title-Login'>
                                <h1>LOGIN</h1>
                            </div>
                        </div>
                        <div className='Login-Container-Form-Container-User'>
                            <input type='text' className='Login-Container-Form-Container-Name' placeholder='Username' />
                            <input type='text' className='Login-Container-Form-Container-Pasword' placeholder='Pasword' />
                        </div>
                        <div className='Login-Container-Form-Container-Login-In'>
                            <div className='Login-Container-Form-Container-Login-In-Container'>
                                <Link to='/menu'>
                                    <button className='Login-Container-Form-Container-Login-In-Button'>
                                        Log In
                                    </button>
                                </Link>

                                <p>¿Has Olvidado tu contraseña?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;