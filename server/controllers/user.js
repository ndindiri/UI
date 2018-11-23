import parcels from '../datastore/parcel';
import users from '../datastore/user';


class User {

  static getAllUsers = (req, res) => {
    res.status(200).json(users);
  }
   static getUserIdUser = (req, res) =>{
             const user = users.find(u => u.id === parseInt(req.params.id));
             if (!user) return res.status(404).send('The user with the the the given Id was not found');
           res.send(user);
    };
     static getParcelById = (req, res) =>{
      const parcel = parcels.find(p => p.userId === parseInt(req.params.userId));
  if (!parcel) return res.status(404).send('The parcel with the the the given Id was not found');
  res.send(parcel);
};
  }


export default User;





