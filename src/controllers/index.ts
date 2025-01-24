import { Request, Response } from 'express'

const rotaHome = (req: Request, res: Response) => {
  res.json('Hello World')
}

export default {
  rotaHome 
}