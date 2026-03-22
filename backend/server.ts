import "@dotenvx/dotenvx/config";
import express, { type Request, type Response, type Application } from "express";
import path from "path";

const PORT: number = Number(process.env.PORT) || 3000;
const app: Application = express();
const __dirname: string = import.meta.dirname;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/build/", express.static(path.join(__dirname, "../node_modules/three/build")));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})