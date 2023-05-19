var pool = require("./db");

async function getSabores() {
  try {
    let query = "SELECT * FROM sabores ORDER BY id ASC";
    let resultado = await pool.query(query);
    return resultado;
  } catch (error) {
    throw error;
  }
}

async function insertSabor(data) {
  try {
    let query = "INSERT INTO sabores (titulo,subtitulo,img_id) VALUES (?)";
    let resultado = await pool.query(query, [data]);
    return resultado;
  } catch (error) {
    throw error;
  }
}

async function deleteSabor(id) {
  try {
    let query = "DELETE FROM sabores WHERE id = ?";
    let resultado = await pool.query(query,[id]);
    return resultado;
  } catch (error) { 
    throw(error);
  }
};

async function getSaborById(id) {
  try {
    let query = "SELECT * FROM sabores WHERE id = ?";
    let resultado = await pool.query(query,[id]);
    return resultado;
  } catch (error) { 
    throw(error);
  }
};

async function modifySabor(data,id) {
  try {
    let query = "UPDATE sabores SET ? WHERE id = ?";
    let resultado = await pool.query(query,[data,id]);
    return resultado;
  } catch (error) { 
    throw(error);
  }
};

module.exports = { getSabores, insertSabor, deleteSabor, getSaborById, modifySabor };
