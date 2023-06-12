//时间显示
function loadtime() {
    var myDate = new Date();
    var time = myDate.Format("yyyy-MM-dd hh:mm:ss")
    $("#currDate").text(time);
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//格式化时间 
function formatDate(data, flag) {
    if (!data) {
        return "";
    }
    var time = new Date(data);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    if (flag) {
        return y + '-' + add0(m) + '-' + add0(d);
    } else {
        return y + '-' + add0(m);
    }
}

function add0(m) {
    return m < 10 ? '0' + m : m
}

//判断屏幕分辨率
if ((screen.width == 768) && (screen.height == 1024)) {//ipad
    $("#fontstyle").css("fontSize", "0.15rem");
}

//加载数据
window.onload = function () {
    
    getBaseInfo();
    setInterval(loadtime, 1 * 1000);
    setInterval(loadLotall, loadLotallTime * 60000);
    setInterval(loadLotdept, loadLotdeptTime * 60000);
    setInterval(loadPurLess, loadPurLessTime * 60000);
    setInterval(loadPurMore, loadPurMoreTime * 60000);
    setInterval(loadEnddate, loadEnddateTime * 60000);
    setInterval(loadUnsale, loadUnsaleTime * 60000);
    setInterval(loadSalWeek, loadSalWeekTime * 60000);
    setInterval(loadRsPur, loadRsPurTime * 60000);
    setInterval(loadRsApp, loadRsAppTime * 60000);
    setInterval(loadNumInfo, loadNumInfoTime * 60000);
    // setInterval(loadMid, loadMidTime * 60000);
    setInterval(loadInout, loadInoutTime * 60000);
    setInterval(loadInMonth, loadInMonthTime * 60000);
    setInterval(loadOutMonth, loadOutMonthTime * 60000);
    setInterval(loadSalUpTop, loadSalUpTopTime * 60000);
    setInterval(loadSalDownTop, loadSalDownTopTime * 60000);
    setInterval(loadBarDay, loadBarDayTime * 60000);
    // setInterval(loadNotice,noticeRefreshTime *60000);
    loadLotall();
    loadLotdept();
    loadPurLess();
    loadPurMore();
    loadEnddate();
    loadUnsale();
    loadSalWeek();
    loadRsPur();
    loadRsApp();
    loadNumInfo();
    loadMid();
    loadInout();
    loadInMonth();
    loadOutMonth();
    loadSalUpTop();
    loadSalDownTop();
    loadBarDay();
    // loadNotice();

    $("#titleDiv").html("<span class='spd-font' >" + titlemsg + "</span>");
    $("#headDiv").html("<span class='spd-font' >" + headmsg + "</span>");
    $("#midDiv1").html("<span class='spd-font' >" + midmsg1 + "</span>");
    $("#midDiv2").html("<span class='spd-font' >" + midmsg2 + "</span>");
    $("#midDiv3").html("<span class='spd-font' >" + midmsg3 + "</span>");
    $("#endDiv").html("<span class='spd-font' >" + endmsg + "</span>");
}

//元素dom
var lotallEchar = echarts.init(document.getElementById('lotallDiv'));
var lotdeptEchar = echarts.init(document.getElementById('lotdeptDiv'));
var purLessEchar = echarts.init(document.getElementById('purLessDiv'));
var purMoreEchar = echarts.init(document.getElementById('purMoreDiv'));
var enddateEchar = echarts.init(document.getElementById('enddateDiv'));
var unsaleEchar = echarts.init(document.getElementById('unsaleDiv'));
var salWeekEchar = echarts.init(document.getElementById('salWeekDiv'));
var rsPurEchar = echarts.init(document.getElementById('rsPurDiv'));
var rsAppEchar = echarts.init(document.getElementById('rsAppDiv'));
var inoutEchar = echarts.init(document.getElementById('inoutDiv'));
var inMonthEchar = echarts.init(document.getElementById('inMonthDiv'));
var outMonthEchar = echarts.init(document.getElementById('outMonthDiv'));
var salUpTopEchar = echarts.init(document.getElementById('salUpTopDiv'));
var salDownTopEchar = echarts.init(document.getElementById('salDownTopDiv'));
var barDayEchar = echarts.init(document.getElementById('barDayDiv'));

function getBaseInfo() {
    var url = global_url + "/getBaseInfo";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                document.title = data.maintilte;
                $("#maintilte").html(data.maintilte);
                $("#companyname").html(data.companyname);
                // $("#hospname").html(data.hospname);
                $("#logoimg")[0].src = "./static/images/logo_" + (data.logoimg || "null" ) + ".png";
                // $("#logoimghos")[0].src = "./static/images/logo_" + (data.logoimghos || "null") + ".png";
                // $("link[rel='icon']")[0].href = "./static/images/favicon_" + data.logoimghos +".ico";
            } else {
                $("#maintilte").html("运营监控中心");
            }
        }
    });
}

