import "reflect-metadata"
import "express-async-errors"
import express from "express"
import userRouter from "./routers/user.routes"
import sessionRouter from "./routers/session.routes"
import categoryRouter from "./routers/category.routes"
import propertyRouter from "./routers/property.routes"
import scheduleRouter from "./routers/schedule.routes"
const app = express()
app.use(express.json())

app.use("/users", userRouter)
app.use("/login", sessionRouter)
app.use("/categories", categoryRouter)
app.use("/properties", propertyRouter)
app.use("/schedules", scheduleRouter)

export default app