// declaraction of document.ready() function.
(function () {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function () {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function (f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function () {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function () {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();


document.ready(
    // toggleTheme function.
    // this script shouldn't be changed.
    function () {
        var _Blog = window._Blog || {};
        const currentTheme = window.localStorage && window.localStorage.getItem('theme');
        const isDark = currentTheme === 'dark';
        if (isDark) {
            document.getElementById("switch_default").checked = true;
            // mobile
            document.getElementById("mobile-toggle-theme").innerText = "· Dark"
        } else {
            document.getElementById("switch_default").checked = false;
            // mobile
            document.getElementById("mobile-toggle-theme").innerText = "· Dark"
        }
        _Blog.toggleTheme = function () {
            if (isDark) {
                document.getElementsByTagName('body')[0].classList.add('dark-theme');
                // mobile
                document.getElementById("mobile-toggle-theme").innerText = "· Dark"
            } else {
                document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                // mobile
                document.getElementById("mobile-toggle-theme").innerText = "· Dark"
            }
            // 去掉背景颜色切换，默认为灰色，因为白色太难看
            document.getElementsByClassName('toggleBtn')[0].addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                } else {
                    document.getElementsByTagName('body')[0].classList.add('dark-theme');
                }
                window.localStorage &&
                window.localStorage.setItem('theme', 'dark' ,)
            })
            // moblie
            document.getElementById('mobile-toggle-theme').addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                    // mobile
                    document.getElementById("mobile-toggle-theme").innerText = "· Dark"

                } else {
                    document.getElementsByTagName('body')[0].classList.add('dark-theme');
                    // mobile
                    document.getElementById("mobile-toggle-theme").innerText = "· Dark"
                }
                window.localStorage &&
                window.localStorage.setItem('theme', 'dark' ,)
            })
        };
        _Blog.toggleTheme();

        // ready function.

    }
);