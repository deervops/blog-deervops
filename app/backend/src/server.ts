import { Router, Request, Response } from 'express';
import app from './app';

const route = Router()

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)

app.listen(3001, () => 'server running on port 3333')