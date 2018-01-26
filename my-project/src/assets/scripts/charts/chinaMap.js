/*
 * @Author: yao.wang
 * @Email: 1953421292@qq.com
 * @Date: 2018-01-19 22:39:06
 * @Last Modified time: 2018-01-19 22:39:06
 * @Description: 绘制饼图
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
      height: 1200
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
  getDataset (dataurl) {
    return new Promise(function (resolve) {
      let dataset = {}
      d3.json(dataurl, function (toporoot) {
        dataset = topojson.feature(toporoot, toporoot.objects.china)
        resolve(dataset)
      })
    })
  }
  /**
   *  绘制单个Map图案
   *  @param    {Objec}  chartName  单个图案的外层g容器
   *  @param    {Array}   pieData   绘制饼图的数据（已经过布局处理）
   *  @param    {Object}  info      该图案的原始数据，包括name和value
   *  @param    {Array}   color     填充饼图的两个颜色值
   *  @return   {[type]}  [description]
   */
  creatMap (mapData, arrColor) {
    console.log('creatMap')
    console.log(mapData)
    const {width, height} = this.defaultSetting()
    const projection = d3.geoMercator()
      .center([107, 31])
      .scale(600)
      .translate([width / 2, height / 2])
    const path = d3.geoPath()
      .projection(projection)
    const color = d3.scaleOrdinal()
      .range(arrColor)

    this.svg
      .append('g')
      .selectAll('path')
      .data(mapData.features)
      .enter()
      .append('path')
      .attr('d', path)
      .style('stroke', '#fff')
      .style('stroke-width', '1')
      .attr('class', 'province')
      .style('fill', function (d) {
        return color(d)
      })
      .style('fill-opacity', 0.5)
      .on('mouseover', function () {
        d3.select(this)
          .style('fill-opacity', 1)
      })
      .on('mouseout', function () {
        d3.select(this)
          .style('fill-opacity', 1)
      })
  }
  render (selector, dataurl, arrColor) {
    const that = this
    this.getDataset(dataurl).then(
      value => that.creatMap(value)
    )
    const {width, height} = this.defaultSetting()
    d3.json(dataurl, function (toporoot) {
      const dataset = topojson.feature(toporoot, toporoot.objects.china)
      const projection = d3.geoMercator()
        .center([107, 31])
        .scale(600)
        .translate([width / 2, height / 2])
      const path = d3.geoPath()
        .projection(projection)
      const color = d3.scaleOrdinal()
        .range(arrColor)

      d3.select(selector)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .selectAll('path')
        .data(dataset.features)
        .enter()
        .append('path')
        .attr('d', path)
        .style('stroke', '#fff')
        .style('stroke-width', '1')
        .attr('class', 'province')
        .style('fill', function (d) {
          return color(d)
        })
        .style('fill-opacity', 0.5)
        .on('mouseover', function () {
          d3.select(this)
            .style('fill-opacity', 1)
        })
        .on('mouseout', function () {
          d3.select(this)
            .style('fill-opacity', 1)
        })
    })
  }
}
