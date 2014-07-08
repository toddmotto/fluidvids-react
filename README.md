# <FluidVid> for React.js

fluidvids.js implementation for [React.js](http://facebook.github.io/react). Transforms using `@jsx` to `React.DOM`.

> [Live demo of fluidvids for React](http://toddmotto.com/labs/fluidvids-react).

See the original [fluidvids](//github.com/toddmotto/fluidvids).

Default ratio of `16:9`, so you can omit the `width` and `height` attributes if your video follows suit.

## Usage

Include `react.js` and `JSXTransformer`:

```html
<script src="lib/react.min.js"></script>
<script src="lib/JSXTransformer.js"></script>
```

Import `react.fluidvids.js`, with `type=text/jsx` you need to run over HTTP (i.e. local or production server). Declare elements and render components out:

```html
<div class="fluidvids-vimeo"></div>
<div class="fluidvids-youtube"></div>

<script type="text/jsx" src="react.fluidvids.js"></script>
<script type="text/jsx">
/**
 * @jsx React.DOM
 */
React.renderComponent(
  <FluidVid src="http://player.vimeo.com/video/23919731" />,
  document.querySelector('.fluidvids-vimeo')
);
React.renderComponent(
  <FluidVid src="http://www.youtube.com/embed/JMl8cQjBfqk" />,
  document.querySelector('.fluidvids-youtube')
);
</script>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release history
- 1.0.0
  - Initial release
