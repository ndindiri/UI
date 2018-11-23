import { Parcel, User } from '../controllers';
 import users from '../datastore/user';

const routes = (app) => {
	app.get('/api/v1/', (req, res) => {
		res.status(200).json({ 'message': 'Welcometo to parcel api'});
	});
 
	app.get('/api/v1/parcels', Parcel.getAllParcels);
	app.get('/api/v1/parcels/:id', Parcel.getSingleParcel);
	app.get('/api/v1/users', User.getAllUsers);
	app.post('/api/v1/parcels', Parcel.addParcel);
    app.put('/api/v1/parcels/:id', Parcel.updateParcel);
    app.delete('/api/v1/parcels/:id', Parcel.deleteParcel);
    app.get('/api/v1/users/:id/parcels/:id', User.getParcelById);
    app.get('/api/v1/users/:id', User.getUserIdUser);
}

export default routes;