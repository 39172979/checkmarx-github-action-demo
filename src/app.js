const express = require("express");

const app = express();
app.use(express.json());

// Demo only: intentionally hardcoded dummy secret for security scanner testing.
// Do NOT use hardcoded secrets in real projects.
const ADMIN_PASSWORD = "Password123!";

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

// Demo only: intentionally vulnerable style SQL string construction.
// Do NOT build SQL queries like this in real projects.
app.get("/users", (req, res) => {
  const userId = req.query.id || "0";

  const sql = "SELECT * FROM users WHERE id = " + userId;

  res.status(200).json({
    message: "Demo SQL generated. Do not execute this in production.",
    sql
  });
});

// Demo only: echo user input back.
// In real projects, validate and encode output properly.
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
