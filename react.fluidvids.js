/**
 * @jsx React.DOM
 */
var FluidVid = React.createClass({
  getRatio: function (width, height) {
    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
  },
  render: function() {

    var src = this.props.src || '';
    var width = this.props.width || 1600;
    var height = this.props.height || 900;

    var ratio = {
      paddingTop: this.getRatio(width, height)
    };

    return (
      <div className={ 'fluidvids' } style={ ratio }>
        <iframe src={ src } width={ width } height={ height } frameBorder={ 0 }></iframe>
      </div>
    );

  }
});
