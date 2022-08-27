const usersDB = [];
const tweetsDB = [];

function isValidBody(body, fields) {
  if (typeof body !== "object") {
    return false;
  }

  for (const field of fields) {
    const value = body[field];
    if (typeof value !== "string") {
      return false;
    }
    if (value.length === 0) {
      return false;
    }
  }
  return true;
}

function getTweet(tweet) {
  const avatar = usersDB.find(user => user.username === tweet.username)?.avatar;
  return {...tweet, avatar};
}

const postSignupHandler = (req, res) => {
  if (!isValidBody(req.body, ["username", "avatar"])) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }
  usersDB.push(req.body);
  res.status(201).send("OK");
};

const postTweetsHandler = (req, res) => {
  if (!isValidBody(req.body, ["username", "tweet"])) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }
  tweetsDB.push(req.body);
  res.status(201).send("OK");
};

const getTweetsHandler = (req, res) => {
  const lastTweets = tweetsDB.slice(-10);
  res.send(lastTweets.map(getTweet));
};

const getTweetsByUsernameHandler = (req, res) => {
  const {username} = req.params;
  res.send(tweetsDB.filter(tweet => tweet.username === username).map(getTweet));
};

export {postSignupHandler, postTweetsHandler, getTweetsHandler, getTweetsByUsernameHandler};
