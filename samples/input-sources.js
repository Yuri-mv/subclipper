// This is a list of sample sources to be used through out the samples.
window.samples = [
    {
      id: "nb:cid:UUID:00000000-0000-0000-0000-000000000001",
      name: "Azure Media Services Overview",
      type: "asset",
      source: {
        src: "//amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest",
        type: "application/vnd.ms-sstr+xml",
      }
    },
    {
      id: "nb:cid:UUID:00000000-0000-0000-0000-000000000002",
      name: "Tears of Steel video (AES JWT Token)",
      type: "asset",
      source: {
        src: "//amssamples.streaming.mediaservices.windows.net/830584f8-f0c8-4e41-968b-6538b9380aa5/TearsOfSteelTeaser.ism/manifest",
        protectionInfo: [{
          type: 'AES',
          authenticationToken: 'Bearer=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiI5ZGRhMGJjYy01NmZiLTQxNDMtOWQzMi0zYWI5Y2M2ZWE4MGIiLCJpc3MiOiJodHRwOi8vdGVzdGFjcy5jb20vIiwiYXVkIjoidXJuOnRlc3QiLCJleHAiOjE3MTA4MDczODl9.lJXm5hmkp5ArRIAHqVJGefW2bcTzd91iZphoKDwa6w8'
        }],
        type: "application/vnd.ms-sstr+xml",
      }
    },
    {
      id: "nb:cid:UUID:00000000-0000-0000-0000-000000000003",
      name: "DAM Trends Report",
      type: "asset",
      source: {
        src: "https://mvc2cprototype-usea.streaming.media.azure.net/d385c8b6-2a42-4131-bc9d-c5d807e6b7a5/DAMTrendsReport'22-Video Ad-Peop.ism/manifest(format=m3u8-cmaf)",
        type: "application/vnd.ms-sstr+xml",
      }
    },
    {
      id: "nb:cid:UUID:00000000-0000-0000-0000-000000000004",
      name: "Big buck bunny (with thumbnails)",
      type: "asset",
      source: {
        src: "//igfunctests.streaming.mediaservices.windows.net/d95ac4f5-424d-4e9c-9e29-949382bb40b9/bbb_sunflower_1080p_60fps_normal.ism/manifest",
        type: "application/vnd.ms-sstr+xml",
      },
      thumbnails: [
        "https://iglinstore.blob.core.windows.net/asset-7561120b-e942-4c37-a5c2-d7002617144c/thumbs_000001.png?sv=2015-07-08&sr=c&si=c68c20d4-2762-42d7-b808-3de0f2f9bdc2&sig=j4%2B%2FuR7qz3J91ZApzD%2BZFMTiGqjVSlB7hFZFxVojouU%3D&st=2017-07-31T13%3A09%3A16Z&se=2117-07-31T13%3A09%3A16Z",
        "https://iglinstore.blob.core.windows.net/asset-7561120b-e942-4c37-a5c2-d7002617144c/thumbs_000002.png?sv=2015-07-08&sr=c&si=c68c20d4-2762-42d7-b808-3de0f2f9bdc2&sig=j4%2B%2FuR7qz3J91ZApzD%2BZFMTiGqjVSlB7hFZFxVojouU%3D&st=2017-07-31T13%3A09%3A16Z&se=2117-07-31T13%3A09%3A16Z",
        "https://iglinstore.blob.core.windows.net/asset-7561120b-e942-4c37-a5c2-d7002617144c/thumbs_000003.png?sv=2015-07-08&sr=c&si=c68c20d4-2762-42d7-b808-3de0f2f9bdc2&sig=j4%2B%2FuR7qz3J91ZApzD%2BZFMTiGqjVSlB7hFZFxVojouU%3D&st=2017-07-31T13%3A09%3A16Z&se=2117-07-31T13%3A09%3A16Z",
        "https://iglinstore.blob.core.windows.net/asset-7561120b-e942-4c37-a5c2-d7002617144c/thumbs_000004.png?sv=2015-07-08&sr=c&si=c68c20d4-2762-42d7-b808-3de0f2f9bdc2&sig=j4%2B%2FuR7qz3J91ZApzD%2BZFMTiGqjVSlB7hFZFxVojouU%3D&st=2017-07-31T13%3A09%3A16Z&se=2117-07-31T13%3A09%3A16Z",
        "https://iglinstore.blob.core.windows.net/asset-7561120b-e942-4c37-a5c2-d7002617144c/thumbs_000005.png?sv=2015-07-08&sr=c&si=c68c20d4-2762-42d7-b808-3de0f2f9bdc2&sig=j4%2B%2FuR7qz3J91ZApzD%2BZFMTiGqjVSlB7hFZFxVojouU%3D&st=2017-07-31T13%3A09%3A16Z&se=2117-07-31T13%3A09%3A16Z",
        "https://iglinstore.blob.core.windows.net/asset-7561120b-e942-4c37-a5c2-d7002617144c/thumbs_000006.png?sv=2015-07-08&sr=c&si=c68c20d4-2762-42d7-b808-3de0f2f9bdc2&sig=j4%2B%2FuR7qz3J91ZApzD%2BZFMTiGqjVSlB7hFZFxVojouU%3D&st=2017-07-31T13%3A09%3A16Z&se=2117-07-31T13%3A09%3A16Z",
        "https://iglinstore.blob.core.windows.net/asset-7561120b-e942-4c37-a5c2-d7002617144c/thumbs_000007.png?sv=2015-07-08&sr=c&si=c68c20d4-2762-42d7-b808-3de0f2f9bdc2&sig=j4%2B%2FuR7qz3J91ZApzD%2BZFMTiGqjVSlB7hFZFxVojouU%3D&st=2017-07-31T13%3A09%3A16Z&se=2117-07-31T13%3A09%3A16Z",
        "https://iglinstore.blob.core.windows.net/asset-7561120b-e942-4c37-a5c2-d7002617144c/thumbs_000008.png?sv=2015-07-08&sr=c&si=c68c20d4-2762-42d7-b808-3de0f2f9bdc2&sig=j4%2B%2FuR7qz3J91ZApzD%2BZFMTiGqjVSlB7hFZFxVojouU%3D&st=2017-07-31T13%3A09%3A16Z&se=2117-07-31T13%3A09%3A16Z",
        "https://iglinstore.blob.core.windows.net/asset-7561120b-e942-4c37-a5c2-d7002617144c/thumbs_000009.png?sv=2015-07-08&sr=c&si=c68c20d4-2762-42d7-b808-3de0f2f9bdc2&sig=j4%2B%2FuR7qz3J91ZApzD%2BZFMTiGqjVSlB7hFZFxVojouU%3D&st=2017-07-31T13%3A09%3A16Z&se=2117-07-31T13%3A09%3A16Z"
      ]
    },
    {
      id: "nb:cid:UUID:00000000-0000-0000-0000-000000000005",
      name: "Live (Smooth Ingest) - 24x7",
      type: "asset",
      source: {
        src: "//b028.wpc.azureedge.net/80B028/Samples/a38e6323-95e9-4f1f-9b38-75eba91704e4/5f2ce531-d508-49fb-8152-647eba422aec.ism/manifest",
        type: "application/vnd.ms-sstr+xml",
      }
    },
    {
      id: "nb:cid:UUID:00000000-0000-0000-0000-000000000006",
      name: "Elephant's Dream (filter)",
      type: "filter",
      source: {
        src: "//amssamples.streaming.mediaservices.windows.net/b6822ec8-5c2b-4ae0-a851-fd46a78294e9/ElephantsDream.ism/manifest(filtername=FirstFilter)",
        type: "application/vnd.ms-sstr+xml",
      },
    },
    {
      id: "nb:cid:UUID:00000000-0000-0000-0000-000000000007",
      name: "Big Buck Bunny (DRM PlayReady/Widevine)",
      type: "asset",
      source: {
        src: "//amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest",
        protectionInfo: [{ type: 'PlayReady' }, { type: 'Widevine' }],
        type: "application/vnd.ms-sstr+xml",
      }
    },
  ];
