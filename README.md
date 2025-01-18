# Airbnb eslint plugin eslint 9 converter

This very simple script exists only to generate eslint v9 flat config rules from `eslint-config-airbnb-base` (v15.0.0) which is still eslint v8 (see airbnb's [eslint v9 upgrade tracker issue](https://github.com/airbnb/javascript/issues/2961)).

There probably aren't going to be any updates before airbnb [migrate to eslint 9](https://github.com/airbnb/javascript/issues/2961), so all you need to do is copy `eslint-airbnb-base-rules.json` into your project root directory and import it into your eslint config file.

It's a temporary solution until airbnb release an eslint v9 compatible version of their config. It might not be perfect, but for me it's good enough until the v9 `eslint-config-airbnb-base` lands.

I'm not supporting this, airbnb isn't supporting this, and I'm not going to update this.

## Usage
1. copy `eslint-airbnb-base-rules.json` into your eslint 9 project root directory.

2. Import the rules into your eslint config file:
```js
// eslint.config.js
import airbnbRules from './eslint-airbnb-base-rules.json' with { type: 'json' };
// FUTURE: when airbnb release eslint v9 compatible version of eslint-config-airbnb-base
// import airbnbRules from 'eslint-config-airbnb-base/rules';

export default [
  {
    files: ['**/*.js'],
    rules: {
      ...airbnbRules,
      'no-console': 'off',
    }
  }
]

```
