/**
* @license Copyright 2018 Google Inc. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
'use strict';
/* eslint-disable max-len */
module.exports = {
  extends: 'lighthouse:default',
  passes: [{
    passName: 'defaultPass',
    recordTrace: true,
    useThrottling: true,
    pauseAfterLoadMs: 1000,
    networkQuietThresholdMs: 1000,
    cpuQuietThresholdMs: 1000,
    gatherers: [
      'scripts',
      'css-usage',
      'viewport',
      'viewport-dimensions',
      'theme-color',
      'manifest',
      'runtime-exceptions',
      'chrome-console-messages',
      'image-usage',
      'accessibility',
      'dobetterweb/anchors-with-no-rel-noopener',
      'dobetterweb/appcache',
      'dobetterweb/doctype',
      'dobetterweb/domstats',
      'dobetterweb/js-libraries',
      'dobetterweb/optimized-images',
      'dobetterweb/password-inputs-with-prevented-paste',
      'dobetterweb/response-compression',
      'dobetterweb/tags-blocking-first-paint',
      'dobetterweb/websql',
      'seo/meta-description',
      'seo/font-size',
      'seo/crawlable-links',
      'seo/meta-robots',
      'seo/hreflang',
      'seo/embedded-content',
      'seo/canonical',
      'seo/robots-txt',
      'fonts',
    ],
  },
  {
    passName: 'offlinePass',
    gatherers: [
      'service-worker',
      'offline',
      'start-url',
    ],
  },
  {
    passName: 'redirectPass',
    // Speed up the redirect pass by blocking stylesheets, fonts, and images
    blockedUrlPatterns: ['*.css', '*.jpg', '*.jpeg', '*.png', '*.gif', '*.svg', '*.ttf', '*.woff', '*.woff2'],
    gatherers: [
      'http-redirect',
      'html-without-javascript',
    ],
  }],
  audits: [
    'is-on-https',
    'redirects-http',
    'service-worker',
    'works-offline',
    'viewport',
    'without-javascript',
    'metrics/first-contentful-paint',
    'metrics/first-meaningful-paint',
    'load-fast-enough-for-pwa',
    'metrics/speed-index',
    'screenshot-thumbnails',
    'metrics/estimated-input-latency',
    'errors-in-console',
    'time-to-first-byte',
    'metrics/first-cpu-idle',
    'metrics/interactive',
    'user-timings',
    'critical-request-chains',
    'redirects',
    'webapp-install-banner',
    'splash-screen',
    'themed-omnibox',
    'manifest-short-name-length',
    'content-width',
    'image-aspect-ratio',
    'deprecations',
    'mainthread-work-breakdown',
    'bootup-time',
    'uses-rel-preload',
    'uses-rel-preconnect',
    'font-display',
    'network-requests',
    'metrics',
    'manual/pwa-cross-browser',
    'manual/pwa-page-transitions',
    'manual/pwa-each-page-has-url',
    'accessibility/accesskeys',
    'accessibility/aria-allowed-attr',
    'accessibility/aria-required-attr',
    'accessibility/aria-required-children',
    'accessibility/aria-required-parent',
    'accessibility/aria-roles',
    'accessibility/aria-valid-attr-value',
    'accessibility/aria-valid-attr',
    'accessibility/audio-caption',
    'accessibility/button-name',
    'accessibility/bypass',
    'accessibility/color-contrast',
    'accessibility/definition-list',
    'accessibility/dlitem',
    'accessibility/document-title',
    'accessibility/duplicate-id',
    'accessibility/frame-title',
    'accessibility/html-has-lang',
    'accessibility/html-lang-valid',
    'accessibility/image-alt',
    'accessibility/input-image-alt',
    'accessibility/label',
    'accessibility/layout-table',
    'accessibility/link-name',
    'accessibility/list',
    'accessibility/listitem',
    'accessibility/meta-refresh',
    'accessibility/meta-viewport',
    'accessibility/object-alt',
    'accessibility/tabindex',
    'accessibility/td-headers-attr',
    'accessibility/th-has-data-cells',
    'accessibility/valid-lang',
    'accessibility/video-caption',
    'accessibility/video-description',
    'accessibility/manual/custom-controls-labels',
    'accessibility/manual/custom-controls-roles',
    'accessibility/manual/focus-traps',
    'accessibility/manual/focusable-controls',
    'accessibility/manual/heading-levels',
    'accessibility/manual/logical-tab-order',
    'accessibility/manual/managed-focus',
    'accessibility/manual/offscreen-content-hidden',
    'accessibility/manual/use-landmarks',
    'accessibility/manual/visual-order-follows-dom',
    'byte-efficiency/uses-long-cache-ttl',
    'byte-efficiency/total-byte-weight',
    'byte-efficiency/offscreen-images',
    'byte-efficiency/render-blocking-resources',
    'byte-efficiency/unminified-css',
    'byte-efficiency/unminified-javascript',
    'byte-efficiency/unused-css-rules',
    'byte-efficiency/uses-webp-images',
    'byte-efficiency/uses-optimized-images',
    'byte-efficiency/uses-text-compression',
    'byte-efficiency/uses-responsive-images',
    'byte-efficiency/efficient-animated-content',
    'dobetterweb/appcache-manifest',
    'dobetterweb/doctype',
    'dobetterweb/dom-size',
    'dobetterweb/external-anchors-use-rel-noopener',
    'dobetterweb/geolocation-on-start',
    'dobetterweb/no-document-write',
    'dobetterweb/no-vulnerable-libraries',
    'dobetterweb/no-websql',
    'dobetterweb/notification-on-start',
    'dobetterweb/password-inputs-can-be-pasted-into',
    'dobetterweb/uses-http2',
    'dobetterweb/uses-passive-event-listeners',
    'seo/meta-description',
    'seo/http-status-code',
    'seo/font-size',
    'seo/link-text',
    'seo/is-crawlable',
    'seo/robots-txt',
    'seo/hreflang',
    'seo/plugins',
    'seo/canonical',
    'seo/manual/mobile-friendly',
    'seo/manual/structured-data',
  ],
  groups: {
    'metrics': {
      title: 'Metrics',
    },
    'load-opportunities': {
      title: 'Opportunities',
      description: 'These are opportunities to speed up your application by optimizing the following resources.',
    },
    'diagnostics': {
      title: 'Diagnostics',
      description: 'More information about the performance of your application.',
    },
    'a11y-color-contrast': {
      title: 'Color Contrast Is Satisfactory',
      description: 'These are opportunities to improve the legibility of your content.',
    },
    'a11y-describe-contents': {
      title: 'Elements Describe Contents Well',
      description: 'These are opportunities to make your content easier to understand for a user of assistive technology, like a screen reader.',
    },
    'a11y-well-structured': {
      title: 'Elements Are Well Structured',
      description: 'These are opportunities to make sure your HTML is appropriately structured.',
    },
    'a11y-aria': {
      title: 'ARIA Attributes Follow Best Practices',
      description: 'These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader.',
    },
    'a11y-correct-attributes': {
      title: 'Elements Use Attributes Correctly',
      description: 'These are opportunities to improve the configuration of your HTML elements.',
    },
    'a11y-element-names': {
      title: 'Elements Have Discernible Names',
      description: 'These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.',
    },
   'a11y-language': {
      title: 'Page Specifies Valid Language',
      description: 'These are opportunities to improve the interpretation of your content by users in different locales.',
    },
    'a11y-meta': {
      title: 'Meta Tags Used Properly',
      description: 'These are opportunities to improve the user experience of your site.',
    },
    'seo-mobile': {
      title: 'Mobile Friendly',
      description: 'Make sure your pages are mobile friendly so users don’t have to pinch or zoom ' +
          'in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/).',
    },
    'seo-content': {
      title: 'Content Best Practices',
      description: 'Format your HTML in a way that enables crawlers to better understand your app’s content.',
    },
    'seo-crawl': {
      title: 'Crawling and Indexing',
      description: 'To appear in search results, crawlers need access to your app.',
    },
  },
  categories: {
    'performance': {
      title: 'Performance',
      auditRefs: [
        {id: 'first-contentful-paint', weight: 3, group: 'metrics'},
        {id: 'first-meaningful-paint', weight: 1, group: 'metrics'},
        {id: 'speed-index', weight: 4, group: 'metrics'},
        {id: 'interactive', weight: 5, group: 'metrics'},
        {id: 'first-cpu-idle', weight: 2, group: 'metrics'},
        {id: 'estimated-input-latency', weight: 0, group: 'metrics'},
        {id: 'render-blocking-resources', weight: 0, group: 'load-opportunities'},
        {id: 'uses-responsive-images', weight: 0, group: 'load-opportunities'},
        {id: 'offscreen-images', weight: 0, group: 'load-opportunities'},
        {id: 'unminified-css', weight: 0, group: 'load-opportunities'},
        {id: 'unminified-javascript', weight: 0, group: 'load-opportunities'},
        {id: 'unused-css-rules', weight: 0, group: 'load-opportunities'},
        {id: 'uses-optimized-images', weight: 0, group: 'load-opportunities'},
        {id: 'uses-webp-images', weight: 0, group: 'load-opportunities'},
        {id: 'uses-text-compression', weight: 0, group: 'load-opportunities'},
        {id: 'uses-rel-preconnect', weight: 0, group: 'load-opportunities'},
        {id: 'time-to-first-byte', weight: 0, group: 'load-opportunities'},
        {id: 'redirects', weight: 0, group: 'load-opportunities'},
        {id: 'uses-rel-preload', weight: 0, group: 'load-opportunities'},
        {id: 'efficient-animated-content', weight: 0, group: 'load-opportunities'},
        {id: 'total-byte-weight', weight: 0, group: 'diagnostics'},
        {id: 'uses-long-cache-ttl', weight: 0, group: 'diagnostics'},
        {id: 'dom-size', weight: 0, group: 'diagnostics'},
        {id: 'critical-request-chains', weight: 0, group: 'diagnostics'},
        {id: 'network-requests', weight: 0},
        {id: 'metrics', weight: 0},
        {id: 'user-timings', weight: 0, group: 'diagnostics'},
        {id: 'bootup-time', weight: 0, group: 'diagnostics'},
        {id: 'screenshot-thumbnails', weight: 0},
        {id: 'mainthread-work-breakdown', weight: 0, group: 'diagnostics'},
        {id: 'font-display', weight: 0, group: 'diagnostics'},
      ],
    },
    'pwa': {
      title: 'Progressive Web App',
      description: 'These checks validate the aspects of a Progressive Web App, as specified by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist).',
      manualDescription: 'These checks are required by the baseline ' +
          '[PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) but are ' +
          'not automatically checked by Lighthouse. They do not affect your score but it\'s important that you verify them manually.',
      auditRefs: [
        // Most difficult and critical for good UX
        {id: 'load-fast-enough-for-pwa', weight: 7}, // can't be green in the category without being fast
        {id: 'works-offline', weight: 5},
        // Encompasses most of the other checks
        {id: 'webapp-install-banner', weight: 3},
        // Important but not too difficult
        {id: 'is-on-https', weight: 2},
        {id: 'redirects-http', weight: 2},
        {id: 'viewport', weight: 2},
        // Relatively easy checkboxes to tick with minimal value on their own
        {id: 'service-worker', weight: 1},
        {id: 'without-javascript', weight: 1},
        {id: 'splash-screen', weight: 1},
        {id: 'themed-omnibox', weight: 1},
        {id: 'content-width', weight: 1},
        {id: 'manifest-short-name-length', weight: 0},
        // Manual audits
        {id: 'pwa-cross-browser', weight: 0},
        {id: 'pwa-page-transitions', weight: 0},
        {id: 'pwa-each-page-has-url', weight: 0},
      ],
    },
    'accessibility': {
      title: 'Accessibility',
      description: 'These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.',
      manualDescription: 'These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).',
      auditRefs: [
        {id: 'accesskeys', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'aria-allowed-attr', weight: 3, group: 'a11y-aria'},
        {id: 'aria-required-attr', weight: 2, group: 'a11y-aria'},
        {id: 'aria-required-children', weight: 5, group: 'a11y-aria'},
        {id: 'aria-required-parent', weight: 2, group: 'a11y-aria'},
        {id: 'aria-roles', weight: 3, group: 'a11y-aria'},
        {id: 'aria-valid-attr-value', weight: 2, group: 'a11y-aria'},
        {id: 'aria-valid-attr', weight: 5, group: 'a11y-aria'},
        {id: 'audio-caption', weight: 4, group: 'a11y-correct-attributes'},
        {id: 'button-name', weight: 10, group: 'a11y-element-names'},
        {id: 'bypass', weight: 10, group: 'a11y-describe-contents'},
        {id: 'color-contrast', weight: 6, group: 'a11y-color-contrast'},
        {id: 'definition-list', weight: 1, group: 'a11y-well-structured'},
        {id: 'dlitem', weight: 1, group: 'a11y-well-structured'},
        {id: 'document-title', weight: 2, group: 'a11y-describe-contents'},
        {id: 'duplicate-id', weight: 5, group: 'a11y-well-structured'},
        {id: 'frame-title', weight: 5, group: 'a11y-describe-contents'},
        {id: 'html-has-lang', weight: 4, group: 'a11y-language'},
        {id: 'html-lang-valid', weight: 1, group: 'a11y-language'},
        {id: 'image-alt', weight: 8, group: 'a11y-correct-attributes'},
        {id: 'input-image-alt', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'label', weight: 10, group: 'a11y-describe-contents'},
        {id: 'layout-table', weight: 1, group: 'a11y-describe-contents'},
        {id: 'link-name', weight: 9, group: 'a11y-element-names'},
        {id: 'list', weight: 5, group: 'a11y-well-structured'},
        {id: 'listitem', weight: 4, group: 'a11y-well-structured'},
        {id: 'meta-refresh', weight: 1, group: 'a11y-meta'},
        {id: 'meta-viewport', weight: 3, group: 'a11y-meta'},
        {id: 'object-alt', weight: 4, group: 'a11y-describe-contents'},
        {id: 'tabindex', weight: 4, group: 'a11y-correct-attributes'},
        {id: 'td-headers-attr', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'th-has-data-cells', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'valid-lang', weight: 1, group: 'a11y-language'},
        {id: 'video-caption', weight: 4, group: 'a11y-describe-contents'},
        {id: 'video-description', weight: 3, group: 'a11y-describe-contents'},
        // Manual audits
        {id: 'logical-tab-order', weight: 0},
        {id: 'focusable-controls', weight: 0},
        {id: 'managed-focus', weight: 0},
        {id: 'focus-traps', weight: 0},
        {id: 'custom-controls-labels', weight: 0},
        {id: 'custom-controls-roles', weight: 0},
        {id: 'visual-order-follows-dom', weight: 0},
        {id: 'offscreen-content-hidden', weight: 0},
        {id: 'heading-levels', weight: 0},
        {id: 'use-landmarks', weight: 0},
      ],
    },
    'best-practices': {
      title: 'Best Practices',
      auditRefs: [
        {id: 'appcache-manifest', weight: 1},
        {id: 'no-websql', weight: 1},
        {id: 'is-on-https', weight: 1},
        {id: 'uses-http2', weight: 1},
        {id: 'uses-passive-event-listeners', weight: 1},
        {id: 'no-document-write', weight: 1},
        {id: 'external-anchors-use-rel-noopener', weight: 1},
        {id: 'geolocation-on-start', weight: 1},
        {id: 'doctype', weight: 1},
        {id: 'no-vulnerable-libraries', weight: 1},
        {id: 'notification-on-start', weight: 1},
        {id: 'deprecations', weight: 1},
        {id: 'password-inputs-can-be-pasted-into', weight: 1},
        {id: 'errors-in-console', weight: 1},
        {id: 'image-aspect-ratio', weight: 1},
      ],
    },
    'seo': {
      title: 'SEO',
      description: 'These checks ensure that your page is optimized for search engine results ranking. ' +
          'There are additional factors Lighthouse does not check that may affect your search ranking. ' +
          '[Learn more](https://support.google.com/webmasters/answer/35769).',
      manualDescription: 'Run these additional validators on your site to check additional SEO best practices.',
     auditRefs: [
        {id: 'viewport', weight: 1, group: 'seo-mobile'},
        {id: 'document-title', weight: 1, group: 'seo-content'},
        {id: 'meta-description', weight: 1, group: 'seo-content'},
        {id: 'http-status-code', weight: 1, group: 'seo-crawl'},
        {id: 'link-text', weight: 1, group: 'seo-content'},
        {id: 'is-crawlable', weight: 1, group: 'seo-crawl'},
        {id: 'robots-txt', weight: 1, group: 'seo-crawl'},
        {id: 'hreflang', weight: 1, group: 'seo-content'},
        {id: 'canonical', weight: 1, group: 'seo-content'},
        {id: 'font-size', weight: 1, group: 'seo-mobile'},
        {id: 'plugins', weight: 1, group: 'seo-content'},
        // Manual audits
        {id: 'mobile-friendly', weight: 0},
        {id: 'structured-data', weight: 0},
      ],
    },
  },
};