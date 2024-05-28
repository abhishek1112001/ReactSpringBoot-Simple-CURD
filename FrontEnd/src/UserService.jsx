import axios from "axios";

const USERS_REST_API_URL_AddUser = "http://localhost:9196/app/adduser";
const USERS_REST_API_URL_UpdateUser = "http://localhost:9196/app/update";
const USERS_REST_API_URL_ReadAllUser = "http://localhost:9196/app/readAll";
const USERS_REST_API_URL_RemoveUser = "http://localhost:9196/app/remove";

class UserService {
  getUsers() {
    return axios.get(USERS_REST_API_URL_ReadAllUser);
  }
}

export default new UserService();
