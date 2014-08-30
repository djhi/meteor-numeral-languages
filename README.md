# Numeral v1.5.3 languages for Meteor

[Numeral.js](http://numeraljs.com/) is a JavaScript library for parsing, validating, and formatting numbers.

This package **only install languages files on client side** and depends on the numeral package from vsivsi: https://github.com/vsivsi/meteor-numeral

Installation
-------------

For Meteor v0.9.0 and above:
`meteor add gildaspk:numeral-languages`

For Meteor versions below v0.9.0 using Meteorite/AtmosphereJS:
`mrt add numeral-languages`

Once installed, just set your language as per Numeral documentation, inside a `client/numeral-config.js` file for example:
`numeral.language('fr');`

Notes
-------------

Version should have been the same as numeral but is 1.5.4 because I had to republish it and meteor does not allow the same version to blished twice.