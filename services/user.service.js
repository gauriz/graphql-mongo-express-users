const Users = require('../connector/dbConnector.js');
const UUIDhelper = require('../helpers/UUID.helper.js');

const getAllUsers = () => {
    return Users.find((err, users) => {
        if (err) reject(err);
        else return users;
    })
}

const getById = (id) => {
    return Users.findOne({ _id: id }, (err, user) => {
        if (err) reject(err);
        else return user;
    })
}

const createUser = async (input) => {
    const user = new Users({
        name: input.name,
        gender: input.gender,
        age: input.age,
        location: input.location,
    });
    user._id = UUIDhelper.createUUID();

    await user.save((err) => {
        if (err) reject(err);
        else return user;
    });
    return user;
}

module.exports.getAllUsers = getAllUsers;
module.exports.getById = getById;
module.exports.createUser = createUser;