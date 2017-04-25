import React, { Component } from 'react';

import $ from 'jquery';

export default class Main extends Component{
  constructor(props){
    super(props)
    this.state={
      num:'-',
      start:props.sets.start,
      end:props.sets.end,
    }
  }

  componentDidMount(){
    this.animate();
  }

  componentWillReceiveProps(newprop){
    this.setState({
        end:newprop.sets.end
    },()=>this.animate());
  }

  format_number(n){
    const b = parseInt(n).toString();
    const len = b.length;
    if (len <= 3) {
        return b;
    }
    const r = len % 3;
    return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
  }

  animate(){
    const {duration=1000,easing='swing',format=false} = this.props.sets;
    $(this).attr('nums', this.state.start||0).animate({
    nums: this.state.end||start
    }, {
        duration,
        easing,
        step:re=>{
          const nu = Math.ceil(re);
          const num = format?this.format_number(nu):nu;
          this.setState({
            start:re,
            num,
          })
        }
    });
  }

  render(){
    return <span>{this.state.num}</span>
  }
}
