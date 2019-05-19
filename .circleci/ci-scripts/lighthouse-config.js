'use strict';

module.exports = {
  // 1. Run your custom tests along with all the default Lighthouse tests.
  extends: 'lighthouse:default',

  // 2. Add gatherer to the default Lighthouse load ('pass') of the page.
  passes: [{
    // passName: 'defaultPass',
    // gatherers: [
    //   'searchable-gatherer',
    // ],
  }],

  // 3. Add custom audit to the list of audits 'lighthouse:default' will run.
  audits: [
    // 'searchable -audit',
  ],

  // 4. Create a new 'My site metrics' section in the default report for our results.
  categories: {
    // mysite: {
    //   title: 'My site metrics',
    //   description: 'Metrics for our super awesome site',
    //   auditRefs: [
    //     // When we add more custom audits, `weight` controls how they're averaged together.
    //     {id: 'searchable-audit', weight: 1},
    //   ],
    // },
  },
};