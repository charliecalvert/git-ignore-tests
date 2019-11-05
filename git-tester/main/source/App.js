import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            program: 'unknown',
            file: 'unknown',
            result: 'unknown',
            server: 'unknown',
            directory: 'unknown',
            hostname: 'unknown',
            home: 'unknown',
            workingDir: 'unknown',
            branches: ['unknown']
        };
    }

    queryYouRang = () => {
        fetch('/system-environment/you-rang')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState(result);
            })
            .catch(ex => {
                alert(ex);
            });
    };

    queryGetBranches = async () => {
        try {
            let response = await fetch('/system-environment/getBranches');
            let result = await response.json();
            console.log(result);
            this.setState({ branches: result.branches });
        } catch (ex) {
            alert(ex);
        }
    };

    render() {
        return (
            <React.Fragment>
                <h1>App Implementations</h1>

                <p>Midterm prototype code.</p>

                <h2>You Rang</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>program</td>
                            <td className="left"> {this.state.program}</td>
                        </tr>
                        <tr>
                            <td>result</td>
                            <td className="left"> {this.state.result}</td>
                        </tr>
                        <tr>
                            <td>file</td>
                            <td className="left"> {this.state.file}</td>
                        </tr>
                        <tr>
                            <td>server</td>
                            <td className="left"> {this.state.server}</td>
                        </tr>
                        <tr>
                            <td>directory</td>
                            <td className="left"> {this.state.directory}</td>
                        </tr>
                        <tr>
                            <td>hostname</td>
                            <td className="left"> {this.state.hostname}</td>
                        </tr>
                        <tr>
                            <td>Home</td>
                            <td className="left"> {this.state.home}</td>
                        </tr>
                        <tr>
                            <td>Working Dir</td>
                            <td className="left"> {this.state.workingDir}</td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={this.queryYouRang}>You Rang</button>

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
