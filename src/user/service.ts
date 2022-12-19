import userModel from "./model";
import messages from "../services/message.json"
import { response } from "express";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const securePassword = async(password:any)=>{
    try{
        const passwordHash=await bcrypt.hash(password,10);
        return passwordHash;

    }
    catch(error){
        response.status(400).send(error);
    }
}
export default {
    verifyToken:async(req:any,res:any,next:any)=>{
        const token = req.body.token || req.query.token || req.headers["authorization"];
        if(!token){
            res.status(200).send({success:false,msg:"A token is required for authentication"});
    
        }
        try{
            const descode=jwt.verify(token,'this is dummy test');
            req.user=descode;
        }
        catch(error){
            res.status(400).send("invalid token");
        }
        return next();
    
    },
    createuser: (req: any, res: any) => {

        return new Promise(async (resolve, reject) => {
            try {
                bcrypt.hash(req.body.password, 10,async (err: any, hash: any) => {
                    if (err) {
                        return reject({
                            status: 500,
                            error: true,
                            code: "DATA_CREATE_FAILED",
                            message: messages["DATA_CREATE_FAILED"],
                        })
                    }
                    else {
                        const newuser = new userModel({
                            name: req.body?.name,
                            phone_Number: req.body?.phone_Number,
                            email: req.body?.email,
                            password:hash,
                            role: req.body?.role
                        });
                        const Data = await newuser.save();
                        if (!Data) {
                            return reject({
                                status: 400,
                                error: true,
                                code: "DATA_CREATE_FAILED",
                                message: messages["DATA_CREATE_FAILED"],
                            })
                        }
                        else {
                            return resolve({
                                status: 201,
                                error: false,
                                result: Data,
                                code: "DATA_CREATED",
                                message: messages["DATA_CREATED"],
                            })
                        }
                    }
                })


            }
            catch (error) {
                console.log("User[001] error",error);
                return reject({
                    status: 500,
                    error: true,
                    result: error,
                    code: "INTERNAL_SERVER_ERROR",
                    message: messages["INTERNAL_SERVER_ERROR"],
                })
            }
        })
    },
    signin: (req: any, res: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                userModel.find({ name: req.body.name })
                    .exec()
                    .then(user => {
                        if (user.length < 1) {
                            return reject({
                                status: 401,
                                error: true,
                                code: "USER_NOT_EXIST",
                                message: messages["USER_NOT_EXIST"]
                                
                            })

                        }
                        else {
                            bcrypt.compare(req.body.password, user[0].password, (err: any, result: any) => {
                                if (!result) {
                                    return reject({
                                        status: 401,
                                        error: true,
                                        code: "USER_NOT_EXIST",
                                        message: messages["PASSWORD_NOT_MATCH"]
                                        
                                    })
                                }
                                else {
                                    const token = jwt.sign({
                                        name: user[0].name,
                                        role: user[0].role,
                                        phone_Number: user[0].phone_Number,
                                        email: user[0].email
                                    },
                                        'this is dummy test',
                                        {
                                            expiresIn: "24h"
                                        }
                                    );
                                    // const userVer= jwt.verify(token,'this is dummy test');
                                    res.status(200).json({
                                        name: user[0].name,
                                        role: user[0].role,
                                        phone_Number: user[0].phone_Number,
                                        email: user[0].email,
                                        token: token
                                    })

                                }

                            })
                        }

                    })
            }

            catch (err) {
                console.log("User[002] error",err);
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: messages["INTERNAL_SERVER_ERROR"],
                })
            }
        })


    },
    getuser: (req: any, res: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                userModel.find({ name: req.body.name })
                    .exec()
                    .then(async user => {
                        if (user[0].role == "admin") {
                            const userfind = await userModel.find({});
                            if (userfind) {
                                return resolve({
                                    status: 200,
                                    error: false,
                                    result: userfind,
                                    code: "DATA_FOUND",
                                    message: messages["DATA_FOUND"],
                                })
                            }
                            else{
                                return reject({
                                    status: 404,
                                    error: true,
                                    code: "DATA_NOT_FOUND",
                                    message: messages["DATA_NOT_FOUND"],
                                })
                            }
                        }
                        else{
                            return reject({
                                status: 401,
                                error: true,
                                code: "UNAUTHORIZED",
                                message: messages["UNAUTHORIZED"],
                            })
                        }

                    })
            }

            catch (err) {
                console.log("User[003] error",err);
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: messages["INTERNAL_SERVER_ERROR"],
                })
            }
        })
    },




    getalluser: (req: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const userfind = await userModel.find({}).sort({ name: 1 });
                if (userfind?.length > 0) {
                    return resolve({
                        status: 200,
                        error: false,
                        result: userfind,
                        code: "DATA_FOUND",
                        message: messages["DATA_FOUND"],
                    })
                } else {
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: messages["DATA_NOT_FOUND"],
                    })
                }

            } catch (err) {
                console.log("User[004] error",err);
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: messages["INTERNAL_SERVER_ERROR"],
                })
            }
        }
        )
    },

    getoneuser: (req: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const userfind = await userModel.findOne({ _id: req.params?.userId })
                if (userfind) {
                    return resolve({
                        status: 200,
                        error: false,
                        result: userfind,
                        code: "DATA_FOUND",
                        message: messages["DATA_FOUND"],
                    })
                } else {
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: messages["DATA_NOT_FOUND"],
                    })
                }

            } catch (err) {
                console.log("User[005] error",err);
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: messages["INTERNAL_SERVER_ERROR"],
                })
            }
        }
        )
    },
    getdeleteuser: (req: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const userfind = await userModel.findByIdAndDelete({ _id: req.params?.userid })
                if (userfind) {
                    return resolve({
                        status: 200,
                        error: false,
                        result: userfind,
                        code: "DATA_FOUND",
                        message: messages["DATA_DELETED"],
                    })
                } else {
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: messages["DATA_NOT_FOUND"],
                    })
                }

            } catch (err) {
                console.log("User[006] error",err);
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: messages["INTERNAL_SERVER_ERROR"],
                })
            }
        }
        )
    },
    
    getupdateuser: (req: any,res:any) => {
        return new Promise(async (resolve, reject) => {
            
            try {
                const user_id=req.body.user_id;
                const password= req.body.password;
                const data =await userModel.findOne({_id:user_id});
                if(data){
                    const newPassword = await securePassword(password);
                    const userData = await userModel.findByIdAndUpdate({_id:user_id},{$set:{
                        password:newPassword
                    }});
                    res.status(200).send({success:true,msg:"your password has been updated"})
                }
                else{
                    res.status(200).send({success:false,msg:"user id not found"});
                    
                }
            }
            catch (err) {
                console.log("User[007] error",err);
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: messages["INTERNAL_SERVER_ERROR"],
                })
            }
        }
        )
    }

}






