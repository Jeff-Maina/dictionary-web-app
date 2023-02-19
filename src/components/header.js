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
            root.style.setProperty('--webname-color', '#2e2e2e')
            root.style.setProperty('--icon-background-color', '#bdbbbb')
            root.style.setProperty('--input-background-color', '#eeeeee')
            root.style.setProperty('--input-text-color', '#000')
        }
        else{
            setIsDark(true)
            let root = document.querySelector(":root")
            root.style.setProperty('--body-color', '#0F0E0E')
            root.style.setProperty('--webname-color', '#f7f7f7')
            root.style.setProperty('--icon-background-color', '#2c2c2c')
            root.style.setProperty('--input-background-color', '#1b1919')
            root.style.setProperty('--input-text-color', '#777678')
        }
    }


    return ( 
        <header>
          <div className="row options">
            <h1>&sigma;<span>.</span></h1>
            <i style={{color : themeIconColor}} onClick = {toggleTheme} className="material-icons">{theme_mode}e</i>
          </div>
          <div className="row input">
            <input type="search" placeholder = "Search"></input>
            <i className="material-symbols-outlined">search</i>
          </div>
        </header>
     );
}

export default Header;