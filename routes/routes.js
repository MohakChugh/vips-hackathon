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

router.route('/getUserByEmail')
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

// Problems

router.route('/insertProblem')
    .post(async (req, res) => {
        
        let { areaid, department, image_url, description, title, areaid, userid } = req.body;

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

router.route('/getProblem')
    .post(async (req, res) => {
        
        // Processing
        
        return res.json({
            error: false,
            success: true,
            response: {
                "message": "response",
            },
        });
    });

router.route('/getProblemByAreaID')
    .post(async (req, res) => {
        
        let { areaid } = req.body;
        
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

router.route('/getProblemByUser')
    .post(async (req, res) => {
        
        let { userid } = req.body;
        
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

router.route('/getProblemByDepartent')
    .post(async (req, res) => {
        
        let { department } = req.body;
        
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

router.route('/upvoteProblem')
    .post(async (req, res) => {
        
        let { problemid } = req.body;
        
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

router.route('/downvoteProblem')
    .post(async (req, res) => {
        
        let { problemid } = req.body;
        
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

router.route('/deleteProblem')
    .post(async (req, res) => {
        
        let { problemid } = req.body;
        
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

router.route('/digiSignProblem')
    .post(async (req, res) => {
        
        let { problemid } = req.body;
        
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

// Government

router.route('/insertOfficial')
    .post(async (req, res) => {
        
        let { name, password, email, phone, department, area } = req.body;
        
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

router.route('/getOfficialPassword')
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