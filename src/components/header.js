import { useState } from "react";
import "../styles/header.css"

function Header() {

    // theme
    let [isDark, setIsDark] = useState(false)
    let themeIconColor = isDark ? "blueViolet" : "#757575"
    let theme_mode = isDark ? "light_mode" : "dark_mode"
    function toggleTheme() {
        if(isDark){
            setIsDark(false)
            let root = document.querySelector(":root")
            root.style.setProperty('--body-color', '#fff')
            root.style.setProperty('--webname-color', '#000')
            root.style.setProperty('--icon-background-color', '#bdbbbb')
        }
        else{
            setIsDark(true)
            let root = document.querySelector(":root")
            root.style.setProperty('--body-color', '#0F0E0E')
            root.style.setProperty('--webname-color', '#fff')
            root.style.setProperty('--icon-background-color', '#2c2c2c')
        }
    }


    return ( 
        <header>
          <div className="row options">
            <h1>Dictionary<span>.</span></h1>
            <i style={{color : themeIconColor}} onClick = {toggleTheme} className="material-icons">{theme_mode}e</i>
          </div>
          <div className="row"></div>
        </header>
     );
}

export default Header;