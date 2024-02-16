import express from 'express';

/**
 * This will add middlewares per given Express App.
 * @param {express.Express} on our api Express App.
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
