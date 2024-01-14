import mysql from "mysql2";
// import mysql from 'mysql'
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.get("/", async (req, res) => {
  // Create the connection to the database
  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  // // simple query
  // connection.query('show tables', function (err, results, fields) {
  //   console.log(results) // results contains rows returned by server
  //   console.log(fields) // fields contains extra metadata about results, if available
  // })

  // Example with placeholders
  const r = async() => {
    connection.query("SELECT * FROM user", function (err, results) {
      console.log(results);
      res.send(results);
    });
  };

  r();

  connection.end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
