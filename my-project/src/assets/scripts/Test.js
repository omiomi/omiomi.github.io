import * as d3 from 'd3'

export default class Test {
  constructor (selector) {
    this.svg = d3.select(selector).append('svg')
  }
  render () {
    this.svg.append('g')
      .attr('id', 'www')
  }
}
