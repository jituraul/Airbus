sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sam/zairbus1/utils/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("sam.zairbus1.controller.View1", {

            formatter: formatter,
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            onLiveChange: function (oEvent) {
                debugger;
                var oNewValue = oEvent.getParameter("newValue");
                if (oNewValue) {

                    var aFilter = new Filter("Vkorg", FilterOperator.Contains, oNewValue);
                    //  var bFilter = new Filter("Vbeln", FilterOperator.Contains,oNewValue);

                    //  var oFilter = new Filter({
                    //      filters : [aFilter,bFilter],
                    //      and :false
                    //  });
                    var oFilter = [aFilter];
                    var oList = this.getView().byId("idList");
                    oList.getBinding("items").filter(oFilter);

                }
            },
            onItemPress: function (oEvent) {
                var oItem = oEvent.getParameter("listItem");
                var oPath = oItem.getBindingContextPath();;
                var oId = oPath.split("'")[1];
                this._onNext(oId);
            },
            _onNext: function (oId) {
                this.oRouter.navTo("Detail", {
                    Vbeln: oId
                });

            },
            onCreate: function () {
               debugger; 
              this.oRouter.navTo("Add");

            }
        });
    });
