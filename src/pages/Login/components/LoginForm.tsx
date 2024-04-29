import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import Swal from "sweetalert2"

const LoginForm = ({setUser}) => {
    const handleClick = () => {
        const user: {isLogged: boolean} | null = null;
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Usuario o contraseña incorrectos',
            })
        }
    }

    return (
        <>
            <div className="w-10 col-offset-1 md:w-6 md:col-offset-3 px-3 py-5 text-center bg-white border-round-lg shadow-5">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Usuario" />
                </div>
                <div className="p-inputgroup mt-3">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-lock"></i>
                    </span>
                    <Password placeholder="Contraseña" />
                </div>
                <Button
                    className="mt-3"
                    label="Registrar E/S"
                    onClick={handleClick}
                    raised
                />
            </div>
        </>
    )
}

export default LoginForm