import { createEnv, z } from '@chatapp/common';
import 'dotenv/config';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  AUTH_SERVICE_PORT: z.coerce.number().int().min(0).max(65_535).default(4000),
});

export type EnvType = z.infer<typeof envSchema>;
export const env = createEnv(envSchema, { serviceName: 'auth-service' });
