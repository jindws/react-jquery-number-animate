import React, {Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: '-',
      start: props.sets.start,
      end: props.sets.end
    }
  }

  componentDidMount() {
    this.animate();
  }

  componentWillReceiveProps(newprop) {
    this.setState({
      end: newprop.sets.end
    }, () => this.animate());
  }

  format_number(n) {
    const zhengshu = n >= 0;
    const b = Math.abs(~~n).toString();
    const len = b.length;
    if (len <= 3) {
      return ~~n;
    }
    const r = len % 3;
    const result = b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",");
    return zhengshu?result:`-${result}`;
  }

  animate() {
    const {
      duration = 1000,
      easing = 'swing',
      format = false
    } = this.props.sets;
    const start = this.state.start||0;
    const end = this.state.end === 0 ?0:(this.state.end||start);
    $(this).attr('nums', start).animate({
      nums: end,
    }, {
      duration,
      easing,
      step: re => {
        const nu = Math.ceil(re);
        const num = format
          ? this.format_number(nu)
          : nu;
        this.setState({start: re, num})
      }
    });
  }

  render() {
    return <span className={this.props.className}>{this.state.num}</span>
  }
}

Component.propTypes = {
  sets: PropTypes.shape({
    start:PropTypes.number,
    duration:PropTypes.number,
    end:PropTypes.number,
    easing:PropTypes.oneOf(['easing', 'linear']),
    format:PropTypes.bool,
  }),
  className:PropTypes.string
}
