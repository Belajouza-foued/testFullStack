import http from "../http-api";

class RoleDataService {
  getAll() {
    return http.get("/roles");
  }

  get(id) {
    return http.get(`/roles/${id}`);
  }

  create(data) {
    return http.post("/roles", data);
  }

  findByTitle(name) {
    return http.get(`/roles?name=${name}`);
  }
  // service update admin
  update(id, data) {
    return http.put(`/roles/${id}`, data);
  }
  // service delete id
  delete(id) {
    return http.delete(`/roles/${id}`);
  }
  // service delete all
  deleteAll() {
    return http.delete(`/roles`);
  }
}
export default new RoleDataService();