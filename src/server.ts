import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors()); //CORS INATIVO DURANTE DESENVOLVIMENTO LINUX
app.use(routes);

app.listen(3333);
