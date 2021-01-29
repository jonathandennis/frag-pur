import axios from 'axios'
const baseUrl = '/api/stones'

const promise = axios.get('http://localhost:3001/stones')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default getAll