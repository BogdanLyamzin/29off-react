import { useLang } from "../../shared/hooks";

import locale from "./locale.json";

const Main = ()=> {
    const {lang} = useLang();
    return (
        <div>
            {locale.title[lang]}
        </div>
    )
}

export default Main;