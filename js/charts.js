// 2023-2025 NEV Sales Visualization - Unified Controller
// Student: 202202474088 Zhang Wenhao
// Optimized for Google Material Design and ECharts Textbook Standards

window.initAllCharts = function () {
    // Shared ECharts Theme/Style
    var themeColor = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#AB47BC', '#00ACC1'];

    // Helper: resizing
    function addResize(chart) {
        window.addEventListener('resize', function () {
            chart && chart.resize();
        });
    }

    // ==========================================
    // Page 1: Overview
    // ==========================================

    // Chart 1: Market Trend Analysis (Line + Bar Mixed)
    var trendDom = document.getElementById('chart-trend');
    if (trendDom) {
        (function () {
            var myChart = echarts.init(trendDom);
            var option = {
                color: themeColor,
                animationDuration: 2500,
                animationEasing: 'cubicInOut',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'cross' }
                },
                legend: {
                    data: ['销量 (万辆)', '增长率 (%)'],
                    bottom: 0
                },
                grid: {
                    left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: NEV_DATA.monthly_sales.categories,
                        axisPointer: { type: 'shadow' },
                        axisLabel: { color: '#5f6368' }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '月销量',
                        nameTextStyle: { color: '#5f6368' },
                        min: 0,
                        axisLabel: { formatter: '{value}' }
                    },
                    {
                        type: 'value',
                        name: '月增长率',
                        min: -20,
                        max: 100,
                        axisLabel: { formatter: '{value} %' }
                    }
                ],
                series: [
                    {
                        name: '销量 (万辆)',
                        type: 'bar',
                        itemStyle: { color: '#4285F4', borderRadius: [4, 4, 0, 0] },
                        data: NEV_DATA.monthly_sales.values
                    },
                    {
                        name: '增长率 (%)',
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: { color: '#DB4437' },
                        smooth: true,
                        data: NEV_DATA.monthly_sales.values.map(function (v, i, arr) {
                            if (i === 0) return 0;
                            return parseFloat(((v - arr[i - 1]) / arr[i - 1] * 100).toFixed(1));
                        })
                    }
                ]
            };
            myChart.setOption(option);
            addResize(myChart);
        })();
    }

    // Chart 2: 2025 Penetration Target (Gauge)
    var gaugeDom = document.getElementById('chart-gauge');
    if (gaugeDom) {
        (function () {
            var myChart = echarts.init(gaugeDom);
            var option = {
                animationDuration: 3000,
                animationEasing: 'cubicInOut',
                series: [{
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 100,
                    splitNumber: 5, // 0, 20, 40, 60, 80, 100
                    radius: '100%',
                    center: ['50%', '75%'],
                    itemStyle: { color: '#4285F4' },
                    progress: { show: true, width: 18 },
                    pointer: {
                        show: true,
                        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                        length: '12%',
                        width: 20,
                        offsetCenter: [0, '-60%'],
                        itemStyle: { color: 'auto' }
                    },
                    axisLine: {
                        lineStyle: { width: 18 }
                    },
                    axisTick: {
                        show: true,
                        distance: -18,
                        length: 8,
                        lineStyle: { color: '#fff', width: 2 }
                    },
                    splitLine: {
                        show: true,
                        distance: -18,
                        length: 18,
                        lineStyle: { color: '#fff', width: 4 }
                    },
                    axisLabel: {
                        show: true,
                        color: '#999',
                        distance: 25,
                        fontSize: 12
                    },
                    anchor: { show: false },
                    title: { show: true },
                    detail: {
                        valueAnimation: true,
                        width: '60%',
                        lineHeight: 40,
                        borderRadius: 8,
                        offsetCenter: [0, 0],
                        fontSize: 32,
                        fontWeight: 'bolder',
                        formatter: '{value}%',
                        color: 'inherit'
                    },
                    data: [{ value: NEV_DATA.penetration_value, name: '目标: 50%' }]
                }]
            };
            myChart.setOption(option);
            addResize(myChart);
        })();
    }

    // ==========================================
    // Page 2: Brand Analysis
    // ==========================================

    // Chart 3: Market Share Distribution (Pie)
    var pieDom = document.getElementById('chart-pie');
    if (pieDom) {
        (function () {
            var myChart = echarts.init(pieDom);
            var option = {
                color: themeColor,
                animationDuration: 2000,
                animationEasing: 'cubicInOut',
                tooltip: { trigger: 'item' },
                legend: { bottom: '0%', left: 'center' },
                series: [{
                    name: '品牌份额',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
                    label: { show: false, position: 'center' },
                    emphasis: { label: { show: true, fontSize: 20, fontWeight: 'bold' } },
                    labelLine: { show: false },
                    data: NEV_DATA.brand_share
                }]
            };
            myChart.setOption(option);
            addResize(myChart);
        })();
    }

    // Chart 4: Model Comparison (Radar)
    var radarDom = document.getElementById('chart-radar');
    if (radarDom) {
        (function () {
            var myChart = echarts.init(radarDom);
            var option = {
                color: themeColor,
                animationDuration: 2500,
                animationEasing: 'cubicInOut',
                tooltip: {},
                legend: { data: NEV_DATA.model_comparison.series.map(function (i) { return i.name; }), bottom: 0 },
                radar: {
                    indicator: NEV_DATA.model_comparison.indicators,
                    radius: '65%',
                    axisName: { color: '#5f6368' }
                },
                series: [{
                    name: '车型对比',
                    type: 'radar',
                    areaStyle: { opacity: 0.1 },
                    data: NEV_DATA.model_comparison.series
                }]
            };
            myChart.setOption(option);
            addResize(myChart);
        })();
    }

    // Chart 5: Brand & Model Hierarchy (Sunburst)
    var sunDom = document.getElementById('chart-sunburst');
    if (sunDom) {
        (function () {
            var myChart = echarts.init(sunDom);
            var option = {
                color: themeColor,
                animationDuration: 2500,
                animationEasing: 'cubicInOut',
                series: {
                    type: 'sunburst',
                    data: NEV_DATA.hierarchy_data,
                    radius: [0, '90%'],
                    label: { rotate: 'radial' }
                }
            };
            myChart.setOption(option);
            addResize(myChart);
        })();
    }

    // ==========================================
    // Page 3: Consumer Insights
    // ==========================================

    // Chart 6: Regional Sales Distribution (Funnel)
    var funnelDom = document.getElementById('chart-funnel');
    if (funnelDom) {
        (function () {
            var myChart = echarts.init(funnelDom);
            var option = {
                color: themeColor,
                animationDuration: 2000,
                animationEasing: 'cubicInOut',
                tooltip: { trigger: 'item', formatter: '{b} : {c}' },
                legend: { orient: 'vertical', left: 'left', data: NEV_DATA.regional_data.map(function (i) { return i.name; }), show: false },
                series: [
                    {
                        name: '销量',
                        type: 'funnel',
                        left: '20%',
                        top: 40,
                        bottom: 40,
                        width: '60%',
                        min: 0,
                        max: 300,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        label: { show: true, position: 'inside' },
                        labelLine: { show: false },
                        itemStyle: { borderColor: '#fff', borderWidth: 1 },
                        data: NEV_DATA.regional_data
                    }
                ]
            };
            myChart.setOption(option);
            addResize(myChart);
        })();
    }

    // Chart 7: Price vs Range Correlation (Scatter)
    var scatterDom = document.getElementById('chart-scatter');
    if (scatterDom) {
        (function () {
            var myChart = echarts.init(scatterDom);
            var option = {
                color: themeColor,
                animationDuration: 2500,
                animationEasing: 'cubicInOut',
                title: { text: '' },
                grid: {
                    left: '3%', right: '10%', bottom: '15%', top: '10%', containLabel: true
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (param) {
                        return param.data[2] + '<br/>价格: ' + param.data[0] + '万<br/>续航: ' + param.data[1] + 'km';
                    }
                },
                xAxis: {
                    type: 'value',
                    name: '价格 (万)',
                    nameLocation: 'middle',
                    nameGap: 30,
                    splitLine: { show: false },
                    axisLabel: { color: '#5f6368' }
                },
                yAxis: {
                    type: 'value',
                    name: '续航 (km)',
                    splitLine: { show: true, lineStyle: { type: 'dashed' } },
                    axisLabel: { color: '#5f6368' }
                },
                series: [
                    {
                        name: '车型分布',
                        type: 'scatter',
                        symbolSize: function (data) {
                            return Math.sqrt(data[0]) * 5; // Bubble size based on price
                        },
                        data: NEV_DATA.price_range_data,
                        itemStyle: {
                            color: function (param) {
                                return themeColor[param.dataIndex % themeColor.length];
                            },
                            opacity: 0.8,
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                ]
            };
            myChart.setOption(option);
            addResize(myChart);
        })();
    }

    // Chart 8: NEV Ecosystem & Supply Chain (Graph)
    var graphDom = document.getElementById('chart-graph');
    if (graphDom) {
        (function () {
            var myChart = echarts.init(graphDom);
            var option = {
                color: themeColor,
                animationDuration: 3000,
                animationEasing: 'cubicInOut',
                tooltip: {},
                legend: [{
                    data: NEV_DATA.ecosystem_graph.categories.map(function (a) {
                        return a.name;
                    })
                }],
                series: [{
                    type: 'graph',
                    layout: 'force',
                    data: NEV_DATA.ecosystem_graph.nodes,
                    links: NEV_DATA.ecosystem_graph.links,
                    categories: NEV_DATA.ecosystem_graph.categories,
                    roam: true,
                    label: {
                        position: 'right',
                        show: true
                    },
                    force: {
                        repulsion: 400,
                        edgeLength: 120
                    }
                }]
            };
            myChart.setOption(option);
            addResize(myChart);
        })();
    }

}) ();
