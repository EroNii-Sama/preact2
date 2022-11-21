const express = require("express");
const studentsRoutes = require("./src/students/routes");
const app = express();
const port = 3000;
app.use(express.json());
app.use("/", studentsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});