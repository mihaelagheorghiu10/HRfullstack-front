import axios from "axios";

const baseUrl = "http://localhost:8080/employees";

const employeeApiService = {
  getAll() {
    return axios.get(baseUrl).then(response => response.data);
  },
  getById(id) {
    return axios.get(baseUrl + `/${id}`).then((response) => response.data);
  },
  searchBy(name, dni, position, location) {
    return axios.get(
      baseUrl
      + `/search?name=${name}&dni=${dni}&position=${position}&location=${location}`)
      .then(response => response.data);
  },
  create(data) {
    return axios
      .post(baseUrl, data)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },
  editById(id, changes) {
    return axios
      .put(baseUrl + `/${id}`, changes)
      .then((response) => response.data)
      .catch((err) => console.log(err.message));
  },
  deleteById(id) {
    return axios.delete(baseUrl + `/${id}`).then((response) => response.data);
  }
}

export default employeeApiService;