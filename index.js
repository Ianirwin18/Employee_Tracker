const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./config/connection");
const viewAllDepartments = require("./scripts/viewAllDepartments");
const viewAllEmployees = require("./scripts/viewAllEmployees");
const viewAllRoles = require("./scripts/viewAllRoles");
const addEmployee = require("./scripts/addEmployee");
const addDepartment = require("./scripts/addDepartment");
const addRole = require("./scripts/addRole");

// Refactor to async / await
async function userChoice() {
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      choices: [
        "View All Employees",
        "View All Departments",
        "View All Roles",
        "Add an Employee",
        "Add a Department",
        "Add a Role",
        "Exit",
      ],
      message: "What would you like to do?",
    },
  ]);
  switch (choice) {
    case "View All Employees":
      console.log(`You picked: `, choice);
      const allEmployees = await viewAllEmployees();
      console.table(allEmployees[0]);
      return userChoice();

    case "View All Departments":
      console.log(`You picked: `, choice);
      const allDepartments = await viewAllDepartments();
      console.table(allDepartments[0]);
      return userChoice();

    case "View All Roles":
      console.log(`You picked: `, choice);
      const allRoles = await viewAllRoles();
      console.table(allRoles[0]);
      return userChoice();

    case "Add an Employee":
      console.log(`You picked: `, choice);
      const employee = await addEmployee();
      console.log(employee);
      return userChoice();

    case "Add a Department":
      console.log(`You picked: `, choice);
      const department = await addDepartment();
      console.log(department);
      return userChoice();

    case "Add a Role":
      console.log(`You picked: `, choice);
      const role = await addRole();
      console.log(role);
      return userChoice();

    default:
      // Exit
      console.log("Exiting Application.. bye!");
      process.exit(1);
  }
}

// CLI Application Start
function init() {
  console.log("**************************************************************");
  console.log("*                                                            *");
  console.log("*                                                            *");
  console.log("*                       EMPLOYEE MENU                        *");
  console.log("*                                                            *");
  console.log("*                                                            *");
  console.log("**************************************************************");

  // Call function
  userChoice();
}
init();
