/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nconst envFound = dotenv_1.default.config();\r\nif (envFound.error) {\r\n    // This error should crash whole process\r\n    console.log(\"⚠️  Couldn't find .env file  ⚠️\");\r\n    setTimeout(() => {\r\n        process.exit(1);\r\n    }, 2000);\r\n}\r\nconst PORT = parseInt(process.env.PORT, 10);\r\nconst MONGODB_URI = process.env.MONGODB_URI;\r\nconst ENVIRONMENT = \"development\";\r\nconst SECKEY = process.env.sec_key;\r\nconst EXPIRES = parseInt(process.env.jwtExpiryIn);\r\nconst TOKEN_SEC = process.env.jwtPrivateKey;\r\nexports[\"default\"] = {\r\n    port: PORT,\r\n    databaseURL: MONGODB_URI,\r\n    Seckey: SECKEY,\r\n    tokenSecret: TOKEN_SEC,\r\n    environment: ENVIRONMENT,\r\n    Expires: EXPIRES,\r\n    api: {\r\n        prefix: \"/api\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://servernew/./src/config/index.ts?");

/***/ }),

/***/ "./src/database/index.ts":
/*!*******************************!*\
  !*** ./src/database/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./src/config/index.ts\"));\r\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\r\n// logger.level = \"error\";\r\nexports[\"default\"] = () => {\r\n    mongoose\r\n        .connect(config_1.default.databaseURL, {\r\n        useUnifiedTopology: true,\r\n        useNewUrlParser: true,\r\n        // useCreateIndex: true,\r\n    })\r\n        .then(() => console.log(\"👉🏾👉🏾 Connected to mongoDb\"))\r\n        .catch((err) => {\r\n        console.log(`Error on connecting to mongo${err}`);\r\n        setTimeout(() => {\r\n            process.exit(1);\r\n        }, 2000);\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://servernew/./src/database/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst index_1 = __importDefault(__webpack_require__(/*! ./database/index */ \"./src/database/index.ts\"));\r\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config/index.ts\"));\r\nconst route_1 = __importDefault(__webpack_require__(/*! ./route/route */ \"./src/route/route.ts\"));\r\nconst app = (0, express_1.default)();\r\napp.use(express_1.default.json());\r\napp.use(\"/api\", route_1.default);\r\n(0, index_1.default)();\r\nconst server = app.listen(config_1.default.port, () => {\r\n    console.log(`\r\n    ################################################\r\n    🛡️  Server listening on port: http://localhost:${config_1.default.port} 🛡️\r\n    ################################################\r\n  `);\r\n});\r\nif (true) {\r\n    module.hot.accept();\r\n    module.hot.dispose(() => server.close());\r\n}\r\n\n\n//# sourceURL=webpack://servernew/./src/index.ts?");

/***/ }),

/***/ "./src/route/route.ts":
/*!****************************!*\
  !*** ./src/route/route.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst student_1 = __importDefault(__webpack_require__(/*! ../student */ \"./src/student/index.ts\"));\r\nconst user_1 = __importDefault(__webpack_require__(/*! ../user */ \"./src/user/index.ts\"));\r\nlet router = express_1.default.Router();\r\nrouter.use(\"/student\", student_1.default);\r\nrouter.use(\"/user\", user_1.default);\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://servernew/./src/route/route.ts?");

/***/ }),

/***/ "./src/student/index.ts":
/*!******************************!*\
  !*** ./src/student/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express = __importStar(__webpack_require__(/*! express */ \"express\"));\r\nconst service_1 = __importDefault(__webpack_require__(/*! ./service */ \"./src/student/service.ts\"));\r\nconst router = express.Router();\r\n/**\r\n * @type - POST\r\n * @route - /api/student/\r\n * @description - Create student data\r\n * @function - createstudent\r\n */\r\nrouter.post(\"/\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.createstudent(req).then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n * @type - GET\r\n * @route - /api/todo/\r\n * @description - Get student data\r\n * @function - getstudent\r\n */\r\nrouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.getstudent(req)\r\n        .then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n* @type - GET\r\n* @route - /api/student/match\r\n* @description - Get match student data\r\n* @function - getmatchstudent\r\n*/\r\nrouter.get('/match', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.getmatchstudent(req)\r\n        .then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n* @type - GET\r\n* @route - /api/student/:studentId\r\n* @description - Get one student data from param\r\n* @function - getonestudent\r\n*/\r\nrouter.get('/:studentId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.getonestudent(req)\r\n        .then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n* @type - delete\r\n* @route - /api/student/:Id\r\n* @description - find and delete\r\n* @function - getdeletestudent\r\n*/\r\nrouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.getdeletestudent(req)\r\n        .then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n* @type - delete\r\n* @route - /api/student/:Id\r\n* @description - find and delete\r\n* @function - getdeletestudent\r\n*/\r\nrouter.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.getupdatestudent(req)\r\n        .then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://servernew/./src/student/index.ts?");

