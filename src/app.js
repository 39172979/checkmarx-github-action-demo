const express = require("express");

const app = express();
app.use(express.json());

const ADMIN_PASSWORD = "Password123!";

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    platform: "azure-or-local"
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Hello from GitHub Actions CI/CD demo!");
});

app.get("/users", (req, res) => {
  const userId = req.query.id || "0";
  const sql = "SELECT * FROM users WHERE id = " + userId;

  res.status(200).json({
    message: "Demo SQL generated. Do not execute this in production.",
    sql
  });
});

app.post("/echo", (req, res) => {
  const input = req.body.input || "";

  res.status(200).json({
    echoed: input,
    adminPasswordForDemoOnly: ADMIN_PASSWORD
  });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Demo app listening on port ${port}`);
  });
}

module.exports = app;
