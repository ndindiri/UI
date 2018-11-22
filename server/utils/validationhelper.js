import Joi from 'joi';

const validateParcel = (parcel) => {
 	const schema = {
       NameOfUser: Joi.string().min(4).required()
	};
	return Joi.validateparcel, (schema);
 }

 export default validateParcel;
