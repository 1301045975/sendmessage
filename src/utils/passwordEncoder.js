import cryptoJs from 'crypto-js'
import Base64 from 'crypto-js/enc-base64';

export default {
    guid() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    },
    encode(data){
        let msg = JSON.stringify(data);
        return Base64.stringify(cryptoJs.SHA256(msg));
    },
}