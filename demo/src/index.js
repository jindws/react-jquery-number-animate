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
      <Rnum className={'myclass'} sets={{
          start:100,
          end:this.state.end,
          duration:1000,
          easing:'linear',
          format:true,
        }}/>
        <Rnum sets={{
            start:0,
            end:1000
          }}/>
      <button onClick={()=>this.setState(prevState=>({
          end:prevState.end+2000,
        }))}>ADD</button>
        <button onClick={()=>this.setState(prevState=>({
            end:prevState.end-1000,
          }))}>subtract</button>
      </section>
    )
  }
}


render(
  <Demo/>, document.querySelector('#demo'));
