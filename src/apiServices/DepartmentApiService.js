import axios from 'axios'

const endpoint = '/departments'

const departmentApiService = {
  getAll() {
    return axios.get(endpoint).then((response) => response.data)
  },
  getById(id) {
    return axios.get(endpoint + `/${id}`).then((response) => response.data)
  },
  //   searchBy(name, dni, position, location) {
  //     return axios.get(
  //       baseUrl
  //       + `/search?name=${name}&dni=${dni}&position=${position}&location=${location}`)
  //       .then(response => response.data);
  //   },

  create(data) {
    return axios
      .post(endpoint, data)
      .then((response) => response.data)
      .catch((err) => console.error(err))
  },

  editById(id, changes) {
    return axios
      .put(endpoint + `/${id}`, changes)
      .then((response) => response.data)
  },

  deleteById(id) {
    return axios.delete(endpoint + `/${id}`).then((response) => response.data)
  },
}

export default departmentApiService
