import { MegaMenu } from "primereact/megamenu"

const menuItems: {label: string, icon: string}[] = [{
        label: 'Historial',
        icon: 'pi pi-fw pi-history',
    }, {
        label: 'Faltas',
        icon: 'pi pi-fw pi-bell',
    }, {
        label: 'Salir',
        icon: 'pi pi-fw pi-power-off',
}]
const Menu = () => {
  return (
    <>
        <div className="flex justify-content-center card mx-2 ">
            <MegaMenu model={menuItems} />
        </div>
    </>
  )
}

export default Menu