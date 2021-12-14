module.exports = shellescape;

// return a shell compatible format
function shellescape(a) {
  var ret = [];

  a.forEach(function(s, i) {
    if ( typeof s === "object"
      && typeof s.raw !== "undefined"
    ) {
      s = s.raw;
    }
    else if (/[^A-Za-z0-9_\/:=-]/.test(s)) {
      s = "'"+s.replace(/'/g,"'\\''")+"'";
      s = s.replace(/^(?:'')+/g, '') // unduplicate single-quote at the beginning
        .replace(/\\'''/g, "\\'" ); // remove non-escaped single-quote if there are enclosed between 2 escaped
    }
    ret.push(s);
  });

  return ret.join(' ');
}
