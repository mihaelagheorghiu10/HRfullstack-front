import axios from "axios";

const endPoint = "/employees";

const employeeApiService = {
  getAll() {
    return axios.get(endPoint).then(response => response.data);
  },
  getById(id) {
    return axios.get(endPoint + `/${id}`).then((response) => response.data);
  },
  searchBy(name, dni, position, location) {
    return axios.get(
      endPoint
      + `/search?name=${name}&dni=${dni}&position=${position}&location=${location}`)
      .then(response => response.data);
  },
  create(data) {
    return axios
      .post(endPoint, data)
      .then((response) => response.data)
      .catch((err) => console.error(err));
  },
  editById(id, changes) {
    return axios
      .put(endPoint + `/${id}`, changes)
      .then((response) => response.data)
      .catch((err) => console.error(err.message));
  },
  deleteById(id) {
    return axios.delete(endPoint + `/${id}`).then((response) => response.data);
  }  
}

export default employeeApiService;