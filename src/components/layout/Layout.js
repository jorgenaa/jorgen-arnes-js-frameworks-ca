import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
   // Route,
	NavLink,
} from 'react-router-dom';

export const Layout = () => {
    return (
        <Router>
            <div className="router">
                <nav className="router__nav">
                    <NavLink className="router__link router__link--hover" activeClassName="router__link--active" to="/" exact={true}>
                        Home
                    </NavLink>
                    
                    <NavLink className="router__link router__link--hover" activeClassName="router__link--active" to="/contact/">
                        Contact
                    </NavLink>
                </nav>
            </div>
            <div>
                <Switch>
                        {/* <Route path="/" exact component={Home} />
                        <Route path="/contact" component={Contact} /> */}
                </Switch>
            </div>
        </Router>
    )
}

export default Layout