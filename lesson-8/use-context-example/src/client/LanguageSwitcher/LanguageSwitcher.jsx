import { useLang } from "../../shared/hooks";

import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
    const {lang, switchLang} = useLang();
    return (
        <div>
            <span onClick={switchLang} className={lang == "ru" ? styles.currentLang : styles.lang}>RU</span> 
            | 
            <span onClick={switchLang} className={lang == "ua" ? styles.currentLang : styles.lang}>UA</span>
        </div>
    )
}

export default LanguageSwitcher;