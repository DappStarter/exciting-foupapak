require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain social install loan foster sell'; 
let testAccounts = [
"0xc408c858dd84c3dd2e648e4c7fdbff1f7265f28b9e165c2db014c2e4b8e91a44",
"0xe24f798592773d0938fb7acc1065219f93c4aadb0456e5dd64685779eff6795f",
"0xde82a3580a1ebdb138d584c1694f295f6af13d0452fca243faf26da142874f40",
"0x2277d23e5024cf9dc9c668018f7d9a735e73b9a48199f7e57918e21f9f22ab72",
"0x0e9673ce005f44594ed5b3289237bb8e827f94d1b40d217bbb2b68cf0bb33417",
"0xe6e7cb6f6988770200aeae70f699527108be43562ce1d2c64aa8b9e99c213e73",
"0x53779cf4a91db9aff94f1e08de2b1229b17f484c066766ed4fc1662965ef130f",
"0x4f5f46c8e6c94baca502103a4217ea1e7907722e79af0dc6e714809663c3f0f8",
"0x9004092ed4076c2e5dec12f3db6e5500b28e6f6f0cd3489c67054a394dde35e0",
"0x07931885fa8475dae4188f24c7997d8347e7bbd283c070941bc9db2c8013bcf2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

