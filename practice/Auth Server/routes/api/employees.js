
const express = require("express")
const router = express.Router()
const employeesController = require("../../controller/employeeController")


const ROLES_LIST = require("../../config/roles_list")
const verifyRoles = require("../../middleware/verifyRoles")

router.route("/")
    .get(employeesController.getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Editor),employeesController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Editor),employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee)

router.route("/:id")
    .get(employeesController.getEmployee)

module.exports = router;