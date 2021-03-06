import { injectGlobal } from 'emotion'

injectGlobal`
    @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/FiraCode-Light.ttf') format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/FiraCode-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/FiraCode-Medium.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/FiraCode-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    

`
