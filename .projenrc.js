const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'huss-jay',
  authorAddress: 'hussjay82@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@jayhuss/npm-zip-lambda',
  npmAccess: NpmAccess.PUBLIC,
  repositoryUrl: 'https://github.com/huss-jay/npm-zip-lambda.git',
  deps: ['aws-cdk-lib'] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
