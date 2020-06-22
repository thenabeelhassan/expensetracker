import React from 'react'
import { BrowserRouter  as Router, Route, Switch, Link} from 'react-router-dom'

export const Footer = () => {
    return (
        <section
            id='footer'
        >
            <section
                id='copyrights'
                className='col-6 text-center'
            >
                <span>
                    Copyright
                    <b>
                        ©
                    </b>
                    The Nabeel Hassan
                </span>
            </section>
            <Router>
                <section
                    id='social'
                    className='col-6 text-center'
                >
                    <Link
                        to='/profile'
                        target='_blank'
                    >
                        <i className="fa fa-id-card"></i>
                    </Link>
                    <Link
                        to='/github'
                        target='_blank'
                    >
                        <i className="fa fa-github-square"></i>
                    </Link>
                    <Link
                        to='/facebook'
                        target='_blank'
                    >
                        <i className="fa fa-facebook-square"></i>
                    </Link>
                    <Link
                        to='/linkedin'
                        target='_blank'
                    >
                        <i className="fa fa-linkedin"></i>
                    </Link>
                </section>
                <Switch>
                    <Route 
                        path='/profile' component={
                            () => { 
                                window.location.href = 'http://resume.thenabeelhassan.com/'; 
                                return null;
                            }
                        }
                    />
                    <Route 
                        path='/github' component={
                            () => { 
                                window.location.href = 'http://github.thenabeelhassan.com'; 
                                return null;
                            }
                        }
                    />
                    <Route 
                        path='/facebook' component={
                            () => { 
                                window.location.href = 'http://facebook.thenabeelhassan.com/'; 
                                return null;
                            }
                        }
                    />
                    <Route 
                        path='/linkedin' component={
                            () => { 
                                window.location.href = 'http://linkedin.thenabeelhassan.com/'; 
                                return null;
                            }
                        }
                    />
                </Switch>
            </Router>
        </section>
    )
}