//全院备货构成
function loadLotall() {
    var url = global_url + "/getLotall";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var x = [];
                var y = [];
                for (var k = 0; k < data.length; k++) {
                    y.push({
                        value: data[k].ALLPRC,
                        name: data[k].TYPENAME
                    });
                    x.push(data[k].TYPENAME);

                }
                var option = {
                    //鼠标悬停提示框
                    tooltip: {
                        trigger: 'item',
                        position: 'right',
                        formatter: function (data) {
                            return data.name + "<br>"
                                + data.marker + "占比：" + data.percent + "%" + "<br>"
                                + data.marker + "金额：" + data.data.value + "万元";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    series: [{
                        type: 'pie',
                        minAngle: 5,
                        avoidLabelOverlap: true,
                        // radius: ['55%', '70%'], //饼图的半径大小
                        center: ['50%', '50%'], //饼图的位置
                        color: ['#6fc9ee', '#00FFFF', '#FFFF37', '#BEBEBE', '#FF5151', '#FF95CA', '#FF8EFF', '#CA8EFF', '#B766AD',
                            '#ECECFF', '#0066CC', '#00CACA', '#02F78E', '#28FF28', '#467500', '#A6A600', '#FFF0AC', '#FF8000', '#e43f8a', '#D94600'],
                        data: y,
                        labelLine: {
                            show: false
                        },
                        label: {
                            show: true,
                            fontSize: echartsFont,
                            position: 'center',
                            formatter: function (data) {
                                // return "全院"
                                return ""
                            }
                        },
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                lotallEchar.setOption(option);

                var currentIndex = -1;
                setInterval(function () {
                    var dataLength = option.series[0].data.length;
                    // 取消之前高亮的图形
                    lotallEchar.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    currentIndex = (currentIndex + 1) % dataLength;
                    // 高亮当前图形
                    lotallEchar.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    // 显示 tooltip
                    lotallEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                }, 10000);
            }
        }
    });
}

//中心库备货构成
function loadLotdept() {
    var url = global_url + "/getLotdept";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var x = [];
                var y = [];
                for (var k = 0; k < data.length; k++) {
                    y.push({
                        value: data[k].ALLPRC,
                        name: data[k].TYPENAME
                    });
                    x.push(data[k].TYPENAME);

                }
                var option = {
                    //鼠标悬停提示框
                    tooltip: {
                        trigger: 'item',
                        position: 'right',
                        formatter: function (data) {
                            return data.name + "<br>"
                                + data.marker + "占比：" + data.percent + "%" + "<br>"
                                + data.marker + "金额：" + data.data.value + "万元";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    series: [{
                        type: 'pie',
                        minAngle: 5,
                        avoidLabelOverlap: true,
                        // radius: ['55%', '70%'], //饼图的半径大小
                        center: ['50%', '50%'], //饼图的位置
                        color: ['#6fc9ee', '#00FFFF', '#FFFF37', '#BEBEBE', '#FF5151', '#FF95CA', '#FF8EFF', '#CA8EFF', '#B766AD',
                            '#ECECFF', '#0066CC', '#00CACA', '#02F78E', '#28FF28', '#467500', '#A6A600', '#FFF0AC', '#FF8000', '#e43f8a', '#D94600'],
                        data: y,
                        labelLine: {
                            show: false
                        },
                        label: {
                            show: true,
                            fontSize: echartsFont,
                            position: 'center',
                            formatter: function (data) {
                                // return "中心库"
                                return ""
                            }
                        },
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                lotdeptEchar.setOption(option);

                var currentIndex = -1;
                setInterval(function () {
                    var dataLength = option.series[0].data.length;
                    // 取消之前高亮的图形
                    lotdeptEchar.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    currentIndex = (currentIndex + 1) % dataLength;
                    // 高亮当前图形
                    lotdeptEchar.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    // 显示 tooltip
                    lotdeptEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                }, 10000);
            }
        }
    });
}

//配送不足
function loadPurLess() {
    var url = global_url + "/getPurLess";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var x = [];
                var y = [];
                for (var i = 0; i < data.length; i++) {
                    x.push(data[i].WEEK_NUM);
                    y.push(data[i].COUNTNUM);
                }
                var option = {
                    type: 'bar',
                    grid: {
                        left: echartsLeft,
                        right: echartsRight,
                        bottom: echartsBottom,
                        top: echartsTop,
                        containLabel: true,
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (data) {
                            return data[0].marker + data[0].name + "配送不足：" + data[0].data + "个";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: x,
                        axisLabel: {
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            },
                            interval: 0
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '个数',
                        nameGap: 8,
                        minInterval: 1,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            }
                        },
                        nameTextStyle: {
                            color: '#FFFFFF',
                            fontSize: echartsFont,
                        },
                        splitLine: {
                            show: false, // 网格线是否显示
                        }
                    }],
                    series: [
                        {
                            type: 'line',
                            areaStyle: {
                                normal: {
                                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(80,141,255,0.85)'
                                    }, {
                                        offset: .34,
                                        color: 'rgba(56,155,255,0.65)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(38,197,254,0.15)'
                                    }])
                                }
                            },
                            data: y,
                            smooth: true,//圆滑折线设置
                            symbol: 'emptyCircle',//圆滑折线设置
                            itemStyle: {
                                normal: {
                                    color: "#6fc9ee",
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3,
                                }
                            }
                        }
                    ]
                };
                purLessEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    purLessEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > data.length) {
                        index = 0;
                    }
                }, 10000);
            }
        }
    });
}

//配送超出
function loadPurMore() {
    var url = global_url + "/getPurMore";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var x = [];
                var y = [];
                for (var i = 0; i < data.length; i++) {
                    x.push(data[i].WEEK_NUM);
                    y.push(data[i].COUNTNUM);
                }
                var option = {
                    type: 'bar',
                    grid: {
                        left: echartsLeft,
                        right: echartsRight,
                        bottom: echartsBottom,
                        top: echartsTop,
                        containLabel: true,
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (data) {
                            return data[0].marker + data[0].name + "配送超出：" + data[0].data + "个";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: x,
                        axisLabel: {
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            },
                            interval: 0
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '个数',
                        nameGap: 8,
                        minInterval: 1,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            }
                        },
                        nameTextStyle: {
                            color: '#FFFFFF',
                            fontSize: echartsFont,
                        },
                        splitLine: {
                            show: false, // 网格线是否显示
                        }
                    }],
                    series: [
                        {
                            type: 'line',
                            areaStyle: {
                                normal: {
                                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(80,141,255,0.85)'
                                    }, {
                                        offset: .34,
                                        color: 'rgba(56,155,255,0.65)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(38,197,254,0.15)'
                                    }])
                                }
                            },
                            data: y,
                            smooth: true,//圆滑折线设置
                            symbol: 'emptyCircle',//圆滑折线设置
                            itemStyle: {
                                normal: {
                                    color: "#6fc9ee",
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3,
                                }
                            }
                        }
                    ]
                };
                purMoreEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    purMoreEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > data.length) {
                        index = 0;
                    }
                }, 10000);
            }
        }
    });
}

