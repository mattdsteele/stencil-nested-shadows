exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  bundles: [{ components: ['my-component', 'inner-shadow', 'inner-noshadow'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
