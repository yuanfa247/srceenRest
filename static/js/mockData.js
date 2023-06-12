Mock.mock(
	'srceenRest/getBaseInfo', //这里对应下面mock请求的URL
	{
		code: 1,
		data: {
			logoimg: 'gy',
			maintilte: '耗材SPD运营监控中心',
			logoimghos: 'hnlxzyy',
			companyname: '国药控股江西有限公司',
			hospname: '湖南澧县中医医院',
		},
		msg: '查询成功',
	}
);

Mock.mock(
	'srceenRest/getLotall', //这里对应下面mock请求的URL
	{
		code: 1,
		data: [
			{
				TYPENAME: '外科耗材',
				ALLPRC: 93.98,
			},
			{
				TYPENAME: '体外循环及血液净化类耗材',
				ALLPRC: 13.48,
			},
			{
				TYPENAME: '吻合器耗材',
				ALLPRC: 7.64,
			},
			{
				TYPENAME: '防控物资',
				ALLPRC: 19.93,
			},
			{
				TYPENAME: '基础卫生材料',
				ALLPRC: 107.06,
			},
			{
				TYPENAME: '血管介入类',
				ALLPRC: 46.27,
			},
			{
				TYPENAME: '医用X射线附属设备及部件',
				ALLPRC: 18.14,
			},
			{
				TYPENAME: '麻醉科耗材',
				ALLPRC: 22.52,
			},
			{
				TYPENAME: '功能性敷料',
				ALLPRC: 11.83,
			},
			{
				TYPENAME: '消毒类',
				ALLPRC: 3.48,
			},
			{
				TYPENAME: '眼科耗材',
				ALLPRC: 12.02,
			},
			{
				TYPENAME: '非血管介入类耗材',
				ALLPRC: 21.11,
			},
			{
				TYPENAME: '检验试剂',
				ALLPRC: 76.33,
			},
		],
		msg: '查询成功',
	}
);

