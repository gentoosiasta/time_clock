import Header from "../../components/Header"
import { IUser } from "../../Interfaces/IUser"
import Menu from "./components/Menu"

const Check = ({user, setUser}: {user: IUser, setUser: (user: IUser) => void}) => {
  return (
    <div>
        <Header />
        <div className="grid mt-5">
            <div className="col text-center text-white">
                <h2>¡Hola {user.name}!</h2>
                <h3 className="my-5">Tu {user.checkType === "in" ? "entrada" : "salida"} se ha registrado<br />
                    <span className="text-teal-200 text-3xl">en tiempo</span><br />
                    a las<br /><span className="text-3xl">{new Date().toLocaleTimeString()}</span>.
                </h3>
            </div>
        </div>
        <footer className="grid" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <div className="col">
                <Menu />
            </div>
        </footer>
    </div>
  )
}

export default Check