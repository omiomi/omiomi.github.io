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
      height: 900
    }
  }

  /**
   *  处理原始数据，获取pie布局转换后的数据
   *  @param    {Array}  data    原始数据
   *  @return   {Array}  dataset 转换后的数据
   */
  render (selector, dataurl, arrColor) {
    const {width, height} = this.defaultSetting()

    d3.xml('csv/southchinasea.svg', function(error, xmlDocument) {
      svg.html(function(d){
        return d3.select(this).html() + xmlDocument.getElementsByTagName("g")[0].outerHTML;
      });
      var gSouthSea = d3.select("#southsea");
      gSouthSea.attr("transform","translate(540,410)scale(0.5)")
        .style("fill", function(d){
          return color(d);
        })
        .style("stroke", function(d){
          return color(d);
        })
        .style("stroke-width", "1")
        .attr("class","southsea");
    });
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
            .style('fill-opacity', 0.6)
        })
    })
  }
}
