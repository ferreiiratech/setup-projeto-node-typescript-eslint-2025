import z from 'zod'

const envSchema = z.object({
  PORT: z.coerce
    .number()
    .default(8080)
    .transform((port) => (port === 0 ? 3000 : port))
})

export const env = envSchema.parse(process.env)
