import AppAction from '../../actions/app.action';
import axios from 'axios';

const BASE_URL = "/api/v1/contacts"

const CONTACT_API = {
  createContact: (contact) => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'post',
      url: BASE_URL,
      responseType: 'json',
      data: {contact},
      cancelToken: new  CancelToken( c => cancel = c )
    });
    return { request, cancel };
  },
  getContactList: () => {
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
  deleteContact: (id) => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'delete',
      url: `${BASE_URL}/${id}`,
      responseType: 'json',
      cancelToken: new CancelToken( c => cancel = c )
    });
    return { request, cancel }
  },
  updateContact: (id, contact) => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'put',
      url: `${BASE_URL}/${id}`,
      responseType: 'json',
      data: {contact},
      cancelToken: new CancelToken( c => cancel = c )
    });
    return { request, cancel };
  }
}

export default CONTACT_API;
