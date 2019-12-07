const Funcionario = require('../models/funcionario');
module.exports = {
    async store(req, res) {
        const { name, email } = req.body;

        console.log(name + "\n" + email);
        const funcionario = await Funcionario.create({ name, email });

        return res.json(funcionario);
    }
}