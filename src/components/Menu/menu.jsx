import "./menu.css"
import MenuItem from "../MenuItem/menu-item";

function Menu() {
    return(
    <header className="menu-wrapper">
        <nav>
            <ul className="menu">
                <MenuItem
                    text={'Home'}
                    link="/"
                />

                <MenuItem
                    text={'Personajes'}
                    link="/personajes"
                />

                <MenuItem
                    text={'Episodios'}
                    link="/episodios"
                />

                <MenuItem
                    text={'Citas'}
                    link="/citas"
                />
            </ul>
        </nav>
  </header>)
}


export default Menu;
