import express from "express";

const app = express();

app.get("/users", (request, response) => {
  return response.json({ message: "hello word" });
});

app.listen(3300);