Mock.mock('srceenRest/getLotdept', {
	code: 1,
	data: [
		{
			TYPENAME: '外科耗材',
			ALLPRC: 62.35,
		},
		{
			TYPENAME: '体外循环及血液净化类耗材',
			ALLPRC: 8.75,
		},
		{
			TYPENAME: '吻合器耗材',
			ALLPRC: 4,
		},
		{
			TYPENAME: '防控物资',
			ALLPRC: 19.2,
		},
		{
			TYPENAME: '基础卫生材料',
			ALLPRC: 81.66,
		},
		{
			TYPENAME: '血管介入类',
			ALLPRC: 2.76,
		},
		{
			TYPENAME: '医用X射线附属设备及部件',
			ALLPRC: 9.02,
		},
		{
			TYPENAME: '麻醉科耗材',
			ALLPRC: 14.5,
		},
		{
			TYPENAME: '功能性敷料',
			ALLPRC: 8.25,
		},
		{
			TYPENAME: '消毒类',
			ALLPRC: 1.89,
		},
		{
			TYPENAME: '眼科耗材',
			ALLPRC: 2.03,
		},
		{
			TYPENAME: '非血管介入类耗材',
			ALLPRC: 17.39,
		},
		{
			TYPENAME: '检验试剂',
			ALLPRC: 4.64,
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getPurLess', {
	code: 1,
	data: [
		{
			WEEK_NUM: '第1周',
			COUNTNUM: 78,
		},
		{
			WEEK_NUM: '第2周',
			COUNTNUM: 45,
		},
		{
			WEEK_NUM: '第3周',
			COUNTNUM: 9,
		},
		{
			WEEK_NUM: '第4周',
			COUNTNUM: 9,
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getPurMore', {
	code: 1,
	data: [
		{
			WEEK_NUM: '第1周',
			COUNTNUM: 0,
		},
		{
			WEEK_NUM: '第2周',
			COUNTNUM: 0,
		},
		{
			WEEK_NUM: '第3周',
			COUNTNUM: 0,
		},
		{
			WEEK_NUM: '第4周',
			COUNTNUM: 0,
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getEnddate', {
	code: 1,
	data: [
		{
			MONTHNUM: '1月',
			WARENUM: 4,
			LICNUM: 0,
		},
		{
			MONTHNUM: '2月',
			WARENUM: 8,
			LICNUM: 0,
		},
		{
			MONTHNUM: '3月',
			WARENUM: 9,
			LICNUM: 0,
		},
		{
			MONTHNUM: '6月',
			WARENUM: 41,
			LICNUM: 0,
		},
		{
			MONTHNUM: '12月',
			WARENUM: 31,
			LICNUM: 0,
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getUnsale', {
	code: 1,
	data: [
		{
			WARENUM2: 1004,
			WARENUM1: 402,
			MONTHNUM: '1月',
		},
		{
			WARENUM2: 96,
			WARENUM1: 66,
			MONTHNUM: '2月',
		},
		{
			WARENUM2: 4,
			WARENUM1: 21,
			MONTHNUM: '3月',
		},
		{
			WARENUM2: 0,
			WARENUM1: 0,
			MONTHNUM: '6月',
		},
		{
			WARENUM2: 0,
			WARENUM1: 0,
			MONTHNUM: '12月',
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getSalWeek', {
	code: 1,
	data: [
		{
			SALEDATE: '06-06',
			OUTPRC: 6.27,
			SALPRC: 8.89,
		},
		{
			SALEDATE: '06-07',
			OUTPRC: 9.3,
			SALPRC: 7.61,
		},
		{
			SALEDATE: '06-08',
			OUTPRC: 16.98,
			SALPRC: 6.44,
		},
		{
			SALEDATE: '06-09',
			OUTPRC: 2.15,
			SALPRC: 7.13,
		},
		{
			SALEDATE: '06-10',
			OUTPRC: 1.72,
			SALPRC: 4.8,
		},
		{
			SALEDATE: '06-11',
			OUTPRC: 2.41,
			SALPRC: 1.34,
		},
		{
			SALEDATE: '06-12',
			OUTPRC: 0.1,
			SALPRC: 0.58,
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getRsPur', {
	code: 1,
	data: {
		appNotpick2: 91,
		lotUnlock1: 0,
		purNotin1: 14,
		purNotpos2: 100,
		appNotpick1: 9,
		lotUnlock2: 100,
		purNotin2: 86,
		purNotpos1: 0,
	},
	msg: '查询成功',
});

Mock.mock('srceenRest/getRsApp', {
	code: 1,
	data: {
		appNotin2: 100,
		appNotout2: 100,
		lotOnroad1: 0,
		appNotpos1: 0,
		appNotin1: 0,
		lotOnroad2: 100,
		appNotpos2: 100,
		appNotout1: 0,
	},
	msg: '查询成功',
});

Mock.mock('srceenRest/getNumInfo', {
	code: 1,
	data: {
		pur002: 0,
		pur001: 0,
		app001: 7,
		expenddateWare: 2,
		expenddateLic: 0,
	},
	msg: '查询成功',
});

Mock.mock('srceenRest/getMid', {
	code: 1,
	data: [
		{
			HEADMSG: '介入科',
			MIDMSG1: '32个',
			MIDMSG2: '0.27万',
			MIDMSG3: '5个',
			ENDMSG: '0.05万',
		},
		{
			HEADMSG: '疼痛科门诊',
			MIDMSG1: '5个',
			MIDMSG2: '0.2万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '功能科',
			MIDMSG1: '6个',
			MIDMSG2: '0.09万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '供应室',
			MIDMSG1: '10个',
			MIDMSG2: '0.06万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '住院麻醉科',
			MIDMSG1: '33个',
			MIDMSG2: '0.12万',
			MIDMSG3: '7个',
			ENDMSG: '0.84万',
		},
		{
			HEADMSG: '产科一门诊',
			MIDMSG1: '1个',
			MIDMSG2: '0万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '眼科门诊',
			MIDMSG1: '6个',
			MIDMSG2: '0.11万',
			MIDMSG3: '5个',
			ENDMSG: '0.01万',
		},
		{
			HEADMSG: '耳鼻喉科',
			MIDMSG1: '5个',
			MIDMSG2: '0.04万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '口腔科门诊',
			MIDMSG1: '21个',
			MIDMSG2: '0.49万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '治未病中心',
			MIDMSG1: '1个',
			MIDMSG2: '0.02万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '职工食堂',
			MIDMSG1: '3个',
			MIDMSG2: '0.27万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '心血管科2门诊',
			MIDMSG1: '3个',
			MIDMSG2: '0.01万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '血透病区',
			MIDMSG1: '16个',
			MIDMSG2: '0.43万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '住院手术室',
			MIDMSG1: '117个',
			MIDMSG2: '1.02万',
			MIDMSG3: '73个',
			ENDMSG: '10.52万',
		},
		{
			HEADMSG: '检验科',
			MIDMSG1: '83个',
			MIDMSG2: '3.86万',
			MIDMSG3: '18个',
			ENDMSG: '11.2万',
		},
		{
			HEADMSG: '电子胃镜室',
			MIDMSG1: '15个',
			MIDMSG2: '0.18万',
			MIDMSG3: '7个',
			ENDMSG: '1.33万',
		},
		{
			HEADMSG: '放射科',
			MIDMSG1: '9个',
			MIDMSG2: '1.08万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '卫生材料房',
			MIDMSG1: '19个',
			MIDMSG2: '0.1万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '疼痛科',
			MIDMSG1: '32个',
			MIDMSG2: '0.7万',
			MIDMSG3: '8个',
			ENDMSG: '0.04万',
		},
		{
			HEADMSG: '儿科',
			MIDMSG1: '25个',
			MIDMSG2: '0.44万',
			MIDMSG3: '26个',
			ENDMSG: '0.5万',
		},
		{
			HEADMSG: '肾病风湿科',
			MIDMSG1: '11个',
			MIDMSG2: '0.12万',
			MIDMSG3: '16个',
			ENDMSG: '0.58万',
		},
		{
			HEADMSG: '妇产科',
			MIDMSG1: '33个',
			MIDMSG2: '0.62万',
			MIDMSG3: '6个',
			ENDMSG: '0.04万',
		},
		{
			HEADMSG: '眼一科',
			MIDMSG1: '48个',
			MIDMSG2: '0.43万',
			MIDMSG3: '12个',
			ENDMSG: '1.18万',
		},
		{
			HEADMSG: '糖尿病科',
			MIDMSG1: '31个',
			MIDMSG2: '0.53万',
			MIDMSG3: '16个',
			ENDMSG: '0.71万',
		},
		{
			HEADMSG: '脑病科',
			MIDMSG1: '5个',
			MIDMSG2: '0.1万',
			MIDMSG3: '16个',
			ENDMSG: '0.3万',
		},
		{
			HEADMSG: 'ICU2',
			MIDMSG1: '40个',
			MIDMSG2: '0.19万',
			MIDMSG3: '61个',
			ENDMSG: '3.19万',
		},
		{
			HEADMSG: '针灸科',
			MIDMSG1: '19个',
			MIDMSG2: '0.93万',
			MIDMSG3: '3个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '肺病科',
			MIDMSG1: '13个',
			MIDMSG2: '0.01万',
			MIDMSG3: '28个',
			ENDMSG: '0.8万',
		},
		{
			HEADMSG: 'ICU病区',
			MIDMSG1: '3个',
			MIDMSG2: '2.07万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '骨一科',
			MIDMSG1: '52个',
			MIDMSG2: '1.19万',
			MIDMSG3: '22个',
			ENDMSG: '1.66万',
		},
		{
			HEADMSG: '外一科',
			MIDMSG1: '9个',
			MIDMSG2: '0.08万',
			MIDMSG3: '3个',
			ENDMSG: '0.22万',
		},
		{
			HEADMSG: '肛肠耳鼻喉',
			MIDMSG1: '16个',
			MIDMSG2: '0.17万',
			MIDMSG3: '15个',
			ENDMSG: '0.18万',
		},
		{
			HEADMSG: '心血管科',
			MIDMSG1: '40个',
			MIDMSG2: '1.2万',
			MIDMSG3: '27个',
			ENDMSG: '0.29万',
		},
		{
			HEADMSG: '门急诊病区',
			MIDMSG1: '1个',
			MIDMSG2: '0万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '急诊科',
			MIDMSG1: '31个',
			MIDMSG2: '0.86万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '康复科',
			MIDMSG1: '1个',
			MIDMSG2: '0万',
			MIDMSG3: '3个',
			ENDMSG: '0.02万',
		},
		{
			HEADMSG: '介入治疗室',
			MIDMSG1: '150个',
			MIDMSG2: '0.61万',
			MIDMSG3: '41个',
			ENDMSG: '7.28万',
		},
		{
			HEADMSG: '输血科',
			MIDMSG1: '17个',
			MIDMSG2: '0.01万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '科教科',
			MIDMSG1: '1个',
			MIDMSG2: '0.01万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '骨二科',
			MIDMSG1: '24个',
			MIDMSG2: '0.12万',
			MIDMSG3: '46个',
			ENDMSG: '2.93万',
		},
		{
			HEADMSG: '中医特色护理门诊',
			MIDMSG1: '1个',
			MIDMSG2: '0.04万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '外二科',
			MIDMSG1: '18个',
			MIDMSG2: '0.14万',
			MIDMSG3: '29个',
			ENDMSG: '0.56万',
		},
		{
			HEADMSG: '外三科',
			MIDMSG1: '7个',
			MIDMSG2: '0.03万',
			MIDMSG3: '24个',
			ENDMSG: '0.49万',
		},
		{
			HEADMSG: '脾胃肝病科',
			MIDMSG1: '20个',
			MIDMSG2: '0.69万',
			MIDMSG3: '17个',
			ENDMSG: '0.35万',
		},
		{
			HEADMSG: '老年病科',
			MIDMSG1: '41个',
			MIDMSG2: '0.68万',
			MIDMSG3: '28个',
			ENDMSG: '0.39万',
		},
		{
			HEADMSG: '肿瘤血液科',
			MIDMSG1: '31个',
			MIDMSG2: '0.84万',
			MIDMSG3: '6个',
			ENDMSG: '0.08万',
		},
		{
			HEADMSG: '体检中心',
			MIDMSG1: '4个',
			MIDMSG2: '0.28万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
		{
			HEADMSG: '门诊科室',
			MIDMSG1: '1个',
			MIDMSG2: '0万',
			MIDMSG3: '0个',
			ENDMSG: '0万',
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getInout', {
	code: 1,
	data: [
		{
			YEARMONTH: '2023-01',
			INPRC: 123.27,
			OUTPRC: 53.29,
		},
		{
			YEARMONTH: '2023-02',
			INPRC: 196.66,
			OUTPRC: 77.64,
		},
		{
			YEARMONTH: '2023-03',
			INPRC: 159.27,
			OUTPRC: 151.45,
		},
		{
			YEARMONTH: '2023-04',
			INPRC: 292.73,
			OUTPRC: 191.04,
		},
		{
			YEARMONTH: '2023-05',
			INPRC: 339.94,
			OUTPRC: 197.71,
		},
		{
			YEARMONTH: '2023-06',
			INPRC: 146.22,
			OUTPRC: 64.68,
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getInMonth', {
	code: 1,
	data: [
		{
			TYPENAME: '外科耗材',
			INPRC: 31.91,
		},
		{
			TYPENAME: '体外循环及血液净化类耗材',
			INPRC: 4.34,
		},
		{
			TYPENAME: '防控物资',
			INPRC: 1.12,
		},
		{
			TYPENAME: '基础卫生材料',
			INPRC: 25.53,
		},
		{
			TYPENAME: '血管介入类',
			INPRC: 36.86,
		},
		{
			TYPENAME: '麻醉科耗材',
			INPRC: 9.28,
		},
		{
			TYPENAME: '功能性敷料',
			INPRC: 7.06,
		},
		{
			TYPENAME: '眼科耗材',
			INPRC: 3.82,
		},
		{
			TYPENAME: '非血管介入类耗材',
			INPRC: 9.13,
		},
		{
			TYPENAME: '消毒类',
			INPRC: 0.77,
		},
		{
			TYPENAME: '检验试剂',
			INPRC: 16.37,
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getOutMonth', {
	code: 1,
	data: [
		{
			TYPENAME: '外科耗材',
			OUTPRC: 21.52,
		},
		{
			TYPENAME: '吻合器耗材',
			OUTPRC: 2.13,
		},
		{
			TYPENAME: '体外循环及血液净化类耗材',
			OUTPRC: 0.62,
		},
		{
			TYPENAME: '防控物资',
			OUTPRC: 0.09,
		},
		{
			TYPENAME: '基础卫生材料',
			OUTPRC: 13.13,
		},
		{
			TYPENAME: '血管介入类',
			OUTPRC: 4.03,
		},
		{
			TYPENAME: '麻醉科耗材',
			OUTPRC: 1.5,
		},
		{
			TYPENAME: '功能性敷料',
			OUTPRC: 0.42,
		},
		{
			TYPENAME: '非血管介入类耗材',
			OUTPRC: 1.9,
		},
		{
			TYPENAME: '眼科耗材',
			OUTPRC: 1.26,
		},
		{
			TYPENAME: '消毒类',
			OUTPRC: 0.01,
		},
		{
			TYPENAME: '检验试剂',
			OUTPRC: 18.01,
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getSalUpTop', {
	code: 1,
	data: [
		{
			PERRATE: 100,
			GOODNAME: '积水医疗 CP 血凝杯',
			// GOODNAME: '积水医疗 CP 2000/3000血凝杯',
		},
		{
			PERRATE: 100,
			GOODNAME: 'STAR导电加样尖',
		},
		{
			PERRATE: 100,
			GOODNAME: '一次性医用橡胶检查手套',
			// GOODNAME: '一次性使用医用橡胶检查手套',
		},
		{
			PERRATE: 86,
			GOODNAME: '动静脉留置针',
		},
		{
			PERRATE: 74,
			GOODNAME: '一次性使用鼻氧管',
		},
		{
			PERRATE: 66,
			GOODNAME: '针灸针',
		},
		{
			PERRATE: 54,
			GOODNAME: '一次性使用心电电极',
		},
		{
			PERRATE: 50,
			GOODNAME: '一次性使用中单',
		},
		{
			PERRATE: 45.5,
			GOODNAME: '定制式活动义齿',
		},
		{
			PERRATE: 22.5,
			GOODNAME: '无菌粘贴手术膜',
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getSalDownTop', {
	code: 1,
	data: [
		{
			PERRATE: -100,
			GOODNAME: '血气测定试剂盒GEM',
			// GOODNAME: '血气测定试剂盒（电极法）GEM Premier 3000 PAK',
		},
		{
			PERRATE: -100,
			GOODNAME: '促甲状腺素测定试剂盒',
			// GOODNAME: '促甲状腺素测定试剂盒（直接化学发光法）',
		},
		{
			PERRATE: -100,
			GOODNAME: 'C肽校准液',
		},
		{
			PERRATE: -100,
			GOODNAME: '冷敷凝胶',
		},
		{
			PERRATE: -100,
			GOODNAME: '液体伤口敷料',
		},
		{
			PERRATE: -100,
			GOODNAME: '类风湿因子(RF)检测试剂盒',
			// GOODNAME: '类风湿因子（RF)检测试剂盒（免疫散射比浊法）',
		},
		{
			PERRATE: -100,
			GOODNAME: '巧克力琼脂培养基',
		},
		{
			PERRATE: -100,
			GOODNAME: 'SS琼脂培养基（培养法）',
		},
		{
			PERRATE: -100,
			GOODNAME: '尿微量白蛋白测定试剂盒',
			// GOODNAME: '尿微量白蛋白测定试剂盒（免疫比浊法）',
		},
		{
			PERRATE: -100,
			GOODNAME: '碱性磷酸酶测定试剂盒',
			// GOODNAME: '碱性磷酸酶测定试剂盒(NPP底物-AMP缓冲液法)',
		},
	],
	msg: '查询成功',
});

Mock.mock('srceenRest/getBarDay', {
	code: 1,
	data: {
		typeNum2: 0,
		totalNum: 19,
		typeNum1: 19,
	},
	msg: '查询成功',
});
