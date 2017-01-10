const githubAPI = {
  getUserData: (clientId, clientSecret, username) => {
    return $.ajax({
      url: 'https://api.github.com/users/' + username + '?client_id=' + clientId + '&client_secret=' + clientSecret,
      dataType: 'json',
      cache: false,
      success: (data) => { },
      error: (error) => { }
    });
  },
  getUserRepo: (clientId, clientSecret, username, perPage) => {
    return $.ajax({
      url: 'https://api.github.com/users/' + username + '/repos?per_page=' + perPage + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: (data) => {},
      error: (error) => {}
    });
  }
};

export default githubAPI;
