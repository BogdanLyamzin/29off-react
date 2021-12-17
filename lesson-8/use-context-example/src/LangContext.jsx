import {useState} from "react";
import { createContext } from 'react';

export const context = createContext("ru");

const LangContext = ({children})=> {
    const [lang, setLang] = useState("ru");
    const switchLang = ()=> {
        const newLang = lang === "ru" ? "ua" : "ru";
        setLang(newLang);
    }
    return (
        <context.Provider value={{lang, switchLang}}>
            {children}
        </context.Provider>
    )
}

export default LangContext;