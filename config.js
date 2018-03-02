System.config({
  baseURL: "/p-004-prototype-live/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.6",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.2",
    "aurelia-framework": "npm:aurelia-framework@1.1.2",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.2.1",
    "aurelia-router": "npm:aurelia-router@1.3.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "bowser": "github:ded/bowser@1.0.0",
    "clientjs": "npm:clientjs@0.1.11",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.33",
    "d3": "npm:d3@4.8.0",
    "d3-annotation": "github:susielu/d3-annotation@1.14.0",
    "escope": "npm:escope@3.6.0",
    "esprima": "npm:esprima@2.7.3",
    "estraverse": "npm:estraverse@4.2.0",
    "esutils": "npm:esutils@2.0.2",
    "font-awesome": "npm:font-awesome@4.7.0",
    "introJs": "github:usablica/intro.js@2.5.0",
    "jailed": "github:asvd/jailed@0.3.1",
    "jquery": "npm:jquery@3.2.1",
    "json": "github:systemjs/plugin-json@0.3.0",
    "loglevel": "npm:loglevel@1.4.1",
    "survey-jquery": "npm:survey-jquery@0.12.10",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.2.1"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-binding@1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.2",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader-default@1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-resources@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-router@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating@1.4.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.0",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:clientjs@0.1.11": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:d3-brush@1.0.4": {
      "d3-dispatch": "npm:d3-dispatch@1.0.3",
      "d3-drag": "npm:d3-drag@1.0.4",
      "d3-interpolate": "npm:d3-interpolate@1.1.4",
      "d3-selection": "npm:d3-selection@1.0.5",
      "d3-transition": "npm:d3-transition@1.0.4"
    },
    "npm:d3-chord@1.0.4": {
      "d3-array": "npm:d3-array@1.2.0",
      "d3-path": "npm:d3-path@1.0.5"
    },
    "npm:d3-drag@1.0.4": {
      "d3-dispatch": "npm:d3-dispatch@1.0.3",
      "d3-selection": "npm:d3-selection@1.0.5"
    },
    "npm:d3-dsv@1.0.5": {
      "commander": "npm:commander@2.9.0",
      "iconv-lite": "npm:iconv-lite@0.4.15",
      "rw": "npm:rw@1.3.3"
    },
    "npm:d3-force@1.0.6": {
      "d3-collection": "npm:d3-collection@1.0.3",
      "d3-dispatch": "npm:d3-dispatch@1.0.3",
      "d3-quadtree": "npm:d3-quadtree@1.0.3",
      "d3-timer": "npm:d3-timer@1.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:d3-geo@1.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "d3-array": "npm:d3-array@1.2.0"
    },
    "npm:d3-interpolate@1.1.4": {
      "d3-color": "npm:d3-color@1.0.3"
    },
    "npm:d3-request@1.0.5": {
      "d3-collection": "npm:d3-collection@1.0.3",
      "d3-dispatch": "npm:d3-dispatch@1.0.3",
      "d3-dsv": "npm:d3-dsv@1.0.5",
      "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
    },
    "npm:d3-scale@1.0.5": {
      "d3-array": "npm:d3-array@1.2.0",
      "d3-collection": "npm:d3-collection@1.0.3",
      "d3-color": "npm:d3-color@1.0.3",
      "d3-format": "npm:d3-format@1.2.0",
      "d3-interpolate": "npm:d3-interpolate@1.1.4",
      "d3-time": "npm:d3-time@1.0.6",
      "d3-time-format": "npm:d3-time-format@2.0.5"
    },
    "npm:d3-shape@1.0.6": {
      "d3-path": "npm:d3-path@1.0.5"
    },
    "npm:d3-time-format@2.0.5": {
      "d3-time": "npm:d3-time@1.0.6"
    },
    "npm:d3-transition@1.0.4": {
      "d3-color": "npm:d3-color@1.0.3",
      "d3-dispatch": "npm:d3-dispatch@1.0.3",
      "d3-ease": "npm:d3-ease@1.0.3",
      "d3-interpolate": "npm:d3-interpolate@1.1.4",
      "d3-selection": "npm:d3-selection@1.0.5",
      "d3-timer": "npm:d3-timer@1.0.5"
    },
    "npm:d3-zoom@1.1.4": {
      "d3-dispatch": "npm:d3-dispatch@1.0.3",
      "d3-drag": "npm:d3-drag@1.0.4",
      "d3-interpolate": "npm:d3-interpolate@1.1.4",
      "d3-selection": "npm:d3-selection@1.0.5",
      "d3-transition": "npm:d3-transition@1.0.4"
    },
    "npm:d3@4.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "d3-array": "npm:d3-array@1.2.0",
      "d3-axis": "npm:d3-axis@1.0.6",
      "d3-brush": "npm:d3-brush@1.0.4",
      "d3-chord": "npm:d3-chord@1.0.4",
      "d3-collection": "npm:d3-collection@1.0.3",
      "d3-color": "npm:d3-color@1.0.3",
      "d3-dispatch": "npm:d3-dispatch@1.0.3",
      "d3-drag": "npm:d3-drag@1.0.4",
      "d3-dsv": "npm:d3-dsv@1.0.5",
      "d3-ease": "npm:d3-ease@1.0.3",
      "d3-force": "npm:d3-force@1.0.6",
      "d3-format": "npm:d3-format@1.2.0",
      "d3-geo": "npm:d3-geo@1.6.3",
      "d3-hierarchy": "npm:d3-hierarchy@1.1.4",
      "d3-interpolate": "npm:d3-interpolate@1.1.4",
      "d3-path": "npm:d3-path@1.0.5",
      "d3-polygon": "npm:d3-polygon@1.0.3",
      "d3-quadtree": "npm:d3-quadtree@1.0.3",
      "d3-queue": "npm:d3-queue@3.0.5",
      "d3-random": "npm:d3-random@1.0.3",
      "d3-request": "npm:d3-request@1.0.5",
      "d3-scale": "npm:d3-scale@1.0.5",
      "d3-selection": "npm:d3-selection@1.0.5",
      "d3-shape": "npm:d3-shape@1.0.6",
      "d3-time": "npm:d3-time@1.0.6",
      "d3-time-format": "npm:d3-time-format@2.0.5",
      "d3-timer": "npm:d3-timer@1.0.5",
      "d3-transition": "npm:d3-transition@1.0.4",
      "d3-voronoi": "npm:d3-voronoi@1.1.2",
      "d3-zoom": "npm:d3-zoom@1.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:d@1.0.0": {
      "es5-ext": "npm:es5-ext@0.10.15"
    },
    "npm:es5-ext@0.10.15": {
      "es6-iterator": "npm:es6-iterator@2.0.1",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.1": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.15",
      "es6-symbol": "npm:es6-symbol@3.1.1"
    },
    "npm:es6-map@0.1.5": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.15",
      "es6-iterator": "npm:es6-iterator@2.0.1",
      "es6-set": "npm:es6-set@0.1.5",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "event-emitter": "npm:event-emitter@0.3.5"
    },
    "npm:es6-set@0.1.5": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.15",
      "es6-iterator": "npm:es6-iterator@2.0.1",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "event-emitter": "npm:event-emitter@0.3.5"
    },
    "npm:es6-symbol@3.1.1": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.15"
    },
    "npm:es6-weak-map@2.0.2": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.15",
      "es6-iterator": "npm:es6-iterator@2.0.1",
      "es6-symbol": "npm:es6-symbol@3.1.1"
    },
    "npm:escope@3.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "es6-map": "npm:es6-map@0.1.5",
      "es6-weak-map": "npm:es6-weak-map@2.0.2",
      "esrecurse": "npm:esrecurse@4.1.0",
      "estraverse": "npm:estraverse@4.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:esrecurse@4.1.0": {
      "estraverse": "npm:estraverse@4.1.1",
      "object-assign": "npm:object-assign@4.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:estraverse@4.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:estraverse@4.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:event-emitter@0.3.5": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.15",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:font-awesome@4.7.0": {
      "css": "github:systemjs/plugin-css@0.1.33"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.15": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:loglevel@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:rw@1.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:survey-jquery@0.12.10": {
      "@types/react": "npm:@types/react@15.0.21",
      "jquery": "npm:jquery@3.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:xmlhttprequest@1.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    }
  },
  depCache: {
    "main.js": [
      "bootstrap"
    ],
    "scoped/ace-viewport.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "ace",
      "./source-code-parser",
      "../../styles/ace-viewport.css!"
    ],
    "scoped/packed-circle-tree.js": [
      "d3",
      "d3-annotation",
      "d3-annotation/d3-annotation.css!",
      "./color-manager",
      "ace"
    ],
    "scoped/scoped.js": [
      "aurelia-framework",
      "aurelia-event-aggregator"
    ],
    "scoped/source-code-parser.js": [
      "esprima",
      "escope"
    ],
    "scoped/vis-overview-viewport.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "d3",
      "./packed-circle-tree",
      "jquery"
    ],
    "scoped/vis-variables-viewport.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "jquery",
      "d3",
      "./color-manager"
    ],
    "scoped/vis-viewport.js": [
      "aurelia-framework",
      "aurelia-event-aggregator"
    ],
    "views/tryme.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-event-aggregator",
      "jquery",
      "introJs",
      "introJs/minified/introjs.min.css!css",
      "../../styles/introjs-ivan.css!css",
      "../data/code_examples/sample_code_01.txt!text",
      "../data/code_examples/sample_code_02.txt!text"
    ],
    "views/welcome.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-event-aggregator",
      "jquery"
    ]
  },
  bundles: {
    "app-build.js": [
      "data/code_examples/sample_code_01.txt!github:systemjs/plugin-text@0.0.8.js",
      "data/code_examples/sample_code_02.txt!github:systemjs/plugin-text@0.0.8.js",
      "main.js",
      "scoped/ace-viewport.js",
      "scoped/color-manager.js",
      "scoped/packed-circle-tree.js",
      "scoped/scoped.html!github:systemjs/plugin-text@0.0.8.js",
      "scoped/scoped.js",
      "scoped/source-code-parser.js",
      "scoped/variable-list-item1.js",
      "scoped/vis-overview-viewport.html!github:systemjs/plugin-text@0.0.8.js",
      "scoped/vis-overview-viewport.js",
      "scoped/vis-variables-viewport.html!github:systemjs/plugin-text@0.0.8.js",
      "scoped/vis-variables-viewport.js",
      "scoped/vis-viewport.html!github:systemjs/plugin-text@0.0.8.js",
      "scoped/vis-viewport.js",
      "views/app.html!github:systemjs/plugin-text@0.0.8.js",
      "views/app.js",
      "views/tryme.html!github:systemjs/plugin-text@0.0.8.js",
      "views/tryme.js",
      "views/welcome.html!github:systemjs/plugin-text@0.0.8.js",
      "views/welcome.js"
    ],
    "aurelia.js": [
      "npm:aurelia-animator-css@1.0.2.js",
      "npm:aurelia-animator-css@1.0.2/aurelia-animator-css.js",
      "npm:aurelia-binding@1.2.1.js",
      "npm:aurelia-binding@1.2.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.1.js",
      "npm:aurelia-dependency-injection@1.3.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.1.2.js",
      "npm:aurelia-fetch-client@1.1.2/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.1.2.js",
      "npm:aurelia-framework@1.1.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.2.js",
      "npm:aurelia-loader-default@1.0.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.js",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.2.1.js",
      "npm:aurelia-pal-browser@1.2.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.3.0.js",
      "npm:aurelia-pal@1.3.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.2.1.js",
      "npm:aurelia-polyfills@1.2.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.3.0.js",
      "npm:aurelia-router@1.3.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.0.js",
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.3.0.js",
      "npm:aurelia-templating-binding@1.3.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.4.0.js",
      "npm:aurelia-templating-resources@1.4.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.4.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.4.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.4.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.4.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.4.0/compose.js",
      "npm:aurelia-templating-resources@1.4.0/css-resource.js",
      "npm:aurelia-templating-resources@1.4.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.4.0/focus.js",
      "npm:aurelia-templating-resources@1.4.0/hide.js",
      "npm:aurelia-templating-resources@1.4.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.4.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.4.0/if.js",
      "npm:aurelia-templating-resources@1.4.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.4.0/repeat.js",
      "npm:aurelia-templating-resources@1.4.0/replaceable.js",
      "npm:aurelia-templating-resources@1.4.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.4.0/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/show.js",
      "npm:aurelia-templating-resources@1.4.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/with.js",
      "npm:aurelia-templating-router@1.1.0.js",
      "npm:aurelia-templating-router@1.1.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.1.0/route-href.js",
      "npm:aurelia-templating-router@1.1.0/route-loader.js",
      "npm:aurelia-templating-router@1.1.0/router-view.js",
      "npm:aurelia-templating@1.4.2.js",
      "npm:aurelia-templating@1.4.2/aurelia-templating.js"
    ],
    "thirdParty.js": [
      "github:ajaxorg/ace-builds@1.2.6.js",
      "github:ajaxorg/ace-builds@1.2.6/ace.js",
      "github:jspm/nodelibs-assert@0.1.0.js",
      "github:jspm/nodelibs-assert@0.1.0/index.js",
      "github:jspm/nodelibs-buffer@0.1.1.js",
      "github:jspm/nodelibs-buffer@0.1.1/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:susielu/d3-annotation@1.14.0.js",
      "github:susielu/d3-annotation@1.14.0/indexRollup.js",
      "github:systemjs/plugin-css@0.1.33.js",
      "github:systemjs/plugin-css@0.1.33/css.js",
      "github:systemjs/plugin-json@0.3.0.js",
      "github:systemjs/plugin-json@0.3.0/json.js",
      "github:systemjs/plugin-text@0.0.8.js",
      "github:systemjs/plugin-text@0.0.8/text.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "github:usablica/intro.js@2.5.0.js",
      "github:usablica/intro.js@2.5.0/intro.js",
      "npm:assert@1.4.1.js",
      "npm:assert@1.4.1/assert.js",
      "npm:base64-js@1.2.0.js",
      "npm:base64-js@1.2.0/index.js",
      "npm:buffer@5.0.6.js",
      "npm:buffer@5.0.6/index.js",
      "npm:clientjs@0.1.11.js",
      "npm:clientjs@0.1.11/dist/client.min.js",
      "npm:d3@4.8.0.js",
      "npm:d3@4.8.0/build/d3.js",
      "npm:d@1.0.0.js",
      "npm:d@1.0.0/auto-bind.js",
      "npm:d@1.0.0/index.js",
      "npm:es5-ext@0.10.15/array/#/clear.js",
      "npm:es5-ext@0.10.15/array/#/e-index-of.js",
      "npm:es5-ext@0.10.15/function/is-arguments.js",
      "npm:es5-ext@0.10.15/math/sign/index.js",
      "npm:es5-ext@0.10.15/math/sign/is-implemented.js",
      "npm:es5-ext@0.10.15/math/sign/shim.js",
      "npm:es5-ext@0.10.15/number/to-integer.js",
      "npm:es5-ext@0.10.15/number/to-pos-integer.js",
      "npm:es5-ext@0.10.15/object/_iterate.js",
      "npm:es5-ext@0.10.15/object/assign.js",
      "npm:es5-ext@0.10.15/object/assign/index.js",
      "npm:es5-ext@0.10.15/object/assign/is-implemented.js",
      "npm:es5-ext@0.10.15/object/assign/shim.js",
      "npm:es5-ext@0.10.15/object/copy.js",
      "npm:es5-ext@0.10.15/object/create.js",
      "npm:es5-ext@0.10.15/object/for-each.js",
      "npm:es5-ext@0.10.15/object/is-callable.js",
      "npm:es5-ext@0.10.15/object/is-object.js",
      "npm:es5-ext@0.10.15/object/keys/index.js",
      "npm:es5-ext@0.10.15/object/keys/is-implemented.js",
      "npm:es5-ext@0.10.15/object/keys/shim.js",
      "npm:es5-ext@0.10.15/object/map.js",
      "npm:es5-ext@0.10.15/object/normalize-options.js",
      "npm:es5-ext@0.10.15/object/primitive-set.js",
      "npm:es5-ext@0.10.15/object/set-prototype-of.js",
      "npm:es5-ext@0.10.15/object/set-prototype-of/index.js",
      "npm:es5-ext@0.10.15/object/set-prototype-of/is-implemented.js",
      "npm:es5-ext@0.10.15/object/set-prototype-of/shim.js",
      "npm:es5-ext@0.10.15/object/valid-callable.js",
      "npm:es5-ext@0.10.15/object/valid-object.js",
      "npm:es5-ext@0.10.15/object/valid-value.js",
      "npm:es5-ext@0.10.15/string/#/contains.js",
      "npm:es5-ext@0.10.15/string/#/contains/index.js",
      "npm:es5-ext@0.10.15/string/#/contains/is-implemented.js",
      "npm:es5-ext@0.10.15/string/#/contains/shim.js",
      "npm:es5-ext@0.10.15/string/is-string.js",
      "npm:es5-ext@0.10.15/string/random-uniq.js",
      "npm:es6-iterator@2.0.1.js",
      "npm:es6-iterator@2.0.1/array.js",
      "npm:es6-iterator@2.0.1/for-of.js",
      "npm:es6-iterator@2.0.1/get.js",
      "npm:es6-iterator@2.0.1/index.js",
      "npm:es6-iterator@2.0.1/is-iterable.js",
      "npm:es6-iterator@2.0.1/string.js",
      "npm:es6-iterator@2.0.1/valid-iterable.js",
      "npm:es6-map@0.1.5.js",
      "npm:es6-map@0.1.5/index.js",
      "npm:es6-map@0.1.5/is-implemented.js",
      "npm:es6-map@0.1.5/is-native-implemented.js",
      "npm:es6-map@0.1.5/lib/iterator-kinds.js",
      "npm:es6-map@0.1.5/lib/iterator.js",
      "npm:es6-map@0.1.5/polyfill.js",
      "npm:es6-symbol@3.1.1.js",
      "npm:es6-symbol@3.1.1/index.js",
      "npm:es6-symbol@3.1.1/is-implemented.js",
      "npm:es6-symbol@3.1.1/is-symbol.js",
      "npm:es6-symbol@3.1.1/polyfill.js",
      "npm:es6-symbol@3.1.1/validate-symbol.js",
      "npm:es6-weak-map@2.0.2.js",
      "npm:es6-weak-map@2.0.2/index.js",
      "npm:es6-weak-map@2.0.2/is-implemented.js",
      "npm:es6-weak-map@2.0.2/is-native-implemented.js",
      "npm:es6-weak-map@2.0.2/polyfill.js",
      "npm:escope@3.6.0.js",
      "npm:escope@3.6.0/lib/definition.js",
      "npm:escope@3.6.0/lib/index.js",
      "npm:escope@3.6.0/lib/pattern-visitor.js",
      "npm:escope@3.6.0/lib/reference.js",
      "npm:escope@3.6.0/lib/referencer.js",
      "npm:escope@3.6.0/lib/scope-manager.js",
      "npm:escope@3.6.0/lib/scope.js",
      "npm:escope@3.6.0/lib/variable.js",
      "npm:escope@3.6.0/package.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:esprima@2.7.3.js",
      "npm:esprima@2.7.3/esprima.js",
      "npm:esrecurse@4.1.0.js",
      "npm:esrecurse@4.1.0/esrecurse.js",
      "npm:esrecurse@4.1.0/package.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:estraverse@4.1.1.js",
      "npm:estraverse@4.1.1/estraverse.js",
      "npm:estraverse@4.1.1/package.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:estraverse@4.2.0.js",
      "npm:estraverse@4.2.0/estraverse.js",
      "npm:estraverse@4.2.0/package.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:esutils@2.0.2.js",
      "npm:esutils@2.0.2/lib/ast.js",
      "npm:esutils@2.0.2/lib/code.js",
      "npm:esutils@2.0.2/lib/keyword.js",
      "npm:esutils@2.0.2/lib/utils.js",
      "npm:event-emitter@0.3.5.js",
      "npm:event-emitter@0.3.5/index.js",
      "npm:ieee754@1.1.8.js",
      "npm:ieee754@1.1.8/index.js",
      "npm:inherits@2.0.1.js",
      "npm:inherits@2.0.1/inherits_browser.js",
      "npm:jquery@3.2.1.js",
      "npm:jquery@3.2.1/dist/jquery.js",
      "npm:object-assign@4.1.1.js",
      "npm:object-assign@4.1.1/index.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js",
      "npm:survey-jquery@0.12.10.js",
      "npm:survey-jquery@0.12.10/survey.jquery.min.js",
      "npm:util@0.10.3.js",
      "npm:util@0.10.3/support/isBufferBrowser.js",
      "npm:util@0.10.3/util.js"
    ]
  }
});