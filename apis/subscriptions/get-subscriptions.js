const BitPaySDK = require('bitpay-sdk');
const config = require('../../secure/BitPay.config.json');
let client = new BitPaySDK.Client(
  null,
  BitPaySDK.Env.Test,
  config.BitPayConfiguration.EnvConfig.Test.PrivateKey,
  config.BitPayConfiguration.EnvConfig.Test.ApiTokens
);

const main = async () => {
  try {
    const result = await client.GetSubscriptions('draft');
    
    console.log(" -------------------- Result of Get Subscription -----------------");
    console.log(result);
  } catch(e) {
    console.log(e);
  }
}

main();