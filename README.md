[![Build Status](https://travis-ci.org/moiamoia/react-jquery-number-animate.svg?branch=master)](https://travis-ci.org/moiamoia/react-jquery-number-animate)

#### need jquery
`yarn add jquery`

`<script src='XXX/jqury.min.js'></script>`


## #2.X USE
`yarn add react-jquery-number-animate`

```
import Rnum from 'react-jquery-number-animate'
<Rnum
  start={100}//起点,选填,默认0
  end={2017}//终点,默认为start的值
  duration={500}//动画时长,默认1000ms
  easing={'linear'}//可选,easing或linear,默认easing或linear
  format={true}//是否本地化数字(1000->1,000),
  dot={2},//默认0保留小数,暂会被format覆盖
  lazy={true}//默认false,懒加载
/>
```

## #2.1添加 自定义 type
```
{/* <div>2017</div> */}
<Rnum
  end={2017}//有end,取end的结果
>
  <div>2000</div>
</Rnum>
```
```
{/* <div>2000</div> */}
<Rnum>
  <div>2000</div>
</Rnum>
```
```
{/* <span>1000</span> */}
<Rnum>
  1000
</Rnum>
```


## 1.x版本,2.x不兼容
`yarn add react-jquery-number-animate@1.1.6`
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
