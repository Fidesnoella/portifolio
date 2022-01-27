// validation
const Joi = require(`@hapi/joi`);

// Register validation
const contactValidation = data =>{
    const schema = Joi.object().keys({
        full_name: Joi.string().min(4).required().pattern(new RegExp(/^([a-zA-Z]+\s)*[a-zA-Z]+$/))
        .message({"string.pattern.base":"Name can not contain numbers",
        "string.min":"minimum 4 character required"}),
        email : Joi.string().required().email().pattern(new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
        .message({"string.pattern.base":"Invalid email"}),
        message: Joi.string().min(5).required()        
     }); 
       
    return schema.validate(data);
};
module.exports.contactValidation = contactValidation;