import axios from 'axios'
const baseUrl = '/api/stones'

const promise = axios.get('http://localhost:3001/stones')
console.log(promise)


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default getAll