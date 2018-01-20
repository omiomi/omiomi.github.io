/*
 * @Author: yao.wang
 * @Email: 1953421292@qq.com
 * @Date: 2018-01-19 22:39:06
 * @Last Modified time: 2018-01-19 22:39:06
 * @Description: 绘制饼图
 */
import * as d3 from 'd3'

export default class Pie {
  /**
   *  默认配置项
   *  @return   {[Object]}  [默认配置项]
   */
  defaultSetting () {
    return {
      width: 900,
      height: 270,
      radius: [50, 66], // [innerRadius,outerRadius]
      label: { // 名称文本样式
        normal: {
          fontSize: 32,
          color: '#46aaff',
          anchor: 'middle',
          cursor: 'pointer'
        },
        emphasis: {
          fontSize: 32,
          color: '#74ffd3',
          anchor: 'middle',
          cursor: 'pointer'
        }
      },
      itemStyle: {
        label: { // value值文本样式
          fontSize: 32,
          color: '#46aaff',
          anchor: 'middle',
          cursor: 'pointer'
        },
        color: [ // 饼图填充色
          ['#4a8ce5', 'black'],
          ['#44ff86', 'black'],
          ['#dccc5c', 'black']
        ]
      }
    }
  }
  /**
   *  初始化，创建容器
   *  @param    {String}  selector 图表容器，支持class或id
   *  @param    {Object}  option   配置项，控制图形样式
   *  @return   {[type]}  [description]
   */
  constructor (selector, option = {}) {
    const defaultSetting = this.defaultSetting()
    this.config = Object.assign(defaultSetting, option)
    const { width, height } = this.config
    // 创建svg
    this.svg = d3.select(selector)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
  }
  /**
   *  处理原始数据，获取pie布局转换后的数据
   *  @param    {Array}  data    原始数据
   *  @return   {Array}  dataset 转换后的数据
   */
  getDataset (data) {
    let dataset = []
    const clockwisePie = d3.pie() // 顺时针，针对数据类型:[small,bigger]
    const anticlockwisePie = d3.pie()// 逆时针,针对数据类型：[bigger,small]
      .startAngle(0)
      .endAngle(-2 * Math.PI)
    // 求取总数：sum
    let sum = 0
    data.map(d => {
      sum += parseInt(d.value, 100)
    })
    data.map((d, i) => {
      let value = d.value
      let rate = Math.max(Math.floor(value * 100 / sum), 1)
      let rateData = [rate, 100 - rate]
      let dealData = rate >= 50 ? clockwisePie(rateData) : anticlockwisePie(rateData)
      dataset.push(dealData)
    })
    return dataset
  }
  /**
   *  绘制图案底部的名称文本
   *  @param    {Object}  chart 包裹文本的外层g容器
   *  @param    {Object}  info  单组原始数据，包括name和value
   *  @return   {[type]}  [description]
   */
  renderName (chart, info) {
    const {
      radius: [, outerRadius],
      label: {
        normal: {
          fontSize: fontSizeNor,
          color: colorNor,
          anchor: anchorNor,
          cursor: cursorNor
        },
        emphasis: {
          fontSize: fontSizeEmp,
          color: colorEmp,
          anchor: anchorEmp,
          cursor: cursorEmp
        }
      }
    } = this.config
    chart.select('.pie-name')
      .attr('font-size', fontSizeNor)
      .attr('fill', colorNor)
      .attr('text-anchor', anchorNor)
      .attr('transform', `translate(0, ${outerRadius})`)
      .attr('cursor', cursorNor)
      .text(info.name)
      .on('mouseover', function () {
        d3.select(this)
          .attr('font-size', fontSizeEmp)
          .attr('fill', colorEmp)
          .attr('text-anchor', anchorEmp)
          .attr('transform', `translate(0, ${outerRadius})`)
          .attr('cursor', cursorEmp)
      })
      .on('mouseout', function () {
        d3.select(this)
          .attr('font-size', fontSizeNor)
          .attr('fill', colorNor)
          .attr('text-anchor', anchorNor)
          .attr('transform', `translate(0, ${outerRadius})`)
          .attr('cursor', cursorNor)
      })
  }
  /**
   *  绘制图案中间的value值文本
   *  @param    {Object}  chart 包裹文本的外层g容器
   *  @param    {[type]}  info  单组原始数据，包括name和value
   *  @return   {[type]}  [description]
   */
  renderValue (chart, info) {
    const { itemStyle: { label: { fontSize, color, anchor, cursor } } } = this.config
    chart.select('.pie-value')
      .attr('font-size', fontSize)
      .attr('fill', color)
      .attr('text-anchor', anchor)
      .attr('cursor', cursor)
      .text(info.value)
  }
  /**
   *  绘制单个Pie图案
   *  @param    {Objec}  chartName  单个图案的外层g容器
   *  @param    {Array}   pieData   绘制饼图的数据（已经过布局处理）
   *  @param    {Object}  info      该图案的原始数据，包括name和value
   *  @param    {Array}   color     填充饼图的两个颜色值
   *  @return   {[type]}  [description]
   */
  creatPie (chartName, pieData, info, color) {
    const { radius: [innerRadius, outerRadius] } = this.config
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
    const chart = this.svg.select(chartName)
    const update = chart.selectAll('path').data(pieData)
    const enter = update.enter()
    update.exit().remove()
    // 绘制饼图图案
    enter.append('path')
    chart.selectAll('path').data(pieData)
      .attr('fill', (d, i) => {
        return color[i]
      })
      .attr('d', d => {
        return arc(d)
      })
    // 绘制名称--name
    enter.append('text').attr('class', 'pie-name')
    this.renderName(chart, info)

    // 绘制value值
    enter.append('text').attr('class', 'pie-value')
    this.renderValue(chart, info)
  }
  render (data) {
    const {width, height, radius} = this.config
    const chartLayer = this.svg
      .append('g')
    const arc = d3.arc()
      .innerRadius(radius[0])
      .outerRadius(radius[1])
      .padAngle(0.01)
      .cornerRadius(0)
    const labArc = d3.arc()
      .innerRadius(radius[0])
      .outerRadius(radius[1])
      .padAngle(0.01)
    const pieG = chartLayer
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)
    const arcs = d3.pie()
      .sort(null)
      .value(d => d.value)(data)
    const block = pieG.selectAll('.arc')
      .data(arcs)
    const labPath = pieG.selectAll('.lab')
      .data(arcs)
    block.select('path').attr('d', arc)
    labPath.select('path').attr('d', labArc)
    const newBlock = block
      .enter()
      .append('g')
      .classed('arc', true)
    newBlock.append('path')
      .attr('d', arc)
      .attr('class', d => d.name)
      .attr('stroke', 'gray')
      .attr('fill', d3.interpolateCool(Math.random()))
  }
}
