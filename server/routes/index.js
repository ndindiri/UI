import { Parcel, User } from '../controllers';
//import UsersAndParcels from '../controllers';

const routes = (app) => {
	app.get('/api/v1/', (req, res) => {
		res.status(200).json({ 'message': 'Welcometo to parcel api'});
	});

	// To Get All parcels 
	app.get('/api/v1/parcels', Parcel.getAllParcels);

	// To Post on parcels
	app.post('/api/v1/parcels', Parcel.addParcel);
	 //Update Data
   app.put('/api/v1/parcels/:id', Parcel.updateParcel);
   app.delete('/api/v1/parcels/:id', Parcel.deleteParcel);
   app.get('/api/v1/user/:id/parcels/:id', Parcel.getSingleParcel);
   //app.get('/api/user/parcels/:userId', UsersAndParcels.UsersAndParcel);

}

export default routes;