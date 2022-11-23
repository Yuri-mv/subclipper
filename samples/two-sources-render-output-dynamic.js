/**
 * This example loads a subclipper dynamically with two assets.
 * The subclipping mode is limited to only rendered jobs (single and multi bitrate, no filters)
 * This example will not show an asset pane.
 */
var twoSourcesRenderOutputDynamicExample = function () {

  /**
   * the subclipper instance
   */
  var widget = new subclipper({
    selector: '#subclipper',
    restVersion: '2.0',
    logLevel: 'info',
    submitSubclipCallback: onSubmitSubclip,
    subclippingMode: 'render' // This option sets the allowed subclipping mode ('all', 'render', 'filter')
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
