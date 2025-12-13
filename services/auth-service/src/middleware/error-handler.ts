import { logger } from '@/utils/logger';
import { HttpError } from '@chatapp/common';
import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  logger.error({ err }, 'Unhandled error occured');

  const error = err instanceof HttpError ? err : undefined;
  const statusCode = error?.statusCode ?? 500;
  const message =
    statusCode === 500 ? 'Internal Servical Error' : (error?.message ?? 'Unknown Error');
  const payload = error?.details ? { message, details: error.details } : { message };

  res.status(statusCode).json(payload);

  void _next();
};