//近效期提醒
function loadEnddate() {
    var url = global_url + "/getEnddate";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var x = [];
                var y1 = [];
                var y2 = [];
                for (var i = 0; i < data.length; i++) {
                    x.push(data[i].MONTHNUM);
                    var type = data[i].WARENUM;
                    var licence = data[i].LICNUM;
                    y1.push(type);
                    y2.push(licence);
                }
                var option = {
                    type: 'bar',
                    grid: {
                        left: echartsLeft,
                        right: echartsRight,
                        bottom: echartsBottom,
                        top: echartsTop,
                        containLabel: true,
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (data) {
                            return data[0].name + "<br>"
                                + data[0].marker + data[0].seriesName + "：" + data[0].data + "个" + "<br>"
                                + data[1].marker + data[1].seriesName + "：" + data[1].data + "个";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    legend: {
                        data: ['品种', '证照'],
                        itemHeight: 6,
                        itemGap: echItemGap,
                        right: '10%',
                        textStyle: {
                            fontSize: echartsFont,
                            color: '#FFFFFF',
                        }
                    },
                    xAxis: [{
                        type: 'category',
                        data: x,
                        axisLabel: {
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            },
                            interval: 0
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '个数',
                        nameGap: 8,
                        minInterval: 1,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            }
                        },
                        nameTextStyle: {
                            color: '#FFFFFF',
                            fontSize: echartsFont,
                        },
                        // 柱状图区域颜色
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: "transparent"
                            }
                        },
                        splitLine: {
                            show: false, // 网格线是否显示
                        }
                    }],
                    series: [
                        {
                            name: '品种',
                            type: 'bar',
                            data: y1,
                            barWidth: '40%',
                            barMaxWidth: 50,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [3, 3, 0, 0],//柱状图圆角
                                    color: "#00FFFF",
                                }
                            }
                        },
                        {
                            name: '证照',
                            type: 'line',
                            data: y2,
                            smooth: true,//圆滑折线设置
                            symbol: 'emptyCircle',//圆滑折线设置
                            itemStyle: {
                                normal: {
                                    color: "#28FF28",
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3,
                                }
                            }
                        }
                    ]
                };
                enddateEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    enddateEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > data.length) {
                        index = 0;
                    }
                }, 10000);
            }
        }
    });
}

//滞销提醒
function loadUnsale() {
    var url = global_url + "/getUnsale";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var x = [];
                var y1 = [];
                var y2 = [];
                for (var i = 0; i < data.length; i++) {
                    x.push(data[i].MONTHNUM);
                    var warenum1 = data[i].WARENUM1;
                    var warenum2 = data[i].WARENUM2;
                    y1.push(warenum1);
                    y2.push(warenum2);
                }
                var option = {
                    type: 'bar',
                    grid: {
                        left: echartsLeft,
                        right: echartsRight,
                        bottom: echartsBottom,
                        top: echartsTop,
                        containLabel: true,
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (data) {
                            return data[0].name + "<br>"
                                + data[0].marker + data[0].seriesName + "：" + data[0].data + "个" + "<br>"
                                + data[1].marker + data[1].seriesName + "：" + data[1].data + "个";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    legend: {
                        data: ['中心库', '各科室'],
                        itemHeight: 6,
                        itemGap: echItemGap,
                        right: '10%',
                        textStyle: {
                            fontSize: echartsFont,
                            color: '#FFFFFF',
                        }
                    },
                    xAxis: [{
                        type: 'category',
                        data: x,
                        axisLabel: {
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            },
                            interval: 0
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '个数',
                        nameGap: 8,
                        minInterval: 1,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            }
                        },
                        nameTextStyle: {
                            color: '#FFFFFF',
                            fontSize: echartsFont,
                        },
                        // 柱状图区域颜色
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: "transparent"
                            }
                        },
                        splitLine: {
                            show: false, // 网格线是否显示
                        }
                    }],
                    series: [
                        {
                            name: '中心库',
                            type: 'bar',
                            data: y1,
                            barWidth: '40%',
                            barMaxWidth: 50,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [3, 3, 0, 0],//柱状图圆角
                                    color: "#00FFFF",
                                }
                            }
                        },
                        {
                            name: '各科室',
                            type: 'line',
                            data: y2,
                            smooth: true,//圆滑折线设置
                            symbol: 'emptyCircle',//圆滑折线设置
                            itemStyle: {
                                normal: {
                                    color: "#28FF28",
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3,
                                }
                            }
                        }
                    ]
                };
                unsaleEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    unsaleEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > data.length) {
                        index = 0;
                    }
                }, 10000);
            }
        }
    });
}

