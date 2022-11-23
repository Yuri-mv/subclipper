/**
 * This example loads a subclipper with assets pane.
 * This example hides the type filters combo from the assets pane
 * The assets are filtered using the function onLoadAssets
 */
var assetsPaneWithoutTypeFiltersExample = function () {

  /**
   * This is the function that loads the assets pane sources, 
   * @param {*} search is the text input from search assets filter
   * @param {*} skip How many sources to skip, used for pagination
   * @param {*} take How many sources to return, used for pagination
   * @param {*} type The type of sources to return, it could be null, 'filter', 'asset'
   * @return a promise containing { count: 0, assets }
   */
  var onLoadAssets = function (search, skip, take, type) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        var TOTAL_FILES = 100;
        var takeFiles = 0;
        var files = [];
        while (files.length < TOTAL_FILES) {
          for (var i = 0; i < samples.length; i++) {
            files.push(Object.assign({}, samples[i]));
          }
        };
        if (skip + take < TOTAL_FILES) {
          takeFiles = take;
        } else {
          takeFiles = TOTAL_FILES - (skip + take);
        }
        if (type) {
          files = $.grep(files, function (v) {
            return v.type === type;
          });
        }
        if (search !== '') {
          files = $.grep(files, function (v) {
            return v.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          });
        }
        files = files.slice(skip, skip + take);
        for (var i = 0; i < files.length; i++) {
          files[i].id = uuidv4();
        }
        resolve({
          total: TOTAL_FILES,
          assets: files,
        });
      }, 2000);
    });
  }

  /**
   * the subclipper instance
   */
  return new subclipper({
    selector: '.azure-subclipper',
    restVersion: '2.0',
    logLevel: 'info',
    submitSubclipCallback: onSubmitSubclip,
    assetsPanelLoaderCallback: onLoadAssets,
    filterAssetsTypes: false // This option hide the assets filter combo from the assets pane
  });
};
