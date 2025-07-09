import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>welcome to finance</h1>");
});

const PORT = 1011;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
