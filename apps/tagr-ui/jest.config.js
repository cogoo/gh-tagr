module.exports = {
  name: 'tagr-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tagr-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
