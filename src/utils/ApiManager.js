import axios from 'axios';

import config from '../config/api';

class ApiManager {
  getData = (path, dispatch, onSuccess, onError, format = 'json') => (
    axios.get(`${config.url}/${path}?format=${format}`)
      .then((data) => {
        dispatch(onSuccess(data.data));
      })
      .catch(() => {
        dispatch(onError);
      })
  )
}

export default new ApiManager();
