import { Router } from "express";
import * as emp from "./requestHandler.js";

const router=Router();
router.route("/countemployees").get(emp.countEmployees)
router.route("/addemp").post(emp.addEmp)
router.route("/getemployees").get(emp.getEmployees)
router.route("/getemploy/:id").get(emp.getEmploy)
router.route("/editemploy/:_id").put(emp.editEmploy)
router.route("/deleteemploy/:_id").delete(emp.deleteEmploy)

export default router;