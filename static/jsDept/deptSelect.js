$(function () {
    var deptSelData = [];
    init();
    // 初始化
    function init() {
        // 获得科室数据
        getDept();
        var inputValThrottle = throttle(filterDropDown, 200); // 节流函数

        // 下拉菜单
        $(".form-control").on("focus", function () {
            $(".dropdown-menu").stop(0).slideDown();
        }).on("blur", function () {
            $(".dropdown-menu").stop(0).slideUp();
        }).on("input", inputValThrottle).on("keydown", function (e) {
            var _keycode = e.keyCode;
            if (_keycode === 38) { // 上
                var _li = $(".dropdown-menu li");
                var _select = $(".dropdown-menu .select-list");
                if (_select.length) {
                    var node = _select.prev()[0];
                    if (!node) {
                        return;
                    }
                    _li.removeClass("select-list");
                    $(node).addClass("select-list");
                    node.scrollIntoView();
                } else {
                    _li.eq(0).addClass("select-list");
                }
            } else if (_keycode === 40) { // 下
                var _li = $(".dropdown-menu li");
                var _select = $(".dropdown-menu .select-list");
                if (_select.length) {
                    var node = _select.next()[0];
                    if (!node) {
                        return;
                    }
                    _li.removeClass("select-list");
                    $(node).addClass("select-list");
                    node.scrollIntoView();
                } else {
                    _li.eq(0).addClass("select-list");
                }
            } else if (_keycode === 13) { //  回车
                var _select = $(".dropdown-menu .select-list");
                if (_select.length) {
                    _select.click();
                }
            }

        });

        // 模态框
        $(".modal").on("click", function (e) {
            if (e.target.className === "modal") {
                $(this).hide();
            }
        }).find(".close").on("click", function () {
            $(".modal").hide();
        })
        $("#title-span").on("click", function () {
            $(".modal").show();
        })
        $("#title-span").on("click", function () {
            $(".modal").show();
        })
    }

    // 获得科室数据
    function getDept() {
        var url = global_dept_url + "/getDeptSel";
        $.getJSON(url, function (res) {
            if (res.code) {
                var data = res.data;
                deptSelData = JSON.parse(JSON.stringify(data));
                innerDropDown(deptSelData);
            }
        });
    }

    // 渲染下拉菜单
    function innerDropDown(data) {
        var _arr = data.map(function (item, index) {
            return "<li data-index='" + index + "'><a href='#'>" + item.deptName + "</a></li>"
        });
        $(".dropdown-menu").html(_arr.join("")).find("li").click(function (e) {
            var index = $(this).data("index");
            var _d = data[index];

            _d && $(".form-control").val(_d.deptName);
            updateDept(_d.deptName);
            initData(_d.deptId);
        });
        // <li><a href="#">暂无数据</a></li>
    }

    // 科室数据
    function updateDept(data) {
        $(".modal").hide();
        $("#title-span").text(data || '请选择');
    }

    // 过滤菜单值
    function filterDropDown(e) {
        if (!deptSelData.length) {
            return;
        }
        var val = String(e.target.value || "");
        val = val.toLocaleLowerCase();
        var _data = deptSelData.filter(function (item) {
            var deptName = item.deptName;
            if (deptName.includes(val)) {
                return true;
            } else {
                var fullPinyin = ConvertPinyin(deptName).indexOf(val, 0);
                if (fullPinyin !== -1) {
                    return true
                }
                var Initials = makePy(deptName)[0].toLocaleLowerCase().indexOf(val, 0)
                return Initials !== -1;
            }
            deptName.includes(val);
        });
        if (_data.length) {
            innerDropDown(_data);
        } else {
            $(".dropdown-menu").html("<li><a href=\"#\">暂无数据</a></li>");
        }
    }

    // 节流
    function throttle(fn, delay) {
        var timeout;
        return function () {
            var args = arguments;//注意如果要传参的话 这句不能省略
            if (!timeout) {
                timeout = setTimeout(function () {
                    timeout = null;
                    fn.apply(this, args)
                }, delay)
            }
        }
    }
})