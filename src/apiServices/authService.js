import axios from '../config/axios-config'

export const authService = {
  urlLogin: '/api/v1/auth',
  login(data) {
    return axios
      .post(`${this.urlLogin}/authenticate`, data)
      .then((res) => {
        const authUser = {
          token: res.data.token,
          email: res.data.email,
        };
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_email", res.data.email);
        localStorage.setItem("auth", JSON.stringify(authUser));
      })
      .catch((err) => alert(err.response.data.message));
  }
}