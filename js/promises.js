// import {getGithubUsers} from './github.js'
//
// (async ()=>{
//     let users = await getGithubUsers();
//
//
//
// }) ();


function getLastCommitDate(cybermatt76) {
    const url = `https://api.github.com/users/${cybermatt76}/events/public`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const lastCommit = data.find(event => event.type === 'PushEvent');
            const lastCommitDate = new Date(lastCommit.created_at);
            return lastCommitDate;
        });
}

getLastCommitDate('cybermatt76')
    .then(date => console.log(date));