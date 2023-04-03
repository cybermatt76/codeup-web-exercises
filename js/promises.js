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
        .then(events => {
            const lastCommitEvent = events.find(event => event.type === "PushEvent");
            const lastCommitDate = lastCommitEvent ? new Date(lastCommitEvent.created_at) : null;
            return lastCommitDate ? lastCommitDate.toDateString() : null;
        })
        .catch(error => {
            console.error(`Error fetching GitHub events for ${cybermatt76}`, error);
            return null;
        });
}

function wait(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(milliseconds);
        }, milliseconds);
    });
}

wait(4000)
    .then(milliseconds => console.log(`Waited ${milliseconds} milliseconds.`));
getLastCommitDate("cybermatt76")
    .then(lastCommitDate => console.log(`Last commit date: ${lastCommitDate}`))
    .catch(error => console.error(error));


function getLastTenCommits(cybermatt76) {
    const url = `https://api.github.com/users/${cybermatt76}/events/public`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const pushEvents = data.filter(event => event.type === 'PushEvent');
            const lastTenPushEvents = pushEvents.slice(0, 10);
            const lastTenCommitDates = lastTenPushEvents.map(event => new Date(event.created_at));
            return lastTenCommitDates;
        });
}

getLastTenCommits('cybermatt76')
    .then(dates => console.log(dates));

async function getCommits(username) {
    const url = `https://api.github.com/users/${username}/events/public`;
    const response = await fetch(url);
    const events = await response.json();
    const commits = events.filter(event => event.type === "PushEvent")
        .map(event => event.payload.commits)
        .flat()
        .slice(0, 10);
    return commits.map(commit => ({
        date: commit.date,
        message: commit.message
    }));
}

(async () => {
    console.log(await getCommits("cybermatt76"));
})();