/***/ }),

/***/ "./src/student/model.ts":
/*!******************************!*\
  !*** ./src/student/model.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst Schema = mongoose.Schema;\r\nconst studentSchema = new Schema({\r\n    name: {\r\n        type: String\r\n    },\r\n    branch: {\r\n        type: String\r\n    },\r\n    email: {\r\n        type: String\r\n    },\r\n    password: {\r\n        type: String,\r\n        required: [true, 'Please provied a password']\r\n    },\r\n    addmissionDate: {\r\n        type: String,\r\n    },\r\n    createdBy: {\r\n        type: Schema.Types.ObjectId,\r\n        ref: \"user\",\r\n    },\r\n});\r\nexports[\"default\"] = mongoose.model('student', studentSchema);\r\n\n\n//# sourceURL=webpack://servernew/./src/student/model.ts?");

/***/ }),

/***/ "./src/student/service.ts":
/*!********************************!*\
  !*** ./src/student/service.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst model_1 = __importDefault(__webpack_require__(/*! ./model */ \"./src/student/model.ts\"));\r\nexports[\"default\"] = {\r\n    createstudent: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            var _a, _b, _c, _d;\r\n            try {\r\n                const newStudent = new model_1.default({\r\n                    name: (_a = req.body) === null || _a === void 0 ? void 0 : _a.name,\r\n                    branch: (_b = req.body) === null || _b === void 0 ? void 0 : _b.branch,\r\n                    email: (_c = req.body) === null || _c === void 0 ? void 0 : _c.email,\r\n                    password: (_d = req.body) === null || _d === void 0 ? void 0 : _d.password,\r\n                    addmissionDate: new Date().toISOString(),\r\n                });\r\n                const Data = yield newStudent.save();\r\n                if (!Data) {\r\n                    return reject({\r\n                        status: 400,\r\n                        error: true,\r\n                        code: \"DATA_CREATE_FAILED\",\r\n                        message: \"DATA_CREATE_FAILED\",\r\n                    });\r\n                }\r\n                else {\r\n                    return resolve({\r\n                        status: 201,\r\n                        error: false,\r\n                        result: Data,\r\n                        code: \"DATA_CREATED\",\r\n                        message: \"DATA_CREATED\",\r\n                    });\r\n                }\r\n            }\r\n            catch (error) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: error,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    // insertstudent: (req: any) => {\r\n    //     return new Promise(async (resolve, reject) => {\r\n    //         try {\r\n    //             const newStudent = studentModel.insertOne({name: \"Akshay\", branch: \"CSE\"});\r\n    //             const Data = await newStudent.save();\r\n    //             if (!Data) {\r\n    //                 return reject({\r\n    //                     status: 400,\r\n    //                     error: true,\r\n    //                     code: \"DATA_CREATE_FAILED\",\r\n    //                     message: \"DATA_CREATE_FAILED\",\r\n    //                 })\r\n    //             }\r\n    //             else {\r\n    //                 return resolve({\r\n    //                     status: 201,\r\n    //                     error: false,\r\n    //                     result: Data,\r\n    //                     code: \"DATA_CREATED\",\r\n    //                     message: \"DATA_CREATED\",\r\n    //                 })\r\n    //             }\r\n    //         }\r\n    //         catch (error) {\r\n    //             return reject({\r\n    //                 status: 500,\r\n    //                 error: true,\r\n    //                 result: error,\r\n    //                 code: \"INTERNAL_SERVER_ERROR\",\r\n    //                 message: \"INTERNAL_SERVER_ERROR\",\r\n    //             })\r\n    //         }\r\n    //     })\r\n    // },\r\n    getstudent: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            try {\r\n                const studentfind = yield model_1.default.find({}, { name: 1, email: 1, _id: 0 }).sort({ name: 1 });\r\n                if ((studentfind === null || studentfind === void 0 ? void 0 : studentfind.length) > 0) {\r\n                    return resolve({\r\n                        status: 200,\r\n                        error: false,\r\n                        result: studentfind,\r\n                        code: \"DATA_FOUND\",\r\n                        message: \"DATA_FOUND\",\r\n                    });\r\n                }\r\n                else {\r\n                    return reject({\r\n                        status: 404,\r\n                        error: true,\r\n                        code: \"DATA_NOT_FOUND\",\r\n                        message: \"DATA_NOT_FOUND\",\r\n                    });\r\n                }\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    getmatchstudent: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            try {\r\n                const studentfind = yield model_1.default.aggregate([{ $match: { branch: \"EC\" } }, { $sort: { addmissionDate: -1 } }]);\r\n                if ((studentfind === null || studentfind === void 0 ? void 0 : studentfind.length) > 0) {\r\n                    return resolve({\r\n                        status: 200,\r\n                        error: false,\r\n                        result: studentfind,\r\n                        code: \"DATA_FOUND\",\r\n                        message: \"DATA_FOUND\",\r\n                    });\r\n                }\r\n                else {\r\n                    return reject({\r\n                        status: 200,\r\n                        error: true,\r\n                        code: \"DATA_NOT_FOUND\",\r\n                        message: \"DATA_NOT_FOUND\",\r\n                    });\r\n                }\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    getonestudent: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            var _a;\r\n            try {\r\n                // const studentfind=await studentModel.find({ \"_id\": \"638ee586f05937c6fdd41552\"})\r\n                const studentfind = yield model_1.default.findOne({ _id: (_a = req.params) === null || _a === void 0 ? void 0 : _a.studentId });\r\n                if (studentfind) {\r\n                    return resolve({\r\n                        status: 200,\r\n                        error: false,\r\n                        result: studentfind,\r\n                        code: \"DATA_FOUND\",\r\n                        message: \"DATA_FOUND\",\r\n                    });\r\n                }\r\n                else {\r\n                    return reject({\r\n                        status: 404,\r\n                        error: true,\r\n                        code: \"DATA_NOT_FOUND\",\r\n                        message: \"DATA_NOT_FOUND\",\r\n                    });\r\n                }\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    getdeletestudent: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            var _a;\r\n            try {\r\n                // const studentfind=await studentModel.find({ \"_id\": \"638ee586f05937c6fdd41552\"})\r\n                const studentfind = yield model_1.default.findByIdAndDelete({ _id: (_a = req.params) === null || _a === void 0 ? void 0 : _a.id });\r\n                if (studentfind) {\r\n                    return resolve({\r\n                        status: 200,\r\n                        error: false,\r\n                        result: studentfind,\r\n                        code: \"DATA_FOUND\",\r\n                        message: \"DATA_DELETED\",\r\n                    });\r\n                }\r\n                else {\r\n                    return reject({\r\n                        status: 404,\r\n                        error: true,\r\n                        code: \"DATA_NOT_FOUND\",\r\n                        message: \"DATA_NOT_FOUND\",\r\n                    });\r\n                }\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    getupdatestudent: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            var _a;\r\n            try {\r\n                const studentfind = yield model_1.default.findByIdAndUpdate((_a = req.params) === null || _a === void 0 ? void 0 : _a.id, req.body, {\r\n                    new: true\r\n                });\r\n                if (studentfind) {\r\n                    return resolve({\r\n                        status: 200,\r\n                        error: false,\r\n                        result: studentfind,\r\n                        code: \"DATA_FOUND\",\r\n                        message: \"DATA_DELETED\",\r\n                    });\r\n                }\r\n                else {\r\n                    return reject({\r\n                        status: 404,\r\n                        error: true,\r\n                        code: \"DATA_NOT_FOUND\",\r\n                        message: \"DATA_NOT_FOUND\",\r\n                    });\r\n                }\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://servernew/./src/student/service.ts?");

