import React from 'react';
import ReactDOM from 'react-dom';
import StartUpPage from './StartUp-Page/components/StartUpPage.js'
import Menu from './Menu.js';
export default class StartUp extends React.Component {
    
    constructor(){
        super();
    }
 
    render(){
        return (
            <div>
                <Menu/>
                <StartUpPage/>
            </div>
            )
    }
}


    
