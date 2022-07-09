(() => {
  var o = {
      671: (o) => {
        o.exports = function () {
          (this.hello = function () {
            console.log("Helo");
          }),
            (this.goodbye = function () {
              console.log("bye!");
            });
        };
      },
    },
    e = {};
  function n(t) {
    var r = e[t];
    if (void 0 !== r) return r.exports;
    var s = (e[t] = { exports: {} });
    return o[t](s, s.exports, n), s.exports;
  }
  (() => {
    const o = new (n(671))();
    o.hello(), o.goodbye();
  })();
})();
