const connection = require('../database/connection');
const knex = require('knex');

module.exports = {

    async create(request, response) {
        const {
           name,
           email,
           whatsapp,
           city,
           uf,
           classification,
        } = request.body;

        const [id] = await connection('company').insert({
            name,
            email,
            whatsapp,
            city,
            uf,
            classification,
        });

        return response.json(id);
    },

    async index(request, response) {
        const { page = 1 } = request.query;

        const company = await connection('company')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

        return response.json(company);
    },

    async delete(request, response) {
        const { id } = request.params;

        const rocket = await connection('rockets').where('id', id).select('rockets_id').first();

        if (rocket.rockets_id !== rockets_id) {
            return response.status(401).json({ error: 'Operação não permitida' });
        }

        await connection('company').where('id', id).delete();

        return response.status(204).send('Empresa deletada com sucesso');
    },

    async update(request, response) {
        const { id } = request.params

        const {
            name,
            email,
            whatsapp,
            city,
            uf
        } = request.body

        await connection('company').where('id', id).update({
            name,
            email,
            whatsapp,
            city,
            uf
        });
        
        return response.json({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    }
}