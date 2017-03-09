import AppAction from '../../actions/app.actions';
import axios from 'axios';

const BASE_URL = '/api/v1/users';

const ADMIN_USERS = {
  getUsers: () => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'get',
      url: BASE_URL,
      responseType: 'json',
      cancelToken: new CancelToken( c => cancel = c )
    });
    return { request, cancel };
  },
  createUser: (user) => {

  },
  updateUser: (user) => {

  },
  deleteUser: (user_id) => {

  }
}

export default ADMIN_USERS;
