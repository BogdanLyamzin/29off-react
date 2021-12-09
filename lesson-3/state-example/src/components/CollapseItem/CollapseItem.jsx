import { Component } from "react";

class CollapseItem extends Component {

    state = {
        isOpen: false
    }

    handleClick = ()=> {
        this.setState({isOpen: true})
    }

    // constructor(props){
    //     super(props);

    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick(){
    //     console.log(this.state);
    // }

    render(){
        const {title, content} = this.props;
        const {isOpen} = this.state;
        const {handleClick} = this;
        return (
            <div className="collapse">
                <p className="collapse-title" onClick={handleClick}>{title}</p>
                {isOpen && <p className="collapse-content">{content}</p>}
            </div>
        )
    }
}

export default CollapseItem