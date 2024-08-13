sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	'sap/ui/core/date/UI5Date'
], (Controller, JSONModel, UI5Date) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
        async onOpenDialog() {
            // create dialog lazily
            // Nullish coalescing assignment
            this.oDialog ??= await this.loadFragment({
                name: "ui5.walkthrough.view.NameDialog"
            });
        
            this.oDialog.open();
/*
            var oModel = new JSONModel();
            oModel.setData({ startDate: UI5Date.getInstance(" 2024", "6", "1", "0", "0") } );
            this.getView().setModel(oModel);
            var test = UI5Date.getInstance(" 2024", "6", "1", "0", "0");
*/
        },
        onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("NameDialog").close();
		},

    });
});
/*
        onInit() {
            var oModel = new JSONModel();
            oModel.setData({ startDateCalendar: UI5Date.getInstance("2024","6","1","0","0","0","0") } );
            this.getView().setModel(oModel);
        }
*/