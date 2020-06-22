const connection = require('../database/connection');
const knex = require('knex');

module.exports = {

    async create(request, response) {
        const {
            login,
            password
        } = request.body;

        const [id] = await connection('admin').insert({
            login,
            password
        });

        return response.json(id);
    },

    async index(request, response) {
        const admin = await connection('admin').select('*');

        return response.json(admin);
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('admin').where('id', id).delete();

        return response.status(204).send('Admin deletado com sucesso!');
    },

    async update(request, response) {
        const { id } = request.params

        const {
            login,
            password
        } = request.body

        await connection('admin').where('id', id).update({
            login,
            password
        });
        
        return response.json(id);

    }
        
}