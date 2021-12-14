const shellescape = require( "../" );
const assert = require( "assert" );

const args = [ "cmd", "arg", { raw: ">" }, "out.log" ];

const escaped = shellescape( args );

assert.strictEqual( escaped, "cmd arg > 'out.log'" );
console.log( escaped );