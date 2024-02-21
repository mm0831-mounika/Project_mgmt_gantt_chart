sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("ganttchart.controller.Home", {
            onInit: function () {
                let omodel=new JSONModel({
                    "email":"",
                    "password":""
                });
                this.getView().setModel(omodel,"Login")
            },
            onSubmit:function(){
                var oView = this.getView();
                let omodel=oView.getModel("Login");
                console.log(omodel.getData());

                var email=omodel.getProperty("/email");
                var password=omodel.getProperty("/password");

                 let url = "https://port4004-workspaces-ws-zx66j.us10.trial.applicationstudio.cloud.sap/odata/v4/catalog/Employee"//url creation
                 let that = this; //present controller refers as object
                $.ajax({
                     method: "GET",
                     url: url,
                    // contentType: "application/json",
                     success: function (data) {
                         console.log(data.value.length)
                         for(let i=0;i<data.value.length;i++){
                            if(data.value[i].Employee_Mail==email && data.value[i].Employee_Pwd==password && data.value[i].Employee_Role=='Manager'){
                                console.log(data.value[i].Employee_Name)
                            }else if(data.value[i].Employee_Mail==email && data.value[i].Employee_Pwd==password && data.value[i].Employee_Role=='Developer'){
                                console.log(data.value[i].Employee_Name)
                            }
                         }
                     },
                     error: function (error) {
                         console.error("API call failed:", error);
                     }
                 });
            }
        });
    });