//近一周科室消耗一览
function loadSalWeek() {
    var x = [];
    var y1 = [];
    var y2 = [];
    var url = global_url + "/getSalWeek";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                for (var i = 0; i < data.length; i++) {
                    x.push(data[i].SALEDATE);
                    y1.push(data[i].OUTPRC);
                    y2.push(data[i].SALPRC);
                }
                var option = {
                    //鼠标悬停提示框
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (data) {
                            return data[0].name + "<br>"
                                + data[0].marker + data[0].seriesName + "：" + data[0].data + "万元<br>"
                                + data[1].marker + data[1].seriesName + "：" + data[1].data + "万元";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    grid: {
                        left: echartsLeft,
                        right: echartsRight,
                        bottom: echartsBottom,
                        top: echartsTop,
                        containLabel: true,
                    },
                    legend: {
                        data: ['中心库', '各科室'],
                        itemHeight: 6,
                        itemGap: echItemGap,
                        right: '10%',
                        textStyle: {
                            fontSize: echartsFont,
                            color: '#FFFFFF'
                        }
                    },
                    xAxis: [{
                        type: 'category',
                        data: x,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            },
                            interval: 0
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#50a4ad',
                            }
                        },
                    }
                    ],
                    yAxis: [{
                        name: '万元',
                        type: 'value',
                        nameGap: 8,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: echartsFont,
                            }
                        },
                        nameTextStyle: {
                            color: '#FFFFFF',
                            fontSize: '15%',
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#50a4ad',
                                type: 'solid'
                            }
                        },
                        splitLine: {
                            show: false, // 网格线是否显示
                            lineStyle: {
                                color: 'transparent'
                            }
                        },
                        //网格区域背景色
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: "transparent"
                            }
                        }
                    }],
                    series: [{
                        name: '中心库',
                        type: 'line',
                        data: y1,
                        symbolSize: 6,
                        itemStyle: {
                            normal: {
                                color: "#00FFFF",
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 3,
                            }
                        }
                    }, {
                        name: '各科室',
                        type: 'line',
                        data: y2,
                        symbolSize: 6,
                        itemStyle: {
                            normal: {
                                color: "#FFFF37"
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 3,
                            }
                        }
                    }]
                };
                salWeekEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    salWeekEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > data.length) {
                        index = 0;
                    }
                }, 10000);
            }
        }
    });
}

//采购监控
function loadRsPur() {
    var url = global_url + "/getRsPur";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var purNotin1 = [];
                var purNotin2 = [];
                var purNotpos1 = [];
                var purNotpos2 = [];
                var appNotpick1 = [];
                var appNotpick2 = [];
                var lotUnlock1 = [];
                var lotUnlock2 = [];

                var data = dataJson.data;
                purNotin1.push(data.purNotin1);
                purNotin2.push(data.purNotin2);
                purNotpos1.push(data.purNotpos1);
                purNotpos2.push(data.purNotpos2);
                appNotpick1.push(data.appNotpick1);
                appNotpick2.push(data.appNotpick2);
                lotUnlock1.push(data.lotUnlock1);
                lotUnlock2.push(data.lotUnlock2);

                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        position: function (point, params, dom, rect, size) {
                            return {left: '55%', top: '10%'};
                        },
                        formatter: function (data) {
                            return "中心库：<br>"
                                + data[0].marker + data[0].seriesName + "：" + data[0].data + "个<br/>"
                                + data[2].marker + data[2].seriesName + "：" + data[2].data + "个<br/>"
                                + data[4].marker + data[4].seriesName + "：" + data[4].data + "个<br/>"
                                + data[6].marker + data[6].seriesName + "：" + data[6].data + "个"
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    //图例组件
                    legend: {
                        data: ['待入库', '待上架', '待拣货', '锁定数'],
                        itemHeight: 6,   //大小
                        itemGap: echItemGap,    //多个图例之间的间隔
                        orient: 'horizontal', //纵向和横向样式
                        right: '10%',
                        textStyle: { //图例文字样式
                            fontSize: echartsFont,
                            color: '#FFFFFF',
                        }
                    },
                    grid: {
                        left: echartsLeft,
                        right: echartsRight,
                        bottom: echartsBottom,
                        top: "10%",
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: 'value',
                            position: 'top',
                            splitLine: {show: false},
                            axisLabel: {show: false},
                            axisLine: {
                                lineStyle: {
                                    color: '#052339'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            splitLine: {show: false},
                            axisLabel: {
                                textStyle: {
                                    color: '#fff',
                                    align: 'right',
                                    fontSize: echartsFont
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#052339'
                                }
                            },
                            data: ['中心库']
                        }
                    ],
                    series: [
                        {
                            name: '待入库',
                            type: 'bar',
                            barWidth: '40%',
                            barMaxWidth: 50,
                            stack: '总量',
                            data: purNotin1,
                            itemStyle: {
                                normal: {
                                    color: "#00FFFF"
                                }
                            }
                        },
                        {
                            name: '待入库',
                            type: 'bar',
                            barWidth: '40%',
                            barMaxWidth: 50,
                            stack: '总量',
                            data: purNotin2,
                            itemStyle: {
                                normal: {
                                    color: "#2E7CFF"
                                }
                            }
                        },
                        {
                            name: '待上架',
                            type: 'bar',
                            barWidth: '40%',
                            barMaxWidth: 50,
                            stack: '总量',
                            data: purNotpos1,
                            itemStyle: {
                                normal: {
                                    color: "#28FF28"
                                }
                            }
                        },
                        {
                            name: '待上架',
                            type: 'bar',
                            barWidth: '40%',
                            barMaxWidth: 50,
                            stack: '总量',
                            data: purNotpos2,
                            itemStyle: {
                                normal: {
                                    color: "#2E7CFF"
                                }
                            }
                        },
                        {
                            name: '待拣货',
                            type: 'bar',
                            barWidth: '40%',
                            barMaxWidth: 50,
                            stack: '总量',
                            data: appNotpick1,
                            itemStyle: {
                                normal: {
                                    color: "#FFFF37"
                                }
                            }
                        },
                        {
                            name: '待拣货',
                            type: 'bar',
                            barWidth: '40%',
                            barMaxWidth: 50,
                            stack: '总量',
                            data: appNotpick2,
                            itemStyle: {
                                normal: {
                                    color: "#2E7CFF"
                                }
                            }
                        },
                        {
                            name: '锁定数',
                            type: 'bar',
                            barWidth: '40%',
                            barMaxWidth: 50,
                            stack: '总量',
                            data: lotUnlock1,
                            itemStyle: {
                                normal: {
                                    color: "#02F78E"
                                }
                            }
                        },
                        {
                            name: '锁定数',
                            type: 'bar',
                            barWidth: '40%',
                            barMaxWidth: 50,
                            stack: '总量',
                            data: lotUnlock2,
                            itemStyle: {
                                normal: {
                                    color: "#2E7CFF"
                                }
                            }
                        }
                    ]
                };
                rsPurEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    rsPurEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > 4) {
                        index = 0;
                    }
                }, 10000);
            }
        }
    });
}


