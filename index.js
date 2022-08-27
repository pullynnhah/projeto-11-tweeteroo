import express from "express";
import cors from "cors";

import {
  postSignupHandler,
  postTweetsHandler,
  getTweetsHandler,
  getTweetsByUsernameHandler,
} from "./handlers.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = "5000";

app.post("/sign-up", postSignupHandler);
app.post("/tweets", postTweetsHandler);
app.get("/tweets", getTweetsHandler);
app.get("/tweets/:username", getTweetsByUsernameHandler);

app.listen(port);
