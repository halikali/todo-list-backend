const UserService = require("../services/userService");

class UserController {
    static async createUser(req, res){
        try{
            const existingUser = await UserService.findUserByEmail(req.body.email);

            if(existingUser){
                return res.status(400).json({error: "User already exists"});
            }
            const createdUser = await UserService.addUser(req.body);
            res.status(201).json({createdUser});
        }
        catch(error){
            res.status(500).json({error: error});
        }
    }

    static async loginUser(req, res){
        try{
            const user = await UserService.loginUser(req.body.email, req.body.password);
            res.status(200).json({user});
        }
        catch(error){
            res.status(500).json({error: error});
        }
    }
}

module.exports = UserController;