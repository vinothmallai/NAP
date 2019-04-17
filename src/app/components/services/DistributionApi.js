import {getAuthData} from '../utils/fetchUtil';

export function getServiceOverview(serviceName)
{
  let access_token = getAuthData().access_token;
  const request = new Request('/api/servicePerformance/getServiceOverview/' + serviceName, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    })
  });

  return fetch(request).then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw(response.text())
    }
  }).catch(error => {
    throw error;
  });
}
