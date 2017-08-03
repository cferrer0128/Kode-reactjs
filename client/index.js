import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app';
import {Provider} from 'react-redux';
import store , { history } from './store';
import { Router , Route , IndexRoute , 
    hashHistory  } from 'react-router'
import TaskList from "./components/TaskList"
import Home from "./components/Home"

ReactDom.render(<Provider store={store}>
    
    <Router history={hashHistory }>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='tasks' component={TaskList} />
        </Route>
    </Router></Provider>,
document.getElementById('app'))  

