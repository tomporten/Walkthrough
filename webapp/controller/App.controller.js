sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
        async onOpenDialog() {
            // create dialog lazily
            // Nullish coalescing assignment
            this.oDialog ??= await this.loadFragment({
                name: "ui5.walkthrough.view.NameDialog"
            });
        
            this.oDialog.open();
        },
        onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("NameDialog").close();
		}
    });
});