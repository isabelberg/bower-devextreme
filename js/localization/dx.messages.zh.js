/*!
* DevExtreme (dx.messages.zh.js)
* Version: 18.1.4
* Build date: Tue Jun 19 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        factory(DevExpress.localization)
    }
}(this, function(localization) {
    localization.loadMessages({
        zh: {
            Yes: "是",
            No: "否",
            Cancel: "取消",
            Clear: "清除",
            Done: "完成",
            Loading: "正在加载...",
            Select: "选择...",
            Search: "搜索",
            Back: "返回",
            OK: "确定",
            "dxCollectionWidget-noDataText": "没有要显示的数据",
            "validation-required": "必需",
            "validation-required-formatted": "{0} 是必需的",
            "validation-numeric": "值必须是一个数字",
            "validation-numeric-formatted": "{0} 必须是一个数字",
            "validation-range": "值超出范围",
            "validation-range-formatted": "{0} 超出范围",
            "validation-stringLength": "该值的长度不正确",
            "validation-stringLength-formatted": "{0} 的长度不正确",
            "validation-custom": "值无效",
            "validation-custom-formatted": "{0} 值无效",
            "validation-compare": "值不匹配",
            "validation-compare-formatted": "{0} 不匹配",
            "validation-pattern": "值不符合该模式",
            "validation-pattern-formatted": "{0} 不匹配该模式",
            "validation-email": "电子邮件无效",
            "validation-email-formatted": "{0} 无效",
            "validation-mask": "值无效",
            "dxLookup-searchPlaceholder": "最小字符数: {0}",
            "dxList-pullingDownText": "下拉刷新...",
            "dxList-pulledDownText": "释放刷新...",
            "dxList-refreshingText": "刷新...",
            "dxList-pageLoadingText": "正在加载...",
            "dxList-nextButtonText": "更多",
            "dxList-selectAll": "全选",
            "dxListEditDecorator-delete": "删除",
            "dxListEditDecorator-more": "更多",
            "dxScrollView-pullingDownText": "下拉刷新...",
            "dxScrollView-pulledDownText": "释放刷新...",
            "dxScrollView-refreshingText": "刷新...",
            "dxScrollView-reachBottomText": "正在加载...",
            "dxDateBox-simulatedDataPickerTitleTime": "选择时间",
            "dxDateBox-simulatedDataPickerTitleDate": "选择日期",
            "dxDateBox-simulatedDataPickerTitleDateTime": "选择日期和时间",
            "dxDateBox-validation-datetime": "值必须是日期或时间",
            "dxFileUploader-selectFile": "选择文件",
            "dxFileUploader-dropFile": "或则把文件放在这里",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "上传",
            "dxFileUploader-uploaded": "上传",
            "dxFileUploader-readyToUpload": "准备上传",
            "dxFileUploader-uploadFailedMessage": "上传失败",
            "dxRangeSlider-ariaFrom": "从",
            "dxRangeSlider-ariaTill": "至",
            "dxSwitch-onText": "开",
            "dxSwitch-offText": "关",
            "dxForm-optionalMark": "可选",
            "dxForm-requiredMessage": "{0} 是必须的",
            "dxNumberBox-invalidValueMessage": "值必须是一个数字",
            "dxDataGrid-columnChooserTitle": "列选择器",
            "dxDataGrid-columnChooserEmptyText": "在这里拖动一列隐藏它",
            "dxDataGrid-groupContinuesMessage": "下一页",
            "dxDataGrid-groupContinuedMessage": "上一页",
            "dxDataGrid-groupHeaderText": "通过这列分组",
            "dxDataGrid-ungroupHeaderText": "取消分组",
            "dxDataGrid-ungroupAllText": "取消所有分组",
            "dxDataGrid-editingEditRow": "编辑",
            "dxDataGrid-editingSaveRowChanges": "保存",
            "dxDataGrid-editingCancelRowChanges": "取消",
            "dxDataGrid-editingDeleteRow": "删除",
            "dxDataGrid-editingUndeleteRow": "取消删除",
            "dxDataGrid-editingConfirmDeleteMessage": "你确定要删除这条记录？",
            "dxDataGrid-validationCancelChanges": "取消更改",
            "dxDataGrid-groupPanelEmptyText": "拖动列标题至此进行列分组",
            "dxDataGrid-noDataText": "无数据",
            "dxDataGrid-searchPanelPlaceholder": "搜索...",
            "dxDataGrid-filterRowShowAllText": "(全部)",
            "dxDataGrid-filterRowResetOperationText": "重置",
            "dxDataGrid-filterRowOperationEquals": "等于",
            "dxDataGrid-filterRowOperationNotEquals": "不等于",
            "dxDataGrid-filterRowOperationLess": "小于",
            "dxDataGrid-filterRowOperationLessOrEquals": "小于或等于",
            "dxDataGrid-filterRowOperationGreater": "大于",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "大于或等于",
            "dxDataGrid-filterRowOperationStartsWith": "以...开始",
            "dxDataGrid-filterRowOperationContains": "包含",
            "dxDataGrid-filterRowOperationNotContains": "不包含",
            "dxDataGrid-filterRowOperationEndsWith": "结束于",
            "dxDataGrid-filterRowOperationBetween": "之间",
            "dxDataGrid-filterRowOperationBetweenStartText": "开始",
            "dxDataGrid-filterRowOperationBetweenEndText": "结束",
            "dxDataGrid-applyFilterText": "应用过滤器",
            "dxDataGrid-trueText": "真",
            "dxDataGrid-falseText": "假",
            "dxDataGrid-sortingAscendingText": "升序排序",
            "dxDataGrid-sortingDescendingText": "降序排序",
            "dxDataGrid-sortingClearText": "清除排序",
            "dxDataGrid-editingSaveAllChanges": "保存修改",
            "dxDataGrid-editingCancelAllChanges": "放弃修改",
            "dxDataGrid-editingAddRow": "添加一行",
            "dxDataGrid-summaryMin": "最小值: {0}",
            "dxDataGrid-summaryMinOtherColumn": "{1} 的最小值是 {0}",
            "dxDataGrid-summaryMax": "最大值: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "{1} 的最大值是 {0}",
            "dxDataGrid-summaryAvg": "平均值: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "{1} 的平均值是 {0}",
            "dxDataGrid-summarySum": "总和: {0}",
            "dxDataGrid-summarySumOtherColumn": "{1} 的总和是 {0}",
            "dxDataGrid-summaryCount": "计数: {0}",
            "dxDataGrid-columnFixingFix": "固定",
            "dxDataGrid-columnFixingUnfix": "不固定",
            "dxDataGrid-columnFixingLeftPosition": "向左",
            "dxDataGrid-columnFixingRightPosition": "向右",
            "dxDataGrid-exportTo": "导出",
            "dxDataGrid-exportToExcel": "导出Excel文件",
            "dxDataGrid-excelFormat": "Excel文件",
            "dxDataGrid-selectedRows": "选中行",
            "dxDataGrid-exportSelectedRows": "导出选中行",
            "dxDataGrid-exportAll": "导出所有数据",
            "dxDataGrid-headerFilterEmptyValue": "(空白)",
            "dxDataGrid-headerFilterOK": "好",
            "dxDataGrid-headerFilterCancel": "取消",
            "dxDataGrid-ariaColumn": "列",
            "dxDataGrid-ariaValue": "值",
            "dxDataGrid-ariaFilterCell": "过滤单元",
            "dxDataGrid-ariaCollapse": "折叠",
            "dxDataGrid-ariaExpand": "展开",
            "dxDataGrid-ariaDataGrid": "数据网格",
            "dxDataGrid-ariaSearchInGrid": "在数据网格中搜索",
            "dxDataGrid-ariaSelectAll": "全选",
            "dxDataGrid-ariaSelectRow": "选择行",
            "dxDataGrid-filterBuilderPopupTitle": "过滤器生成器",
            "dxDataGrid-filterPanelCreateFilter": "创建过滤器",
            "dxDataGrid-filterPanelClearFilter": "清空",
            "dxDataGrid-filterPanelFilterEnabledHint": "启用该过滤器",
            "dxTreeList-ariaTreeList": "树列表",
            "dxTreeList-editingAddRowToNode": "添加",
            "dxPager-infoText": "第{0}页,共{1}页 ({2} 项目)",
            "dxPager-pagesCountText": "到",
            "dxPivotGrid-grandTotal": "合计",
            "dxPivotGrid-total": "{0} 总计",
            "dxPivotGrid-fieldChooserTitle": "字段选择器",
            "dxPivotGrid-showFieldChooser": "显示字段选择器",
            "dxPivotGrid-expandAll": "全部展开",
            "dxPivotGrid-collapseAll": "全部折叠",
            "dxPivotGrid-sortColumnBySummary": '按 "{0}" 列排序',
            "dxPivotGrid-sortRowBySummary": '按 "{0}" 行排序',
            "dxPivotGrid-removeAllSorting": "清除所有排序",
            "dxPivotGrid-dataNotAvailable": "不适用",
            "dxPivotGrid-rowFields": "行字段",
            "dxPivotGrid-columnFields": "列字段",
            "dxPivotGrid-dataFields": "数据字段",
            "dxPivotGrid-filterFields": "过滤字段",
            "dxPivotGrid-allFields": "所有字段",
            "dxPivotGrid-columnFieldArea": "将列拖动到此处",
            "dxPivotGrid-dataFieldArea": "将数据拖动到此处",
            "dxPivotGrid-rowFieldArea": "将行字段拖到到此次",
            "dxPivotGrid-filterFieldArea": "拖动筛选字段到此处",
            "dxScheduler-editorLabelTitle": "标题",
            "dxScheduler-editorLabelStartDate": "开始日期",
            "dxScheduler-editorLabelEndDate": "结束日期",
            "dxScheduler-editorLabelDescription": "描述",
            "dxScheduler-editorLabelRecurrence": "重复",
            "dxScheduler-openAppointment": "打开日程",
            "dxScheduler-recurrenceNever": "从不",
            "dxScheduler-recurrenceDaily": "日常",
            "dxScheduler-recurrenceWeekly": "每周",
            "dxScheduler-recurrenceMonthly": "每月",
            "dxScheduler-recurrenceYearly": "每年",
            "dxScheduler-recurrenceEvery": "一切",
            "dxScheduler-recurrenceEnd": "结束重复",
            "dxScheduler-recurrenceAfter": "之后",
            "dxScheduler-recurrenceOn": "在",
            "dxScheduler-recurrenceRepeatDaily": "日",
            "dxScheduler-recurrenceRepeatWeekly": "周",
            "dxScheduler-recurrenceRepeatMonthly": "月",
            "dxScheduler-recurrenceRepeatYearly": "年",
            "dxScheduler-switcherDay": "日",
            "dxScheduler-switcherWeek": "周",
            "dxScheduler-switcherWorkWeek": "工作周",
            "dxScheduler-switcherMonth": "月",
            "dxScheduler-switcherAgenda": "议程",
            "dxScheduler-switcherTimelineDay": "时间轴日",
            "dxScheduler-switcherTimelineWeek": "时间轴周",
            "dxScheduler-switcherTimelineWorkWeek": "时间轴工作周",
            "dxScheduler-switcherTimelineMonth": "时间轴月",
            "dxScheduler-recurrenceRepeatOnDate": "日期",
            "dxScheduler-recurrenceRepeatCount": "事件",
            "dxScheduler-allDay": "全天",
            "dxScheduler-confirmRecurrenceEditMessage": "你只想修改这个日程还是想修改这个系列的日程?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "你只想删除这个日程还是想删除这个系列的日程?",
            "dxScheduler-confirmRecurrenceEditSeries": "修改这个系列的日程",
            "dxScheduler-confirmRecurrenceDeleteSeries": "删除这个系列的日程",
            "dxScheduler-confirmRecurrenceEditOccurrence": "修改日程",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "删除日程",
            "dxScheduler-noTimezoneTitle": "没有时区",
            "dxScheduler-moreAppointments": "{0} 更多",
            "dxCalendar-todayButtonText": "今天",
            "dxCalendar-ariaWidgetName": "日历",
            "dxColorView-ariaRed": "红色",
            "dxColorView-ariaGreen": "绿色",
            "dxColorView-ariaBlue": "蓝色",
            "dxColorView-ariaAlpha": "透明度",
            "dxColorView-ariaHex": "色标",
            "dxTagBox-selected": "{0} 选择",
            "dxTagBox-allSelected": "全选 ({0})",
            "dxTagBox-moreSelected": "{0} 更多",
            "vizExport-printingButtonText": "打印",
            "vizExport-titleMenuText": "导出/打印",
            "vizExport-exportButtonText": "{0} 文件",
            "dxFilterBuilder-and": "与",
            "dxFilterBuilder-or": "或",
            "dxFilterBuilder-notAnd": "非与",
            "dxFilterBuilder-notOr": "非或",
            "dxFilterBuilder-addCondition": "添加条件",
            "dxFilterBuilder-addGroup": "添加组",
            "dxFilterBuilder-enterValueText": "<输入值>",
            "dxFilterBuilder-filterOperationEquals": "等于",
            "dxFilterBuilder-filterOperationNotEquals": "不等于",
            "dxFilterBuilder-filterOperationLess": "小于",
            "dxFilterBuilder-filterOperationLessOrEquals": "小于或等于",
            "dxFilterBuilder-filterOperationGreater": "大于",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "大于或等于",
            "dxFilterBuilder-filterOperationStartsWith": "开始于",
            "dxFilterBuilder-filterOperationContains": "包含",
            "dxFilterBuilder-filterOperationNotContains": "不包含",
            "dxFilterBuilder-filterOperationEndsWith": "结束于",
            "dxFilterBuilder-filterOperationIsBlank": "空",
            "dxFilterBuilder-filterOperationIsNotBlank": "不为空",
            "dxFilterBuilder-filterOperationBetween": "之间",
            "dxFilterBuilder-filterOperationAnyOf": "任何一个",
            "dxFilterBuilder-filterOperationNoneOf": "任何一个都不"
        }
    })
});
