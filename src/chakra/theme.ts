

// 1. Import `extendTheme`
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values

//tutaj znajduje się styl kolorów 
export const theme = extendTheme({
    colors: {
        brand: {
            100: '#FF3c00', //redditowy orange
        },
    },
    fonts: {
        //aby wgrac czcionkę z chakry trzeba wejsc na chakra fonts i znaleźć
        body: 'Open Sans, sans-serif', 
    },
    styles: {
        global: () => ({
            body: {
                bg: 'gray.200',
            },
        }),
    },
    components: { //komponenty ui oferowane przez chakre
        // Button
    }
});