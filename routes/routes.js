const gql = require('../database/queries')
const express = require('express')
const router = express.Router();

// Users API Route

router.route('/insertUser')
    .post(async (req, res) => {
        
        // get data
        let  { phoneNumber, password, name, email, area } = req.body;
        
        if(!(phoneNumber && password && name && email && area)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let res = await gql.insertUser(phoneNumber, password, name, email, area);

        return res.json({
            error: false,
            success: true,
            response: res,
        });
    });

router.route('/getUserByEmail')
    .post(async (req, res) => {
        
        let { email } = req.body;

        if(!(email)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let res = await gql.getUserByEmail(email);
        
        return res.json({
            error: false,
            success: true,
            response: res,
        });
    });

router.route('/getUserPassword')
    .post(async (req, res) => {
        
        let { email } = req.body;

        if(!(email)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let res = await gql.getUserPassword(email);
        
        return res.json({
            error: false,
            success: true,
            response: res,
        });
    });

// Problems

router.route('/insertProblem')
    .post(async (req, res) => {
        
        let { areaid, department, image_url, description, title, areaid, userid } = req.body;

        if(!(areaid && department && image_url && description && title && areaid && userid)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let res = await gql.insertProblem(areaid, department, image_url, description, title, areaid, userid);
        
        return res.json({
            error: false,
            success: true,
            response: res,
        });
    });

router.route('/getProblem')
    .post(async (req, res) => {
        
        // Processing
        let res = await gql.getProblem();
        
        return res.json({
            error: false,
            success: true,
            response: res,
        });
    });

router.route('/getProblemByAreaID')
    .post(async (req, res) => {
        
        let { areaid } = req.body;
        
        if(!(areaid)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let res = await gql.getProblemByAreaID(areaid);
        
        return res.json({
            error: false,
            success: true,
            response: res,
        });
    });

router.route('/getProblemByUser')
    .post(async (req, res) => {
        
        let { userid } = req.body;
        
        if(!(userid)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let res = await gql.getProblemByUser(userid);
        
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
        
        if(!(department)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let res = await gql.getProblemByDepartent(department);
        
        return res.json({
            error: false,
            success: true,
            response: res,
        });
    });

router.route('/upvoteProblem')
    .post(async (req, res) => {
        
        let { problemid } = req.body;
        
        if(!(problemid)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let upvotes = await gql.fetchUpvoteProblem(problemid);
        let res = await gql.upvoteProblem(problemid, upvotes+1);
        
        return res.json({
            error: false,
            success: true,
            response: res,
        });
    });

router.route('/downvoteProblem')
    .post(async (req, res) => {
        
        let { problemid } = req.body;
        
        if(!(problemid)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let downvotes = await gql.fetchDownvoteProblem(problemid);
        let res = await gql.downvoteProblem(problemid, downvotes+1);
        
        return res.json({
            error: false,
            success: true,
            response: res,
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