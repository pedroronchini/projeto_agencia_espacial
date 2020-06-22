const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const adminController = require('./controllers/adminController');
const userController = require('./controllers/userController');
const companyController = require('./controllers/companyController');
const rocketsController = require('./controllers/rocketsController');

const routes = express.Router();

routes.post('/admin', celebrate({
    [Segments.BODY]: Joi.object().keys({
        login: Joi.string().required().default('admin'),
        password: Joi.string().required().default('admin'),
    })
}), adminController.create);

routes.get('/admin', adminController.index);

routes.put('/admin/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), adminController.update);

routes.delete('/admin/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), adminController.delete);


routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        login: Joi.string().required(),
        password: Joi.string().required(),
    })
}), userController.create);

routes.get('/users', userController.index);

routes.put('/users/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),userController.update);

routes.delete('/users/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), userController.delete);


routes.post('/company', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        whatsapp: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
        classification: Joi.number().required().default(0),
    })
}), companyController.create);

routes.get('/company', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), companyController.index);

routes.put('/company/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), companyController.update);

routes.delete('/company/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), companyController.delete);


routes.post('/rockets', celebrate({
    [Segments.BODY]: Joi.object().keys({
        model: Joi.string().required(),
        price: Joi.number().required(),
        dates_available: Joi.date().required(),
        sits_available: Joi.number().required().default(1),
        available_booking: Joi.number().required().default(5),
    })
}), rocketsController.create);

routes.get('/rockets', rocketsController.index);

routes.put('/rockets/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), rocketsController.update);

routes.delete('/rockets/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), rocketsController.delete);

module.exports = routes;