import http from "../http-api";

class CourDataService {
  getAll() {
    return http.get("/cours");
  }

  get(id) {
    return http.get(`/cours/${id}`);
  }

  create(data) {
    return http.post("/cours", data);
  }

  findByTitle(name) {
    return http.get(`/cours?name=${name}`);
  }
  // service update admin
  update(id, data) {
    return http.put(`/cours/${id}`, data);
  }
  // service delete id
  delete(id) {
    return http.delete(`/cours/${id}`);
  }
  // service delete all
  deleteAll() {
    return http.delete(`/cours`);
  }
}
export default new CourDataService();