import ittuxLogo from '../assets/img/ittux-logo.png'

const Header = () => {
  return (
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
  )
}

export default Header