sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sam/zairbus1/utils/formatter",
], function (
    Controller,
    formatter
) {
    "use strict";

    return Controller.extend("sam.zairbus1.controller.View2", {
        formatter : formatter,
        onInit: function () {
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("Detail").attachPatternMatched(this._onBinding, this);

        },
        _onBinding: function (oId) {
            debugger;
            var oVbeln = oId.getParameter("arguments").Vbeln;
            var oPath = "/VbakSet('" + oVbeln + "')";
            this.getView().bindElement(oPath);
        }
    });
});