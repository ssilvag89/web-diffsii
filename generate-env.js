const fs = require('fs');

const envVars = {
    API_PAYMENT_URL: process.env.API_PAYMENT_URL || "https://webpay.diffsii.cl",
    API_REGISTER_URL: process.env.API_REGISTER_URL || "https://saas.diffsii.cl/api/public/register-client",
    DASHBOARD_URL: process.env.DASHBOARD_URL || "https://saas.diffsii.cl/"
};

const content = `window.ENV = ${JSON.stringify(envVars, null, 2)};`;
fs.writeFileSync('env-config.js', content);
console.log('✅ Configuration generated at env-config.js');
