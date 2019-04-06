import React, {Component} from 'react';
import Button from './Button';
import '../App.css';
// import { Button } from 'reactstrap';





class App extends Component {
    render(){
        return(
            <div>
                <div className="road">
                <p className="title">Find Your Trip Partner</p>
                <p className="introduction">This website will help you find a person who is planning the same path as you.</p>
                {/* <Button color="secondary" size="lg">Large Button</Button> */}
                <Button/>
            
                </div>
            </div>

        );
    }
}

export default App;