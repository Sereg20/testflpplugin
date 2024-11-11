/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "testplugin1/model/models",
        "sap/m/MessageToast"
    ],
    function (UIComponent, Device, models, MessageToast) {
        "use strict";

        return UIComponent.extend("testplugin1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                // this.getRouter().initialize();

                // set the device model
                // this.setModel(models.createDeviceModel(), "device");

                try{
                    if(sap.ushell && sap.ushell.cpv2 && sap.ushell.cpv2.services 
                        && sap.ushell.cpv2.services.cloudServices 
                        && sap.ushell.cpv2.services.cloudServices.SiteService){
                            MessageToast.show("Hi!")
                        }
    
                }catch(oException){
    
                }
            }
        });
    }
);