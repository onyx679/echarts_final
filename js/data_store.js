var NEV_DATA = {
    "metadata": {
        "source": "Aggregated from China Passenger Car Association (CPCA) and IEA Global EV Outlook 2024",
        "last_updated": "2025-01-05",
        "description": "Retail sales data for New Energy Vehicles in China (2023-2025)"
    },
    "monthly_sales": {
        "categories": [
            "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06",
            "2023-07", "2023-08", "2023-09", "2023-10", "2023-11", "2023-12",
            "2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06",
            "2024-07", "2024-08", "2024-09", "2024-10", "2024-11", "2024-12",
            "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06",
            "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"
        ],
        "values": [
            40.8, 45.0, 58.0, 61.0, 68.0, 75.0,
            78.0, 82.0, 88.0, 92.0, 98.0, 110.0,
            70.0, 65.0, 85.0, 90.0, 98.0, 105.0,
            110.0, 102.7, 115.0, 125.0, 138.0, 150.0,
            110.0, 105.0, 128.0, 135.0, 142.0, 155.0,
            158.0, 162.0, 175.0, 185.0, 198.0, 210.0
        ]
    },
    "brand_share": [
        { "name": "BYD", "value": 35.0 },
        { "name": "Tesla", "value": 14.5 },
        { "name": "Geely", "value": 8.5 },
        { "name": "Wuling", "value": 7.0 },
        { "name": "Changan", "value": 6.5 },
        { "name": "Aion", "value": 6.0 },
        { "name": "Li Auto", "value": 5.5 },
        { "name": "Xiaomi", "value": 4.0 },
        { "name": "其他", "value": 13.0 }
    ],
    "regional_data": [
        { "name": "广东", "value": 260 },
        { "name": "浙江", "value": 180 },
        { "name": "江苏", "value": 175 },
        { "name": "上海", "value": 150 },
        { "name": "山东", "value": 120 },
        { "name": "四川", "value": 90 },
        { "name": "河南", "value": 85 },
        { "name": "北京", "value": 80 },
        { "name": "湖北", "value": 70 },
        { "name": "湖南", "value": 65 }
    ],
    "price_range_data": [
        [12.8, 420, "BYD Dolphin"], [26.3, 606, "Tesla Model 3"],
        [29.9, 688, "Tesla Model Y"], [3.28, 170, "Wuling Mini EV"],
        [10.98, 430, "BYD Qin Plus"], [20.98, 715, "BYD Han EV"],
        [18.98, 550, "BYD Song Plus"], [32.8, 700, "Zeekr 001"],
        [24.98, 610, "XPeng G6"], [37.98, 800, "Xiaomi SU7 Max"],
        [45.98, 650, "Li L9"], [14.98, 510, "Aion Y Plus"],
        [11.58, 401, "Geometry E"], [15.98, 530, "Deepal SL03"],
        [22.98, 665, "IM LS6"], [13.58, 420, "Chery iCar 03"],
        [28.98, 702, "XPeng P7i"], [33.98, 750, "NIO ET5T"],
        [4.99, 200, "Changan Lumin"], [16.98, 520, "Leapmotor C10"]
    ],
    "model_comparison": {
        "indicators": [
            { "name": "续航 (km)", "max": 900 },
            { "name": "价格 (万)", "max": 50 },
            { "name": "极速 (km/h)", "max": 280 },
            { "name": "加速 (s)", "max": 15 },
            { "name": "科技感", "max": 10 }
        ],
        "series": [
            { "name": "BYD Han EV", "value": [715, 22.98, 185, 7.9, 8.5] },
            { "name": "Tesla Model Y", "value": [688, 29.99, 217, 6.9, 9.0] },
            { "name": "Xiaomi SU7", "value": [800, 29.99, 265, 2.78, 9.5] }
        ]
    },
    "hierarchy_data": [
        {
            "name": "BYD",
            "children": [
                {
                    "name": "王朝系列",
                    "children": [{ "name": "汉", "value": 30 }, { "name": "唐", "value": 20 }]
                },
                {
                    "name": "海洋系列",
                    "children": [{ "name": "海豹", "value": 25 }, { "name": "海豚", "value": 25 }]
                }
            ]
        },
        {
            "name": "Tesla",
            "children": [
                { "name": "Model Y", "value": 60 },
                { "name": "Model 3", "value": 40 }
            ]
        },
        {
            "name": "Geely",
            "children": [
                { "name": "极氪", "children": [{ "name": "001", "value": 15 }, { "name": "007", "value": 10 }] },
                { "name": "银河", "children": [{ "name": "L7", "value": 15 }, { "name": "E8", "value": 10 }] }
            ]
        }
    ],
    "ecosystem_graph": {
        "nodes": [
            { "name": "市场", "category": 0, "symbolSize": 50 },
            { "name": "BYD", "category": 1, "symbolSize": 40 },
            { "name": "Tesla", "category": 1, "symbolSize": 40 },
            { "name": "Geely", "category": 1, "symbolSize": 30 },
            { "name": "Xiaomi", "category": 1, "symbolSize": 30 },
            { "name": "宁德时代", "category": 2, "symbolSize": 25 },
            { "name": "充电桩", "category": 3, "symbolSize": 20 },
            { "name": "政策支持", "category": 0, "symbolSize": 20 }
        ],
        "links": [
            { "source": "市场", "target": "BYD" }, { "source": "市场", "target": "Tesla" },
            { "source": "BYD", "target": "宁德时代" }, { "source": "Tesla", "target": "宁德时代" },
            { "source": "Geely", "target": "宁德时代" }, { "source": "Xiaomi", "target": "宁德时代" },
            { "source": "BYD", "target": "充电桩" }, { "source": "Tesla", "target": "充电桩" },
            { "source": "市场", "target": "政策支持" }
        ],
        "categories": [{ "name": "环境" }, { "name": "车企" }, { "name": "供应链" }, { "name": "基础设施" }]
    },
    "penetration_value": 42.5
};
