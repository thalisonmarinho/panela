
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CWQaPjlW.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DHMyu_Ez.js","/cdn/shopifycloud/checkout-web/assets/c1/pt-BR-legacy.CBEO9DKD.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.B98yHNkx.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.C1_j4ebo.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.Oq6dXjEB.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.C_x1C5f5.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation-legacy.Dk5a6UBi.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.CLV4QaJN.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.B4LC_a-X.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.c8KTsNxh.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.CRGdTLp9.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.Br8LVSkR.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.BPT4Pvu8.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.B7XSFqB8.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.B-ebl4-T.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.CPVT-Tho.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.CIWudTxn.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  