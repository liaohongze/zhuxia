import service from './service'
import { Toast } from 'vant'

function axios(config) {
  return new Promise((resolve, reject) => {
    service(config)
      .then(res => {
        if (res.status === 200) {
          if (res.data.code !== 200) {
            Toast(res.data.msg)
            resolve(false)
          }
          resolve(res.data.data)
        } else {
          Toast(res.data.msg)
        }
      })
      .catch(error => {
        reject(error.msg)
        Toast(error.msg)
      })
  })
}

const request = {
  get: (url, params) => {
    let config = {
      url,
      method: 'get',
      params
    }
    return axios(config)
  },
  post: (url, data) => {
    let config = {
      url,
      method: 'post',
      data: data,
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    }
    return axios(config)
  },
  put: (url, data) => {
    let config = {
      url,
      method: 'put',
      data
    }
    return axios(config)
  },
  delete: (url, data) => {
    let config = {
      url,
      method: 'delete',
      data
    }
    return axios(config)
  }
}

export default request
