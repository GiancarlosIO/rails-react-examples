import axios from 'axios';

const BASE_URL = "/api/v1/pads"

const API_NOTES = {
  getNotes: () => {
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
  addNote: (note) => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'post',
      url: BASE_URL,
      responseType: 'json',
      data: {pad: { text: note.text }},
      cancelToken: new CancelToken( c => cancel = c )
    });
    return { request, cancel };
  }
}

export default API_NOTES;
