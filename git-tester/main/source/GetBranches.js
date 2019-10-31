import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            branches: ['unknown']
        };
    }

    queryGetBranches = async () => {
        try {
            let response = await fetch('/system-environment/getBranches');
            let result = await response.json();
            console.log(result);
            this.setState({ branches: result.asArray });
        } catch (ex) {
            alert(ex);
        }
    };

    render() {
        return (
            <React.Fragment>
                <h2>Get Branches</h2>

                <p>
                    Call into the System Environment service running in a Docker
                    container and ask it to return a list of the branches in my
                    repository for this class.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.branches.map((branch, index) => {
                            return (
                                <tr key={index}>
                                    <td>branch</td>
                                    <td className="left">{branch}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <button onClick={this.queryGetBranches}>getBranches</button>
            </React.Fragment>
        );
    }
}
