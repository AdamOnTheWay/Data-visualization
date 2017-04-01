$(function () {
	chartFirstOne();
    chartFirstTwo();
    chartFirstThree();
    chartSecondOne();
    chartThirdOne();
    chartThirdTwo();
});

function chartFirstOne(){
	$('#firstOne').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'rgb(144, 237, 125)'
        },
        title: {
            text: '2014 某网站各浏览器浏览量占比'
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '浏览器访问量占比',
            data: [
                ['Ff',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['其他',   0.7]
            ]
        }]
    });
}

function chartFirstTwo(){
	$('#firstTwo').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'rgb(247, 163, 92)'
        },
        title: {
            text: '按性别划分的水果消费总量'
        },
        xAxis: {
            categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '水果数量'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '小张',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: '小潘',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: '小彭',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: '小王',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }]
    });
}
function chartFirstThree(){
	$('#firstThree').highcharts({
	chart: {
        backgroundColor: 'rgb(124, 181, 236)'
        },
    title: {
        text: '不同城市的月平均气温',
        x: -20
    },
    subtitle: {
        text: '数据来源: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        title: {
            text: '温度 (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: '东京',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: '纽约',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        name: '柏林',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        name: '伦敦',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
});
}

function chartSecondOne(){
	 $('#secondOne').highcharts({
        chart: {
            type: 'area',
            backgroundColor: '#8085e8'
        },
        title: {
            text: '全球各大洲人口增长历史及预测'
        },
        subtitle: {
            text: '数据来源: Wikipedia.org'
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: '十亿'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' 百万'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: '亚洲',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: '非洲',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: '欧洲',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: '美洲',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: '大洋洲',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
}

function chartThirdOne(){
	$('#thirdOne').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: 'rgb(255, 239, 255)'
        },
        title: {
            text: '浏览器<br>占比',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: '浏览器占比',
            innerSize: '50%',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                ['Chrome', 12.8],
                ['Safari',    8.5],
                ['Opera',     6.2],
                {
                    name: '其他',
                    y: 0.7,
                    dataLabels: {
                        // 数据比较少，没有空间显示数据标签，所以将其关闭
                        enabled: false
                    }
                }
            ]
        }]
    });
}

function chartThirdTwo(){
	var chart = Highcharts.chart('thirdTwo', {
		chart: {
            backgroundColor: 'rgb(145, 232, 225)'
        },
        title: {
            text: '图表变换'
        },
        subtitle: {
            text: '普通的'
        },
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            showInLegend: false
        }]
    });
    $('#plain').click(function () {
        chart.update({
            chart: {
                inverted: false,
                polar: false
            },
            subtitle: {
                text: '普通的'
            }
        });
    });
    $('#inverted').click(function () {
        // chart.update 支持全部属性动态更新
        chart.update({
            chart: {
                inverted: true,
                polar: false
            },
            subtitle: {
                text: '反转'
            }
        });
    });
    $('#polar').click(function () {
        chart.update({
            chart: {
                inverted: false,
                polar: true
            },
            subtitle: {
                text: '极地图'
            }
        });
    });
}