import React, {Component} from 'react';
//class component
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state= {term: ''}
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    type="text" 
                    name="term"
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value)}
                />                
            </div>
        );
    };

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;