//科室监控
function loadRsApp() {
    var url = global_url + "/getRsApp";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var appNotout1 = [];
                var appNotout2 = [];
                var lotOnroad1 = [];
                var lotOnroad2 = [];
                var appNotin1 = [];
                var appNotin2 = [];
                var appNotpos1 = [];
                var appNotpos2 = [];

                var data = dataJson.data;
                appNotout1.push(data.appNotout1);
                appNotout2.push(data.appNotout2);
                lotOnroad1.push(data.lotOnroad1);
                lotOnroad2.push(data.lotOnroad2);
                appNotin1.push(data.appNotin1);
                appNotin2.push(data.appNotin2);
                appNotpos1.push(data.appNotpos1);
                appNotpos2.push(data.appNotpos2);

                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        position: function (point, params, dom, rect, size) {
                            return {left: '95%', top: '10%'};
                        },
                        formatter: function (data) {
                            return "各科室：<br>"
                                + data[0].marker + data[0].seriesName + "：" + data[0].data + "个<br/>"
                                + data[2].marker + data[2].seriesName + "：" + data[2].data + "个<br/>"
                                + data[4].marker + data[4].seriesName + "：" + data[4].data + "个<br/>"
                                + data[6].marker + data[6].seriesName + "：" + data[6].data + "个"
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    //图例组件
                    legend: {
                        data: ['待出库', '在途数', '待入库', '待上架'],
                        itemHeight: 6,   //大小
                        itemGap: echItemGap,    //多个图例之间的间隔
                        orient: 'horizontal', //纵向和横向样式
                        right: '10%',
                        textStyle: { //图例文字样式
                            fontSize: echartsFont,
                            color: '#FFFFFF',
                        }
                    },
                    grid: {
                        left: echartsLeft,
                        right: echartsRight,
                        bottom: echartsBottom,
                        top: "10%",
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: 'value',
                            position: 'top',
                            splitLine: {show: false},
                            axisLabel: {show: false},
                            axisLine: {
                                lineStyle: {
                                    color: '#052339'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            splitLine: {show: false},
                            axisLabel: {
                                textStyle: {
                                    color: '#fff',
                                    align: 'right',
                                    fontSize: echartsFont
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#052339'
                                }
                            },
                            data: ['各科室']
                        }
                    ],
                    series: [
                        {
                            name: '待出库',
                            type: 'bar',
                            barWidth: '40%',
                            stack: '总量',
                            data: appNotout1,
                            itemStyle: {
                                normal: {
                                    color: "#00FFFF"
                                }
                            }
                        },
                        {
                            name: '待出库',
                            type: 'bar',
                            barWidth: '40%',
                            stack: '总量',
                            data: appNotout2,
                            itemStyle: {
                                normal: {
                                    color: "#2E7CFF"
                                }
                            }
                        },
                        {
                            name: '在途数',
                            type: 'bar',
                            barWidth: '40%',
                            stack: '总量',
                            data: lotOnroad1,
                            itemStyle: {
                                normal: {
                                    color: "#28FF28"
                                }
                            }
                        },
                        {
                            name: '在途数',
                            type: 'bar',
                            barWidth: '40%',
                            stack: '总量',
                            data: lotOnroad2,
                            itemStyle: {
                                normal: {
                                    color: "#2E7CFF"
                                }
                            }
                        },
                        {
                            name: '待入库',
                            type: 'bar',
                            barWidth: '40%',
                            stack: '总量',
                            data: appNotin1,
                            itemStyle: {
                                normal: {
                                    color: "#FFFF37"
                                }
                            }
                        },
                        {
                            name: '待入库',
                            type: 'bar',
                            barWidth: '40%',
                            stack: '总量',
                            data: appNotin2,
                            itemStyle: {
                                normal: {
                                    color: "#2E7CFF"
                                }
                            }
                        },
                        {
                            name: '待上架',
                            type: 'bar',
                            barWidth: '40%',
                            stack: '总量',
                            data: appNotpos1,
                            itemStyle: {
                                normal: {
                                    color: "#02F78E"
                                }
                            }
                        },
                        {
                            name: '待上架',
                            type: 'bar',
                            barWidth: '40%',
                            stack: '总量',
                            data: appNotpos2,
                            itemStyle: {
                                normal: {
                                    color: "#2E7CFF"
                                }
                            }
                        }
                    ]
                };
                rsAppEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    rsAppEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > 4) {
                        index = 0;
                    }
                }, 10000);
            }
        }
    });
}

//相关数值
function loadNumInfo() {
    var url = global_url + "/getNumInfo";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                $("#expenddateWare").html(data.expenddateWare);
                $("#expenddateLic").html(data.expenddateLic);
                $("#pur001").html(data.pur001);
                $("#pur002").html(data.pur002);
                $("#app001").html(data.app001);
            }
        }
    });
}


var flag = 0

