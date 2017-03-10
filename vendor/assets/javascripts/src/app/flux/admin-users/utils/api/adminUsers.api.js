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
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'post',
      url: BASE_URL,
      responseType: 'json',
      data: { user },
      cancelToken: new CancelToken( c => cancel = c )
    });
    return { request, cancel }
  },
  updateUser: (user) => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'put',
      url: `${BASE_URL}/${user.id}`,
      data: {user},
      responseType: 'json',
      cancel: new CancelToken( c => cancel = c )
    });
    return { request, cancel }
  },
  deleteUser: (user_id) => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'delete',
      url: `${BASE_URL}/${user_id}`,
      responseType: 'json',
      cancelToken: new CancelToken( c => cancel = c )
    });
    return { request, cancel }
  }
}

export default ADMIN_USERS;
