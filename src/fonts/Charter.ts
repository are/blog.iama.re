import { injectGlobal } from 'emotion'

injectGlobal`
    @font-face {
        font-family: 'Charter';
        src: url('/fonts/CharterRegular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Charter';
        src: url('/fonts/CharterBold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Charter';
        src: url('/fonts/CharterItalic.ttf') format('truetype');
        font-weight: 400;
        font-style: italic;
    }

    @font-face {
        font-family: 'Charter';
        src: url('/fonts/CharterBoldItalic.ttf') format('truetype');
        font-weight: 700;
        font-style: italic;
    }
`
