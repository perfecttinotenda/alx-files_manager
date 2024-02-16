/* Auth.js */
/* eslint-disable && no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { getUserFromXToken, getUserFromAuthorization } from '../utils/auth';

/**
 * This applies Basic auth to a route.
 * @param {Request}This req on Express request object.
 * @param {Response}This res on Express response object.
 * @param {NextFunction}This calls next on Express next_funktion.
 */
export const basicAuthenticate = async (req, res, next) => {
  const user = await getUserFromAuthorization(req);

  if (!user) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  req.user = user;
  next();
};

/**
 * This applies X-Token auth to a route.
 * @param {Request}This req on Express request object.
 * @param {Response}This res on Express response object.
 * @param {NextFunction}This calls  next from Express next_funktion.
 */
export const xTokenAuthenticate = async (req, res, next) => {
  const user = await getUserFromXToken(req);

  if (!user) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  req.user = user;
  next();
};
