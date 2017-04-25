'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      num: '-',
      start: props.sets.start,
      end: props.sets.end
    };
    return _this;
  }

  Main.prototype.componentDidMount = function componentDidMount() {
    this.animate();
  };

  Main.prototype.componentWillReceiveProps = function componentWillReceiveProps(newprop) {
    var _this2 = this;

    this.setState({
      end: newprop.sets.end
    }, function () {
      return _this2.animate();
    });
  };

  Main.prototype.format_number = function format_number(n) {
    var b = parseInt(n).toString();
    var len = b.length;
    if (len <= 3) {
      return b;
    }
    var r = len % 3;
    return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
  };

  Main.prototype.animate = function animate() {
    var _this3 = this;

    var _props$sets = this.props.sets,
        _props$sets$duration = _props$sets.duration,
        duration = _props$sets$duration === undefined ? 1000 : _props$sets$duration,
        _props$sets$easing = _props$sets.easing,
        easing = _props$sets$easing === undefined ? 'swing' : _props$sets$easing,
        _props$sets$format = _props$sets.format,
        format = _props$sets$format === undefined ? false : _props$sets$format;

    (0, _jquery2.default)(this).attr('nums', this.state.start || 0).animate({
      nums: this.state.end || start
    }, {
      duration: duration,
      easing: easing,
      step: function step(re) {
        var nu = Math.ceil(re);
        var num = format ? _this3.format_number(nu) : nu;
        debugger;
        _this3.setState({
          start: re,
          num: num
        });
      }
    });
  };

  Main.prototype.render = function render() {
    return _react2.default.createElement(
      'span',
      null,
      this.state.num
    );
  };

  return Main;
}(_react.Component);

exports.default = Main;
module.exports = exports['default'];