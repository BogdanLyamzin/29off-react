import { useContext } from "react";

import {context} from "../../LangContext";

export const useLang = ()=> {
    const {lang, switchLang} = useContext(context);

    return {lang, switchLang};
}