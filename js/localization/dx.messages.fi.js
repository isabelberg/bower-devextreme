/*!
* DevExtreme (dx.messages.fi.js)
* Version: 18.1.7 (build 18345)
* Build date: Tue Dec 11 2018
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
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        fi: {
            Yes: "Kyllä",
            No: "Ei",
            Cancel: "Peruuta",
            Clear: "Tyhjennä",
            Done: "Valmis",
            Loading: "Ladataan...",
            Select: "Valitse...",
            Search: "Haku",
            Back: "Takaisin",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Ei näytettäviä tietoja",
            "validation-required": "Pakollinen",
            "validation-required-formatted": "{0} on pakollinen",
            "validation-numeric": "Arvon on oltava luku",
            "validation-numeric-formatted": "{0} on oltava luku",
            "validation-range": "Arvo on alueen ulkopuolella",
            "validation-range-formatted": "{0} on alueen ulkopuolella",
            "validation-stringLength": "Arvon pituus ei ole oikein",
            "validation-stringLength-formatted": "Arvolla {0} on väärä pituus",
            "validation-custom": "Arvo on virheellinen",
            "validation-custom-formatted": "{0} on virheellinen",
            "validation-compare": "Arvot eivät täsmää",
            "validation-compare-formatted": "{0} eivät täsmää",
            "validation-pattern": "Arvo ei vastaa mallia",
            "validation-pattern-formatted": "{0} ei vastaa mallia",
            "validation-email": "Sähköpostiosoite on virheellinen",
            "validation-email-formatted": "{0} on virheellinen",
            "validation-mask": "Arvo on virheellinen",
            "dxLookup-searchPlaceholder": "Merkkien vähimmäismäärä: {0}",
            "dxList-pullingDownText": "Päivitä vetämällä alas...",
            "dxList-pulledDownText": "Päivitä vapauttamalla...",
            "dxList-refreshingText": "Päivitetään...",
            "dxList-pageLoadingText": "Ladataan...",
            "dxList-nextButtonText": "Lisää",
            "dxList-selectAll": "Valitse kaikki",
            "dxListEditDecorator-delete": "Poista",
            "dxListEditDecorator-more": "Lisää",
            "dxScrollView-pullingDownText": "Päivitä vetämällä alas...",
            "dxScrollView-pulledDownText": "Päivitä vapauttamalla...",
            "dxScrollView-refreshingText": "Päivitetään...",
            "dxScrollView-reachBottomText": "Ladataan...",
            "dxDateBox-simulatedDataPickerTitleTime": "Valitse kellonaika",
            "dxDateBox-simulatedDataPickerTitleDate": "Valitse päivämäärä",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Valitse päivämäärä ja kellonaika",
            "dxDateBox-validation-datetime": "Arvon on oltava päiväys tai aika",
            "dxFileUploader-selectFile": "Valitse tiedosto",
            "dxFileUploader-dropFile": "tai vedä ja pudota tiedosto tähän",
            "dxFileUploader-bytes": "tavua",
            "dxFileUploader-kb": "kt",
            "dxFileUploader-Mb": "Mt",
            "dxFileUploader-Gb": "Gt",
            "dxFileUploader-upload": "Lähetä",
            "dxFileUploader-uploaded": "Lähetetty",
            "dxFileUploader-readyToUpload": "Valmis lähetettäväksi",
            "dxFileUploader-uploadFailedMessage": "Lähetys epäonnistui",
            "dxRangeSlider-ariaFrom": "Alkaen",
            "dxRangeSlider-ariaTill": "Asti",
            "dxSwitch-onText": "PÄÄLLE",
            "dxSwitch-offText": "POIS",
            "dxForm-optionalMark": "valinnainen",
            "dxForm-requiredMessage": "{0} on valinnainen",
            "dxNumberBox-invalidValueMessage": "Arvon on oltava numero",
            "dxDataGrid-columnChooserTitle": "Sarakkeenvalitsin",
            "dxDataGrid-columnChooserEmptyText": "Vedä sarake täällä piilottaa sen",
            "dxDataGrid-groupContinuesMessage": "Jatkuu seuraavalla sivulla",
            "dxDataGrid-groupContinuedMessage": "Jatkoa edelliseltä sivulta",
            "dxDataGrid-groupHeaderText": "Ryhmittele tämän sarakkeen mukaan",
            "dxDataGrid-ungroupHeaderText": "Poista ryhmittely",
            "dxDataGrid-ungroupAllText": "Poista kaikki ryhmittymät",
            "dxDataGrid-editingEditRow": "Muokkaa",
            "dxDataGrid-editingSaveRowChanges": "Tallenna",
            "dxDataGrid-editingCancelRowChanges": "Peruuta",
            "dxDataGrid-editingDeleteRow": "Poista",
            "dxDataGrid-editingUndeleteRow": "Palauta",
            "dxDataGrid-editingConfirmDeleteMessage": "Oletko varma, että haluat poistaa tämän tietueen?",
            "dxDataGrid-validationCancelChanges": "Peruuta muutokset",
            "dxDataGrid-groupPanelEmptyText": "Vedä sarakeotsikko tähän, jos haluat ryhmitellä kyseisen sarakkeen mukaan",
            "dxDataGrid-noDataText": "Ei dataa",
            "dxDataGrid-searchPanelPlaceholder": "Haku...",
            "dxDataGrid-filterRowShowAllText": "(Kaikki)",
            "dxDataGrid-filterRowResetOperationText": "Palauta",
            "dxDataGrid-filterRowOperationEquals": "Yhtä suuri kuin",
            "dxDataGrid-filterRowOperationNotEquals": "Eri suuri kuin",
            "dxDataGrid-filterRowOperationLess": "Pienempi kuin",
            "dxDataGrid-filterRowOperationLessOrEquals": "Pienempi tai yhtä suuri kuin",
            "dxDataGrid-filterRowOperationGreater": "Suurempi kuin",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Suurempi tai yhtä suuri kuin",
            "dxDataGrid-filterRowOperationStartsWith": "Alkaa merkeillä",
            "dxDataGrid-filterRowOperationContains": "Sisältää",
            "dxDataGrid-filterRowOperationNotContains": "Ei sisällä",
            "dxDataGrid-filterRowOperationEndsWith": "Loppuu merkeillä",
            "dxDataGrid-filterRowOperationBetween": "Välillä",
            "dxDataGrid-filterRowOperationBetweenStartText": "Alkaa",
            "dxDataGrid-filterRowOperationBetweenEndText": "Loppu",
            "dxDataGrid-applyFilterText": "Käytä suodatinta",
            "dxDataGrid-trueText": "tosi",
            "dxDataGrid-falseText": "epätosi",
            "dxDataGrid-sortingAscendingText": "Lajittele nouseva",
            "dxDataGrid-sortingDescendingText": "Lajittele laskeva",
            "dxDataGrid-sortingClearText": "Tyhjennä lajittelu",
            "dxDataGrid-editingSaveAllChanges": "Tallenna muutokset",
            "dxDataGrid-editingCancelAllChanges": "Hylkää muutokset",
            "dxDataGrid-editingAddRow": "Lisää rivi",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min {1} on {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max {1} on {0}",
            "dxDataGrid-summaryAvg": "Keskiarvo: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Keskiarvo {1} on {0}",
            "dxDataGrid-summarySum": "Summa: {0}",
            "dxDataGrid-summarySumOtherColumn": "Summa {1} on {0}",
            "dxDataGrid-summaryCount": "Määrä: {0}",
            "dxDataGrid-columnFixingFix": "Kiinteät sarakkeet",
            "dxDataGrid-columnFixingUnfix": "Poista kiinteät sarakkeet",
            "dxDataGrid-columnFixingLeftPosition": "Vasemmalle",
            "dxDataGrid-columnFixingRightPosition": "Oikealle",
            "dxDataGrid-exportTo": "Vie",
            "dxDataGrid-exportToExcel": "Vie Exceliin",
            "dxDataGrid-excelFormat": "Excel-tiedostot",
            "dxDataGrid-selectedRows": "Valitut tietueet",
            "dxDataGrid-exportSelectedRows": "Vie valitut tietueet",
            "dxDataGrid-exportAll": "Vie kaikki tiedot",
            "dxDataGrid-headerFilterEmptyValue": "(Tyhjät)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Peruuta",
            "dxDataGrid-ariaColumn": "Sarake",
            "dxDataGrid-ariaValue": "Arvo",
            "dxDataGrid-ariaFilterCell": "Suodatinsolu",
            "dxDataGrid-ariaCollapse": "Tiivistä",
            "dxDataGrid-ariaExpand": "Laajenna",
            "dxDataGrid-ariaDataGrid": "Tietoruudukko",
            "dxDataGrid-ariaSearchInGrid": "Hae tietoriviltä",
            "dxDataGrid-ariaSelectAll": "Valitse kaikki",
            "dxDataGrid-ariaSelectRow": "Valitse rivi",
            "dxDataGrid-filterBuilderPopupTitle": "Suodattimen muodostin",
            "dxDataGrid-filterPanelCreateFilter": "Luo suodatin",
            "dxDataGrid-filterPanelClearFilter": "Tyhjennä",
            "dxDataGrid-filterPanelFilterEnabledHint": "Ota suodatin käyttöön",
            "dxTreeList-ariaTreeList": "Puu",
            "dxTreeList-editingAddRowToNode": "Lisää",
            "dxPager-infoText": "Sivu {0}/{1} ({2} kohdetta)",
            "dxPager-pagesCountText": "/",
            "dxPivotGrid-grandTotal": "Loppusumma",
            "dxPivotGrid-total": "{0} Summa",
            "dxPivotGrid-fieldChooserTitle": "Kentän valitseminen",
            "dxPivotGrid-showFieldChooser": "Avaa kentän valitsemistoiminto",
            "dxPivotGrid-expandAll": "Laajenna kaikki",
            "dxPivotGrid-collapseAll": "Tiivistä kaikki",
            "dxPivotGrid-sortColumnBySummary": 'Lajittele "{0}" tähän sarakkeeseen',
            "dxPivotGrid-sortRowBySummary": 'Lajittele "{0}" tämän rivin mukaan',
            "dxPivotGrid-removeAllSorting": "Poista kaikki lajittelu",
            "dxPivotGrid-dataNotAvailable": "Puuttuu",
            "dxPivotGrid-rowFields": "Rivikentät",
            "dxPivotGrid-columnFields": "Sarakekentät",
            "dxPivotGrid-dataFields": "Tietokentät",
            "dxPivotGrid-filterFields": "Suodatinkentät",
            "dxPivotGrid-allFields": "Kaikki kentät",
            "dxPivotGrid-columnFieldArea": "Pudota sarakekentät tähän",
            "dxPivotGrid-dataFieldArea": "Pudota tietokentät tähän",
            "dxPivotGrid-rowFieldArea": "Pudota rivikentät tähän",
            "dxPivotGrid-filterFieldArea": "Pudota suodatinkentät tähän",
            "dxScheduler-editorLabelTitle": "Aihe",
            "dxScheduler-editorLabelStartDate": "Alkamispäivä",
            "dxScheduler-editorLabelEndDate": "Päättymispäivä",
            "dxScheduler-editorLabelDescription": "Kuvaus",
            "dxScheduler-editorLabelRecurrence": "Toista",
            "dxScheduler-openAppointment": "Avaa tapaaminen",
            "dxScheduler-recurrenceNever": "Ei koskaan",
            "dxScheduler-recurrenceDaily": "Päivittäin",
            "dxScheduler-recurrenceWeekly": "Viikoittain",
            "dxScheduler-recurrenceMonthly": "Kuukausittain",
            "dxScheduler-recurrenceYearly": "Vuosittain",
            "dxScheduler-recurrenceEvery": "Joka",
            "dxScheduler-recurrenceEnd": "Loppu",
            "dxScheduler-recurrenceAfter": "Jälkeen",
            "dxScheduler-recurrenceOn": "Aika",
            "dxScheduler-recurrenceRepeatDaily": "päivittäin",
            "dxScheduler-recurrenceRepeatWeekly": "viikon välein",
            "dxScheduler-recurrenceRepeatMonthly": "kuukauden välein",
            "dxScheduler-recurrenceRepeatYearly": "vuosittain",
            "dxScheduler-switcherDay": "Päivä",
            "dxScheduler-switcherWeek": "Viikko",
            "dxScheduler-switcherWorkWeek": "Työviikko",
            "dxScheduler-switcherMonth": "Kuukausi",
            "dxScheduler-switcherAgenda": "Esityslista",
            "dxScheduler-switcherTimelineDay": "Aikajana päivä",
            "dxScheduler-switcherTimelineWeek": "Aikajana viikko",
            "dxScheduler-switcherTimelineWorkWeek": "Aikajana työviikko",
            "dxScheduler-switcherTimelineMonth": "Aikajana kuukausi",
            "dxScheduler-recurrenceRepeatOnDate": "päivämäärällä",
            "dxScheduler-recurrenceRepeatCount": "esiintymiä",
            "dxScheduler-allDay": "Koko päivä",
            "dxScheduler-confirmRecurrenceEditMessage": "Haluatko muokata vain tämän tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Haluatko poistaa vain tämän tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceEditSeries": "Muokkaa sarjaa",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Poista sarja",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Muokkaa tapaaminen",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Poista tapaaminen",
            "dxScheduler-noTimezoneTitle": "Ei aikavyöhyke",
            "dxScheduler-moreAppointments": "{0} lisää",
            "dxCalendar-todayButtonText": "Tänään",
            "dxCalendar-ariaWidgetName": "Kalenteri",
            "dxColorView-ariaRed": "Punainen",
            "dxColorView-ariaGreen": "Vihreä",
            "dxColorView-ariaBlue": "Sininen",
            "dxColorView-ariaAlpha": "Läpinäkyvyys",
            "dxColorView-ariaHex": "Värikoodi",
            "dxTagBox-selected": "{0} valittu",
            "dxTagBox-allSelected": "Kaikki valitut ({0})",
            "dxTagBox-moreSelected": "{0} lisää",
            "vizExport-printingButtonText": "Tulosta",
            "vizExport-titleMenuText": "Vienti/Tulostus",
            "vizExport-exportButtonText": "{0} tiedosto",
            "dxFilterBuilder-and": "Ja",
            "dxFilterBuilder-or": "Tai",
            "dxFilterBuilder-notAnd": "Ei ja",
            "dxFilterBuilder-notOr": "Ei tai",
            "dxFilterBuilder-addCondition": "Lisää ehto",
            "dxFilterBuilder-addGroup": "Lisää ryhmä",
            "dxFilterBuilder-enterValueText": "<anna arvo>",
            "dxFilterBuilder-filterOperationEquals": "On sama kuin",
            "dxFilterBuilder-filterOperationNotEquals": "Ei ole sama kuin",
            "dxFilterBuilder-filterOperationLess": "Pienempi kuin",
            "dxFilterBuilder-filterOperationLessOrEquals": "Pienempi tai yhtä suuri kuin",
            "dxFilterBuilder-filterOperationGreater": "Suurempi kuin",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Suurempi tai yhtä suuri kuin",
            "dxFilterBuilder-filterOperationStartsWith": "Alkaa merkillä",
            "dxFilterBuilder-filterOperationContains": "Sisältää",
            "dxFilterBuilder-filterOperationNotContains": "Ei sisällä",
            "dxFilterBuilder-filterOperationEndsWith": "Loppuu merkillä",
            "dxFilterBuilder-filterOperationIsBlank": "On tyhjä",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ei ole tyhjä",
            "dxFilterBuilder-filterOperationBetween": "Välillä",
            "dxFilterBuilder-filterOperationAnyOf": "Joku näistä",
            "dxFilterBuilder-filterOperationNoneOf": "Ei mikään näistä"
        }
    })
});
