/* error.js */
/* eslint-disable &&  no-unused-vars */
import { Request, Response, NextFunction } from 'express';

/**
 * This will represent an err in this API.
 */
export class APIError extends Error {
  constructor(code, message) {
    super();
    this.code = code || 500;
    this.message = message;
  }
}

/**
 * Tgis will apply Basic auth to a route.
 * @param {Error}The err is an error object.
 * @param {Request}This req from Express request object.
 * @param {Response}This res from Express response object.
 * @param {NextFunction}This next feom The Express next funktion.
 */
export const errorResponse = (err, req, res, next) => {
  const defaultMsg = `Failed to process ${req.url}`;

  if (err instanceof APIError) {
    res.status(err.code).json({ error: err.message || defaultMsg });
    return;
  }
  res.status(500).json({
    error: err ? err.message || err.toString() : defaultMsg,
  });
};
