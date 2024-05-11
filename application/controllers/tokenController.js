import UsersApiService from "../services/usersapiService.js";
import { PasswordIncorrectException } from "../../domain/exceptions/exceptions.js";
import { response } from "../utils/response.js";
import { tokenGenerator } from "../utils/tokenGenerator.js";

export const getToken = async (req, res, next) => {
    try {
        const { user, password } = req.body;
        const userResponse = await UsersApiService.getUser(user);
        const userData = await userResponse.json();
        if(userResponse.status != 200) return response(userResponse.status, res, userData);
        if(userData.password != password) throw new PasswordIncorrectException();
    
        const token = tokenGenerator(userData);
        response(200, res, token);
    } catch (e) {
       next(e);
    }
}