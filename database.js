const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "photo",
});

pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

pool
  .query(`SELECT * FROM photo`)
  .then((res) => {
    console.log(res.rows[0].name);
  })
  .catch((err) => console.error("query error", err.stack));
