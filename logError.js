const fetch = require('node-fetch')
const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})


const logError = async (data = {}, url = 'http://logger-pmap-service.apps-dev.hbp.eu/ivautomated.testing.error') => {

    sendEmail(data)

    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'json=' + JSON.stringify(data)
    })
    return response
}

const sendEmail = (data) => {
    transporter.sendMail({
        from: process.env.EMAIL,
        to: 'd.gogshelidze@fz-juelich.de',
        subject: 'Interactive Viewer Automated test error',
        text: 'There is error founded with Automated testing of Interactive Viewer. \n\nTest: ' + data.test + '\nCase: ' + data.case + '\nError: ' + data.error
    }, function(error, info){
        if (error) {
            fetch('http://logger-pmap-service.apps-dev.hbp.eu/ivautomated.testing.email', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'json={"error": "Email not send"}'
            })
            console.log('Email not sent')
            console.log(error)
        }
    })
}



module.exports = {logError}
