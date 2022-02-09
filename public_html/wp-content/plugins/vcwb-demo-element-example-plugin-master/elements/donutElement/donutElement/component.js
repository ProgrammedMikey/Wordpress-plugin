import React from 'react'
import { getService } from 'vc-cake'
import classNames from 'classnames'
import { renderToStaticMarkup } from 'react-dom/server'

// Import Donut component for each chart option
// Attributes for each donut chart are taken from paramsGroup attribute type in settings.json
import Donut from './donut'

const vcvAPI = getService('api')

export default class VerticalChart extends vcvAPI.elementComponent {
  // Generate an array of JSX with donut chart graph
  getContent () {
    const { bars } = this.props.atts

    const items = bars.value ? bars.value : bars
    return items.map((item, i) => {
      const key = `bar-${this.props.id}-${i}`
      const attributes = item
      attributes.atts = {}
      attributes.atts.tag = this.props.atts.tag
      attributes.atts.title = item.title
      attributes.atts.text = item.text
      attributes.atts.value = item.value
      attributes.itemIndex = i
      attributes.getMixin = this.getInnerMixinData.bind(this, 'bars')
      return <Donut {...attributes} key={key} />
    })
  }

  render () {
    const { id, atts, editor } = this.props
    const { toggleValue, customClass, metaCustomId } = atts
    let containerClasses = ['vce', 'vce-vertical-charts-container']
    const customProps = {}

    if (typeof customClass === 'string' && customClass) {
      containerClasses.push(customClass)
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    if (toggleValue) {
      containerClasses.push('vce-vertical-chart-display-value')
    }

    let mixinData = this.getMixinData('barThickness')
    if (mixinData) {
      containerClasses.push(`vce-vertical-chart-thickness--${mixinData.selector}`)
    }

    mixinData = this.getMixinData('titleColor')
    if (mixinData) {
      containerClasses.push(`vce-vertical-chart-title-color--${mixinData.selector}`)
    }

    containerClasses = classNames(containerClasses)

    const doAll = this.applyDO('all')
    const content = this.getContent()

    // Content is saved as a String with raw HTML
    const barsHTML = renderToStaticMarkup(content)

    // Need to use wrapper with .vcvhelper to save raw HTML string in data attribute for View Page
    return (
      <div {...editor} id={`el-${id}`} className={containerClasses} {...doAll}>
        <div className='vce-vertical-charts' {...customProps}>
          <div className='vcvhelper' data-vcvs-html={barsHTML}>
            {content}
          </div>
        </div>
      </div>
    )
  }
}
