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
    const result = await client.GetInvoice('E1chjCF71KYw8k8wuWxttJ');
    
    console.log(" -------------------- Result of Get invoice -----------------");
    console.log(result);
    console.log(" -------------------- Result of created invoice -----------------");
  } catch(e) {
    console.log(e);
  }
}

main();