import express from "express";
import { Roles } from "../services/authenticationService";
import authorization from "../_helpers/authorization";
import permission from "../_helpers/permission";
import { createUser } from "../services/userService"

const userRouter = express.Router()

userRouter.use(authorization)
userRouter.use(permission(Roles.Admin))

userRouter.post('/create', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        const createdId = await createUser(username, password)
        res.sendStatus(createdId == -1 ? 500 : 200)
    } else {
        res.sendStatus(403)
    }  
})

export default userRouter;