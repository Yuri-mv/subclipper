/**
 * This example loads a subclipper dynamically with two assets.
 * This example will not show an asset pane.
 */
var twoSourcesDynamicExample = function () {

  /**
   * the subclipper instance
   */
  var widget = new subclipper({
    selector: '#subclipper',
    restVersion: '2.0',
    logLevel: 'info',
    submitSubclipCallback: onSubmitSubclip,
  });

  /**
   * Here we load the sources that we need, in this case two.
   */
  var sources = [];
  sources.push(samples[0]);
  sources.push(samples[1]);
  
  widget.load(sources);

  return widget;
}
