import React, {Component} from 'react'
import {render} from 'react-dom'

import Rnum from '../../src'


class Demo extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      end:299,
    }
  }

  render() {
    return (
      <section>
        <Rnum
          start={100}//起点,选填,默认0
          end={2017}//终点,默认为start的值
          duration={500}//动画时长,默认1000ms
          easing={'linear'}//可选,easing或linear,默认easing或linear
          format={true}//是否本地化数字(1000->1,000),
          dot={2}//默认0,保留小数,暂会被format覆盖
          lazy={true}//默认false,懒加载
        />
        <Rnum
          start={100}
          end={this.state.end}
          duration={1000}
          easing={'linear'}
          format={true}
          lazy={true}
        />
      {/* <Rnum className={'myclass'} sets={{
          start:100,
          end:this.state.end,
          duration:1000,
          easing:'linear',
          format:true,
        }}/> */}
      <button onClick={()=>this.setState(prevState=>({
          end:prevState.end+2000,
        }))}>ADD</button>
        <button onClick={()=>this.setState(prevState=>({
            end:prevState.end-1000,
          }))}>subtract</button>
          <div style={{height:'1000px'}}></div>
          {/* <Rnum sets={{
              start:0,
              format:true,
              end:156438,
              dot:1,
              lazy:true,
            }}/> */}
            <Rnum start={0}
                format={true}
                end={156438}
                dot={1}
                lazy={true}
              />
      </section>
    )
  }
}


render(
  <Demo/>, document.querySelector('#demo'));
