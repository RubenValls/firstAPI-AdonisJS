import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
export default class AuthController {
public async login({ request, auth }: HttpContextContract) {

    const email = request.input("email");
    const password = request.input("password");

    return await auth.use("api").attempt(email, password);

    }

    public async register({ request, auth }: HttpContextContract) {

        const email = request.input("email");
        const password = request.input("password");

        /**
        * Create a new user
        */

        const user = new User();
        user.email = email;
        user.password = password;
        await user.save();

        return user.toJSON();
    }
}
