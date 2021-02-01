import axios from 'axios'
const baseUrl = '/api/stones'


const getAll = () => {
    const request = axios.get(baseUrl)
    console.log('request: ', request)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }

export default { getAll, create }