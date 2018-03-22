/*
 * @Author: yao.wang
 * @Email: 1953421292@qq.com
 * @Date: 2018-01-19 22:39:06
 * @Last Modified time: 2018-01-19 22:39:06
 * @Description: 绘制中国地图
 */
import * as d3 from 'd3'
import * as topojson from 'topojson'

export default class CnMap {
  /**
   *  默认配置项
   *  @return   {[Object]}  [默认配置项]
   */
  defaultSetting () {
    return {
      width: 1200,
      height: 800
    }
  }
  /**
   *  添加提示弹窗
   *  @param    {String}  selector 图表容器，支持class或id
   *  @param    {String}  selector 图表容器，支持class或id
   *  @return   {Array}  dataset 转换后的数据
   */
  constructor (selector, option = {}) {
    const defaultSetting = this.defaultSetting()
    this.config = Object.assign(defaultSetting, option)
    const { width, height } = this.config
    console.log(width, height)
    this.tooltip = d3.select(selector)
      .append('span')
      .attr('class', 'tooltip')
      .attr('id', 'tooltip')
  }
  /**
   *  添加提示弹窗
   *  @param    {String}  selector 图表容器，支持class或id
   *  @param    {String}  selector 图表容器，支持class或id
   *  @return   {Array}  dataset 转换后的数据
   */
  showTooltip (data, point) {
    this.tooltip.style('position', 'fixed')
      .style('top', `${point.y + 5}px`)
      .style('left', `${point.x + 5}px`)
      .text(data)
  }
  /**
   *  添加提示弹窗
   *  @param    {String}  selector 图表容器，支持class或id
   *  @param    {String}  selector 图表容器，支持class或id
   *  @return   {Array}  dataset 转换后的数据
   */
  hideTooltip () {
    this.tooltip.remove()
  }
  /**
   *  处理原始数据，获取pie布局转换后的数据
   *  @param    {Array}  data    原始数据
   *  @return   {Array}  dataset 转换后的数据
   */
  render (selector, dataurl, arrColor, data) {
    const that = this
    const {width, height} = this.defaultSetting()
    const color = d3.scaleOrdinal(d3.schemeCategory10)
    const svg = d3.select(selector)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    d3.json(dataurl, function (toporoot) {
      const dataset = topojson.feature(toporoot, toporoot.objects.world)
      const projection = d3.geoMercator()
        .center([16, 11])
        .scale(width / 2 / Math.PI)
        .translate([width / 2, height / 2])

      const path = d3.geoPath()
        .projection(projection)

      svg.append('g')
        .selectAll('path')
        .data(dataset.features)
        .enter()
        .append('path')
        .attr('d', path)
        .style('stroke', '#fff')
        .style('stroke-width', '1')
        .attr('class', 'province')
        .style('fill-opacity', 0.5)
        .style('fill', function (d) {
          for (let i = 0; i < data.length; i++) {
            if (d.properties.name === data[i].name) {
              d3.select(this)
                .style('fill-opacity', 1 - i / 10)
              console.log(data[i].name)
              return '#fa710c'
            }
          }
          return color(d)
        })
        .on('mousemove', function (d) {
          d3.select(this)
            .style('fill-opacity', 1)
          let name = d.properties.name
          for (let i = 0; i < data.length; i++) {
            if (name === data[i].name) {
              d3.select(this)
                .style('fill-opacity', 1)
              const str = `${data[i].name} 共有婚庆公司${data[i].value}家`
              const point = {x: d3.event.x, y: d3.event.y}
              that.showTooltip(str, point)
            }
          }
        })
        .on('mouseout', function (d) {
          d3.select(this)
            .style('fill-opacity', 0.5)
          for (let i = 0; i < data.length; i++) {
            if (d.properties.name === data[i].name) {
              d3.select(this)
                .style('fill-opacity', 1 - i / 10)
              that.hideTooltip()
            }
          }
        })
    })
  }
}
