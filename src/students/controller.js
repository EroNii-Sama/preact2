const pool = require("../../db");
const queries = require("./queries");
const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) {
      throw error;
    }
    /* Envío de la respuesta al cliente. */
    res.status(200).json(results.rows);
  });
};
const getStudentsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsById, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const createStudent = (req, res) => {
  const { nombre, apellido, edad, sexo } = req.body;
  pool.query(
    queries.createStudent,
    [nombre, apellido, edad, sexo],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Estudiante agregado con ID: ${results.insertId}`);
    }
  );
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.removeStudent, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Estudiante eliminado con ID: ${id}`);
  });
};
module.exports = {
  getStudents,
  getStudentsById,
  createStudent,
  removeStudent,
};
