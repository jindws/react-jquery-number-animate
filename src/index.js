import React, {Component} from 'react';
import PropTypes from 'prop-types';

const $ = typeof($) === 'undefined'?require('jquery'):$;

export default class Main extends Component {
  constructor(props) {
    super(props);
    const sets = props.sets||{};
    this.state = {
      num: '-',
      start: sets.start,
      end: sets.end,
      lazy:sets.lazy
    }
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {

    // console.log(this.refs.rnum)
    if(this.state.lazy){
      const debounce = this.debounce(100);
      $(window).scroll(()=>{
          debounce(this.scroll)}
      )
    }else{
      this.animate();
    }
  }

  scroll(){
    // this.setState({
    //     Wtop:window.scrollY + window.screen.height
    // })
    if($(this.refs.rnum).offset().top<window.scrollY + window.screen.height){
        this.setState({
          lazy:false
        })
        this.animate();
    }
    // console.log(this.refs.rnum,$(this.refs.rnum).offset().top)

  }

  debounce(delay) {
    // 持久化一个定时器 timer
    let timer = null;
    // 闭包函数可以访问 timer
    return function(fn) {
      // 通过 'this' 和 'arguments'
      // 获得函数的作用域和参数
      let context = this;
      let args = arguments;
      // 如果事件被触发，清除 timer 并重新开始计时
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    }
  }

  componentWillReceiveProps(newprop) {
      if(newprop.sets.end === this.state.end||this.state.lazy)return;
      this.setState(prevState=>({
        end:newprop.sets.end
      }),() => this.animate())
  }

  format_number(n) {
    const zhengshu = n >= 0;
    const b = Math.abs(~~n).toString();
    const len = b.length;
    if (len <= 3) {
      return ~~n;
    }
    const r = len % 3;
    let result = b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",");
    if(result.startsWith(',')){
      result = result.substring(1);
    }
    return zhengshu?result:`-${result}`;
  }

  animate() {
    const sets = this.props.sets || {};
    const {
      duration = 1000,
      easing = 'swing',
      format = false
    } = sets;
    const start = this.state.start||0;
    const end = this.state.end === 0 ?0:(this.state.end||start);
    $(this).attr('nums', start).animate({
      nums: end,
    }, {
      duration,
      easing,
      step: re => {
        const nu = (re).toFixed(sets.dot||0)
        let num = format
          ? this.format_number(nu)
          : nu;

        // if(format&&sets.dot){
        //   console.log(re.toFixed(sets.dot),sets.dot)
        //   num = (+(re.toFixed(sets.dot))).toLocaleString()
        // }
        this.setState({start: re, num})
      }
    });
  }

  render() {
    return <span ref='rnum' id={this.props.id} className={this.props.className}>{this.state.num}</span>
  }
}

Component.propTypes = {
  sets: PropTypes.shape({
    start:PropTypes.number,
    duration:PropTypes.number,
    end:PropTypes.number,
    easing:PropTypes.oneOf(['easing', 'linear']),
    format:PropTypes.bool,
    dot:PropTypes.number,
    lazy:PropTypes.bool,
  }),
  className:PropTypes.string
}
