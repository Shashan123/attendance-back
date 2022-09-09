const UserModel = require('../models/usermodel');
const { response } = require('express');

module.exports = {
    register(userObj) {
        var promise = UserModel.create(userObj);
        return promise;
    },
    async login(userObj) {
        var result = await UserModel.findOne({ email: userObj.email, password: userObj.password });
        if (result) {
            return result;
        }
        else {
            return null;
        }
    }
}
