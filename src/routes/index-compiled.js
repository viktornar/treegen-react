'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
exports.default = {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [require('./home').default, require('./contact').default, require('./login').default, require('./register').default, require('./admin').default,

  // place new routes before...
  require('./content').default, require('./notFound').default],

  action: function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref) {
      var next = _ref.next;
      var route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              route = void 0;

              // Execute each child route until one of them return the result
              // TODO: move this logic to the `next` function

            case 1:
              _context.next = 3;
              return next();

            case 3:
              route = _context.sent;

            case 4:
              if (!route) {
                _context.next = 1;
                break;
              }

            case 5:

              // Provide default values for title, description etc.
              route.title = (route.title || 'Untitled Page') + ' - www.reactstarterkit.com';
              route.description = route.description || '';

              return _context.abrupt('return', route);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function action(_x) {
      return _ref2.apply(this, arguments);
    }

    return action;
  }()
};

//# sourceMappingURL=index-compiled.js.map