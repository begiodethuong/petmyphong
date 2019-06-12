const login = require("facebook-chat-api");
const request = require("request");
const fs = require("fs");
var account = require('./accounts.json');
login({email: account.email, password: account.password}, (err, api) => {
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
    if(err) console.error(err);
});