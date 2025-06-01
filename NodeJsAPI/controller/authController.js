const User = require('../model/userModel');
const dotenv = require('dotenv');
dotenv.config();

//create or update user
exports.createOrUpdateUser = async (req, res) => {
    try {

        const { name, picture, email } = req.body
        const nameFromEmail = email && email.split('@')[0]
        const updateName = name ? name : nameFromEmail
        const pictureProcess = picture ? picture : process.env.DEFAULT_PIC

        const user = await User.findOneAndUpdate(
            { email: email },
            { name: updateName, picture: pictureProcess },
            { new: true, }
        )
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture,
                bio: user.bio,
                role: user.role,
            })
        } else {
            const newUser = await new User({
                name: updateName,
                email: email,
                picture: pictureProcess,
            }).save()

            res.json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                picture: newUser.picture,
                bio: newUser.bio,
                role: newUser.role,
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//current user
exports.currentUser = async (req, res) => {
    try {
        const email = req.body;

        const user = await User.find({ email }).exec()

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            bio: user.bio,
            role: user.role,
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}