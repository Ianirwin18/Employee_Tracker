const db = require("../config/connections");
const inquirer = require("inquirer");

async function addDepartment() {
  const [roles] = await db
    .promise()
    .query(`SELECT role_id, role_title FROM roles`);
  const choices = roles.map((role) => {
    return {
      name: role.role_title,
      value: role.role_id,
    };
  });
  const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "Enter Employee's First Name:",
    },
    {
      name: "last_name",
      message: "Enter Employee's Last Name:",
      type: "input",
    },
    {
      name: "role_id",
      message: "Select Employee's Title:",
      type: "list",
      choices,
    },
  ]);
  await db
    .promise()
    .query(
      `INSERT INTO employees (first_name, last_name, role_id, VALUES (?, ?, ?, ?)`,
      [first_name, last_name, role_id, manager_id]
    );
  return `${first_name} ${last_name} has been added to the database`;
}

module.exports = addDepartment;
