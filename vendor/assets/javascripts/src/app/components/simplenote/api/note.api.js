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
  getNoteById: (id) => {
    axios({
      method: 'get',
      url: `${BASE_URL}notes/${id}`,
      responseType: 'json'
    });
  }
}

export default NoteAPI;
