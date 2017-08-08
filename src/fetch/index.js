import 'whatwg-fetch'

export default function(url, options) {
  return fetch(url, options).then(resp => {
    console.log('----', resp);
    if(resp.status===200) {
      return resp.json();
    }
    console.log(resp);
  })
}
