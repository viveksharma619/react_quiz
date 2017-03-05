import React, {Component} from 'react';
import Questionslist from './quiz/Questionlist.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Resultbox from './quiz/Resultbox.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            questions:[
                {
                    id : 1,
                    text :'What is your name?',
                    choices : [
                        {
                            id : 'a',
                            text : 'John'
                        },
                        {
                            id : 'b',
                            text : 'Tony'
                        },
                        {
                            id : 'c',
                            text : 'Skully'
                        },
                        {
                            id : 'd',
                            text : 'Steve'
                        }

                    ],
                    correctAnswer : 'b'
                },
                {
                    id : 2,
                    text :'What is your fav color?',
                    choices : [
                        {
                            id : 'a',
                            text : 'Red'
                        },
                        {
                            id : 'b',
                            text : 'Black'
                        },
                        {
                            id : 'c',
                            text : 'Green'
                        },
                        {
                            id : 'd',
                            text : 'Blue'
                        }

                    ],
                    correctAnswer : 'c'
                },
                {
                    id : 3,
                    text :'What is your fav car?',
                    choices : [
                        {
                            id : 'a',
                            text : 'Suzuki'
                        },
                        {
                            id : 'b',
                            text : 'Nisaan'
                        },
                        {
                            id : 'c',
                            text : 'Honda'
                        },
                        {
                            id : 'd',
                            text : 'BMW'
                        }

                    ],
                    correctAnswer : 'd'
                },
                {
                    id : 4,
                    text :'What is your fav bike?',
                    choices : [
                        {
                            id : 'a',
                            text : 'Ducati'
                        },
                        {
                            id : 'b',
                            text : 'Honda'
                        },
                        {
                            id : 'c',
                            text : 'Hero'
                        },
                        {
                            id : 'd',
                            text : 'Navi'
                        }

                    ],
                    correctAnswer : 'a'
                }
            ],
            score : 0,
            current : 1
        }
    }
    setCurrent(current){
        this.setState({current});
    }
    setScore(score){
        this.setState({score});
    }
    render(){
        if(this.state.current > this.state.questions.length){
            var displayBox = <Resultbox {...this.state} />
        }
        else{
            var displayBox = <Scorebox {...this.state}/>
        }
        return(
            <div>
                {displayBox}
                <Questionslist {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
            </div>
        )
    }
}
export default App;