/***/ }),

/***/ "./src/user/index.ts":
/*!***************************!*\
  !*** ./src/user/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express = __importStar(__webpack_require__(/*! express */ \"express\"));\r\nconst service_1 = __importDefault(__webpack_require__(/*! ./service */ \"./src/user/service.ts\"));\r\nconst router = express.Router();\r\n/**\r\n * @type - POST\r\n * @route - /api/user/signnup\r\n * @description - Create user data\r\n * @function - createuser\r\n */\r\nrouter.post(\"/signup\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.createuser(req, res).then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n * @type - POST\r\n * @route - /api/user/signin\r\n * @description - signin api\r\n * @function - signuser\r\n */\r\nrouter.post(\"/signin\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.signuser(req, res).then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n * @type - GET\r\n * @route - /api/todo/\r\n * @description - Get user data\r\n * @function - getuser\r\n */\r\nrouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.getuser(req, res)\r\n        .then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n* @type - GET\r\n* @route - /api/user/:userId\r\n* @description - Get one user data from param\r\n* @function - getoneuser\r\n*/\r\nrouter.get('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.getoneuser(req)\r\n        .then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n* @type - delete\r\n* @route - /api/user/:Id\r\n* @description - find and delete\r\n* @function - getdeleteuser\r\n*/\r\nrouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.getdeleteuser(req)\r\n        .then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\n/**\r\n* @type - delete\r\n* @route - /api/user/:Id\r\n* @description - find and delete\r\n* @function - getdeleteuser\r\n*/\r\nrouter.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    service_1.default.getupdateuser(req)\r\n        .then((response) => {\r\n        return res.status(response.status).send({\r\n            error: response.error,\r\n            result: response.result,\r\n            code: response.code,\r\n            message: response.message\r\n        });\r\n    })\r\n        .catch((err) => {\r\n        return res.status(err.status).send({\r\n            error: err.error,\r\n            result: err.result,\r\n            code: err.code,\r\n            message: err.message\r\n        });\r\n    });\r\n}));\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://servernew/./src/user/index.ts?");

