sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (
    Controller,
    JsonModel,
    MessageToast
) {
    "use strict";

    return Controller.extend("sam.zairbus1.controller.Add", {

        onInit: function () {
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oLocalModel = new JsonModel();

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
            this.getView().setModel(this.oLocalModel, "Local");

        },
        onSave: function () {
            debugger;
            var oDataModel = this.getView().getModel();
            var oModel = this.getView().getModel("Local");
            var Payload = oModel.getProperty("/SalesOrderData");
            oDataModel.create("/VbakSet", Payload, {
                success: function (data) {
                    MessageToast.show("Success");
                },
                error: function (oError) {
                    MessageToast.show("Error");
                }
            });

        },
        onCancel: function () {


        },
        onEnter: function (oEvent) {
            // debugger;
            var oId = oEvent.getParameter("value");
            var oModel = this.getView().getModel();
            var oPath = "/VbakSet('" + oId + "')";
            var that = this;
            oModel.read(oPath, {
                success: function (data) {
                    that.oLocalModel.setProperty("/SalesOrderData", data);
                },
                error: function (error) {
                   debugger; 
                   MessageToast.show(error.message);
                }

            })




        }
    });
});