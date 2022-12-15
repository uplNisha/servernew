import * as express from "express";
import studentService from "./service";

const router = express.Router()
/**
 * @type - POST
 * @route - /api/student/
 * @description - Create student data
 * @function - createstudent
 */
router.post("/", async (req: any, res: any) => {
    studentService.createstudent(req).then((response: any) => {
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
 * @description - Get student data
 * @function - getstudent
 */
 router.get('/',async(req: any, res: any)=>{
    studentService.getstudent(req)
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
 * @route - /api/student/match
 * @description - Get match student data
 * @function - getmatchstudent
 */
 router.get('/match',async(req: any, res: any)=>{
    studentService.getmatchstudent(req)
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
 * @route - /api/student/:studentId
 * @description - Get one student data from param
 * @function - getonestudent
 */
 router.get('/:studentId',async(req: any, res: any)=>{
    studentService.getonestudent(req)
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
 * @route - /api/student/:Id
 * @description - find and delete 
 * @function - getdeletestudent
 */
    router.delete('/:id',async(req: any, res: any)=>{
        studentService.getdeletestudent(req)
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
 * @route - /api/student/:Id
 * @description - find and delete 
 * @function - getdeletestudent
 */
    router.patch('/:id',async(req: any, res: any)=>{
        studentService.getupdatestudent(req)
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