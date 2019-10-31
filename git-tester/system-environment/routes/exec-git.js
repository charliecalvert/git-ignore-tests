const util = require('util');
const exec = util.promisify(require('child_process').exec);

const workingDir = 'git-ignore-tests';

async function getBranches(response) {
    // prettier-ignore
    const { stdout, stderr } = await exec('git branch -a | sed -n -e \'s/remotes.origin*.//p\' | grep -v \'HEAD\'', {
        cwd: workingDir
    });

    const output = stdout.trim();
    const allBranches = output.split('\n').map(item => item.trim());
    console.log('stdout:', output);
    console.error('stderr:', stderr);
    if (response) {
        response.send({
            result: 'success',
            response: output,
            branches: allBranches
        });
    } else {
        return allBranches;
    }
}

module.exports.getBranches = getBranches;
module.exports.workingDir = workingDir;
