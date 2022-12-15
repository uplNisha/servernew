import studentModel from "./model"

export default {
    createstudent: (req: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const newStudent = new studentModel({
                    name: req.body?.name,
                    branch: req.body?.branch,
                    email: req.body?.email,
                    password:req.body?.password,
                    addmissionDate: new Date().toISOString(),
                });
                const Data = await newStudent.save();
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
    // insertstudent: (req: any) => {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const newStudent = studentModel.insertOne({name: "Akshay", branch: "CSE"});
    //             const Data = await newStudent.save();
    //             if (!Data) {
    //                 return reject({
    //                     status: 400,
    //                     error: true,
    //                     code: "DATA_CREATE_FAILED",
    //                     message: "DATA_CREATE_FAILED",
    //                 })
    //             }
    //             else {
    //                 return resolve({
    //                     status: 201,
    //                     error: false,
    //                     result: Data,
    //                     code: "DATA_CREATED",
    //                     message: "DATA_CREATED",
    //                 })
    //             }

    //         }
    //         catch (error) {
    //             return reject({
    //                 status: 500,
    //                 error: true,
    //                 result: error,
    //                 code: "INTERNAL_SERVER_ERROR",
    //                 message: "INTERNAL_SERVER_ERROR",
    //             })
    //         }
    //     })
    // },
    getstudent:(req:any)=>{
        return new Promise(async(resolve, reject) => {
            try{
                const studentfind=await studentModel.find({},{name:1,email:1,_id:0}).sort({name:1});
                if(studentfind?.length> 0){
                    return resolve({
                        status: 200,
                        error: false,
                        result: studentfind,
                        code: "DATA_FOUND",
                        message: "DATA_FOUND",
                    })
                }else{
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: "DATA_NOT_FOUND",
                    })
                }

            }catch(err){
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        }
    )},
    getmatchstudent:(req:any)=>{
        return new Promise(async(resolve, reject) => {
            try{
                const studentfind=await studentModel.aggregate([{ $match: { branch: "EC" }},{ $sort: { addmissionDate  : -1 } }])
                if(studentfind?.length> 0){
                    return resolve({
                        status: 200,
                        error: false,
                        result: studentfind,
                        code: "DATA_FOUND",
                        message: "DATA_FOUND",
                    })
                }else{
                    return reject({
                        status: 200,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: "DATA_NOT_FOUND",
                    })
                }

            }catch(err){
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        }
    )},
    
    getonestudent:(req:any)=>{
        return new Promise(async(resolve, reject) => {
            try{
                // const studentfind=await studentModel.find({ "_id": "638ee586f05937c6fdd41552"})
                const studentfind = await studentModel.findOne({ _id: req.params?.studentId })
                if(studentfind){
                    return resolve({
                        status: 200,
                        error: false,
                        result: studentfind,
                        code: "DATA_FOUND",
                        message: "DATA_FOUND",
                    })
                }else{
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: "DATA_NOT_FOUND",
                    })
                }

            }catch(err){
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        }
    )},
    getdeletestudent:(req:any)=>{
        return new Promise(async(resolve, reject) => {
            try{
                // const studentfind=await studentModel.find({ "_id": "638ee586f05937c6fdd41552"})
                const studentfind = await studentModel.findByIdAndDelete({ _id: req.params?.id })
                if(studentfind){
                    return resolve({
                        status: 200,
                        error: false,
                        result: studentfind,
                        code: "DATA_FOUND",
                        message: "DATA_DELETED",
                    })
                }else{
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: "DATA_NOT_FOUND",
                    })
                }

            }catch(err){
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        }
    )},
    getupdatestudent:(req:any)=>{
        return new Promise(async(resolve, reject) => {
            try{
                const studentfind = await studentModel.findByIdAndUpdate(req.params?.id, req.body, {
                    new: true
                  });
                if(studentfind){
                    return resolve({
                        status: 200,
                        error: false,
                        result: studentfind,
                        code: "DATA_FOUND",
                        message: "DATA_DELETED",
                    })
                }else{
                    return reject({
                        status: 404,
                        error: true,
                        code: "DATA_NOT_FOUND",
                        message: "DATA_NOT_FOUND",
                    })
                }

            }catch(err){
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: "INTERNAL_SERVER_ERROR",
                })
            }
        }
    )}
    
}