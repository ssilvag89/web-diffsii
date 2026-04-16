const fs = require('fs');

const envVars = {
    API_PAYMENT_URL: process.env.API_PAYMENT_URL || "http://localhost:3010",
    API_REGISTER_URL: process.env.API_REGISTER_URL || "http://localhost:3000/api/public/register-client",
    DASHBOARD_URL: process.env.DASHBOARD_URL || "http://localhost:5500/"
};

const content = `window.ENV = ${JSON.stringify(envVars, null, 2)};`;
fs.writeFileSync('env-config.js', content);
console.log('✅ Configuration generated at env-config.js');
