import React from 'react'
import ReactDOM from 'react-dom'
import StartUp from './StartUp'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router';
const app = document.getElementById('app')
//console.log('sdddss')
//const store=storefn()

//LATER USE
//<Route path="/AlarmRank" component={AlarmCodeRank} />

const routes = <Route>
        <Route path="/" component={StartUp} /> 
      </Route>
ReactDOM.render(
    
        <Router history={hashHistory}>
            {routes}
        </Router>,app); 
