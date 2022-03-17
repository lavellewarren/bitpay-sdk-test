const BitPaySDK = require('bitpay-sdk');
let Models = require('bitpay-sdk/src/Model');
const config = require('../../secure/BitPay.config.json');
let client = new BitPaySDK.Client(
  null,
  BitPaySDK.Env.Test,
  config.BitPayConfiguration.EnvConfig.Test.PrivateKey,
  config.BitPayConfiguration.EnvConfig.Test.ApiTokens
);

const main = async () => {
  try{
    let invoiceData = new Models.Invoice(0.0001, BitPaySDK.Currency.BTC);
    invoiceData.buyer = {
      email: "sandbox@bitpay.com",
      name: "BuyerTest"
    };
    invoiceData.notificationURL = "https://hookb.in/1gw8aQxYQDHj002yk79K";
    invoiceData.extendedNotifications = true;

    const result = await client.CreateInvoice(invoiceData, 'merchant');

    console.log(" -------------------- Result of created invoice -----------------");

    console.log(result)

    console.log(" -----------------------------------------------------------------")
  }catch(e){
    console.log(e);
  }
}

main();