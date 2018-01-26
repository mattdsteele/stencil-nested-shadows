exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  serviceWorker: false,
  bundles: [{ components: ['my-component', 'inner-shadow', 'inner-noshadow'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
