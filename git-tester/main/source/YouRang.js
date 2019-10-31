import React, { useState } from 'react';
import './App.css';

export default function YouRang() {
    const init = {
        program: 'unknown',
        file: 'unknown',
        result: 'unknown',
        server: 'unknown',
        directory: 'unknown',
        hostname: 'unknown',
        home: 'unknown',
        workingDir: 'unknown'
    };
    const [rangData, setRangData] = useState(init);

    async function queryYouRang() {
        try {
            let response = await fetch('/system-environment/you-rang');
            let result = await response.json();
            console.log(result);
            setRangData(result);
        } catch (ex) {
            alert(ex);
        }
    }

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
                        <td className="left"> {rangData.program}</td>
                    </tr>
                    <tr>
                        <td>result</td>
                        <td className="left"> {rangData.result}</td>
                    </tr>
                    <tr>
                        <td>file</td>
                        <td className="left"> {rangData.file}</td>
                    </tr>
                    <tr>
                        <td>server</td>
                        <td className="left"> {rangData.server}</td>
                    </tr>
                    <tr>
                        <td>directory</td>
                        <td className="left"> {rangData.directory}</td>
                    </tr>
                    <tr>
                        <td>hostname</td>
                        <td className="left"> {rangData.hostname}</td>
                    </tr>
                    <tr>
                        <td>Home</td>
                        <td className="left"> {rangData.home}</td>
                    </tr>
                    <tr>
                        <td>Working Dir</td>
                        <td className="left"> {rangData.workingDir}</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={queryYouRang}>You Rang</button>
        </React.Fragment>
    );
}
