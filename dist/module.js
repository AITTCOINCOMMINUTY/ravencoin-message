import {Buffer as $hCgyA$Buffer} from "buffer";
import $hCgyA$bitcoinjsmessage from "bitcoinjs-message";



var $c3f6c693698dc7cd$require$Buffer = $hCgyA$Buffer;
const $c3f6c693698dc7cd$var$MESSAGE_PREFIX = "\x16AITTCOIN Signed Message:\n";
function $c3f6c693698dc7cd$export$c5552dfdbc7cec71(message, privateKey, compressed = true) {
    const signature = (0, $hCgyA$bitcoinjsmessage).sign(message, privateKey, compressed, $c3f6c693698dc7cd$var$MESSAGE_PREFIX);
    return signature.toString("base64");
}
function $c3f6c693698dc7cd$export$228d0e772cc158cb(message, address, signature) {
    const m = $c3f6c693698dc7cd$require$Buffer.from(message).toString("ascii");
    const result = (0, $hCgyA$bitcoinjsmessage).verify(m, address, signature, $c3f6c693698dc7cd$var$MESSAGE_PREFIX);
    return result;
}


export {$c3f6c693698dc7cd$export$c5552dfdbc7cec71 as sign, $c3f6c693698dc7cd$export$228d0e772cc158cb as verifyMessage};
//# sourceMappingURL=module.js.map
