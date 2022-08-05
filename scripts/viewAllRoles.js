const db = require("../config/connection");

async function viewAllRoles() {
  const allRoles = await db.promise().query("SELECT * FROM roles");
  return allRoles;
}
module.exports = viewAllRoles;
