import {
  __commonJS
} from "./chunk-AC2VUBZ6.js";

// node_modules/@sanity/image-url/lib/browser/image-url.umd.js
var require_image_url_umd = __commonJS({
  "node_modules/@sanity/image-url/lib/browser/image-url.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = global || self, global.SanityImageUrlBuilder = factory());
    })(exports, function() {
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it)
          return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          return function() {
            if (i >= o.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
      function parseAssetId(ref) {
        var _ref$split = ref.split("-"), id = _ref$split[1], dimensionString = _ref$split[2], format = _ref$split[3];
        if (!id || !dimensionString || !format) {
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        }
        var _dimensionString$spli = dimensionString.split("x"), imgWidthStr = _dimensionString$spli[0], imgHeightStr = _dimensionString$spli[1];
        var width = +imgWidthStr;
        var height = +imgHeightStr;
        var isValidAssetId = isFinite(width) && isFinite(height);
        if (!isValidAssetId) {
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        }
        return {
          id,
          width,
          height,
          format
        };
      }
      var isRef = function isRef2(src) {
        var source = src;
        return source ? typeof source._ref === "string" : false;
      };
      var isAsset = function isAsset2(src) {
        var source = src;
        return source ? typeof source._id === "string" : false;
      };
      var isAssetStub = function isAssetStub2(src) {
        var source = src;
        return source && source.asset ? typeof source.asset.url === "string" : false;
      };
      function parseSource(source) {
        if (!source) {
          return null;
        }
        var image;
        if (typeof source === "string" && isUrl(source)) {
          image = {
            asset: {
              _ref: urlToId(source)
            }
          };
        } else if (typeof source === "string") {
          image = {
            asset: {
              _ref: source
            }
          };
        } else if (isRef(source)) {
          image = {
            asset: source
          };
        } else if (isAsset(source)) {
          image = {
            asset: {
              _ref: source._id || ""
            }
          };
        } else if (isAssetStub(source)) {
          image = {
            asset: {
              _ref: urlToId(source.asset.url)
            }
          };
        } else if (typeof source.asset === "object") {
          image = _extends({}, source);
        } else {
          return null;
        }
        var img = source;
        if (img.crop) {
          image.crop = img.crop;
        }
        if (img.hotspot) {
          image.hotspot = img.hotspot;
        }
        return applyDefaults(image);
      }
      function isUrl(url) {
        return /^https?:\/\//.test("" + url);
      }
      function urlToId(url) {
        var parts = url.split("/").slice(-1);
        return ("image-" + parts[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      function applyDefaults(image) {
        if (image.crop && image.hotspot) {
          return image;
        }
        var result = _extends({}, image);
        if (!result.crop) {
          result.crop = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
          };
        }
        if (!result.hotspot) {
          result.hotspot = {
            x: 0.5,
            y: 0.5,
            height: 1,
            width: 1
          };
        }
        return result;
      }
      var SPEC_NAME_TO_URL_NAME_MAPPINGS = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]];
      function urlForImage(options) {
        var spec = _extends({}, options || {});
        var source = spec.source;
        delete spec.source;
        var image = parseSource(source);
        if (!image) {
          throw new Error("Unable to resolve image URL from source (" + JSON.stringify(source) + ")");
        }
        var id = image.asset._ref || image.asset._id || "";
        var asset = parseAssetId(id);
        var cropLeft = Math.round(image.crop.left * asset.width);
        var cropTop = Math.round(image.crop.top * asset.height);
        var crop = {
          left: cropLeft,
          top: cropTop,
          width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
          height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
        };
        var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
        var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
        var hotSpotCenterX = image.hotspot.x * asset.width;
        var hotSpotCenterY = image.hotspot.y * asset.height;
        var hotspot = {
          left: hotSpotCenterX - hotSpotHorizontalRadius,
          top: hotSpotCenterY - hotSpotVerticalRadius,
          right: hotSpotCenterX + hotSpotHorizontalRadius,
          bottom: hotSpotCenterY + hotSpotVerticalRadius
        };
        if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
          spec = _extends({}, spec, fit({
            crop,
            hotspot
          }, spec));
        }
        return specToImageUrl(_extends({}, spec, {
          asset
        }));
      }
      function specToImageUrl(spec) {
        var cdnUrl = (spec.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, "");
        var filename = spec.asset.id + "-" + spec.asset.width + "x" + spec.asset.height + "." + spec.asset.format;
        var baseUrl = cdnUrl + "/images/" + spec.projectId + "/" + spec.dataset + "/" + filename;
        var params = [];
        if (spec.rect) {
          var _spec$rect = spec.rect, left = _spec$rect.left, top = _spec$rect.top, width = _spec$rect.width, height = _spec$rect.height;
          var isEffectiveCrop = left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width;
          if (isEffectiveCrop) {
            params.push("rect=" + left + "," + top + "," + width + "," + height);
          }
        }
        if (spec.bg) {
          params.push("bg=" + spec.bg);
        }
        if (spec.focalPoint) {
          params.push("fp-x=" + spec.focalPoint.x);
          params.push("fp-y=" + spec.focalPoint.y);
        }
        var flip = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
        if (flip) {
          params.push("flip=" + flip);
        }
        SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
          var specName = mapping[0], param = mapping[1];
          if (typeof spec[specName] !== "undefined") {
            params.push(param + "=" + encodeURIComponent(spec[specName]));
          } else if (typeof spec[param] !== "undefined") {
            params.push(param + "=" + encodeURIComponent(spec[param]));
          }
        });
        if (params.length === 0) {
          return baseUrl;
        }
        return baseUrl + "?" + params.join("&");
      }
      function fit(source, spec) {
        var cropRect;
        var imgWidth = spec.width;
        var imgHeight = spec.height;
        if (!(imgWidth && imgHeight)) {
          return {
            width: imgWidth,
            height: imgHeight,
            rect: source.crop
          };
        }
        var crop = source.crop;
        var hotspot = source.hotspot;
        var desiredAspectRatio = imgWidth / imgHeight;
        var cropAspectRatio = crop.width / crop.height;
        if (cropAspectRatio > desiredAspectRatio) {
          var height = Math.round(crop.height);
          var width = Math.round(height * desiredAspectRatio);
          var top = Math.max(0, Math.round(crop.top));
          var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
          var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
          if (left < crop.left) {
            left = crop.left;
          } else if (left + width > crop.left + crop.width) {
            left = crop.left + crop.width - width;
          }
          cropRect = {
            left,
            top,
            width,
            height
          };
        } else {
          var _width = crop.width;
          var _height = Math.round(_width / desiredAspectRatio);
          var _left = Math.max(0, Math.round(crop.left));
          var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
          var _top = Math.max(0, Math.round(hotspotYCenter - _height / 2));
          if (_top < crop.top) {
            _top = crop.top;
          } else if (_top + _height > crop.top + crop.height) {
            _top = crop.top + crop.height - _height;
          }
          cropRect = {
            left: _left,
            top: _top,
            width: _width,
            height: _height
          };
        }
        return {
          width: imgWidth,
          height: imgHeight,
          rect: cropRect
        };
      }
      var validFits = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"];
      var validCrops = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"];
      var validAutoModes = ["format"];
      function isSanityModernClientLike(client) {
        return client && "config" in client ? typeof client.config === "function" : false;
      }
      function isSanityClientLike(client) {
        return client && "clientConfig" in client ? typeof client.clientConfig === "object" : false;
      }
      function rewriteSpecName(key) {
        var specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;
        for (var _iterator = _createForOfIteratorHelperLoose(specs), _step; !(_step = _iterator()).done; ) {
          var entry = _step.value;
          var specName = entry[0], param = entry[1];
          if (key === specName || key === param) {
            return specName;
          }
        }
        return key;
      }
      function urlBuilder(options) {
        if (isSanityModernClientLike(options)) {
          var _options$config = options.config(), apiUrl = _options$config.apiHost, projectId = _options$config.projectId, dataset = _options$config.dataset;
          var apiHost = apiUrl || "https://api.sanity.io";
          return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId,
            dataset
          });
        }
        var client = options;
        if (isSanityClientLike(client)) {
          var _client$clientConfig = client.clientConfig, _apiUrl = _client$clientConfig.apiHost, _projectId = _client$clientConfig.projectId, _dataset = _client$clientConfig.dataset;
          var _apiHost = _apiUrl || "https://api.sanity.io";
          return new ImageUrlBuilder(null, {
            baseUrl: _apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: _projectId,
            dataset: _dataset
          });
        }
        return new ImageUrlBuilder(null, options);
      }
      var ImageUrlBuilder = function() {
        function ImageUrlBuilder2(parent, options) {
          this.options = void 0;
          this.options = parent ? _extends({}, parent.options || {}, options || {}) : _extends({}, options || {});
        }
        var _proto = ImageUrlBuilder2.prototype;
        _proto.withOptions = function withOptions(options) {
          var baseUrl = options.baseUrl || this.options.baseUrl;
          var newOptions = {
            baseUrl
          };
          for (var key in options) {
            if (options.hasOwnProperty(key)) {
              var specKey = rewriteSpecName(key);
              newOptions[specKey] = options[key];
            }
          }
          return new ImageUrlBuilder2(this, _extends({
            baseUrl
          }, newOptions));
        };
        _proto.image = function image(source) {
          return this.withOptions({
            source
          });
        };
        _proto.dataset = function dataset(_dataset2) {
          return this.withOptions({
            dataset: _dataset2
          });
        };
        _proto.projectId = function projectId(_projectId2) {
          return this.withOptions({
            projectId: _projectId2
          });
        };
        _proto.bg = function bg(_bg) {
          return this.withOptions({
            bg: _bg
          });
        };
        _proto.dpr = function dpr(_dpr) {
          return this.withOptions(_dpr && _dpr !== 1 ? {
            dpr: _dpr
          } : {});
        };
        _proto.width = function width(_width) {
          return this.withOptions({
            width: _width
          });
        };
        _proto.height = function height(_height) {
          return this.withOptions({
            height: _height
          });
        };
        _proto.focalPoint = function focalPoint(x, y) {
          return this.withOptions({
            focalPoint: {
              x,
              y
            }
          });
        };
        _proto.maxWidth = function maxWidth(_maxWidth) {
          return this.withOptions({
            maxWidth: _maxWidth
          });
        };
        _proto.minWidth = function minWidth(_minWidth) {
          return this.withOptions({
            minWidth: _minWidth
          });
        };
        _proto.maxHeight = function maxHeight(_maxHeight) {
          return this.withOptions({
            maxHeight: _maxHeight
          });
        };
        _proto.minHeight = function minHeight(_minHeight) {
          return this.withOptions({
            minHeight: _minHeight
          });
        };
        _proto.size = function size(width, height) {
          return this.withOptions({
            width,
            height
          });
        };
        _proto.blur = function blur(_blur) {
          return this.withOptions({
            blur: _blur
          });
        };
        _proto.sharpen = function sharpen(_sharpen) {
          return this.withOptions({
            sharpen: _sharpen
          });
        };
        _proto.rect = function rect(left, top, width, height) {
          return this.withOptions({
            rect: {
              left,
              top,
              width,
              height
            }
          });
        };
        _proto.format = function format(_format) {
          return this.withOptions({
            format: _format
          });
        };
        _proto.invert = function invert(_invert) {
          return this.withOptions({
            invert: _invert
          });
        };
        _proto.orientation = function orientation(_orientation) {
          return this.withOptions({
            orientation: _orientation
          });
        };
        _proto.quality = function quality(_quality) {
          return this.withOptions({
            quality: _quality
          });
        };
        _proto.forceDownload = function forceDownload(download) {
          return this.withOptions({
            download
          });
        };
        _proto.flipHorizontal = function flipHorizontal() {
          return this.withOptions({
            flipHorizontal: true
          });
        };
        _proto.flipVertical = function flipVertical() {
          return this.withOptions({
            flipVertical: true
          });
        };
        _proto.ignoreImageParams = function ignoreImageParams() {
          return this.withOptions({
            ignoreImageParams: true
          });
        };
        _proto.fit = function fit2(value) {
          if (validFits.indexOf(value) === -1) {
            throw new Error('Invalid fit mode "' + value + '"');
          }
          return this.withOptions({
            fit: value
          });
        };
        _proto.crop = function crop(value) {
          if (validCrops.indexOf(value) === -1) {
            throw new Error('Invalid crop mode "' + value + '"');
          }
          return this.withOptions({
            crop: value
          });
        };
        _proto.saturation = function saturation(_saturation) {
          return this.withOptions({
            saturation: _saturation
          });
        };
        _proto.auto = function auto(value) {
          if (validAutoModes.indexOf(value) === -1) {
            throw new Error('Invalid auto mode "' + value + '"');
          }
          return this.withOptions({
            auto: value
          });
        };
        _proto.pad = function pad(_pad) {
          return this.withOptions({
            pad: _pad
          });
        };
        _proto.url = function url() {
          return urlForImage(this.options);
        };
        _proto.toString = function toString() {
          return this.url();
        };
        return ImageUrlBuilder2;
      }();
      return urlBuilder;
    });
  }
});
export default require_image_url_umd();
//# sourceMappingURL=@sanity_image-url.js.map
