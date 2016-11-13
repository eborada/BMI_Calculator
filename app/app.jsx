import React from 'react';
import ReactDOM from 'react-dom';
import BMICalculator from './components/BMICalculator';

//App CSS
require('style!css!applicationStyles')

ReactDOM.render(
  <BMICalculator />,
  document.getElementById('app')
);
