import React, {Component} from 'react';

class Resultbox extends Component{
    render(){
        return(
            <div className="well">
                <h1>Your score is {this.props.score}</h1>
                <hr/>
                <a href="/app" className="btn btn-danger">Take the quiz again.</a>
            </div>
        )
    }
}

export default Resultbox;