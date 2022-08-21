const db = require("../config/connections");
const inquirer = require("inquirer");

async function addRole() {
  // List Possible Departments
  const [department] = await db.promise().query("SELECT * FROM departments");
  const departChoices = department.map((dep) => {
    return {
      name: dep.department_name,
      value: dep.department_id,
    };
  });

  const { role_title, role_salary, department_id } = await inquirer.prompt([
    {
      type: "input",
      name: "role_title",
      message: "Enter Role's Title:",
    },
    {
      type: "input",
      name: "role_salary",
      message: "Enter Role's Salary:",
    },
    {
      type: "list",
      name: "department_id",
      message: "Enter Role's Department:",
      choices: departChoices,
    },
  ]);
  await db
    .promise()
    .query(
      `INSERT INTO roles (role_title, role_salary, department_id) VALUES (?, ?, ?)`,
      [role_title, role_salary, department_id]
    );
  return `${role_title} has been added to the database`;
}

//Export
module.exports = addRole;
