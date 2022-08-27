import express from "express";
import {
  postSignupHandler,
  postTweetsHandler,
  getTweetsHandler,
  getTweetsByUsernameHandler,
} from "./handlers";

const app = express();
app.use(express.json());
const port = "5000";

app.post("/sign-up", postSignupHandler);
app.post("/tweets", postTweetsHandler);
app.get("/tweets", getTweetsHandler);
app.get("/tweets/:username", getTweetsByUsernameHandler);

app.listen(port);
