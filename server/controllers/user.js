import parcels from '../datastore/parcel';
import user from '../datastore/user';

'use strict';

class User {
  constructor () {
  }

  getUser (req, res) {
    user.findById(req.params.id).then(
      (user) => {
        res(user);
      },
      (err) => {
        res(err);
      }
    )
  }
}

module.exports = User;









/*let UsersAndParcels = (p, ...arrs) => [ ...new Set( [].concat(...arrs).map(a => JSON.stringify(a)) ) ].map(a => JSON.parse(a))

UsersAndParcels('id', parcels, user);

export default UsersAndParcels;
*/