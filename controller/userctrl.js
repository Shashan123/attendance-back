const repo = require('../DB/repository/userrepo');

module.exports = {
    register(req, res) {
        let userObj = req.body;
        console.log(userObj)
        repo.register(userObj)
            .then((data) => {
                res.status(200).send({
                    message: "User Created Successfully",
                    data,
                });
            })
            .catch((error) => {
                res.status(400).send({
                    message: "Error creating user",
                    error,
                });
            })

    },
    async login(req, res) {
        let userObj = req.body;
        const result = await repo.login(userObj);

        if (result) {
            const email = result.email;
            const name = result.name;
            res.status(200).send({
                message: "User Logged In Successfully",
                email,
                name
            });
        }
        else {
            res.status(400).send({
                message: "Invalid Credentials",
            });
        }

    },
}