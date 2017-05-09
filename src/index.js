import React, {Component} from 'react';
import PropTypes from 'prop-types';


const $ = typeof($) === 'undefined'
  ? require('jquery')
  : $;

class Main extends Component {
  constructor(props) {
    super(props);
    let end;
    if(typeof this.props.children === 'string'){
      end = +this.props.children;
    }else if(typeof (this.props.children&&this.props.children.props&&this.props.children.props.children)==='string'){
      end = +this.props.children.props.children;
    }
    this.state = {
      num: '-',
      start: props.start,
      end: props.end||end,
      lazy: props.lazy,
      func:typeof this.props.children === 'function',
    }
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {
    if (this.state.lazy&&!this.state.func) {
      const debounce = this.debounce(100);
      $(window).scroll(() => debounce(this.scroll)).trigger('scroll')
    } else {
      this.animate();
    }
  }

  scroll() {
    if ($(this.refs.rnum).offset().top < window.scrollY + window.screen.height) {
      this.setState({lazy: false})
      this.animate();
    }
  }

  debounce(delay) {
    let timer = null;
    return function(fn) {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    }
  }

  componentWillReceiveProps(newprop) {
    if (newprop.end === this.state.end || this.state.lazy)
      return;
    this.animate(false);
    this.setState(prevState => ({end: newprop.end}), () => this.animate())
  }

  format_number(n) {
    const zhengshu = n >= 0;
    const b = Math.abs(~~ n).toString();
    const len = b.length;
    if (len <= 3) {
      return ~~ n;
    }
    const r = len % 3;
    let result = b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",");
    if (result.startsWith(',')) {
      result = result.substring(1);
    }
    return zhengshu
      ? result
      : `-${result}`;
  }

  animate(run=true) {
    if(!run){
        $(this).stop();
        return;
    }
    const {
      duration = 1000,
      easing = 'swing',
      format = false,
      dot = 0
    } = this.props;
    const start = this.state.start || 0;
    const end = this.state.end === 0
      ? 0
      : (this.state.end || start);
    $(this).attr('nums', start).animate({
      nums: end
    }, {
      duration,
      easing,
      step: re => {
        const nu = (re).toFixed(dot)
        let num = format
          ? this.format_number(nu)
          : nu;
        this.setState({start: re, num})
      }
    });
  }

  render() {
    const type = this.props.children&&this.props.children.type||'span';
    const re = {type}
    if(this.state.func){
        return this.props.children(this.state.num)
    }
    return <re.type ref='rnum' id={this.props.id} className={this.props.className}>{this.state.num}</re.type>
  }
}


export default Main;

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  start: PropTypes.number,
  duration: PropTypes.number,
  end: PropTypes.number,
  easing: PropTypes.oneOf(['easing', 'linear']),
  format: PropTypes.bool,
  dot: PropTypes.number,
  lazy: PropTypes.bool
}
