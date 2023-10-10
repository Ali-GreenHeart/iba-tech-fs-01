const express = require('express')

const router = express.Router()
const authorize = require('../middlewares/auth')

router.route('/test-get').get(authorize, (req, res, next) => {
    // #swagger.description = "Description here..."
    res.status(200).json({
        data: [],
        message: 'Successfully found'
    })
})

router.route('/test-delete/:id').delete(authorize, async (req, res, next) => {
    res.status(200).json({
        msg: [],
        message: 'Delete!'
    })
})
router.route('/test-put/:id').put(authorize, async (req, res, next) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to edit the user' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'New User information.',
            required: true,
            schema: { $ref: "#/definitions/EditUser" }
    } */
    res.status(200).json({
        msg: [],
        message: 'Edited!'
    })
})

module.exports = router
