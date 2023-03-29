const getGithubUsers = async () => {
    let response = await fetch('http//api.github.com/users');
    return response;

// return fetch ('https://api.github.com/users')Promise<Response>

}