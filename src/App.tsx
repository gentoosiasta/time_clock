import { useState } from "react"
import Login from "./pages/Login"
import Check from "./pages/Check"
import { IUser } from "./Interfaces/IUser"

function App() {
  const [user, setUser] = useState<IUser|null>({
    name: 'Julio',
    email: 'julio.ac@tuxtepec.tecnm.mx',
    gender: 'male',
    checkType: 'in',
    isLogged: true
  })  

    return (
      <>
        {user?.isLogged ? 
          <Check user={user} setUser={setUser} /> : 
          <Login setUser={setUser} />
        }
      </>
    )
}

export default App