//科室备货使用
function loadMid() {
    var url = global_url + "/getMid";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                flag++;
                $(".consumables li").remove();
                var data = dataJson.data;
                for (var i = 0; i < data.length; i++) {
                    var headmsg = data[i].HEADMSG;
                    var midmsg1 = data[i].MIDMSG1;
                    var midmsg2 = data[i].MIDMSG2;
                    var midmsg3 = data[i].MIDMSG3;
                    var endmsg = data[i].ENDMSG;
                    var html = "<li class='table-row'><span class='row-11 spd-font-content'>" + headmsg + "</span><span class='row-22 spd-font-content'>" + midmsg1 + "</span><span class='row-22 spd-font-content'>" + midmsg2 + "</span><span class='row-33 spd-font-content'>" + midmsg3 + "</span><span class='row-33 spd-font-content'>" + endmsg + "</span></li>";
                    $(".consumables").append(html);
                }
                //滚动相关参数
                if (flag == 1) {
                    $("#scroll-content5").marquee({
                        duration: 20000,//滚动速度（越小越快）
                        gap: 0,
                        delayBeforeStart: 0,
                        direction: 'up',
                        duplicated: true,
                        pauseOnHover: true,
                        startVisible: true
                    });
                }
            }
        }
    });
}


//备货使用趋势
function loadInout() {
    var x = [];
    var y1 = [];
    var y2 = [];
    var url = global_url + "/getInout";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                for (var i = 0; i < data.length; i++) {
                    x.push(data[i].YEARMONTH);
                    var inqty = data[i].INPRC;
                    var outqty = data[i].OUTPRC;
                    y1.push(inqty);
                    y2.push(outqty);
                }
                var option = {
                    //背景大小设置
                    grid: {
                        left: echartsLeft,
                        right: echartsRight,
                        bottom: echartsBottom,
                        top: echartsTop,
                        containLabel: true,
                    },
                    //鼠标悬停提示框
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (data) {
                            return data[0].name + "<br>"
                                + data[0].marker + data[0].seriesName + "：" + data[0].data + "万元" + "<br>"
                                + data[1].marker + data[1].seriesName + "：" + data[1].data + "万元";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    //图例组件
                    legend: {
                        data: ['入库金额', '消耗金额'],
                        itemHeight: 6,   //大小
                        itemGap: echItemGap,    //多个图例之间的间隔
                        orient: 'horizontal', //纵向和横向样式
                        right: '10%',
                        textStyle: { //图例文字样式
                            fontSize: echartsFont,
                            color: '#FFFFFF',
                        }
                    },
                    xAxis: [{
                        type: 'category',
                        data: x,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: echartsFont,
                            },
                            interval: 0
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#50a4ad',
                                type: 'solid'
                            }
                        },
                    }
                    ],
                    yAxis: [{
                        name: '万元',
                        type: 'value',
                        nameGap: 8,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: echartsFont,
                            }
                        },
                        nameTextStyle: {
                            color: '#FFFFFF',
                            fontSize: echartsFont,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#50a4ad',
                                type: 'solid'
                            }
                        },
                        splitLine: {
                            show: false, // 网格线是否显示
                        }
                    }],
                    series: [{
                        name: '入库金额',
                        type: 'bar',
                        data: y1,
                        //显示颜色
                        itemStyle: {
                            normal: {
                                barBorderRadius: [3, 3, 0, 0],//柱状图圆角
                                color: "#FFFF37",
                            }
                        },
                    }, {
                        name: '消耗金额',
                        type: 'bar',
                        data: y2,
                        itemStyle: {
                            normal: {
                                barBorderRadius: [3, 3, 0, 0],//柱状图圆角
                                color: "#00FFFF",
                            }
                        }
                    }
                    ]
                };
                inoutEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    inoutEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > data.length) {
                        index = 0;
                    }
                }, 10000);
            }
        }
    });
}


