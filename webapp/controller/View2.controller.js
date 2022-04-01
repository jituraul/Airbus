sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sam/zairbus1/utils/formatter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
], function (
    Controller,
    formatter,
    JSONModel,
    Fragment
) {
    "use strict";

    return Controller.extend("sam.zairbus1.controller.View2", {
        formatter: formatter,
        onInit: function () {

            this.oLocalModel = new JSONModel();
            this.oLocalModel.setData({
                "SalesOrderData": {
                    "Vbeln": "",
                    "Vbtyp": "",
                    "Vkorg": "",
                    "Spart": "",
                    "Netwr": "",
                    "Waerk": "",
                    "Kunnr": "",
                }
            });

            this.getView().setModel(this.oLocalModel, "oLocal");
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("Detail").attachPatternMatched(this._onBinding, this);

        },
        _onBinding: function (oId) {
            debugger;
            var oVbeln = oId.getParameter("arguments").Vbeln;
            var oPath = "/VbakSet('" + oVbeln + "')";
            var oValue = this.getView().getModel().getProperty(oPath);
            // var oData = [];
            var oLocalModel = this.getView().getModel("oLocal");
            oLocalModel.setProperty("/SalesOrderData", oValue);

            this.getView().bindElement(oPath);
        },
        onEdit: function (oEvent) {
            debugger; 
            this._onFormAction(true, false);
        },
        onCancel: function (oEvent) {
            
            this._onFormAction(false, true);s

        },
        _onFormAction: function (oChange, oDisplay) {
            var oChangeForm = this.getView().byId("idSimpleFormChange");
            var oDisplayFOrm = this.getView().byId("idSimpleFormDisplay")
            oChangeForm.setVisible(oChange);
            oDisplayFOrm.setVisible(oDisplay);
        }
    });
});