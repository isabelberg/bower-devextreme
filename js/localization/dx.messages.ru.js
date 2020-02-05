/*!
* DevExtreme (dx.messages.ru.js)
* Version: 19.1.9 (build 20036-0309)
* Build date: Wed Feb 05 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        ru: {
            Yes: "\u0414\u0430",
            No: "\u041d\u0435\u0442",
            Cancel: "\u041e\u0442\u043c\u0435\u043d\u0430",
            Clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
            Done: "\u0413\u043e\u0442\u043e\u0432\u043e",
            Loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",
            Select: "\u0412\u044b\u0431\u0440\u0430\u0442\u044c...",
            Search: "\u041f\u043e\u0438\u0441\u043a",
            Back: "\u041d\u0430\u0437\u0430\u0434",
            OK: "OK",
            "dxCollectionWidget-noDataText": "\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
            "dxDropDownEditor-selectLabel": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c",
            "validation-required": "\u041f\u043e\u043b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c",
            "validation-required-formatted": "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c: {0}",
            "validation-numeric": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c",
            "validation-numeric-formatted": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f {0} \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c",
            "validation-range": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u043d\u0435 \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d",
            "validation-range-formatted": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f {0} \u043d\u0435 \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d",
            "validation-stringLength": "\u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043f\u043e\u043b\u0435",
            "validation-stringLength-formatted": "\u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043f\u043e\u043b\u0435 {0}",
            "validation-custom": "\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",
            "validation-custom-formatted": "\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: {0}",
            "validation-compare": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0443.",
            "validation-compare-formatted": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f {0} \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442",
            "validation-pattern": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\u0443",
            "validation-pattern-formatted": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f {0} \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\u0443",
            "validation-email": "\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 email",
            "validation-email-formatted": "\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438e {0}",
            "validation-mask": "\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",
            "dxLookup-searchPlaceholder": "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432: {0}",
            "dxList-pullingDownText": "\u041f\u043e\u0442\u044f\u043d\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c...",
            "dxList-pulledDownText": "\u041e\u0442\u043f\u0443\u0441\u0442\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c...",
            "dxList-refreshingText": "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435...",
            "dxList-pageLoadingText": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",
            "dxList-nextButtonText": "\u0414\u0430\u043b\u0435\u0435",
            "dxList-selectAll": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435",
            "dxListEditDecorator-delete": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
            "dxListEditDecorator-more": "\u0415\u0449\u0435",
            "dxScrollView-pullingDownText": "\u041f\u043e\u0442\u044f\u043d\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c...",
            "dxScrollView-pulledDownText": "\u041e\u0442\u043f\u0443\u0441\u0442\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c...",
            "dxScrollView-refreshingText": "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435...",
            "dxScrollView-reachBottomText": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",
            "dxDateBox-simulatedDataPickerTitleTime": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f",
            "dxDateBox-simulatedDataPickerTitleDate": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",
            "dxDateBox-simulatedDataPickerTitleDateTime": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043c\u044f",
            "dxDateBox-validation-datetime": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u0430\u0442\u043e\u0439/\u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c",
            "dxFileUploader-selectFile": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b",
            "dxFileUploader-dropFile": "\u0438\u043b\u0438 \u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043b \u0441\u044e\u0434\u0430",
            "dxFileUploader-bytes": "\u0431\u0430\u0439\u0442",
            "dxFileUploader-kb": "\u043a\u0411",
            "dxFileUploader-Mb": "\u041c\u0411",
            "dxFileUploader-Gb": "\u0413\u0411",
            "dxFileUploader-upload": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c",
            "dxFileUploader-uploaded": "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e",
            "dxFileUploader-readyToUpload": "\u0413\u043e\u0442\u043e\u0432\u043e \u043a \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435",
            "dxFileUploader-uploadFailedMessage": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c",
            "dxFileUploader-invalidFileExtension": "\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430",
            "dxFileUploader-invalidMaxFileSize": "\u0424\u0430\u0439\u043b \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0439",
            "dxFileUploader-invalidMinFileSize": "\u0424\u0430\u0439\u043b \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439",
            "dxRangeSlider-ariaFrom": "\u041e\u0442",
            "dxRangeSlider-ariaTill": "\u0414\u043e",
            "dxSwitch-switchedOnText": "\u0412\u041a\u041b",
            "dxSwitch-switchedOffText": "\u0412\u042b\u041a\u041b",
            "dxForm-optionalMark": "\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439",
            "dxForm-requiredMessage": " \u041f\u043e\u043b\u0435 {0} \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e",
            "dxNumberBox-invalidValueMessage": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c",
            "dxNumberBox-noDataText": "\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",
            "dxDataGrid-columnChooserTitle": "\u0412\u044b\u0431\u043e\u0440 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432",
            "dxDataGrid-columnChooserEmptyText": "\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u044e\u0434\u0430, \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0440\u044b\u0442\u044c \u0435\u0433\u043e",
            "dxDataGrid-groupContinuesMessage": "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",
            "dxDataGrid-groupContinuedMessage": "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",
            "dxDataGrid-groupHeaderText": "\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u0441\u0442\u043e\u043b\u0431\u0446\u0443",
            "dxDataGrid-ungroupHeaderText": "\u0420\u0430\u0437\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u0441\u0442\u043e\u043b\u0431\u0446\u0443",
            "dxDataGrid-ungroupAllText": "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
            "dxDataGrid-editingEditRow": "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
            "dxDataGrid-editingSaveRowChanges": "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
            "dxDataGrid-editingCancelRowChanges": "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",
            "dxDataGrid-editingDeleteRow": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
            "dxDataGrid-editingUndeleteRow": "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
            "dxDataGrid-editingConfirmDeleteMessage": "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u0437\u0430\u043f\u0438\u0441\u044c?",
            "dxDataGrid-validationCancelChanges": "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",
            "dxDataGrid-groupPanelEmptyText": "\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u044e\u0434\u0430, \u0447\u0442\u043e\u0431\u044b \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u043d\u0435\u043c\u0443",
            "dxDataGrid-noDataText": "\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",
            "dxDataGrid-searchPanelPlaceholder": "\u0418\u0441\u043a\u0430\u0442\u044c...",
            "dxDataGrid-filterRowShowAllText": "(\u0412\u0441\u0435)",
            "dxDataGrid-filterRowResetOperationText": "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c",
            "dxDataGrid-filterRowOperationEquals": "\u0420\u0430\u0432\u043d\u043e",
            "dxDataGrid-filterRowOperationNotEquals": "\u041d\u0435 \u0440\u0430\u0432\u043d\u043e",
            "dxDataGrid-filterRowOperationLess": "\u041c\u0435\u043d\u044c\u0448\u0435",
            "dxDataGrid-filterRowOperationLessOrEquals": "\u041c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e",
            "dxDataGrid-filterRowOperationGreater": "\u0411\u043e\u043b\u044c\u0448\u0435",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e",
            "dxDataGrid-filterRowOperationStartsWith": "\u041d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441",
            "dxDataGrid-filterRowOperationContains": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442",
            "dxDataGrid-filterRowOperationNotContains": "\u041d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442",
            "dxDataGrid-filterRowOperationEndsWith": "\u0417\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430",
            "dxDataGrid-filterRowOperationBetween": "\u0412 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435",
            "dxDataGrid-filterRowOperationBetweenStartText": "\u041d\u0430\u0447\u0430\u043b\u043e",
            "dxDataGrid-filterRowOperationBetweenEndText": "\u041a\u043e\u043d\u0435\u0446",
            "dxDataGrid-applyFilterText": "\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440",
            "dxDataGrid-trueText": "\u0414\u0430",
            "dxDataGrid-falseText": "\u041d\u0435\u0442",
            "dxDataGrid-sortingAscendingText": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e",
            "dxDataGrid-sortingDescendingText": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",
            "dxDataGrid-sortingClearText": "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443",
            "dxDataGrid-editingSaveAllChanges": "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",
            "dxDataGrid-editingCancelAllChanges": "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",
            "dxDataGrid-editingAddRow": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443",
            "dxDataGrid-summaryMin": "\u041c\u0438\u043d: {0}",
            "dxDataGrid-summaryMinOtherColumn": "\u041c\u0438\u043d \u043f\u043e {1} : {0}",
            "dxDataGrid-summaryMax": "\u041c\u0430\u043a\u0441: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "\u041c\u0430\u043a\u0441 \u043f\u043e {1} : {0}",
            "dxDataGrid-summaryAvg": "\u0421\u0440\u0437\u043d\u0430\u0447: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "\u0421\u0440\u0437\u043d\u0430\u0447 \u043f\u043e {1} : {0}",
            "dxDataGrid-summarySum": "\u0421\u0443\u043c\u043c: {0}",
            "dxDataGrid-summarySumOtherColumn": "\u0421\u0443\u043c\u043c \u043f\u043e {1} : {0}",
            "dxDataGrid-summaryCount": "\u041a\u043e\u043b-\u0432\u043e: {0}",
            "dxDataGrid-columnFixingFix": "\u0417\u0430\u043a\u0440\u0435\u043f\u0438\u0442\u044c",
            "dxDataGrid-columnFixingUnfix": "\u041e\u0442\u043a\u0440\u0435\u043f\u0438\u0442\u044c",
            "dxDataGrid-columnFixingLeftPosition": "\u041d\u0430\u043b\u0435\u0432\u043e",
            "dxDataGrid-columnFixingRightPosition": "\u041d\u0430\u043f\u0440\u0430\u0432\u043e",
            "dxDataGrid-exportTo": "\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
            "dxDataGrid-exportToExcel": "\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 Excel \u0444\u0430\u0439\u043b",
            "dxDataGrid-exporting": "\u042d\u043a\u0441\u043f\u043e\u0440\u0442...",
            "dxDataGrid-excelFormat": "Excel \u0444\u0430\u0439\u043b",
            "dxDataGrid-selectedRows": "\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438",
            "dxDataGrid-exportAll": "\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0451",
            "dxDataGrid-exportSelectedRows": "\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438",
            "dxDataGrid-headerFilterEmptyValue": "(\u041f\u0443\u0441\u0442\u043e\u0435)",
            "dxDataGrid-headerFilterOK": "\u041e\u041a",
            "dxDataGrid-headerFilterCancel": "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",
            "dxDataGrid-ariaColumn": "\u0421\u0442\u043e\u043b\u0431\u0435\u0446",
            "dxDataGrid-ariaValue": "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435",
            "dxDataGrid-ariaFilterCell": "\u0424\u0438\u043b\u044c\u0442\u0440",
            "dxDataGrid-ariaCollapse": "\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c",
            "dxDataGrid-ariaExpand": "\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c",
            "dxDataGrid-ariaDataGrid": "\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",
            "dxDataGrid-ariaSearchInGrid": "\u0418\u0441\u043a\u0430\u0442\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",
            "dxDataGrid-ariaSelectAll": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0451",
            "dxDataGrid-ariaSelectRow": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443",
            "dxDataGrid-filterBuilderPopupTitle": "\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u0444\u0438\u043b\u044c\u0442\u0440\u0430",
            "dxDataGrid-filterPanelCreateFilter": "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440",
            "dxDataGrid-filterPanelClearFilter": "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
            "dxDataGrid-filterPanelFilterEnabledHint": "\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440",
            "dxTreeList-ariaTreeList": "\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",
            "dxTreeList-editingAddRowToNode": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",
            "dxPager-infoText": "\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 {0} \u0438\u0437 {1} (\u0412\u0441\u0435\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432: {2})",
            "dxPager-pagesCountText": "\u0438\u0437",
            "dxPivotGrid-grandTotal": "\u0418\u0442\u043e\u0433\u043e",
            "dxPivotGrid-total": "{0} \u0412\u0441\u0435\u0433\u043e",
            "dxPivotGrid-fieldChooserTitle": "\u0412\u044b\u0431\u043e\u0440 \u043f\u043e\u043b\u0435\u0439",
            "dxPivotGrid-showFieldChooser": "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u044b\u0431\u043e\u0440 \u043f\u043e\u043b\u0435\u0439",
            "dxPivotGrid-expandAll": "\u0420\u0430\u0441\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u0435",
            "dxPivotGrid-collapseAll": "\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432\u0441\u0435",
            "dxPivotGrid-sortColumnBySummary": '\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c "{0}" \u043f\u043e \u044d\u0442\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043a\u0435',
            "dxPivotGrid-sortRowBySummary": '\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c "{0}" \u043f\u043e \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435',
            "dxPivotGrid-removeAllSorting": "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",
            "dxPivotGrid-dataNotAvailable": "\u041d/\u0414",
            "dxPivotGrid-rowFields": "\u041f\u043e\u043b\u044f \u0441\u0442\u0440\u043e\u043a",
            "dxPivotGrid-columnFields": "\u041f\u043e\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432",
            "dxPivotGrid-dataFields": "\u041f\u043e\u043b\u044f \u0434\u0430\u043d\u043d\u044b\u0445",
            "dxPivotGrid-filterFields": "\u041f\u043e\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432",
            "dxPivotGrid-allFields": "\u0412\u0441\u0435 \u043f\u043e\u043b\u044f",
            "dxPivotGrid-columnFieldArea": "\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043f\u043e\u043b\u044f \u043a\u043e\u043b\u043e\u043d\u043e\u043a c\u044e\u0434\u0430",
            "dxPivotGrid-dataFieldArea": "\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043f\u043e\u043b\u044f \u0434\u0430\u043d\u043d\u044b\u0445 c\u044e\u0434\u0430",
            "dxPivotGrid-rowFieldArea": "\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043f\u043e\u043b\u044f \u0441\u0442\u0440\u043e\u043a c\u044e\u0434\u0430",
            "dxPivotGrid-filterFieldArea": "\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043f\u043e\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 c\u044e\u0434\u0430",
            "dxScheduler-editorLabelTitle": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
            "dxScheduler-editorLabelStartDate": "\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",
            "dxScheduler-editorLabelEndDate": "\u0414\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f",
            "dxScheduler-editorLabelDescription": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
            "dxScheduler-editorLabelRecurrence": "\u041f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0435",
            "dxScheduler-openAppointment": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",
            "dxScheduler-recurrenceNever": "\u041d\u0438\u043a\u043e\u0433\u0434\u0430",
            "dxScheduler-recurrenceDaily": "\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e",
            "dxScheduler-recurrenceWeekly": "\u0415\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e",
            "dxScheduler-recurrenceMonthly": "\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e",
            "dxScheduler-recurrenceYearly": "\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u043e",
            "dxScheduler-recurrenceRepeatEvery": "\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b",
            "dxScheduler-recurrenceRepeatOn": "\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u043f\u043e",
            "dxScheduler-recurrenceEnd": "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0435",
            "dxScheduler-recurrenceAfter": "\u041f\u043e\u0441\u043b\u0435",
            "dxScheduler-recurrenceOn": "\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0434\u043e",
            "dxScheduler-recurrenceRepeatDaily": "\u0434\u043d\u0435\u0439(\u0434\u043d\u044f)",
            "dxScheduler-recurrenceRepeatWeekly": "\u043d\u0435\u0434\u0435\u043b\u0438(\u043d\u0435\u0434\u0435\u043b\u044c)",
            "dxScheduler-recurrenceRepeatMonthly": "\u043c\u0435\u0441\u044f\u0446\u0430(\u043c\u0435\u0441\u044f\u0446\u0435\u0432)",
            "dxScheduler-recurrenceRepeatYearly": "\u0433\u043e\u0434\u0430(\u043b\u0435\u0442)",
            "dxScheduler-recurrenceRepeatOnDate": "\u0434\u043e \u0434\u0430\u0442\u044b",
            "dxScheduler-recurrenceRepeatCount": "\u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439",
            "dxScheduler-switcherDay": "\u0414\u0435\u043d\u044c",
            "dxScheduler-switcherWeek": "\u041d\u0435\u0434\u0435\u043b\u044f",
            "dxScheduler-switcherWorkWeek": "\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f",
            "dxScheduler-switcherMonth": "\u041c\u0435\u0441\u044f\u0446",
            "dxScheduler-switcherTimelineDay": "\u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u0434\u043d\u044f",
            "dxScheduler-switcherTimelineWeek": "\u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u043d\u0435\u0434\u0435\u043b\u0438",
            "dxScheduler-switcherTimelineWorkWeek": "\u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0438",
            "dxScheduler-switcherTimelineMonth": "\u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u043c\u0435\u0441\u044f\u0446\u0430",
            "dxScheduler-switcherAgenda": "\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
            "dxScheduler-allDay": "\u0412\u0435\u0441\u044c \u0434\u0435\u043d\u044c",
            "dxScheduler-confirmRecurrenceEditMessage": "\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0438\u043b\u0438 \u0432\u0441\u044e \u0441\u0435\u0440\u0438\u044e?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0438\u043b\u0438 \u0432\u0441\u044e \u0441\u0435\u0440\u0438\u044e?",
            "dxScheduler-confirmRecurrenceEditSeries": "\u0412\u0441\u044e \u0441\u0435\u0440\u0438\u044e",
            "dxScheduler-confirmRecurrenceDeleteSeries": "\u0412\u0441\u044e \u0441\u0435\u0440\u0438\u044e",
            "dxScheduler-confirmRecurrenceEditOccurrence": "\u0422\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0435",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "\u0422\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0435",
            "dxScheduler-noTimezoneTitle": "\u0427\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",
            "dxScheduler-moreAppointments": "\u0438 \u0435\u0449\u0435 {0}",
            "dxCalendar-todayButtonText": "\u0421\u0435\u0433\u043e\u0434\u043d\u044f",
            "dxCalendar-ariaWidgetName": "\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c",
            "dxColorView-ariaRed": "\u041a\u0440\u0430\u0441\u043d\u044b\u0439",
            "dxColorView-ariaGreen": "\u0417\u0435\u043b\u0435\u043d\u044b\u0439",
            "dxColorView-ariaBlue": "\u0421\u0438\u043d\u0438\u0439",
            "dxColorView-ariaAlpha": "\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c",
            "dxColorView-ariaHex": "\u041a\u043e\u0434 \u0446\u0432\u0435\u0442\u0430",
            "dxTagBox-selected": "{0} \u0432\u044b\u0431\u0440\u0430\u043d\u043e",
            "dxTagBox-allSelected": "\u0412\u044b\u0431\u0440\u0430\u043d\u043e \u0432\u0441\u0435 ({0})",
            "dxTagBox-moreSelected": "\u0438 \u0435\u0449\u0435 {0}",
            "vizExport-printingButtonText": "\u041f\u0435\u0447\u0430\u0442\u044c",
            "vizExport-titleMenuText": "\u042d\u043a\u0441\u043f\u043e\u0440\u0442/\u041f\u0435\u0447\u0430\u0442\u044c",
            "vizExport-exportButtonText": "{0} \u0444\u0430\u0439\u043b",
            "dxFilterBuilder-and": "\u0418",
            "dxFilterBuilder-or": "\u0418\u043b\u0438",
            "dxFilterBuilder-notAnd": "\u041d\u0435 \u0418",
            "dxFilterBuilder-notOr": "\u041d\u0435 \u0418\u043b\u0438",
            "dxFilterBuilder-addCondition": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435",
            "dxFilterBuilder-addGroup": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443",
            "dxFilterBuilder-enterValueText": "<\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435>",
            "dxFilterBuilder-filterOperationEquals": "\u0420\u0430\u0432\u043d\u043e",
            "dxFilterBuilder-filterOperationNotEquals": "\u041d\u0435 \u0440\u0430\u0432\u043d\u043e",
            "dxFilterBuilder-filterOperationLess": "\u041c\u0435\u043d\u044c\u0448\u0435",
            "dxFilterBuilder-filterOperationLessOrEquals": "\u041c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e",
            "dxFilterBuilder-filterOperationGreater": "\u0411\u043e\u043b\u044c\u0448\u0435",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e",
            "dxFilterBuilder-filterOperationStartsWith": "\u041d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441",
            "dxFilterBuilder-filterOperationContains": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442",
            "dxFilterBuilder-filterOperationNotContains": "\u041d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442",
            "dxFilterBuilder-filterOperationEndsWith": "\u0417\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430",
            "dxFilterBuilder-filterOperationIsBlank": "\u041f\u0443\u0441\u0442\u043e",
            "dxFilterBuilder-filterOperationIsNotBlank": "\u041d\u0435 \u043f\u0443\u0441\u0442\u043e",
            "dxFilterBuilder-filterOperationBetween": "\u0412 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435",
            "dxFilterBuilder-filterOperationAnyOf": "\u041b\u044e\u0431\u043e\u0439 \u0438\u0437",
            "dxFilterBuilder-filterOperationNoneOf": "\u041d\u0438 \u043e\u0434\u0438\u043d \u0438\u0437",
            "dxHtmlEditor-dialogColorCaption": "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0446\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430",
            "dxHtmlEditor-dialogBackgroundCaption": "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0446\u0432\u0435\u0442 \u0444\u043e\u043d\u0430",
            "dxHtmlEditor-dialogLinkCaption": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "\u0422\u0435\u043a\u0441\u0442",
            "dxHtmlEditor-dialogLinkTargetField": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435",
            "dxHtmlEditor-dialogImageCaption": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",
            "dxHtmlEditor-dialogImageWidthField": "\u0428\u0438\u0440\u0438\u043d\u0430 (px)",
            "dxHtmlEditor-dialogImageHeightField": "\u0412\u044b\u0441\u043e\u0442\u0430 (px)",
            "dxHtmlEditor-heading": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",
            "dxHtmlEditor-normalText": "\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",
            "dxFileManager-newFolder": "\u0411\u0435\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f",
            "dxFileManager-errorNoAccess": "\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u043f\u0440\u0435\u0449\u0451\u043d. \u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430.",
            "dxFileManager-errorDirectoryExistsFormat": "\u041a\u0430\u0442\u0430\u043b\u043e\u0433 {0} \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.",
            "dxFileManager-errorFileExistsFormat": "\u0424\u0430\u0439\u043b {0} \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.",
            "dxFileManager-errorFileNotFoundFormat": "\u0424\u0430\u0439\u043b {0} \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d.",
            "dxFileManager-errorDefault": "\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"
        }
    })
});
