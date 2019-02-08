import 'angular';
import 'angular-mocks';

import './app.module';

const testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
