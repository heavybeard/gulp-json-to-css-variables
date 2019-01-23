# gulp-json-to-css-variables

Generate CSS Variables from a json file with Gulp

## Installation

```shell
npm install --save-dev gulp-json-to-css-variables
```

or

```shell
yarn add --dev gulp-json-to-css-variables
```

## Usage

```javascript
const jsonToCssVariables = require('json-to-css-variables');

gulp.task('css-variables', () => gulp.src('example.json')
    .pipe(jsonToCssVariables())
    .pipe(gulp.dest('./dist'))
)
```

## Thanks to

[json-to-css-variables](https://www.npmjs.com/package/json-to-css-variables)
