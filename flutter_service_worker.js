'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "343620838467a61cde632bab7da2660b",
".git/config": "e383d07171f8da9d1180f13668c25d52",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1d6133eecf632b4b1a884b5a04608e56",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19f27c73e6ff702180a177c208db1b0d",
".git/logs/refs/heads/main": "3c43198f30e2fe959eeb2f75070de357",
".git/logs/refs/remotes/origin/main": "bdf9e35dd35cbd7022d26f2d0a87928c",
".git/objects/02/667423c3bae822ff14cfb3931ad97ad7f48565": "045aaf50e597a1f8da362a108f18b2ea",
".git/objects/0a/108ff447a887536077784ce4cf063c53999610": "cc1f4d81f63c04820ad88c701721ca47",
".git/objects/0b/842309b5384683ce0671f0c838d8915ac084a8": "27449294a5514b446d7d693e6aed421d",
".git/objects/0f/4e22fe19f2ca57dd2e7cbbd2ed906c73041176": "799b08635eef676c4b2386b3a3103cf3",
".git/objects/14/dc61da852452bfccba5ee5e6094d8be6dc039f": "19e10d567e32561917c7d18b51d1ad31",
".git/objects/17/e82320658a0bc53d2459560d0a17f726aae838": "2b9df50f5c102bbb696e6d86b509d4dc",
".git/objects/18/f665d30199c84e8a79b1cfc46fc5eb0b9b7fc4": "2055937c487d5d676b22cbe24a99c9b2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/8aae75bf24127d53be285b25ca5fced54672f5": "a01f077b65834cce6fceb6e704d1b17b",
".git/objects/22/0e69aa9382e36a8f836bc8e5338d5b8ab9e865": "27e57164dd459c2f85395c1bf1f97616",
".git/objects/22/eab1991d3067ca905fdef7a619f480c0411e94": "0df171cfe9a2582d2f579e58675e0855",
".git/objects/28/56c45d3a15e584f5943e93deb1471bbf402c61": "6c7feae493a450cde1d44b351fa5e707",
".git/objects/29/c0c7dbd236f660cbd6fd9dfa2a60f0395af952": "d94a7136e78e7d25fdf65c73d92f785b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/a161867bb735d9bbf566c0bf023038d007891d": "abb65ba4ecfbcda435d5ae277aac3384",
".git/objects/31/1f38e67c94a9767e9a1b66bd7c5b7fc386aff4": "743cfee8daaa233347b1841771e212a3",
".git/objects/35/501f28c79ff3d12db3030fa40f8d82159b1015": "148206658772285d71446a4791667657",
".git/objects/39/28fda44d2e0460e9a211ad562f7d7357c76f0e": "45940ab201213f2cb05970b8d0721059",
".git/objects/3f/4e2c038cafb4313f1fb28e27feb6ccb41962bc": "385a0c3a022da429ff6836dc287559e9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/7a448d4f670c1c0311cc0c2db55a425dc826d6": "02bc176f81420278a3d249617c421253",
".git/objects/40/a3c051b7e3cb18db28f52a1b68d9888b40703c": "93d794c237a566eab7bc2fa372372470",
".git/objects/40/ceb0860ffda93112a61422465a8af261b5df60": "a5645bfad40a3ef0415a10e628219272",
".git/objects/46/815c09bc2dd7d777c5e1a80f02b32b35dd991e": "701db16b3a650be6c7a68068c7e1e794",
".git/objects/4b/541d889cd94cb5e216e5f2d66514548cf315e3": "00014d7372e7589560ec4dd49fc1f205",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/8208a0fc9dbbf390efd9bd029b278a73b6b1a0": "d4270cbcf09f37eb7d5676d3d8f9469e",
".git/objects/4e/154c69edf499dd80542692e300ec6080e978b4": "208f0b995761b579a92842d4ff8c4177",
".git/objects/53/128dac2cbf67ecd793baa78f9f7036d24d0562": "7f273b61169693bc211d475fdd7b138b",
".git/objects/53/b61509cc2a76b5e37a9158f31eb2afb577d06f": "1c823bec5c08d48821f2cfaf9e93096b",
".git/objects/59/46b7bcbc25296c97f411689388dc809003705a": "448a91d14da18e76e648048f06a4b629",
".git/objects/5b/913dcf812914829e499e6a751a9e11e9c1c219": "d251896b1af62e462ab056224dcb2252",
".git/objects/5c/200a8604714b08112a8d2edf7170b530fc6a73": "03a4c7944f91a3e2b17c04ee31a117e4",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/60/aef547fca0e66b0a86915c50ad45bd56188f10": "2eb2fedf2a5ec1fb410a379e0aba6332",
".git/objects/61/23c8648f57ead33d144fa2742abd8c46452a89": "9295539bf7d874452f93bac22dcb6479",
".git/objects/68/99ec222438aee170f1bd75b7e512bc1b1bb4fc": "79a3742e7a06b9b04c2b2e76a44b428a",
".git/objects/6f/b057b01f426f329a2e9a72a527e35a542102d9": "8eb67c0912cc15ff8ebc4f48f171c183",
".git/objects/73/ce87a8ca660549dcb070bc74c138fad15243b7": "0bfe57773049705b5cf1de6512317322",
".git/objects/77/fd186618747e91e8667606ea6c5e075cc72dea": "0da858048f098bedf9e757a8720cef19",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/04bbfa30aea91d6d0175cf4b297518f7583ce1": "d8f95379de073afcbabede4eb7bea132",
".git/objects/7e/472f11968da7b9a74b53629e6c86fb9855430d": "8ba06b4293b948fc1fe3cc661c78c816",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/955113ea49004517b2275adeeb5873f06d2b50": "a36deb3de040a3bf91914f07aa0a25c7",
".git/objects/8e/f780f852f7cd2498b20838befe333ac37224c3": "490e41b42755c0bb97343d756197ee1d",
".git/objects/94/431a893caca84860adafa0eb731d5eed03919d": "004733091d895f1effb3aee10624e0da",
".git/objects/95/6ddf8c13052cb0b818d042196b7c9a426ce116": "c8d3a4bfd751e67f1dd8199f9cb42f5f",
".git/objects/97/3af7bb1e54627570e936a062f0d2ce23530fd8": "d75439a07fb619b90f7bb7e5ceb09a42",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/b6aee1cdad1881db8d9b16d923c822ef66a692": "61c8f41a01c5e0cf3ddacc2d41096791",
".git/objects/98/001968dd6c172d7004b02224f09f82aefa454b": "55b8119f89984808957a820f1bac6362",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/277393a350ff4641ce036988dd9b9af2062201": "cb28a355c145c74aa45490a840702731",
".git/objects/aa/f5a162f53194a70645bee3bee48b42625a8abc": "689fa0ae84452840c4d5d71d5558d64c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/af/b5c78f5eec654374a0c9a93198e48a148b3241": "5d8c08c79c2d543a1f01348be0f6092e",
".git/objects/b2/b4f98dd5233338db1a00636735cf4b4803fb52": "fcabc0521b0378b911ae5844deacec61",
".git/objects/b3/7b873f3ff3c5063a449b2526c5912b17f4f182": "740c61988dd6a0329c644880af191598",
".git/objects/b4/5addf6f96f710cf0f0f7e75403c9b17799cb1c": "c454efc29c76f678329f3a06e802bffa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/975542bcdc18b1aa55e6175ca0e6f9bfb538a0": "897ff8a8571b95ac744a46d0a6b27fe9",
".git/objects/bc/228434409c51a75a9c4ebe00ae457d03497aad": "37c38e711e0d7c42cf681f78278c4fd5",
".git/objects/bc/99f6b8889c5074c20109add7a1b8ae3f651111": "df79201cd0d96a9da3fb4a073e27bcff",
".git/objects/c3/fbd9175958811f582155dc4f2bc796b3245201": "f79b042f01a01b06ea73eb1a15a8231b",
".git/objects/cb/f0218a9a3146ba2e5d637091a53be14c82e7bb": "1c0ccf60b3b2e41677234d181114725b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/2aa4d9577cfc86680695275423422c0953688c": "0c8fac01a01556cade46260786a6ba22",
".git/objects/d3/ec8d9767a0a4667ebb4e19a333ebf21030ffef": "ae77d795c76df2457dc770754dbc58f5",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c04793fffa578c00d5ea2792675c76b601270d": "34ca6b8070b4ff34509c9befadbe0faa",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/9fa05a2fad833c1998b7585aa63302ddab0f8b": "753cfe16b5dbcb1a728acae928646980",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/0bfc4eac6769145fab00de4592ac23f53488a7": "6522c63e65d0735305ff2728638be9fb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/6ab21ce90caa561b358d9fa92e33b243faeedc": "4383bcf308eb0858ece0f77127d3ac70",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/324f267aae886f2edd9f3ea926302f093cc30b": "135529c56f3e41b49a4cdbff05d39a2f",
".git/objects/ed/51c00f590490353a93e246609827d2d582d344": "7c85e56519da9f5c791c386160f9e273",
".git/objects/f1/f0dea26efecc019143bbb270b21dc77a02fff9": "51023ac9f2ff18536000d1b6b9700681",
".git/objects/f4/50b9b2a30259e7f3449275054fcf76a322dc8c": "5aed0603dd8ed07185a006779f2e9a1b",
".git/objects/f5/0135826b6b0ccfa9c2abe20f5d9d776fcfd8aa": "f0ff0266d9cb29129cd71162013cb619",
".git/objects/f6/3d1eba568e38bae5c81314c9cb2b2507bf69ee": "1d6346bc76705e9ac878a452b7ef9561",
".git/objects/f8/f7fbe731a1b89485a5098b1ecb51e2ab986ae6": "cfc62f328ed73216eb53a37a4265d62d",
".git/objects/f9/5540e27a7f4cbafd63e0d839d73bfc5435b9da": "89bb2195588f57bdf3ff20bcbe6d0d86",
".git/objects/fc/50b5debfb4a2c1272f9221525e6f77002bbf7c": "d1722fdf58463591ce1a63380a231b48",
".git/objects/fc/de986c5c0eb83b31917ab482cc4e8fba344da3": "c8885c878ba76b76d0604b6dd758f71b",
".git/refs/heads/main": "3cf15ce38e563e0f0dcc6181b0ba5216",
".git/refs/remotes/origin/main": "3cf15ce38e563e0f0dcc6181b0ba5216",
"assets/AssetManifest.json": "ee1e3b15074bbe1c3881cd1e3f097c0f",
"assets/assets/fonts/glamy.ttf": "c813fa986f0ecb018a28a9608f850517",
"assets/assets/fonts/harry.ttf": "181ef9a7aee45c119e68f294e8426a3a",
"assets/assets/fonts/ovation.ttf": "9a1bfff43e3c829c068b2cb63ca448fd",
"assets/assets/fonts/story-maker.ttf": "d53d2d0f4041b2305b6ba2475dd0dcdd",
"assets/assets/images/background.jpg": "5b6ecd6efaa07f8d9dced38874240636",
"assets/assets/images/broom.png": "06726765324c57d49c788ccb0ccff7f7",
"assets/assets/images/footprints.gif": "29ad6dbf7553de7489b6bb0d7a13de4b",
"assets/assets/images/harry.png": "1235f9791f4cacf72209aa9552375094",
"assets/assets/images/hogwarts.png": "9d1ecabacd9de16395a522d266d53173",
"assets/assets/images/letter.png": "f2c5c066ba8885183650ac4e80ba6f5a",
"assets/assets/images/letter_opening.gif": "ac38fefebce70628df43349a1bf8c79a",
"assets/assets/images/platform.png": "b0b48c2d58eee5282aa16400d935e126",
"assets/assets/images/snitch.png": "dfedbc22a4d419459e596a42a61c1f59",
"assets/assets/images/wand.png": "6968e3542422b022fa672017801395b4",
"assets/assets/sounds/harry.mp3": "83d085fec3f87efb106fcdc148df4884",
"assets/assets/videos/splash.3gp": "373ca956ea2f2e8066d905994d63a62c",
"assets/assets/videos/splash.mp4": "9f71ac60b94386b842caf0d1799518a0",
"assets/FontManifest.json": "b3493aa686ae4a2feb25dc9d4d7e4f1b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "165812bdb909846ca3096aa9db64b3b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "8f2955a1b79fc40db3386fe18519ee33",
"favicon.png": "df5061b36376a541f6e87197a5eb5543",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "d5de02b9497d295853f8aa8f232fec51",
"icons/Icon-512.png": "8859110539bf9b834cb07751cae72bcb",
"icons/Icon-maskable-192.png": "d5de02b9497d295853f8aa8f232fec51",
"icons/Icon-maskable-512.png": "8859110539bf9b834cb07751cae72bcb",
"index.html": "41ded8e590717eb9a8651fb3d40e7e53",
"/": "41ded8e590717eb9a8651fb3d40e7e53",
"main.dart.js": "9090969bbe5bd339d8f66563602c26ec",
"manifest.json": "ee0b37110a5795d3e8e5acd66e9a9feb",
"version.json": "d4cc50f8eefac85da5f94c25eeec29ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
