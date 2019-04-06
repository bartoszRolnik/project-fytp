import React, {Component} from 'react';
import Button from './Button';
import '../App.css';
import FormAboutYou from './FormAboutYou';
import NextButton from './NextButton'
// import { Button } from 'reactstrap';





class App extends Component {
    render(){
        return(
            <div  className="container">
                <div id="section2">
                
                    <p className="titleSection2">Something about you</p>
                    <FormAboutYou/>
                    <NextButton/>
                </div>
                   
            </div>

        );
    }
}

export default App;