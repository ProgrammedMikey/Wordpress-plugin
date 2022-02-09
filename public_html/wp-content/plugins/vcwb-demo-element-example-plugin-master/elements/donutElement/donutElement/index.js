/* eslint-disable import/no-webpack-loader-syntax */
import { getService } from 'vc-cake'
import DonutElement from './component'

const vcvAddElement = getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  function (component) {
    component.add(DonutElement)
  },
  // css settings // css for element
  {
    css: require('raw-loader!./styles.css'),
    editorCss: require('raw-loader!./editor.css'),
    mixins: {
      barThickness: {
        mixin: require('raw-loader!./cssMixins/barThickness.pcss')
      },
      barValue: {
        mixin: require('raw-loader!./cssMixins/barValue.pcss')
      },
      barBackgroundColor: {
        mixin: require('raw-loader!./cssMixins/barBackgroundColor.pcss')
      }
    }
  }
)
