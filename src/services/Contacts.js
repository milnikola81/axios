import axios from 'axios'

export default class Contacts {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  getAll () {
    return axios.get('contacts')
  }

  add(contact) {
    return axios.post('contacts', contact);
  }

  delete(id) {
    // console.log(id)
    return axios.delete(`contacts/${id}`)
  }

  get(id) {
    return axios.get(`contacts/${id}`)
  }

  edit(contact) {
    return axios.put(`contacts/${contact.id}`, contact)
  }
}

export const contacts = new Contacts()


// https://vuejs.org/v2/guide/
// https://github.com/axios/axios
// https://laravel.com/docs/5.6/readme
