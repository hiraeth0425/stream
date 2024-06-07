module.exports = {
  plugins: [
    require('postcss-mobile-forever')({
      viewportWidth: (file) => (file.includes('node_modules/vant') ? 375 : 750),
      enableMediaQuery: true,
      desktopWidth: 800,
      landscapeWidth: 800,
      appSelector: 'body',
      // propertyBlackList: { '.van-icon': 'font' },
      rootContainingBlockSelectorList: ['van-tabbar', 'van-action-sheet', 'van-popup']
      // demoMode: true,
      // side: { selector1: '.footer' },
    })
  ]
}
