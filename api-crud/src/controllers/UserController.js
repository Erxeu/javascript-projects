const UserServices = require("../services/UserServices");
const Controller = require("./Controller")

const userServices = new UserServices();

class UserController extends Controller{
    constructor(service){
        super(userServices)
    }

    async createNewUser(req, res){
        const dto = req.body
        try {
            const user = await this.service.createNewUser(dto);
            res.status(201).send({
                user: user,
                message: "Created success!"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    async authenticate(req, res){
        const dto = req.body
        try {
            const user = await this.service.auth(dto.email, dto.senha);
            res.status(202).send(user)
        } catch (error) {
            res.status(401).send({message: error.message})
        }
    }

    async updateUserPassword(req, res){
        const dto = req.body
        try {
            const updated = await this.service.changedPassword(dto);
            res.status(200).send({message: "Updated!!"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = UserController