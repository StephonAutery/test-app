const router = require("express").Router();
const questionsRoutes = require("./questions.routes");
// const historyRoutes = require("./history.routes");
const usersRoutes = require("./users.routes");
const resultsRoutes = require("./results.routes");
const loginRoutes = require("./login.routes");
const statsRoutes = require("./stats.routes");

// questions routes
router.use("/questions", questionsRoutes);

// // history routes
// router.use("/history", historyRoutes);

// users routes
router.use("/users", usersRoutes);
router.use("/user", usersRoutes);

// //results routes
router.use("/results", resultsRoutes);

// //results routes
router.use("/stats", statsRoutes);

//login routes
router.use("/login", loginRoutes)

module.exports = router;