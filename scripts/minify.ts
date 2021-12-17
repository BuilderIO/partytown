import type { Plugin } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import type { MinifyOptions } from 'terser';

export function minifyPlugin(debug: boolean) {
  if (debug) {
    return [terser(minifyOptions(true))];
  }
  return [managlePropsPlugin(), terser(minifyOptions(false))];
}

function minifyOptions(debug: boolean): MinifyOptions {
  if (debug) {
    return {
      compress: {
        global_defs: {
          'globalThis.partytownDebug': true,
        },
        keep_classnames: true,
        inline: false,
        join_vars: false,
        loops: false,
        sequences: false,
        passes: 1,
        drop_debugger: false,
      },
      format: {
        comments: false,
        beautify: true,
        braces: true,
      },
      mangle: false,
    };
  }

  return {
    compress: {
      global_defs: {
        'globalThis.partytownDebug': false,
      },
      keep_classnames: keepConstructorNames(),
      ecma: 2018,
      passes: 2,
      unsafe_symbols: true,
    },
    format: {
      comments: false,
      ecma: 2018,
    },
    keep_classnames: keepConstructorNames(),
    mangle: {
      keep_classnames: keepConstructorNames(),
    },
  };
}

function keepConstructorNames() {
  return /HTMLAnchorElement|HTMLIFrameElement|HTMLScriptElement|HTMLDocument|HTMLElement|Node|Window/;
}

function managlePropsPlugin(): Plugin {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$'.split('');
  const mangleProps: { [key: string]: string } = {
    $applyPath$: '',
    $args$: '',
    $assignInstanceId$: '',
    $body$: '',
    $config$: '',
    $content$: '',
    $currentScriptId$: '',
    $data$: '',
    $document$: '',
    $documentElement$: '',
    $error$: '',
    $forward$: '',
    $groupedGetters$: '',
    $head$: '',
    $interfaces$: '',
    $instanceId$: '',
    $isInitialized$: '',
    $isPromise$: '',
    $libPath$: '',
    $localStorage$: '',
    $location$: '',
    $msgId$: '',
    $nodeName$: '',
    $orgUrl$: '',
    $parentWinId$: '',
    $postMessage$: '',
    $refId$: '',
    $rtnValue$: '',
    $sessionStorage$: '',
    $tasks$: '',
    $thisArg$: '',
    $url$: '',
    $window$: '',
    $winId$: '',
  };

  if (chars.length < Object.keys(mangleProps).length) {
    throw new Error('Figure out a better property renaming plan');
  }

  Object.keys(mangleProps).forEach((key, i) => {
    mangleProps[key] = chars[i];
  });

  return {
    name: 'mangleProps',
    generateBundle(_opts, bundle) {
      for (const fileName in bundle) {
        const b = bundle[fileName];
        if (b.type === 'chunk') {
          Object.keys(mangleProps).forEach((key) => {
            const rg = new RegExp(key.replace(/\$/g, '\\$'), 'g');
            const replaceWith = mangleProps[key];
            b.code = b.code.replace(rg, replaceWith);
          });
        }
      }
    },
  };
}
