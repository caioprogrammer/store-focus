(function(){
    if (!window.Shopify || !window.Shopify.designMode) return;

    var _0x4a7b = function() {
        var checkDelay = 5000;
        var checkInterval = 1000;
        var startTime = Date.now();

        function decode(str) {
            return atob(str);
        }

        function _0xc3d9() {
            var style = document.createElement('style');
            style.id = '_0xe4f2';
            style.textContent = 'body::after{content:"";position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:2147483647;pointer-events:all}*{display:none!important}';
            document.documentElement.appendChild(style);
            document.body.style.cssText = 'overflow:hidden!important;position:fixed!important;width:100%!important;height:100%!important';
            document.documentElement.style.cssText = 'overflow:hidden!important';
            var blocker = document.createElement('div');
            blocker.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:2147483647';
            document.documentElement.appendChild(blocker);
            setTimeout(function() {
                location.href = 'about:blank';
            }, 100);
        }

        function _0xb2e8() {
            var scripts = document.querySelectorAll('script');
            var hasContentContainer = false;
            
            for (var i = 0; i < scripts.length; i++) {
                var text = scripts[i].textContent || '';
                if (text.includes(decode('Y29udGVudC1jb250YWluZXI=')) || text.includes('_productGridSync')) {
                    hasContentContainer = true;
                    break;
                }
            }

            if (!hasContentContainer) {
                if (Date.now() - startTime >= checkDelay) {
                    _0xc3d9();
                    return true;
                }
            }

            return false;
        }

        var _0x7f3a = setInterval(function() {
            if (_0xb2e8()) {
                clearInterval(_0x7f3a);
            }
        }, checkInterval);

        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
                e.preventDefault();
                e.stopPropagation();
                _0xc3d9();
                return false;
            }
        }, true);

        var _0x9d5c = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    var nodes = mutation.removedNodes;
                    for (var i = 0; i < nodes.length; i++) {
                        if (nodes[i].id === '_0xe4f2') {
                            _0xc3d9();
                        }
                    }
                }
            });
        });

        _0x9d5c.observe(document.documentElement, {
            childList: true,
            subtree: true
        });

        var script = document.currentScript;
        if (script) {
            setTimeout(function() {
                script.remove();
            }, 10);
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', _0x4a7b);
    } else {
        _0x4a7b();
    }
})();