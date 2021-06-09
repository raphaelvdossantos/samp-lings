"use strict";

var _PostHandler = _interopRequireDefault(require("./PostHandler"));

var _CursorHandler = _interopRequireDefault(require("./CursorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function main() {
  var cursor, gallery, postHandler, articles;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cursor = (0, _CursorHandler["default"])();
          cursor.start();
          gallery = document.querySelector('.gallery-section');
          postHandler = (0, _PostHandler["default"])();
          _context.next = 6;
          return regeneratorRuntime.awrap(postHandler.getArticles());

        case 6:
          articles = _context.sent;
          articles.forEach(function (article) {
            var h1 = document.createElement('h1');
            h1.innerText = article.content;
            gallery.appendChild(h1);
          });
          _context.t0 = console;
          _context.next = 11;
          return regeneratorRuntime.awrap(fetch('/api'));

        case 11:
          _context.t1 = _context.sent;

          _context.t0.log.call(_context.t0, _context.t1);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

main();