const githubAPI = {
  getUserData: (clientId, clientSecret, username) => {
    return $.ajax({
      url: 'https://api.github.com/users/' + username + '?client_id=' + clientId + '&client_secret=' + clientSecret,
      dataType: 'json',
      cache: false,
      success: (data) => {
        // console.log('data', data);
      },
      error: (error) => {
        // console.log(error);
      }
    });
  }
};

export default githubAPI;
