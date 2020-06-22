const connection = require('../database/connection');
const knex = require('knex');

module.exports = {

    async create(request, response) {
        const {
            login,
            password,
        } = request.body;

        const [id] = await connection('users').insert({
            login,
            password
        });

        return response.json({
            id,
            login,
            password
        });
    },

    async index(request, response) {
        const user = await connection('users').select('*');

        return response.json(user);
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('users').where('id', id).delete();

        return response.status(204).send('Usuário deletado com sucesso!');
    },

    async update(request, response) {
        const { id } = request.params

        const {
            login,
            password
        } = request.body;

        await connection('users').where('id', id).update({
            login,
            password
        });

        return response.json({
            id,
            login,
            password
        });
    }
}
