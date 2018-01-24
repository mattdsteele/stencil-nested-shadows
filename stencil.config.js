exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  bundles: [{ components: ['my-component', 'inner-component'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
