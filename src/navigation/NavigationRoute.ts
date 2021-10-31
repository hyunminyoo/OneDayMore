import { Navigation } from "react-native-navigation";
import RegisterScreens from './RegisterScreens';

RegisterScreens();

export function pushMainRoute() {

    Navigation.setRoot({
        root: {
            bottomTabs: {
                id:'BOTTOM_TABS',
                options:{
                    bottomTabs : {
                        backgroundColor:"#00498C",
                        titleDisplayMode : 'alwaysHide',
                    },
                },
                children: [
                    // Tab1: home
                    {
                        stack:{
                            id:"HOME_STACK",
                            children:[{
                                component:{
                                    id: "HOME",
                                    name:"HomeScreen",
                                }
                            }],
                            options: {
                                topBar : {visible : false},
                                bottomTab: {
                                    icon: require("../../resource/img/home.png"),
                                }
                            }
                        },
                    },
                    // Tab2: calendar
                    {
                        stack: {
                            id: "CALENDAR_STACK", // Use this ID for stack navigation
                            children: [{
                                component: {
                                    id: "CALENDAR",
                                    name: "CalendarScreen"
                                }
                            }],
                            options: {
                                topBar : {visible : false},
                                bottomTab: {
                                    icon: require("../../resource/img/calendar.png"),
                                }
                            }
                        }
                    },
                    // Tab3: treatment
                    {
                        stack: {
                            id: "TREATMENT_STACK", // Use this ID for stack navigation
                            children: [{
                                component: {
                                    id: "TREATMENT",
                                    name: "TreatmentScreen"
                                }
                            }],
                            options: {
                                topBar : {visible : false},
                                bottomTab: {
                                    icon: require("../../resource/img/stats.png"),
                                }
                            }
                        }
                    },
                    // Tab4: social
                    {
                        stack: {
                            id: "SOCIAL_STACK", // Use this ID for stack navigation
                            children: [{
                                component: {
                                    id: "SOCIAL",
                                    name: "SocialScreen"
                                }
                            }],
                            options: {
                                topBar : {visible : false},
                                bottomTab: {
                                    icon: require("../../resource/img/communication.png"),
                                }
                            }
                        }
                    },
                    // Tab5: user
                    {
                        stack: {
                            id: "USER_STACK", // Use this ID for stack navigation
                            children: [{
                                component: {
                                    id: "USER",
                                    name: "UserScreen"
                                }
                            }],
                            options: {
                                topBar: { visible: false },
                                bottomTab: {
                                    icon: require("../../resource/img/user.png"),
                                }
                            }
                        }
                    }
                ]

            },
        }
    });

}

export function pushApp() {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                        {
                        component: {
                            name: "App"
                        }
                    }
                ]
            }
        }
    });
}