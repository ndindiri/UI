/*import parcels from '../datastore/parcel';
import user from '../datastore/user';
import validateParcel from '../utils/validationhelper';


class UsersAndParcels {

	static UsersAndParcel = (req, res) => {
		res.status(200).json(users);
	}
	 static getUserIdParcel = (req, res) =>{
             const UsersAndParcel  = (p, ...arrs) => [ ...new Set( [].concat(...arrs).map(a => JSON.stringify(a)) ) ].map(a => JSON.parse(a));
             //const user = users.find(p => p.userId === parseInt(req.params.userId));

             if (!user) return res.status(404).send('The user with the the the given Id was not found');
	         res.send(UsersAndParcel);
    };

}
*/
/*let UsersAndParcels = (p, ...arrs) => [ ...new Set( [].concat(...arrs).map(a => JSON.stringify(a)) ) ].map(a => JSON.parse(a))

UsersAndParcels('id', parcels, user);

export default UsersAndParcels;
*/