import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"

const LoginForm = () => {
  return (
    <div className="col">
        <div className="card">
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
                className="mt-5"
                label="Regístrate"
                raised
            />
        </div>
    </div>
  )
}

export default LoginForm