const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const Records = require('spike-records')
const Contentful = require('spike-contentful')
const locals = {}

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: (ctx) => Object.assign(locals, { pageId: pageId(ctx) })
  }),
  postcss: cssStandards(),
  babel: jsStandards,
  plugins: [
    
    plugins: [
    new Contentful({
      addDataTo: locals,
      accessToken: '9a14c1d26fa975cefd86f3cd49a79a654b05d5732ed654ce57fd70753acd0e43',
      spaceId: '6n4dchzgpcdt',
      contentTypes: [
        {
          name: 'Articles',
          id: '47C4HEayWkSuiEqgsw28YI',
        }
        
      ]
    })
  ],
  reshape: (ctx) => {
    return htmlStandards({
      locals
    })
  },
  ]
}
