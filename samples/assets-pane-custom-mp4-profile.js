/**
 * This example loads a subclipper with assets pane and
 * a custom single bitrate MP4 profile
 * The assets are filtered using the function onLoadAssets
 */
var assetsPaneCustomSingleMP4ProfileExample = function () {

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
   * This is the single bitrate MP4 profile from
   * https://docs.microsoft.com/en-us/azure/media-services/media-services-mes-preset-h264-single-bitrate-1080p
   * with a few modificaitons
   */
  var singleBitrateMp4Profile = {  
  "Version": 1.0,  
  "Codecs": [  
    {  
      "KeyFrameInterval": "00:00:02",  
      "SceneChangeDetection": true,  
      "H264Layers": [  
        {  
          "Profile": "Auto",  
          "Level": "auto",  
          "Bitrate": 6750,  
          "MaxBitrate": 6750,  
          "BufferWindow": "00:00:05",  
          "Width": 1920,  
          "Height": 1080,  
          "BFrames": 3,  
          "ReferenceFrames": 3,  
          "AdaptiveBFrame": true,  
          "Type": "H264Layer",  
          "FrameRate": "0/1"  
        }  
      ],  
      "Type": "H264Video"  
    },  
    {  
      "Profile": "AACLC",  
      "Channels": 2,  
      "SamplingRate": 48000,  
      "Bitrate": 256,  //We modified the bitrate, the original is 128
      "Type": "AACAudio"  
    }  
  ],  
  "Outputs": [  
    {  
      "FileName": "{Basename}_{Width}x{Height}_{VideoBitrate}.mp4",  
      "Format": {  
        "Type": "MP4Format"  
      }  
    }  
  ]  
}; 

  /**
   * the subclipper instance
   */
  return new subclipper({
    selector: '.azure-subclipper',
    restVersion: '2.0',
    logLevel: 'info',
    submitSubclipCallback: onSubmitSubclip,
    assetsPanelLoaderCallback: onLoadAssets,
    singleBitrateMp4Profile: singleBitrateMp4Profile
  });
};
