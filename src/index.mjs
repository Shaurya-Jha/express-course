import express from "express";

const port = 8000;

const app = express();

// mock data
const mockUser = [
  { id: 1, name: "anson", displayName: "Anson" },
  { id: 2, name: "jack", displayName: "Jack" },
  { id: 3, name: "adam", displayName: "Adam" },
];

// routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.get("/api/users", (req, res) => {
  res.send(mockUser);
});

app.get("/api/users/:id", (req, res) => {
  // validation for incoming get requests
  const parseId = parseInt(req.params.id);

  // if valid
  console.log(parseId);
  if (isNaN(parseId)) {
    return res.status(400).send({
      msg: "bad request. Invalid id",
    });
  }

  const findUser = mockUser.find((user) => {
    user.id === parseId;
  });

  if (!findUser) {
    return res.sendStatus(404);
  }

  return res.send(findUser)
});

app.get("/api/products", (req, res) => {
  res.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
