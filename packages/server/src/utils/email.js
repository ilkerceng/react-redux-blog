if (!process.env.FROM_EMAIL) {
    console.log('Please set: FROM_EMAIL environment variable. This is a validated email address to send emails from to other users for email verification, reset pwd etc')
    process.exit();
}

if (!process.env.POSTMARK_API_TOKEN) {
    console.error('Error! Please set POSTMARK_API_TOKEN from postmark email service.');
    process.exit();
}

const postmark = require("postmark");
const async = require('async');
const crypto = require('crypto');

let postmarkClient = new postmark.Client(process.env.POSTMARK_API_TOKEN);

function sendWelcomeEmail(user, host, finalCB) {
    host = host.indexOf('localhost') >= 0 ? 'http://' + host : 'https://' + host;

    async.waterfall([
        function (done) {
            crypto.randomBytes(15, function (err, buf) {
                const token = buf.toString('hex');
                done(err, token);
            });
        },
        function (token, done) {
            user.verifyEmailToken = token;
            user.verifyEmailTokenExpires = Date.now() + 3600000 * 24; // 24 hours
            user.isEmailVerified = false;
            user.save(function (err) {
                done(err, user);
            });
        },
        function (user, done) {
            postmarkClient.sendEmailWithTemplate({
                "From": process.env.FROM_EMAIL,
                "To": process.env.TO_EMAIL, // i am sending to my own address.
                "TemplateId": process.env.TEMPLATE_ID,
                "TemplateModel": {
                    "product_name": "React Redux Blog",
                    "name": user.name,
                    "action_url": host + '/api/validateEmail/' + user.verifyEmailToken,
                    "username": user.username,
                    "sender_name": "Redux Team",
                    'sender_name_Value': 'Raja',
                    'product_name_Value': 'React-Redux-Blog',
                    "product_address_line1": "One Market",
                    "product_address_line2": "San Francisco"
                }
            }, done);
        }
    ],
        function (err) {
            if (err) {
                console.log('Could not send welcome email to: ' + user.email);
                console.error(err);
                if (finalCB) {
                    finalCB({
                        message: 'Could not send welcome email to: ' + user.email
                    });
                }
            } else {
                if (finalCB) {
                    finalCB();
                }
            }
        });

}

module.exports = {
    sendWelcomeEmail: sendWelcomeEmail
};