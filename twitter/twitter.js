var Twit = require('twit');
const gql = require("../database/queries");
// const config = require('../config/config');

function twitter () {
    console.log("Listening for tweets hashtag => #CitizensAppMakeathon");

    var T = new Twit({
        consumer_key:         "8NO0gW8xzzHT4WUIcGfIZ2OW5",
        consumer_secret:      "sAdUBjZFdH18Nt4j26gkLbDGd7GkTp7WlTZyaQkI4873WvCnYZ",
        access_token:         "1114549401475633152-mWUjARjPA0FL6yfchcTxd9Es5c8n87",
        access_token_secret:  "TjOK9jTyXT4KRnEvLUxyxxJZoTwO9iYOAvqIygMCNGUlA",
        timeout_ms:           60*1000,
        strictSSL:            false,
    });

    var stream = T.stream('statuses/filter', { track: '#CitizensAppMakeathon', language: 'en' });
    stream.on('tweet', function (tweet) {
        var info = {
            origin: tweet.created_at,
            email: tweet.text.match(/^Email\:(.)*$/gm)[0].split(":")[1],
            department: tweet.text.match(/^Department\:(.)*$/gm)[0].split(":")[1],
            description: tweet.text.match(/^Description\:(.)*$/gm)[0].split(":")[1],
            area: tweet.text.match(/^Area\:(.)*$/gm)[0].split(":")[1],
            title: tweet.text.match(/^Title\:(.)*$/gm)[0].split(":")[1]
        };

        (async() => {
            let data = await cacheTweet(info);
            console.log(data);
        })().catch(function(err){
            console.log(err);
        });
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