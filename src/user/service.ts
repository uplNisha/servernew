import userModel from "./model";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

export default {
    createuser: (req: any, res: any) => {

        return new Promise(async (resolve, reject) => {
            try {
                bcrypt.hash(req.body.password, 10, (err: any, hash: any) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    }
                    else {
                        const newuser = new userModel({
                            name: req.body?.name,
                            phone_Number: req.body?.phone_Number,
                            email: req.body?.email,
                            password: hash,
                            role: req.body?.role


                        });
                        const Data = newuser.save();
                        if (!Data) {
                            return reject({
                                status: 400,
                                error: true,
                                code: "DATA_CREATE_FAILED",
                                message: "DATA_CREATE_FAILED",
                            })
                        }
                        else {
                            return resolve({
                                status: 201,
                                error: false,
                                result: Data,
                                code: "DATA_CREATED",
                                message: "DATA_CREATED",
                            })
                        }
                    }
                })


            }
            catch (error) {
                return reject({
                    status: 500,
                    error: true,
                    result: error,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        })
    },
    signuser: (req: any, res: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                userModel.find({ name: req.body.name })
                    .exec()
                    .then(user => {
                        if (user.length < 1) {
                            return res.status(401).json({
                                message: "user_not_exist"
                            })

                        }
                        else {
                            bcrypt.compare(req.body.password, user[0].password, (err: any, result: any) => {
                                if (!result) {
                                    return res.status(401).json({
                                        message: "passward_not_match"
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
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        })


    },
    getuser: (req: any, res: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                userModel.find({ name: req.body.name })
                    .exec()
                    .then(user => {
                        if (user[0].role == "admin") {
                            const userfind = userModel.find({});
                            if (userfind) {
                                return resolve({
                                    status: 200,
                                    error: false,
                                    result: userfind,
                                    code: "DATA_FOUND",
                                    message: "DATA_FOUND",
                                })
                            }
                        }

                    })
            }

            catch (err) {
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
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
                        message: "DATA_FOUND",
                    })
                } else {
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: "DATA_NOT_FOUND",
                    })
                }

            } catch (err) {
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
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
                        message: "DATA_FOUND",
                    })
                } else {
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: "DATA_NOT_FOUND",
                    })
                }

            } catch (err) {
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        }
        )
    },
    getdeleteuser: (req: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const userfind = await userModel.findByIdAndDelete({ _id: req.params?.id })
                if (userfind) {
                    return resolve({
                        status: 200,
                        error: false,
                        result: userfind,
                        code: "DATA_FOUND",
                        message: "DATA_DELETED",
                    })
                } else {
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: "DATA_NOT_FOUND",
                    })
                }

            } catch (err) {
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        }
        )
    },
    getupdateuser: (req: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const userfind = await userModel.findByIdAndUpdate(req.params?.id, req.body, {
                    new: true
                });
                if (userfind) {
                    return resolve({
                        status: 200,
                        error: false,
                        result: userfind,
                        code: "DATA_FOUND",
                        message: "DATA_DELETED",
                    })
                } else {
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: "DATA_NOT_FOUND",
                    })
                }

            } catch (err) {
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        }
        )
    }

}





