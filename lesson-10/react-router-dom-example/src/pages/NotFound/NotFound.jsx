import {Link} from "react-router-dom";

const NotFound = ()=> {
    return (
        <div>
            <p>Страница не найдена</p>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default NotFound;