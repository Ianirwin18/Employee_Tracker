const db = require("../config/connections");

async function viewAllDepartments() {
  const allDepartments = await db.promise().query("SELECT * FROM departments");
  return allDepartments;
}

module.exports = viewAllDepartments;
