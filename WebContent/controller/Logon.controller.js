sap.ui.controller("controller.Logon", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Logon
*/
	onInit: function() {
		oData = this._createViewModel();
		this.getView().setModel(
		    new sap.ui.model.json.JSONModel(oData), "viewModel");
	},
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Logon
*/
	onExit: function() {
		this._clearViewModel();
	},
	onLogin: function(oEvent) {
		// do something special
		// oEvent.getSource();
		alert("Implement Login Here!");
	},
	onSignIn: function(oEvent) {
		// do something special
		// oEvent.getSource();
		sP1 = this.getView().byId("password").getValue();
		sP2 = this.getView().byId("passwor2").getValue();
		if (sP1 !== undefined && sP2 !== undefined &&
			sP1 !== "" && sP2 !== "" &&
			sP1 === sP2) {
			alert("Implement Sign In Here!");
			this._togglePages();
		} else {
			alert("Passwords are not equal");
		}
	},
	onSignInLink: function(oEvent) {
		this._togglePages();
	},
	onLiveChange: function(oEvent) {
		this._checkUserInput(oEvent);
	},
	_createViewModel: function() {
		return {
			sUsername: "",
			sStateUsername: "None",
			sPassword: "",
			sStatePassword: "None",
 			sMaxLengthUsername: 10,
 			sMaxLengthPassword: 40,
 		}
	},
	_togglePages: function(sId) {
		this._toggle("signin");
		this._toggle("login");
	},
	_toggle: function(sId) {
		this.getView().byId(sId).setProperty("visible", !this.getView().byId(sId).getProperty("visible"));
	},
	_checkUserInput: function(oEvent) {
		sInputName = oEvent.getSource().getName();
		sInputValue = oEvent.getParameters().value;
		this._updateModel("s" + sInputName, sInputValue);
		this._checkModelValue(sInputName);
	},
	_checkModelValue: function(sName) {
		oData = this.getView().getModel("viewModel").getData();
		sModelValue = oData["s" + sName];
		if (sModelValue === undefined || sModelValue === "") {
			this._updateModel("sState" + sName, "Error");
			this._updateModel("sStateText" + sName, "Cannot be empty!");
		} else {
			this._updateModel("sState" + sName, "None");
			this._updateModel("sStateText" + sName, "");
		}
	},
	_updateModel: function(sKey, sValue) {
		oData = this.getView().getModel("viewModel").getData();
		oData[sKey] = sValue;
	},
	_clearViewModel: function() {
		this.getView().getModel("viewModel").setData(null);
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Logon
*/
/*	onBeforeRendering: function() {

	},
*/
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Logon
*/
/*	onAfterRendering: function() {

	},
*/

});