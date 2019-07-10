declare module 'hyphen' {
    export type HyphenationPatterns = {
        patterns: string[]
        exceptions: string[]
    }

    export default function createHyphenator(patterns: HyphenationPatterns): (text: string) => string
}

declare module 'hyphen/patterns/en-us' {
    import { HyphenationPatterns } from 'hyphen'

    var englishHyphenationPatterns: HyphenationPatterns

    export default englishHyphenationPatterns
}

declare module 'hyphen/patterns/pl' {
    import { HyphenationPatterns } from 'hyphen'

    var polishHyphenationPatterns: HyphenationPatterns

    export default polishHyphenationPatterns
}

declare module 'react-syntax-highlighter/dist/languages/prism/jsx' {
    var language: string
    export default language
}

declare module 'react-syntax-highlighter/dist/languages/prism/typescript' {
    var language: string
    export default language
}

declare module 'react-syntax-highlighter/dist/languages/prism/yaml' {
    var language: string
    export default language
}

declare module 'react-syntax-highlighter/dist/languages/prism/twig' {
    var language: string
    export default language
}

declare module 'remark-macro' {
    type Transformer = (content: string, props: any) => any
    type InlineTransformer = (props: any) => any
    interface Macro {
        addMacro(name: string, fn: Transformer, inline: false): void
        addMacro(name: string, fn: InlineTransformer, inline: true): void

        transformer: any
    }

    var macro: () => Macro
    export default macro
}

declare module '**.ttf' {
    var fontUrl: string
    export default fontUrl
}

declare module 'react-markdown/with-html' {
    import ReactMarkdown from 'react-markdown'

    export default ReactMarkdown
}

declare module '@mdx-js/runtime' {
    import { FunctionComponent, Component } from 'react'

    type MDXProps = {
        scope?: object
        components?: Record<string, FunctionComponent<any>>
        remarkPlugins?: Array<any>
        rehypePlugins?: Array<any>
        children: string
    }

    var MDX: FunctionComponent<MDXProps>

    export default MDX
}

declare module 'remark-custom-blocks' {
    var plugin: any

    export default plugin
}

declare module '@microlink/react' {
    var microlink: FuncitonComponent<{
        url: string
        [key: string]: string
    }>

    export default microlink
}
