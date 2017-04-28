[![Build Status](https://travis-ci.org/moiamoia/react-jquery-number-animate.svg?branch=master)](https://travis-ci.org/moiamoia/react-jquery-number-animate)

### install

```
  yarn add react-jquery-number-animate -D
```
#### need jquery
`yarn add jquery`

`<script src='XXX/jqury.min.js'></script>`

### Use

```
import Rnum from 'react-jquery-number-animate'
<Rnum sets={{
  start:100,//起点,选填,默认0
  end:1000,//终点,默认为start的值
  duration:1000,//动画时长,默认1000ms
  easing:'linear',//可选,easing或linear,默认easing或linear
  format:true,//是否本地化数字(1000->1,000),
  dot:2,//默认0,保留小数,暂会被format覆盖
  lazy:true,//默认false,懒加载
}} />
```
