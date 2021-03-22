const fetch = require("node-fetch");

exports.handler = async function (event, context, callback) {
    try {
        const getFonts = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_KEY_FONT}&sort=popularity`)
        const res = await getFonts.json()
        const fonts = res.items
        const fontArr = fonts.map(item => item.family)

        return {
            statusCode: 200,
            body: JSON.stringify(fontArr)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }
}