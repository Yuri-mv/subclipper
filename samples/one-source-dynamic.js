/**
 * This example loads a subclipper dynamically with one asset.
 * This example will not show an asset pane.
 */
var oneSourceDynamicExample = function () {

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
   * Here we load the sources that we need, in this case is just one.
   */
  var sources = [];
  sources.push(samples[0]);
  widget.load(sources);

  return widget;
}
