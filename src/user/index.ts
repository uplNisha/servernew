import * as express from "express";
import userService from "./service";

const router = express.Router()
/**
 * @type - POST
 * @route - /api/user/signnup
 * @description - Create user data
 * @function - createuser
 */
router.post("/signup", async (req: any, res: any) => {
    userService.createuser(req,res).then((response: any) => {
        return res.status(response.status).send({
            error: response.error,
            result: response.result,
            code: response.code,
            message: response.message
        });
    })
        .catch((err: any) => {
            return res.status(err.status).send({
                error: err.error,
                result: err.result,
                code: err.code,
                message: err.message
            })
        })
})
/**
 * @type - POST
 * @route - /api/user/signin
 * @description - signin api 
 * @function - signin
 */
router.post("/signin", async (req: any, res: any) => {
    userService.signin(req,res).then((response: any) => {
        return res.status(response.status).send({
            error: response.error,
            result: response.result,
            code: response.code,
            message: response.message
        });
    })
        .catch((err: any) => {
            return res.status(err.status).send({
                error: err.error,
                result: err.result,
                code: err.code,
                message: err.message
            })
        })
})
/**
 * @type - GET
 * @route - /api/todo/
 * @description - Get user data
 * @function - getuser
 */
 router.get('/',async(req: any, res: any)=>{
    userService.getuser(req,res)
    .then((response:any)=>{
        return res.status(response.status).send({
            error: response.error,
            result: response.result,
            code: response.code,
            message: response.message
        });
    })
    .catch((err: any) => {
        return res.status(err.status).send({
            error: err.error,
            result: err.result,
            code: err.code,
            message: err.message
        })
    })
    })
    
    /**
 * @type - GET
 * @route - /api/user/:userId
 * @description - Get one user data from param
 * @function - getoneuser
 */
 router.get('/:userId',async(req: any, res: any)=>{
    userService.getoneuser(req)
    .then((response:any)=>{
        return res.status(response.status).send({
            error: response.error,
            result: response.result,
            code: response.code,
            message: response.message
        });
    })
    .catch((err: any) => {
        return res.status(err.status).send({
            error: err.error,
            result: err.result,
            code: err.code,
            message: err.message
        })
    })
    })
    /**
 * @type - delete
 * @route - /api/user/:Id
 * @description - find and delete 
 * @function - getdeleteuser
 */
    router.delete('/:id',async(req: any, res: any)=>{
        userService.getdeleteuser(req)
        .then((response:any)=>{
            return res.status(response.status).send({
                error: response.error,
                result: response.result,
                code: response.code,
                message: response.message
            });
        })
        .catch((err: any) => {
            return res.status(err.status).send({
                error: err.error,
                result: err.result,
                code: err.code,
                message: err.message
            })
        })
        })
         /**
 * @type - delete
 * @route - /api/user/:Id
 * @description - find and delete 
 * @function - getdeleteuser
 */
    router.patch('/:id',async(req: any, res: any)=>{
        userService.getupdateuser(req)
        .then((response:any)=>{
            return res.status(response.status).send({
                error: response.error,
                result: response.result,
                code: response.code,
                message: response.message
            });
        })
        .catch((err: any) => {
            return res.status(err.status).send({
                error: err.error,
                result: err.result,
                code: err.code,
                message: err.message
            })
        })
        })
export default router