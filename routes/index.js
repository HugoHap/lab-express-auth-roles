module.exports = app => {
  
  // Base routes
  const indexRouter = require("./index.routes");
  app.use("/", indexRouter);
  
  // Auth routes
  const authRouter = require("./auth.routes");
  app.use("/", authRouter); 

  const studentRouter = require("./students.routes")
  app.use("/students", studentRouter);

  const coursesRoutes = require("./courses.routes")
  app.use("/courses", coursesRoutes)
}
