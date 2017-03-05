import React,{Component} from 'react';
class Scorebox extends Component{
    render(){
        return(
            <div className="well">
               <p>
               Question : {this.props.current} out of {this.props.questions.length}
               </p>
                <p>
                Score : {this.props.score}
                </p>
            </div>
        )
    }
}
export default Scorebox;