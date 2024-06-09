const dataSource = require("../models");
const Services = require("./Services");
const { hash, genSalt } = require("bcryptjs");

class UserServices extends Services{
    constructor(){
        super('User')
    }

    async findUserEmail(email){
        return dataSource[this.model].findOne({
            where: {
                email: email
            }
        });
    }

    async updateUserByEmail(dateUpdate, email){
        const listUpdated = await dataSource[this.model].update(dateUpdate, {
            where: { 
                email: email 
            }
          });
          if (listUpdated[0] === 0) {
            throw new Error("not found User!");
          }
          return true;
    }

    async createNewUser(dto){
        const verifyEmail = await this.findUserEmail(dto.email);
        if(verifyEmail != null)
            throw new Error("already exists Email");

        const salt = await genSalt(12);
        dto.hash = await hash(dto.hash, salt);
        dto.salt = salt;

        const userCreate = await this.createRegistry(dto);
        return this.getRegistryById(userCreate.user_id);
    }

    async auth(email, senha){
        const user = await this.findUserEmail(email);
        if(user == null)
            throw new Error("not found Email!");

        senha = await hash(senha, user.salt);

        if(senha != user.hash)
            throw new Error("incorrect Password ");

        return this.getRegistryById(user.user_id);
    }

    async changedPassword(dto){
        this.auth(dto.email, dto.senha);

        const salt = await genSalt(12);
        dto.newPassword = await hash(dto.newPassword, salt)
        dto.salt = salt;
        const userUpdate = await this.updateUserByEmail({salt: dto.salt, hash: dto.newPassword}, dto.email)
        if(userUpdate == false)
            throw new Error("Change password failed")
        
        return this.getRegistryById(userUpdate.user_id);
    }
}

module.exports = UserServices;