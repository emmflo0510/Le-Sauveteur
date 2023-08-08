const passwordValidator = require("password-validator")

const passwordSchema = new passwordValidator();


passwordSchema
    is().min(10)
    is().max(25)
    .has().uppercase()
    .has().lowercase()
    .has().lettres()
    .oneOf(['!','@','#','$','%','^','&','*','(',')','-','_','+','=',';',':','"',',','.','?','`',])
    .is().not().oneOf("passwOrddd");

module.exports = passwordSchema