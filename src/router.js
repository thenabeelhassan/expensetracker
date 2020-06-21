import React from 'react'
import './App.css';
import { BrowserRouter  as Router, Route, Switch, Link} from 'react-router-dom'

import Home from './pages/home'
import Expense from './pages/expense'
import Income from './pages/income'

function App(){
    return(
        <Router>
            <div>
                <nav 
                    className="navbar navbar-expand-lg navbar-light bg-light"
                >
                    <span
                        id='heading'
                    >
                        Expense Tracker
                    </span>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span 
                            className="navbar-toggler-icon"
                        >
                        </span>
                    </button>
                    <div 
                        className="collapse navbar-collapse" 
                        id="navbarNav"
                    >
                        <ul 
                            className="navbar-nav"
                        >
                            <li 
                                className="nav-item"
                            >            
                                <Link 
                                    to='/'
                                    className='link nav-link'
                                >
                                    Home
                                </Link>
                            </li>
                            <li 
                                className="nav-item"
                            >
                                <Link 
                                    to='/Income'
                                    className='link nav-link'
                                >
                                    Income
                                </Link>
                            </li>
                            <li 
                                className="nav-item"
                            >
                                <Link 
                                    to='/Expense'
                                    className='link nav-link'
                                >
                                    Expense
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route 
                        path='/Expense'
                    >
                        <Expense />
                    </Route>
                    <Route 
                        path='/Income'
                    >
                        <Income />
                    </Route>
                    <Route 
                        path='/'
                    >
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App
