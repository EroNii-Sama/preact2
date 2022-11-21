const getStudents = "SELECT * FROM estudiantes";

const getStudentsById = "SELECT * FROM estudiantes WHERE id = $1";

const createStudent =
  "INSERT INTO estudiantes(nombre,apellido,edad,sexo) VALUES ($1, $2, $3, $4)";
const removeStudent = "DELETE FROM estudiantes WHERE id = $1";

module.exports = {
  getStudents,
  getStudentsById,
  createStudent,
  removeStudent,
};
