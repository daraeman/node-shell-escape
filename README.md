shell-escape
============

Escape and stringify an array of arguments to be executed on the shell

Install
-------

    npm install shell-escape

Include
-------

``` js
var shellescape = require('shell-escape');
```

Example
-------

### simple

``` js
const args = ['curl', '-v', '-H', 'Location;', '-H', 'User-Agent: dave#10', 'http://www.daveeddy.com/?name=dave&age=24'];

const escaped = shellescape(args);
console.log(escaped);
```

yields

```
curl -v -H 'Location;' -H 'User-Agent: dave#10' 'http://www.daveeddy.com/?name=dave&age=24'
```

A command suitable for being executed by the shell

### advanced

``` js
const args = ['echo', 'hello!', 'how are you doing $USER', '"double"', "'single'"];

const escaped = shellescape(args);
console.log(escaped);
```

yields

```
echo 'hello!' 'how are you doing $USER' '"double"' \''single'\'
```

and when run on the shell

```
$ echo 'hello!' 'how are you doing $USER' '"double"' \''single'\'
hello! how are you doing $USER "double" 'single'
```

### manually disable escaping

``` js
const args = ['echo', 'Hello beautiful world!', { raw: ">" }, "hello.txt"];

const escaped = shellescape(args);
console.log(escaped);
```

yields

```
echo 'Hello beautiful world!' > 'hello.txt'
```

and when run on the shell will save a file to hello.txt with the contents "Hello beautiful world!""

License
-------

MIT
