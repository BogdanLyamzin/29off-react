import { useContext } from "react";

import {context} from "../../LangContext";

import LanguageSwitcher from "../LanguageSwitcher"

import styles from "./Navbar.module.css";

const Navbar = ()=> {
    const {lang} = useContext(context);

    return (
        <nav className={styles.navbar}>
            <a href="">Logo</a>
            <div>{lang === "ru"? "Главное меню": "Головне меню"}</div>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;