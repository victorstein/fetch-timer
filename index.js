const fetch = require('node-fetch');

const Fetch = (url, data = {}) =>{
  return new Promise((res, rej)=>{
    fetch(url, {...data}).then(resp => res(resp)).catch(e => rej(e));
    ('timeout' in data) ?
      setTimeout(_=> rej(`timedout ${data.timeout} ms`), data.timeout)
    : null;
  })
}

module.exports = Fetch
