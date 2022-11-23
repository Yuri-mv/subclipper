/**
 * This example loads a subclipper dynamically with one asset.
 * It also sets the minimum clip size to 15 seconds
 * This example will not show an asset pane.
 */
var oneSourceWithGapDynamicExample = function () {

  /**
   * the subclipper instance
   */
  var widget = new subclipper({
    selector: '#subclipper',
    restVersion: '2.0',
    logLevel: 'info',
    submitSubclipCallback: onSubmitSubclip,
    minimumMarkerGap: 15 // This option sets the minimum clip size, the minimum allowed value is 6 seconds
  });

  /**
   * Here we load the sources that we need, in this case is just one.
   */
  var sources = [];
  sources.push(samples[0]);
  widget.load(sources);

  return widget;
}
