import React from 'react';
import GetBranches from './GetBranches';
import YouRang from './YouRang';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Intro from './Intro';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Intro/>

                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/you-rang">You Rang</Link>
                            </li>
                            <li>
                                <Link to="/get-branches">Get Branches</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/get-branches">
                            <GetBranches/>
                        </Route>
                        <Route path="/you-rang">
                            <YouRang/>
                        </Route>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}
