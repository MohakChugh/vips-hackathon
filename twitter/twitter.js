// @ts-check
var Twit = require('twit');
const gql = require("../database/queries");
const config = require('../config/config');

function twitter () {
    console.log("Listening for tweets hashtag => #CitizensApp");

    var T = new Twit({
        consumer_key:         config.consumer_key,
        consumer_secret:      config.consumer_secret,
        access_token:         config.access_token,
        access_token_secret:  config.access_token_secret,
        timeout_ms:           60*1000,
        strictSSL:            true,
    });

    var stream = T.stream('statuses/filter', { track: '#CitizensApp' });
    console.log(stream)
    stream.on('tweet', function (tweet) {
        var info = {
            origin: tweet.created_at,
            email: tweet.text.match(/^Email\:(.)*$/gm)[0].split(":")[1],
            department: tweet.text.match(/^Department\:(.)*$/gm)[0].split(":")[1],
            description: tweet.text.match(/^Description\:(.)*$/gm)[0].split(":")[1],
            area: tweet.text.match(/^Area\:(.)*$/gm)[0].split(":")[1],
            title: tweet.text.match(/^Title\:(.)*$/gm)[0].split(":")[1]
        };

        let func = async () => {
            let data = await cacheTweet(info);
            console.log(data);
        }
        func()
            // }.catch(function(err){
        //     console.log(err);
        // });
    });
}

function cacheTweet (tweetInfo) {
    return new Promise(async (resolve, reject) => {
        if (tweetInfo.origin && tweetInfo.description && tweetInfo.area && tweetInfo.department && tweetInfo.email && tweetInfo.title) {
            
            // user -> unknown
            var cid = 'c7fb4953-2596-4f4b-84a5-4a00463af249';
            
            var aid = -1;
            var image_url = '';
            var res = await gql.insertProblem(aid, tweetInfo.department, image_url, tweetInfo.description, tweetInfo.title, cid);
            resolve("Tweet Inserted in DB");
        } else {
            reject("Invalid Tweet !");
        }
    });
}


twitter();

// module.exports = { cacheTweet }