//当月采购构成
function loadInMonth() {
    var url = global_url + "/getInMonth";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var x = [];
                var y = [];
                for (var k = 0; k < data.length; k++) {
                    y.push({
                        value: data[k].INPRC,
                        name: data[k].TYPENAME
                    });
                    x.push(data[k].TYPENAME);

                }
                var option = {
                    //鼠标悬停提示框
                    tooltip: {
                        trigger: 'item',
                        position: 'right',
                        formatter: function (data) {
                            return data.name + "<br>"
                                + data.marker + "占比：" + data.percent + "%" + "<br>"
                                + data.marker + "金额：" + data.data.value + "万元";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    series: [{
                        type: 'pie',
                        minAngle: 5,
                        avoidLabelOverlap: true,
                        radius: ['55%', '70%'], //饼图的半径大小
                        center: ['50%', '50%'], //饼图的位置
                        color: ['#6fc9ee', '#00FFFF', '#FFFF37', '#BEBEBE', '#FF5151', '#FF95CA', '#FF8EFF', '#CA8EFF', '#B766AD',
                            '#ECECFF', '#0066CC', '#00CACA', '#02F78E', '#28FF28', '#467500', '#A6A600', '#FFF0AC', '#FF8000', '#e43f8a', '#D94600'],
                        data: y,
                        labelLine: {
                            show: false
                        },
                        label: {
                            show: true,
                            fontSize: echartsFont,
                            position: 'center',
                            formatter: function (data) {
                                return "中心库"
                            }
                        },
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                inMonthEchar.setOption(option);

                var currentIndex = -1;
                setInterval(function () {
                    var dataLength = option.series[0].data.length;
                    // 取消之前高亮的图形
                    inMonthEchar.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    currentIndex = (currentIndex + 1) % dataLength;
                    // 高亮当前图形
                    inMonthEchar.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    // 显示 tooltip
                    inMonthEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                }, 10000);
            }
        }
    });
}

//当月消耗构成
function loadOutMonth() {
    var url = global_url + "/getOutMonth";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var x = [];
                var y = [];
                for (var k = 0; k < data.length; k++) {
                    y.push({
                        value: data[k].OUTPRC,
                        name: data[k].TYPENAME
                    });
                    x.push(data[k].TYPENAME);

                }
                var option = {
                    //鼠标悬停提示框
                    tooltip: {
                        trigger: 'item',
                        position: 'right',
                        formatter: function (data) {
                            return data.name + "<br>"
                                + data.marker + "占比：" + data.percent + "%" + "<br>"
                                + data.marker + "金额：" + data.data.value + "万元";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    series: [{
                        type: 'pie',
                        minAngle: 5,
                        avoidLabelOverlap: true,
                        radius: ['55%', '70%'], //饼图的半径大小
                        center: ['50%', '50%'], //饼图的位置
                        color: ['#6fc9ee', '#00FFFF', '#FFFF37', '#BEBEBE', '#FF5151', '#FF95CA', '#FF8EFF', '#CA8EFF', '#B766AD',
                            '#ECECFF', '#0066CC', '#00CACA', '#02F78E', '#28FF28', '#467500', '#A6A600', '#FFF0AC', '#FF8000', '#e43f8a', '#D94600'],
                        data: y,
                        labelLine: {
                            show: false
                        },
                        label: {
                            show: true,
                            fontSize: echartsFont,
                            position: 'center',
                            formatter: function (data) {
                                return "各科室"
                            }
                        },
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                outMonthEchar.setOption(option);

                var currentIndex = -1;
                setInterval(function () {
                    var dataLength = option.series[0].data.length;
                    // 取消之前高亮的图形
                    outMonthEchar.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    currentIndex = (currentIndex + 1) % dataLength;
                    // 高亮当前图形
                    outMonthEchar.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    // 显示 tooltip
                    outMonthEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                }, 10000);
            }
        }
    });
}


//消耗增长Top10
function loadSalUpTop() {
    var x = [];
    var y = [];
    var url = global_url + "/getSalUpTop";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                for (var i = 0; i < data.length; i++) {
                    x.push(data[i].GOODNAME);
                    y.push(data[i].PERRATE);
                }
                var option = {
                    grid: {
                        left: salLeft,
                        right: top10UpRight,
                        bottom: salBottom,
                        top: salTop,
                        containLabel: true
                    },
                    xAxis: [{
                        show: false,
                    }, {
                        show: false,
                    }
                    ],
                    yAxis: {
                        type: 'category',
                        inverse: true,
                        show: false
                    },
                    title: {
                        text: '',//万元
                        left: '24',
                        top: '4',
                        textStyle: {
                            color: '#fff',
                            fontSize: echartsFont,
                        }
                    },
                    //鼠标悬停提示框
                    tooltip: {
                        trigger: 'item',
                        formatter: function (data) {
                            var dataIndex = data.dataIndex;
                            var dataValue = data.value;
                            return data.marker + x[dataIndex] + '：' + dataValue + "%";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    series: [
                        //亮色条数值
                        {
                            show: true,
                            type: 'bar',
                            barGap: '-100%',
                            barWidth: '30%',
                            z: 2,
                            barMaxWidth: '8%',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [0, 5, 5, 0],//柱状图圆角
                                    color: function (params) {
                                        //颜色值判断
                                        var colorList = [];
                                        for (var i = 1; i <= y.length; i++) {
                                            if (i == 1) {
                                                colorList.push('#FF5151');
                                            } else if (i == 2) {
                                                colorList.push('#ff7f50');
                                            } else if (i == 3) {
                                                colorList.push('#FFFF6F');
                                            } else {
                                                colorList.push('#00FFFF');
                                            }
                                        }
                                        //var colorNew = colorList.reverse();
                                        return colorList[params.dataIndex];
                                    }
                                }
                            },
                            // label: {
                            //     normal: {
                            //         show: true,
                            //         textStyle: {
                            //             color: '#fff',
                            //             fontSize: echartsFont
                            //         },
                            //         position: 'right',
                            //         formatter: function (data) {
                            //             return y[data.dataIndex] + "%";
                            //         }
                            //     }
                            // },
                            data: y,
                        },
                        //品种
                        {
                            show: true,
                            type: 'bar',
                            xAxisIndex: 1, //代表使用第二个X轴刻度
                            barGap: '-110%',
                            barWidth: '10%',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 200,
                                    color: 'transparent'
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: [0, '-13'],
                                    textStyle: {
                                        fontSize: echartsFont,
                                        color: '#64daf4',
                                    },
                                    formatter: function (data) {
                                        return x[data.dataIndex]+"--"+y[data.dataIndex] + "%";
                                    }
                                }
                            },
                            data: y
                        }
                    ]
                };
                salUpTopEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    salUpTopEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > data.length) {
                        index = 0;
                    }
                }, 6000);
            }
        }
    });
}