/***/ }),

/***/ "./src/user/model.ts":
/*!***************************!*\
  !*** ./src/user/model.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst Schema = mongoose.Schema;\r\nconst userSchema = new Schema({\r\n    name: {\r\n        type: String\r\n    },\r\n    phone_Number: {\r\n        type: Number\r\n    },\r\n    role: {\r\n        type: String,\r\n        enum: ['user', 'admin'],\r\n        default: 'user'\r\n    },\r\n    email: {\r\n        type: String\r\n    },\r\n    password: {\r\n        type: String,\r\n        required: [true, 'Please provied a password']\r\n    }\r\n});\r\nexports[\"default\"] = mongoose.model('user', userSchema);\r\n\n\n//# sourceURL=webpack://servernew/./src/user/model.ts?");

/***/ }),

/***/ "./src/user/service.ts":
/*!*****************************!*\
  !*** ./src/user/service.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst model_1 = __importDefault(__webpack_require__(/*! ./model */ \"./src/user/model.ts\"));\r\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nexports[\"default\"] = {\r\n    createuser: (req, res) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            try {\r\n                bcrypt.hash(req.body.password, 10, (err, hash) => {\r\n                    var _a, _b, _c, _d;\r\n                    if (err) {\r\n                        return res.status(500).json({\r\n                            error: err\r\n                        });\r\n                    }\r\n                    else {\r\n                        const newuser = new model_1.default({\r\n                            name: (_a = req.body) === null || _a === void 0 ? void 0 : _a.name,\r\n                            phone_Number: (_b = req.body) === null || _b === void 0 ? void 0 : _b.phone_Number,\r\n                            email: (_c = req.body) === null || _c === void 0 ? void 0 : _c.email,\r\n                            password: hash,\r\n                            role: (_d = req.body) === null || _d === void 0 ? void 0 : _d.role\r\n                        });\r\n                        const Data = newuser.save();\r\n                        if (!Data) {\r\n                            return reject({\r\n                                status: 400,\r\n                                error: true,\r\n                                code: \"DATA_CREATE_FAILED\",\r\n                                message: \"DATA_CREATE_FAILED\",\r\n                            });\r\n                        }\r\n                        else {\r\n                            return resolve({\r\n                                status: 201,\r\n                                error: false,\r\n                                result: Data,\r\n                                code: \"DATA_CREATED\",\r\n                                message: \"DATA_CREATED\",\r\n                            });\r\n                        }\r\n                    }\r\n                });\r\n            }\r\n            catch (error) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: error,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    signuser: (req, res) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            try {\r\n                model_1.default.find({ name: req.body.name })\r\n                    .exec()\r\n                    .then(user => {\r\n                    if (user.length < 1) {\r\n                        return res.status(401).json({\r\n                            message: \"user_not_exist\"\r\n                        });\r\n                    }\r\n                    else {\r\n                        bcrypt.compare(req.body.password, user[0].password, (err, result) => {\r\n                            if (!result) {\r\n                                return res.status(401).json({\r\n                                    message: \"passward_not_match\"\r\n                                });\r\n                            }\r\n                            else {\r\n                                const token = jwt.sign({\r\n                                    name: user[0].name,\r\n                                    role: user[0].role,\r\n                                    phone_Number: user[0].phone_Number,\r\n                                    email: user[0].email\r\n                                }, 'this is dummy test', {\r\n                                    expiresIn: \"24h\"\r\n                                });\r\n                                // const userVer= jwt.verify(token,'this is dummy test');\r\n                                res.status(200).json({\r\n                                    name: user[0].name,\r\n                                    role: user[0].role,\r\n                                    phone_Number: user[0].phone_Number,\r\n                                    email: user[0].email,\r\n                                    token: token\r\n                                });\r\n                            }\r\n                        });\r\n                    }\r\n                });\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    getuser: (req, res) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            try {\r\n                model_1.default.find({ name: req.body.name })\r\n                    .exec()\r\n                    .then(user => {\r\n                    if (user[0].role == \"admin\") {\r\n                        const userfind = model_1.default.find({});\r\n                        if (userfind) {\r\n                            return resolve({\r\n                                status: 200,\r\n                                error: false,\r\n                                result: userfind,\r\n                                code: \"DATA_FOUND\",\r\n                                message: \"DATA_FOUND\",\r\n                            });\r\n                        }\r\n                    }\r\n                });\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    getalluser: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            try {\r\n                const userfind = yield model_1.default.find({}).sort({ name: 1 });\r\n                if ((userfind === null || userfind === void 0 ? void 0 : userfind.length) > 0) {\r\n                    return resolve({\r\n                        status: 200,\r\n                        error: false,\r\n                        result: userfind,\r\n                        code: \"DATA_FOUND\",\r\n                        message: \"DATA_FOUND\",\r\n                    });\r\n                }\r\n                else {\r\n                    return reject({\r\n                        status: 404,\r\n                        error: true,\r\n                        code: \"DATA_NOT_FOUND\",\r\n                        message: \"DATA_NOT_FOUND\",\r\n                    });\r\n                }\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    getoneuser: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            var _a;\r\n            try {\r\n                const userfind = yield model_1.default.findOne({ _id: (_a = req.params) === null || _a === void 0 ? void 0 : _a.userId });\r\n                if (userfind) {\r\n                    return resolve({\r\n                        status: 200,\r\n                        error: false,\r\n                        result: userfind,\r\n                        code: \"DATA_FOUND\",\r\n                        message: \"DATA_FOUND\",\r\n                    });\r\n                }\r\n                else {\r\n                    return reject({\r\n                        status: 404,\r\n                        error: true,\r\n                        code: \"DATA_NOT_FOUND\",\r\n                        message: \"DATA_NOT_FOUND\",\r\n                    });\r\n                }\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    getdeleteuser: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            var _a;\r\n            try {\r\n                const userfind = yield model_1.default.findByIdAndDelete({ _id: (_a = req.params) === null || _a === void 0 ? void 0 : _a.id });\r\n                if (userfind) {\r\n                    return resolve({\r\n                        status: 200,\r\n                        error: false,\r\n                        result: userfind,\r\n                        code: \"DATA_FOUND\",\r\n                        message: \"DATA_DELETED\",\r\n                    });\r\n                }\r\n                else {\r\n                    return reject({\r\n                        status: 404,\r\n                        error: true,\r\n                        code: \"DATA_NOT_FOUND\",\r\n                        message: \"DATA_NOT_FOUND\",\r\n                    });\r\n                }\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    },\r\n    getupdateuser: (req) => {\r\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n            var _a;\r\n            try {\r\n                const userfind = yield model_1.default.findByIdAndUpdate((_a = req.params) === null || _a === void 0 ? void 0 : _a.id, req.body, {\r\n                    new: true\r\n                });\r\n                if (userfind) {\r\n                    return resolve({\r\n                        status: 200,\r\n                        error: false,\r\n                        result: userfind,\r\n                        code: \"DATA_FOUND\",\r\n                        message: \"DATA_DELETED\",\r\n                    });\r\n                }\r\n                else {\r\n                    return reject({\r\n                        status: 404,\r\n                        error: true,\r\n                        code: \"DATA_NOT_FOUND\",\r\n                        message: \"DATA_NOT_FOUND\",\r\n                    });\r\n                }\r\n            }\r\n            catch (err) {\r\n                return reject({\r\n                    status: 500,\r\n                    error: true,\r\n                    result: err,\r\n                    code: \"INTERNAL_SERVER_ERROR\",\r\n                    message: \"INTERNAL_SERVER_ERROR\",\r\n                });\r\n            }\r\n        }));\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://servernew/./src/user/service.ts?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack://servernew/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n\n\n//# sourceURL=webpack://servernew/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?100":
/*!**********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?100 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n\n\n//# sourceURL=webpack://servernew/./node_modules/webpack/hot/poll.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("bf7a8abc1387227f8be9")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;