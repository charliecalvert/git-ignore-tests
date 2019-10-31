import React, { useState } from 'react';
import './App.css';

export default function GetBranches() {
    const [branches, setBranches] = useState(['unknown']);

    async function queryGetBranches() {
        try {
            let response = await fetch('/system-environment/getBranches');
            let result = await response.json();
            console.log(result);
            setBranches(result.branches);
        } catch (ex) {
            alert(ex);
        }
    }

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
                    {branches.map((branch, index) => {
                        return (
                            <tr key={index}>
                                <td>branch</td>
                                <td className="left">{branch}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <button onClick={queryGetBranches}>getBranches</button>
        </React.Fragment>
    );
}
