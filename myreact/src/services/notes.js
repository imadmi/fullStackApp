import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  return axios.get(baseUrl).catch(
    console.log('error')
  )
}

const create = newObject => {
  return axios.post(baseUrl, newObject).catch(
    console.log('error')
  )
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).catch(
    console.log('error')
  )
}

const server = { 
    getAll: getAll, 
    create: create, 
    update: update 
  }

export default server