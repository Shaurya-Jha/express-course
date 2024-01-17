import express from "express";

const port = 8000;

const app = express();

// mock data
const mockUsers = [
  { id: 1, username: "anson", displayName: "Anson" },
  { id: 2, username: "jack", displayName: "Jack" },
  { id: 3, username: "adam", displayName: "Adam" },
  { id: 4, username: "tima", displayName: "Tina" },
  { id: 5, username: "jason", displayName: "Jason" },
  { id: 6, username: "marilyn", displayName: "Marilyn" },
];

// routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.get("/api/users", (req, res) => {
  console.log(req.query);
  const {query:{filter, value}} = req;

  // if filter and value are defined
  if(filter && value){
    return res.send(
      mockUsers.filter((user) => {
        user[filter].includes(value)
      })
    )
  }

  res.send(mockUsers);
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

  const findUser = mockUsers.find((user) => {
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
