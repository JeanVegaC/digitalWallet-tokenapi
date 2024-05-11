import fetch from "node-fetch";

class UsersApiService {
    getUser(user) {
        return fetch(`http://localhost:8000/usersapi/users/${user}`)
        .then( e => {
            return e;
        })
    }
}

export default new UsersApiService();