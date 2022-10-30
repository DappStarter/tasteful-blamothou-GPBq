require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remain eternal gesture hidden tackle speak'; 
let testAccounts = [
"0xe17d58b09b473d6ef86e2d1ae60b61164570cc7130f3448c70ff87c45ac1dbf8",
"0x3a82da2ec19ed84a8ba6efb9fc3a7741cc7e9789bc56cc8c580b31fbe5962fb8",
"0x9cb0d61699562105b1a95e3a8134e47eb0d917ebabf6176247dd56908801355e",
"0x4de14d48def6c0320a7870e14c4fdeb2323ab11ee9fb23f86dfaffc2e1070b7f",
"0xc78cbeb2e5c8014e80178cf280a83317f07bf35bed674ff707d6d06387db2224",
"0xd55c8aa0c60c1c985edd2ee2d148e9648c2f0872120c474ab83c3cbb078c55f5",
"0x38047086406ab103097e06b18026560136763b74a20b25618a285334b0bb1ec9",
"0xbe1d869723a40dff39390f14016c3b24abc50e1f89da443fc0c8684b758c242e",
"0x98d1affabedd5b001a7feeed11e6337c822a9c4ebcb6fd82c997ffd4d41d5c65",
"0x6a21484f90ba4e3ebd21b3d34ef3e5405517a38ef18bbcc6fc71b25cd6c4eb6d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

