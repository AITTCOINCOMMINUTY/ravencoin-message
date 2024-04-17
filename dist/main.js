var $g5Y9E$buffer = require("buffer");
var $g5Y9E$bitcoinjsmessage = require("bitcoinjs-message");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "sign", () => $80bd448eb6ea085b$export$c5552dfdbc7cec71);
$parcel$export(module.exports, "verifyMessage", () => $80bd448eb6ea085b$export$228d0e772cc158cb);


var $80bd448eb6ea085b$require$Buffer = $g5Y9E$buffer.Buffer;
const $80bd448eb6ea085b$var$MESSAGE_PREFIX = "\x16AITTCOIN Signed Message:\n";
function $80bd448eb6ea085b$export$c5552dfdbc7cec71(message, privateKey, compressed = true) {
    const signature = (0, ($parcel$interopDefault($g5Y9E$bitcoinjsmessage))).sign(message, privateKey, compressed, $80bd448eb6ea085b$var$MESSAGE_PREFIX);
    return signature.toString("base64");
}
function $80bd448eb6ea085b$export$228d0e772cc158cb(message, address, signature) {
    const m = $80bd448eb6ea085b$require$Buffer.from(message).toString("ascii");
    const result = (0, ($parcel$interopDefault($g5Y9E$bitcoinjsmessage))).verify(m, address, signature, $80bd448eb6ea085b$var$MESSAGE_PREFIX);
    return result;
}


//# sourceMappingURL=main.js.map
