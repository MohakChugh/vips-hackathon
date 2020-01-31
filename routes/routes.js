const gql = require('../database/queries')
const express = require('express')
const router = express.Router();
const bodyparser = require('body-parser')

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:true}))
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
        let resp = await gql.insertUser(phoneNumber, password, name, email, area);
        return res.json({
            error: false,
            success: true,
            response: resp,
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
        let resp = await gql.getUserByEmail(email);
        
        return res.json({
            error: false,
            success: true,
            response: resp,
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
        let resp = await gql.getUserPassword(email);
        
        return res.json({
            error: false,
            success: true,
            response: resp,
        });
    });

// Problems

router.route('/insertProblem')
    .post(async (req, res) => {
        
        let { areaid, department, image_url, description, title, userid } = req.body;

        if(!(areaid && department && image_url && description && title && userid)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let resp = await gql.insertProblem(areaid, department, image_url, description, title, userid);
        
        return res.json({
            error: false,
            success: true,
            response: resp,
        });
    });

router.route('/getProblem')
    .get(async (req, res) => {
        
        // Processing
        let resp = await gql.getProblem();
        
        return res.json({
            error: false,
            success: true,
            response: resp,
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
        let resp = await gql.getProblemByAreaID(areaid);
        
        return res.json({
            error: false,
            success: true,
            response: resp,
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
        let resp = await gql.getProblemByUser(userid);
        
        return res.json({
            error: false,
            success: true,
            response: resp,
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
        let resp = await gql.getProblemByDepartent(department);
        
        return res.json({
            error: false,
            success: true,
            response: resp,
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
        let upvotes = await gql.fetchUpvoteProblem(parseInt(problemid));
        let resp = [];
        if(upvotes.problems) {
            resp = await gql.upvoteProblem(problemid, upvotes.problems[0].upvote+1);
        }

        return res.json({
            error: false,
            success: true,
            response: resp,
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
        let downvotes = await gql.fetchDownvoteProblem(parseInt(problemid));
        console.log(downvotes)
        let resp = [];
        if(downvotes.problems) {
            resp = await gql.downvoteProblem(problemid, downvotes.problems[0].downvote+1);
        }
        
        return res.json({
            error: false,
            success: true,
            response: resp,
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
        
        let { name, password, email, phone, department, areaid } = req.body;
        
        if(!(name, password, email, phone, department, areaid)) {
            return res.json({
                error:'invalid request',
                success: false,
                response: false,
            });
        }

        // Processing
        let resp = await gql.insertOfficial(name, password, email, phone, department, areaid);
        
        return res.json({
            error: false,
            success: true,
            response: resp,
        });
    });

router.route('/getOfficialPassword')
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
        let resp = await gql.getOfficialPassword(email);
        
        return res.json({
            error: false,
            success: true,
            response: resp,
        });
    });

module.exports = router