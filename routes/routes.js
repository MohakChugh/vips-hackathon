const express = require('express')
const router = express.Router();

// Users API Route

router.route('/insertUser')
    .post(async (req, res) => {
        
        // get data
        let  { phoneNumber, password, name, email, area } = req.body;
        
        if(!(data)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        
        return res.json({
            error: false,
            success: true,
            response: {
                "message": "response",
            },
        });
    });

router.route('/getUser')
    .post(async (req, res) => {
        
        let { email } = req.body;

        if(!(data)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        
        return res.json({
            error: false,
            success: true,
            response: {
                "message": "response",
            },
        });
    });

router.route('/getUserPassword')
    .post(async (req, res) => {
        
        let { data } = req.body;

        if(!(data)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        
        return res.json({
            error: false,
            success: true,
            response: {
                "message": "response",
            },
        });
    });