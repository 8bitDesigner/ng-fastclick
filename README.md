# ng-fastclick

This is a very thin (3 line!) Angular wrapper around the [FT's](https://github.com/ftlabs) fantastic [FastClick](https://github.com/ftlabs/fastclick)

## Installation

In your Angular project, run `bower install --save ng-fastclick` to save the
module. Then, in your HTML, add:

``` html
<script src="/path/to/bower_components/ng-fastclick/dist/index.min.js"></script>
```

And lastly, in your Angular module, include `ng-fastclick` as a dependency:

``` javascript
angular.module('my-app', ['ng-fastclick'])
```

