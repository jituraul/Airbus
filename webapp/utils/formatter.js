sap.ui.define([

], function (

) {
    return ("sam.zairbus1.utils.formatter", {
        onStatus : function (status) {
            if(status <= 1100 ){
                return 'Error';
            }
            else if(status >= 1100 && status <= 3000){
                return 'Warning';
            }
            else if(status >= 3000){
                return 'Success';
            }
          }

        } 
    );
});