import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import ViewResult from './components/ViewResult'
import AddNewResult from './components/AddNewResult'
import AddStudent from './components/AddStudent'
import AskResult from './components/AskResult'

function App() {
    return (
        <div className="container">
        <br/>
        	<Router>
        		<Route path="/" exact component={AskResult} />
        		<Route path="/add/student" component={AddStudent} />
        		<Route path="/add/result" component={AddNewResult} />
        		<Route path="/view" component={ViewResult} />
        	</Router>
        </div>
    )
}

export default App