const express = require('express')
const router = express.Router();

// Users API Route

router.post('/insertUser', async function (req, response) {

    // get data
    let  { data } = req.body;
    
    if(!(data)) {
        return response.json({
            error:'invalid request',
            success: false,
            response: false,
        });
    }

    // Processing
    
    return response.json({
        error: false,
        success: true,
        response: {
            "message": "response",
        },
    });

});

router.post('/<name>', async function (req, response) {

    // get data
    let  { data } = req.body;
    
    if(!(data)) {
        return response.json({
            error:'invalid request',
            success: false,
            response: false,
        });
    }

    // Processing
    
    return response.json({
        error: false,
        success: true,
        response: {
            "message": "response",
        },
    });

});