//消耗降低Top10
function loadSalDownTop() {
    var x = [];
    var y = [];
    var url = global_url + "/getSalDownTop";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                for (var i = 0; i < data.length; i++) {
                    x.push(data[i].GOODNAME);
                    y.push(data[i].PERRATE);
                }
                var option = {
                    grid: {
                        left: salLeft,
                        right: top10DownRight,
                        bottom: salBottom,
                        top: salTop,
                        containLabel: true
                    },
                    xAxis: [{
                        show: false,
                    }, {
                        show: false,
                    }
                    ],
                    yAxis: {
                        type: 'category',
                        inverse: true,
                        show: false
                    },
                    title: {
                        text: '',//万元
                        left: '24',
                        top: '4',
                        textStyle: {
                            color: '#fff',
                            fontSize: echartsFont,
                        }
                    },
                    //鼠标悬停提示框
                    tooltip: {
                        trigger: 'item',
                        formatter: function (data) {
                            var dataIndex = data.dataIndex;
                            var dataValue = data.value;
                            return data.marker + x[dataIndex] + '：' + dataValue + "%";
                        },
                        textStyle: {
                            fontSize: echartsFont
                        }
                    },
                    series: [
                        //亮色条数值
                        {
                            show: true,
                            type: 'bar',
                            barGap: '-100%',
                            barWidth: '30%',
                            z: 2,
                            barMaxWidth: '8%',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [0, 5, 5, 0],//柱状图圆角
                                    color: function (params) {
                                        //颜色值判断
                                        var colorList = [];
                                        for (var i = 1; i <= y.length; i++) {
                                            if (i == 1) {
                                                colorList.push('#FF5151');
                                            } else if (i == 2) {
                                                colorList.push('#ff7f50');
                                            } else if (i == 3) {
                                                colorList.push('#FFFF6F');
                                            } else {
                                                colorList.push('#00FFFF');
                                            }
                                        }
                                        //var colorNew = colorList.reverse();
                                        return colorList[params.dataIndex];
                                    }
                                }
                            },
                            // label: {
                            //     normal: {
                            //         show: true,
                            //         textStyle: {
                            //             color: '#fff',
                            //             fontSize: echartsFont
                            //         },
                            //         position: 'right',
                            //         formatter: function (data) {
                            //             return y[data.dataIndex] + "%";
                            //         }
                            //     }
                            // },
                            data: y,
                        },
                        //品种
                        {
                            show: true,
                            type: 'bar',
                            xAxisIndex: 1, //代表使用第二个X轴刻度
                            barGap: '-110%',
                            barWidth: '10%',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 200,
                                    color: 'transparent'
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: [0, '-13'],
                                    textStyle: {
                                        fontSize: echartsFont,
                                        color: '#64daf4',
                                    },
                                    formatter: function (data) {
                                        return x[data.dataIndex]+"-"+y[data.dataIndex] + "%";
                                    }
                                }
                            },
                            data: y
                        }
                    ]
                };
                salDownTopEchar.setOption(option);

                var index = 0; //播放所在下标
                var mTime = setInterval(function () {
                    salDownTopEchar.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: index
                    });
                    index++;
                    if (index > data.length) {
                        index = 0;
                    }
                }, 9000);
            }
        }
    });
}


//当日消耗标签数
function loadBarDay() {
    var url = global_url + "/getBarDay";
    $.ajax({
        url: url,
        type: "GET",
        success: function (dataJson) {
            dataJson = JSON.parse(dataJson);
            if (dataJson.code == "1") {
                var data = dataJson.data;
                var totalNum = data.totalNum;
                var typeNum1 = data.typeNum1;
                var typeNum2 = data.typeNum2;
                var option = {
                    series: [
                        {
                            name: '在库条码',
                            type: 'gauge',
                            min: 0,
                            max: totalNum,
                            center: ['25%', '50%'],
                            radius: '100%',
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                                    width: 1,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            axisLabel: {            // 坐标轴小标记
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 3,
                                textStyle: {
                                    fontSize: echartsCarFont,
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 5,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 5
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 8,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            itemStyle: {//指针样式
                                normal: {
                                    color: '#FFFF37'
                                }
                            },
                            pointer: {           // 指针
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5,
                                width: "8%",
                            },
                            title: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: echartsFont,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 2,
                                offsetCenter: [0, '50%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontSize: echartsFont,
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data: [{value: typeNum1, name: '在库条码'}]
                        },
                        {
                            name: '预验收条码',
                            type: 'gauge',
                            min: 0,
                            max: totalNum,
                            center: ['75%', '50%'],
                            radius: '100%',
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                                    width: 1,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            axisLabel: {            // 坐标轴小标记
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 3,
                                textStyle: {
                                    fontSize: echartsCarFont,
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 5,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 5
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 8,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            itemStyle: {//指针样式
                                normal: {
                                    color: '#28FF28'
                                }
                            },
                            pointer: {           // 指针
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5,
                                width: "8%",
                            },
                            title: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: echartsFont,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 2,
                                offsetCenter: [0, '50%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontSize: echartsFont,
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data: [{value: typeNum2, name: '预验收条码'}]
                        }
                    ]
                };
                barDayEchar.setOption(option);
            }
        }
    });
}

// var num = 0
// //最新动态
// function loadNotice() {
// 	var url = global_url + "/getNotice";
// 	$.ajax({
// 		url: url,
// 		type: "GET",
// 		success: function(dataJson) {
// 			if(dataJson.code == "1") {
// 				num++;
// 				$(".trends li").remove();
// 				$(".dottedLine").remove();
// 				var data = dataJson.data;
// 				for(var i = 0; i < data.length; i++) {
// 					var newshead = data[i].NEWSHEAD;
// 					var newscontent = data[i].NEWSCONTENT;
// 					var createdate = formatDate(data[i].CREATEDATE,true)
// 					var html = '<li style="padding: 0.1rem;"><div><p class="circle" style="float:left;">'+(i+1)+'</p></div>'
// 					    html +='<div class="spd-font" style="color: #f48564;text-align:center"><font color="#fff" style="background-color:#0164D7">'+newshead+'</font><p style="float:right;">'+createdate+'</p></div>'
// 						html +='<div class="spd-font" style="color: #64daf4;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+newscontent+'</div></li>'
// 						html +='<div class="dottedLine" style="border-bottom:1px dashed #ccc;"></div>'
// 					$(".trends").append(html);
// 				}
// 				if(num == 1){
// 					//滚动相关参数
// 					$("#scroll-content").marquee({
// 						duration:10000, //滚动速度（越小越快）
// 						gap: 0, // 开始滚动间隙
// 						delayBeforeStart: 0, //开始动画的延迟时候
// 						direction: 'up', //滚动方式上下左右
// 						duplicated: true, //是否复制文本
// 						pauseOnHover: true, //鼠标放上去暂停
// 						startVisible:true //在开始时是否可见
// 					});
// 				}
// 			}
// 		},
// 		error: function() {
// 			alert("网络连接错误！");
// 		}
// 	});
//
// }
