import axios from 'axios';

const BASE_URL = '/api/v1/';

const NoteAPI = {
  getNotes: () => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'get',
      url: BASE_URL + 'notes',
      responseType: 'json',
      cancelToken: new CancelToken( c => {
        // An executor function receives a cancel function as a parameter
        cancel = c;
      })
    });
    return { request,cancel };
  },
  updateNote: (id, params) => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'put',
      url: `${BASE_URL}notes/${id}`,
      responseType: 'json',
      data: params,
      cancelToken: new CancelToken( c => { cancel = c })
    });
    return { request, cancel }
  },
  createNote: (text) => {
    let newText = text !== undefined ? text : '';
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'post',
      url: `${BASE_URL}notes`,
      responseType: 'json',
      data: {note: { text: newText }},
      cancelToken: new CancelToken( c => { cancel = c } )
    });
    return { request, cancel };
  },
  deleteNote: (id) => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'delete',
      url: `${BASE_URL}notes/${id}`,
      responseType: 'json',
      cancelToken: new CancelToken( c => { cancel = c } )
    });
    return { request, cancel };
  },
  getNoteById: (id) => {
    axios({
      method: 'get',
      url: `${BASE_URL}notes/${id}`,
      responseType: 'json'
    });
  }
}

export default NoteAPI;
