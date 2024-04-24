import Timer from './components/Timer'
import ittuxLogo from '../../assets/img/ittux-logo.png'
import LoginForm from './components/LoginForm'

const Login = () => {
    return (
        <div className='container text-center'>
            <div className="row flex justify-content-between flex-wrap">
                <h2>Checador</h2>
                <img src={ittuxLogo} width={75} height={75} />
            </div>
            <div className="row">
                <Timer />
            </div>
            <div className="row">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login