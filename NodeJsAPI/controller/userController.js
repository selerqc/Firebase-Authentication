const userModel = require('../model/userModel');

exports.listAllUsers = async () => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const skip = (page - 1) * limit

        const name = req.query.name || ""
        const email = req.query.email || ""

        const user = await userModel.find({
            name: { $regex: name, $option: "i" },
            email: { $regex: email, $option: "i" },
        })
            .skip(skip)
            .limit(limit)
            .exec()

        const count = await user.countDocuments({
            name: { $regex: name, $option: "i" },
            email: { $regex: email, $option: "i" },
        })

        const totalPage = Math.ceil(count / limit)

        const listsAllUsers = user.map((user) => ({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            bio: user.bio,
            role: user.role

        }))

        res.status(200).json({
            count,
            page,
            limit,
            totalPage,
            users: listsAllUsers
        })
    } catch (error) {
        res.status(500).json({
            message: "Somethin went wrong",
            error
        })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = userModel.findById(req.params.id).exec()

        res.status.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            bio: user.bio,
            role: user.role
        })
    } catch (error) {
        res.status(500).json({
            status: error.message,
            message: "Internal Server Error"
        })
    }
}

exports.updateUserById = async (req, res) => {
    try {
        const user = userModel.findById(req.params.id).exec()
        user.role = req.body.role
        await user.save();
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(500).json({
            status: error.message,
            message: "Internal Server Error"
        })
    }
}