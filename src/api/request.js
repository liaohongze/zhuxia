import service from './service'
import qs from 'qs'

function axios(config) {
  return new Promise((resolve, reject) => {
    service(config)
      .then(res => {
        if (res.status === 200) {
          if (!res.data.status) {
            this.$toast(res.data.msg)
            resolve(false)
          }
          resolve(res.data)
        } else {
          this.$toast(res.data.message)
        }
      })
      .catch(error => {
        reject(error.message)
        this.$toast(error.message)
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
      data: qs.stringify(data),
      headers: {'Content-Type': 'application/json;charset=UTF-8'}
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
