import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const PORT = 3000;

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({
    message: "hello",
  });
});

app.listen(3000, () => {
  console.log(`Started on: localhost:${PORT}`);
});
