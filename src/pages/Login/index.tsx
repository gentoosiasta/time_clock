import Timer from './components/Timer'
import LoginForm from './components/LoginForm'
import Weather from './components/Weather'
import ittuxLogo from '../../assets/img/ittux-logo.png'
import "../../styles/index.css"


const Login = () => {    
    return (
        <div className="">
            <header className="grid bg-white mx-2 mt-3 border-round-lg shadow-5">
                <div className="col">
                    <img src={ittuxLogo} width={75} height={75} />
                </div>
                <div className="col align-content-center text-right">
                    <span className='text-xl font-bold text-primary'>
                        TecCHECK
                    </span>
                    <br />
                    <span className='text-sm text-primary'>
                        Instituto Tecnológico de Tuxtepec
                    </span>
                </div>
            </header>
            <div className="grid my-3">
                <div className="col">
                    <Timer />
                </div>
            </div>
            <div className="grid mb-5">
                <div className="col">
                    <Weather />
                </div>
            </div>
            <div className="grid ">
                <div className="col">
                    <LoginForm />
                </div>
            </div>
            <footer
                className="grid justify-content-center text-white"
                style={{ position: 'absolute', bottom: 0, width: '100%' }}
            >
                <span className="text-center text-sm">&copy; Copyright 2024</span>
            </footer>
        </div>
    )
}

export default Login