import app from '@/app'
import { env } from '@/env'

app.listen({
  port: env.PORT
}, () => {
  console.log(`Server running on http://localhost:${env.PORT}`)
})