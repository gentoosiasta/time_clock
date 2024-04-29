import Timer from './components/Timer'
import LoginForm from './components/LoginForm'
import Weather from './components/Weather'
import Header from '../../components/Header'
import "../../styles/index.css"


const Login = ({setUser}) => {    
    return (
        <div>
            <Header />
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
                    <LoginForm setUser={setUser} />
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