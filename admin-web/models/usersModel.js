var pool = require("./db");
var md5 = require("md5");

async function getUserByUsernameAndPassword(user, password) {
  try {
    let query =
      "SELECT * FROM usuarios where user = ? AND password = ? limit 1";
    let resultado = await pool.query(query, [user, md5(password)]);
    return resultado[0];
  } catch (error) {
    console.log(error);
  }
}

module.exports = getUserByUsernameAndPassword;
