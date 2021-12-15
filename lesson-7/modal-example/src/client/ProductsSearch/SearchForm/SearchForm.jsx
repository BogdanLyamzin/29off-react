import { Component } from "react";

class SearchForm extends Component {
    state = {
        query: ""
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset()
    }

    reset(){
        this.setState({query: ""})
    }

    render(){
        const {query} = this.state;
        const {handleChange, handleSubmit} = this;

        return (
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="query" value={query} type="text" placeholder="Product name" required />
                <button type="submit">Поиск</button>
            </form>
        )
    }
}

export default SearchForm;