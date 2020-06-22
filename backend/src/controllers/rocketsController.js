const connection = require('../database/connection');
const knex = require('knex');

module.exports = {

    async create(request, response) {
        const {
            model,
            price,
            dates_available,
            sits_available,
            available_booking
        } = request.body;

        const [id] = await connection('rockets').insert({
            model,
            price,
            dates_available,
            sits_available,
            available_booking
        });

        return response.json({
            id,
            model,
            price,
            dates_available,
            sits_available,
            available_booking
        });
    },

    async index(request, response) {
        const { page = 1 } = request.query;

        const rockets = await connection('rockets')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

        return response.json(rockets);
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('rockets').where('id', id).delete();
    
        return response.status(204).send();
    },

    async update(request, response) {
        const { id } = request.params

        const {
            model,
            price,
            dates_available,
            sits_available,
            available_booking
        } = request.body;
    
        await connection('rockets').where('id', id).update({
            model,
            price,
            dates_available,
            sits_available,
            available_booking
        });

        return response.json({ 
            id,
            model,
            price,
            dates_available,
            sits_available,
            available_booking,
            company_id
        });
    }

}