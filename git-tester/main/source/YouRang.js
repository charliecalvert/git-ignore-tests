import React from 'react';
import './App.css';

export default class YouRang extends React.Component {
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
            workingDir: 'unknown'
        };
    }

    queryYouRang = async () => {
        try {
            let response = await fetch('/system-environment/you-rang');
            let result = await response.json();
            console.log(result);
            this.setState(result);
        } catch (ex) {
            alert(ex);
        }
    };

    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}
