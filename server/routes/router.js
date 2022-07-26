const express = require("express");
const router = express.Router();
const app = express();
const services = require("../services/render");
const controller = require("../controller/controller");

/**
 *  @description root Route
 *  @method GET/
 */

router.get("/", services.homeRoutes);

/**
 *  @description add users
 *  @method GET/add user
 */
router.get("/add_user", services.add_user);

/**
 *  @description update users
 *  @method GET/update_user
 */
router.get("/update_user", services.update_user);

//API

router.post("/api/users", controller.create);
router.get("/api/users", controller.find);
router.get("/api/users/:id", controller.findOne);
router.put("/api/users/:id", controller.update);
router.delete("/api/users/:id", controller.delete);

module.exports = router;
