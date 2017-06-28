var request = require('request');

var conversation = function(robot) {

    robot.hear(/I like pie/, function(res) {
        res.emote('okay, I will bring some next time we meet...');
    });

    robot.hear(/How are you buddy/, function(res) {
        res.send('I am pretty okay sir, how about you...');
    });

    robot.hear(/find results for (.*)/i, function(res) {
        const query = res.match[1];
        res.reply('searching result for ' + query);

        request('https://google.co.jp/webhp?hl=en&q=query', function(error, response, body) {
            console.log('error:', error);
            console.log('status:', response && response.statusCode);
            console.log('body', body);
            res.send(body);
        });
    });

}

module.exports = conversation;
