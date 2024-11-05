// VUETIFY app.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'  

const customDarkTheme = {
    dark: true,
    colors: {
        background: "#BDBDBD",
        surface: "#CFD8DC",
        primary: "#212121",//darkGray
        secondary: "#FFFDE7",
        error: "#ff5722",
        text:"#ffffff",
        third:"#3E2723",
        info:"#01579B"
        
    },
};
const customLightTheme = {
    dark: false,
    colors: {
        background: "#ECEFF1",
        surface: "#eff2f3",
        primary: "#FFFDE7", 
        secondary: "#212121",//darkGray
        error: "#EF5350",
        warning:"#FFD180",
        success:"#66BB6A",
        info:"#81D4FA",
        text:"#424242",
        third:"#8D6E63"
        
    },
};



const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 
        "customDarkTheme"
        // "customLightTheme"
        ,
        themes: {
            customDarkTheme,
            customLightTheme,
        },
    },
    defaults:{
        global:{
        },
        VAppBar:{
            color:"primary"
        },
        VCard: {
        },
        VSheet:{
        },
        VPagination:{
        },
        VTable:{
        },
        VTooltip:{
            activator:"parent",
            location:"top"
        },
        VIcon:{
        }
    },
    icons: {
        defaultSet: 'mdi',
    },
});
export default vuetify