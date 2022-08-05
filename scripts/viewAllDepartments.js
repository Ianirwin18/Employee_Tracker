const db = require("../config/connection");

async function viewAllDepartments() {
  const allDepartments = await db.promise().query("SELECT * FROM departments");
  return allDepartments;
}

module.exports = viewAllDepartments;
