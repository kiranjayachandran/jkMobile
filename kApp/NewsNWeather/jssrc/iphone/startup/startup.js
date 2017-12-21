//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "NewsNWeather",
    appName: "NewsNWeather",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.175",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "NewsNWeather",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://mydevcloud.konycloud.com/NewsNWeather/MWServlet",
    secureurl: "https://mydevcloud.konycloud.com/NewsNWeather/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeUserWidgets();
    initializeCopyFBox005bd0cb50d4044();
    initializeCopyFBox07959e314e9f649();
    initializeFBox08b98d1da2fc643();
    initializeflexContainer15885142771();
    initializetempLocalNews();
    frmBrowserGlobals();
    frmLoginGlobals();
    frmNewsGlobals();
    frmSplashGlobals();
    frmWeatherGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: AS_AppEvents_aa916090ca5245c6ae6bf06357d4b592,
        showstartupform: function() {
            frmSplash.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;