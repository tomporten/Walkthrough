sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	'sap/ui/core/date/UI5Date',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, UI5Date, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.Calendar",
        {
            onInit() {
                var oModel = new JSONModel();
				oModel.setData({ startDateCalendar: UI5Date.getInstance("2024","6","1","0","0","0","0") } );
				this.getView().setModel(oModel);
            },
            onFilterCalendar(oEvent)
            {
                const aFilter = [];
                const sQuery = oEvent.getParameter("query")
                if (sQuery)
                    {
                        aFilter.push(new Filter({
                                            path: 'name', 
                                            operator: FilterOperator.Contains,
                                            value1: sQuery }));
                    }

                const oCalendar = this.byId("MIBSCalender");
                const oBinding = oCalendar.getBinding("rows");
                oBinding.filter(aFilter);
            }


        });
});
/*
,
            handleAppointmentSelect: function (oEvent) {
                var oAppointment = oEvent.getParameter("appointment"),
                    sSelected;
                if (oAppointment) {
                    sSelected = oAppointment.getSelected() ? "selected" : "deselected";
                    MessageBox.show("'" + oAppointment.getTitle() + "' " + sSelected + ". \n Selected appointments: " + this.byId("PC1").getSelectedAppointments().length);
                } else {
                    var aAppointments = oEvent.getParameter("appointments");
                    var sValue = aAppointments.length + " Appointments selected";
                    MessageBox.show(sValue);
                }
            },

            handleSelectionFinish: function (oEvent) {
                var aSelectedKeys = oEvent.getSource().getSelectedKeys();
                this.byId("PC1").setBuiltInViews(aSelectedKeys);
            },

            onCalendarTypeSelect: function (oEvent) {
                this.byId("PC1").setPrimaryCalendarType(oEvent.getParameters().selectedItem.getKey());
            },

            onCalendarSecondaryTypeSelect: function (oEvent) {
                var sKey = oEvent.getParameters().selectedItem.getKey();
                if (sKey === "None") {
                    this.byId("PC1").setSecondaryCalendarType(undefined);
                } else {
                    this.byId("PC1").setSecondaryCalendarType(sKey);
                }
            },

            handleRowHeaderPress: function (oEvent) {
                MessageBox.show("rowHeaderPressed on row: " + oEvent.getParameter("row").getId());
            }
*/