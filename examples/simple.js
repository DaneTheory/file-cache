'use strict'
// **Github:** https://github.com/toajs/file-cache
//
// **License:** MIT

const FileCache = require('../index')
const fileCache = FileCache('./')

fileCache('index.js')(function (err, file) {
  console.log(err, file)
  // { path: '/Users/zensh/git/toajs/file-cache/index.js',
  // dir: '/Users/zensh/git/toajs/file-cache',
  // name: 'index.js',
  // ext: '.js',
  // type: 'application/javascript',
  // size: 4375,
  // atime: 'Sun, 30 Nov 2014 03:38:25 GMT',
  // mtime: 'Sun, 30 Nov 2014 03:31:30 GMT',
  // ctime: 'Sun, 30 Nov 2014 03:31:30 GMT',
  // birthtime: 'Tue, 23 Sep 2014 01:13:26 GMT',
  // compress: 'origin',
  // contents: <Buffer 27 75 73 65 20 73 74 72 69 63 74 27 3b 0a 2f 2f 20 2a 2a 47 69 74 68 75 62 3a 2a 2a 20 68 74 74 70 73 3a 2f 2f 67 69 74 68 75 62 2e 63 6f 6d 2f 74 6f ... >,
  // length: 4375,
  // md5: '08f89d75eec2731ea6612ada474a1795' }

  fileCache('index.js', 'gzip')(function (err, file) {
    console.log(err, file)
  // read file from cache, compress with gzip:
  //
  // { path: '/Users/zensh/git/toajs/file-cache/index.js',
  // dir: '/Users/zensh/git/toajs/file-cache',
  // name: 'index.js',
  // ext: '.js',
  // type: 'application/javascript',
  // size: 4375,
  // atime: 'Sun, 30 Nov 2014 03:48:47 GMT',
  // mtime: 'Sun, 30 Nov 2014 03:48:35 GMT',
  // ctime: 'Sun, 30 Nov 2014 03:48:35 GMT',
  // birthtime: 'Tue, 23 Sep 2014 01:13:26 GMT',
  // compress: 'gzip',
  // contents: <Buffer 1f 8b 08 00 00 00 00 00 00 03 95 58 4b 73 db 36 10 be eb 57 30 97 90 74 64 ca e9 34 17 a9 69 a7 75 d3 36 33 c9 a4 d3 26 27 47 07 8a 04 45 24 14 c1 00 ... >,
  // length: 2576,
  // md5: '33a6f550613d64dc6b7e1e2d99d568bd' }
  })
})
