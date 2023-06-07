const express = require('express')
const router = express.Router()
const { signUp, signIn } = require("../controller/auth");
const {
    isRequestValidated,
    validateSignUpRequest,
    validateSignInRequest
} = require("../validators/auth");

router.route("/sign-in").post(validateSignInRequest, isRequestValidated, signIn);

router.route("/sign-up").post(validateSignUpRequest, isRequestValidated, signUp);

module.exports = router;