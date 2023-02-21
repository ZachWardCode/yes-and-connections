import express from "express";

import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";

import theatersRouter from "./api/v1/theatersRouter.js";
import teamsRouter from "./api/v1/teamsRouter.js";

import clientRouter from "./clientRouter.js";

const rootRouter = new express.Router();

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);

rootRouter.use("/api/v1/theaters", theatersRouter);
rootRouter.use("/api/v1/teams", teamsRouter);

rootRouter.use("/", clientRouter);

export default rootRouter;
