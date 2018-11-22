import parcels from '../datastore/parcel';
import validateParcel from '../utils/validationhelper';

class Parcel {

	static getAllParcels = (req, res) => {
		res.status(200).json(parcels);
	}

	static addParcel = (req, res) => {

		const {error} = validateParcel(req.body); //result.error

	     if (error) return res.status(400).send(error.details[0].message);
	   
		const parcel = {
		id: parcels.length + 1,
		userId: req.body.userId,
	    NameOfParcel: req.body.NameOfParcel,
	    CountryFrom: req.body.CountryFrom,
	    DeliveryCountry: req.body.DeliveryCountry,
	    Weigth: req.body.Weigth,
	    Heigh: req.body.Heigh, 
	    Width: req.body.Width, 
	    Length: req.body.Length
		};
		parcels.push(parcel);
		res.send(parcel);
	};
	static updateParcel =  (req, res) =>{
	
    // Look up the parcel
    //If not existing then return 404
    const parcel = parcels.find(p => p.id === parseInt(req.params.id));
     if (!parcel) return res.status(404).send('The parcel with the the the given Id was not found');
     //Validte pp
     //If invalid, return 400 - Bad request
     
     const {error} = validateParcel(req.body); //result.error
     if (error) return res.status(400).send(error.details[0].message);
     //Update parcel
    parcel.userId = req.body.userId;
    parcel.NameOfParcl = req.body.NameOfParcel;
    parcel.CountryFrom = req.body.CountryFrom;
    parcel.DeliveryCountry = req.body.DeliveryCountry;
    parcel.Weigth = req.body.Weigth;
    parcel.Heigh = req.body.Heigh; 
    parcel.Width = req.body.Width; 
    parcel.Length = req.body.Length;
 
     //Return the update parcel

     res.send(parcel);
};
     static deleteParcel = (req, res) =>{
    //Look up the parcel
    //Not existing then return 404  
     const parcel = parcels.find(p => p.id === parseInt(req.params.id));
     if (!parcel) return res.status(404).send('The parcel with the the the given Id was not found');    
    //Delete    
     const index =parcels.indexOf(parcel);
     parcels.splice(index, 1);
    //Return the same parcel
    res.send(parcel);
};
    static getSingleParcel = (req, res) =>{

	const parcel = parcels.find(p => p.id === parseInt(req.params.id));
	if (!parcel) return res.status(404).send('The parcel with the the the given Id was not found');
	res.send(parcel);
};
    static getUserIdParcel = (req, res) =>{
             const user = parcels.find(p => p.userId === parseInt(req.params.userId));
             if (!user) return res.status(404).send('The user with the the the given Id was not found');
	         res.send(user);
    };

}

export default Parcel;
