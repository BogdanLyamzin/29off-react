import {useState} from "react";

const CollapseItem = ({title, content}) => {
    const [state, setState] = useState(false);

    const handleClick = ()=> {
        setState(!state);
    }

    return (
        <div className="collapse">
            <p className="collapse-title" onClick={handleClick}>{title}</p>
            {state && <p className="collapse-content">{content}</p>}
        </div>
    )
}

export default CollapseItem