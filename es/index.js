function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

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
    var zhengshu = n >= 0;
    var b = Math.abs(~~n).toString();
    var len = b.length;
    if (len <= 3) {
      return ~~n;
    }
    var r = len % 3;
    var result = b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",");
    return zhengshu ? result : '-' + result;
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

    var start = this.state.start || 0;
    var end = this.state.end === 0 ? 0 : this.state.end || start;
    $(this).attr('nums', start).animate({
      nums: end
    }, {
      duration: duration,
      easing: easing,
      step: function step(re) {
        var nu = Math.ceil(re);
        var num = format ? _this3.format_number(nu) : nu;
        _this3.setState({ start: re, num: num });
      }
    });
  };

  Main.prototype.render = function render() {
    return React.createElement(
      'span',
      null,
      this.state.num
    );
  };

  return Main;
}(Component);

export { Main as default };


Component.propTypes = {
  aa: PropTypes.number,
  sets: PropTypes.shape({
    start: PropTypes.number,
    duration: PropTypes.number,
    end: PropTypes.number,
    easing: PropTypes.oneOf(['easing', 'linear']),
    format: PropTypes.bool
  })
};