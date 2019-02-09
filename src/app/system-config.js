(function (global) {
  System.config({
    map: {
      '@angular/core': 'lib/core.umd.js',
      '@angular/common': 'lib/common.umd.js',
      '@angular/compiler': 'lib/compiler.umd.js',
      '@angular/platform-browser': 'lib/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'lib/platform-browser-dynamic.umd.js',
      'ng2pairs': 'lib/dist',
      'rxjs': 'lib/rxjs'
    },
    packages: {
      "ng2pairs": {main: "index.js", defaultExtension: "js"}
    }
  });
})(this);