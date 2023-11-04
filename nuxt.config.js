export default {
    ssr: false,
    srcDir: 'resources/nuxt/',
    head: {
        title: 'pantr.io Comestibles Management Solution',
        meta: [
            {charset: 'utf-8'},
            {name:'viewport', content:'width-device-width, initial-scale=10'},
            {hid: 'description', name:'description', content: 'For people with lots of fridges and shit'}
        ],
        link: [
            {
                rel:'stylesheet',
                type:'text/css',
                href:"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
            },
        ],
    },
    css: [],
    plugins: [],
    components: true,
    buildModules: [],
    modules: [],
    build: {
        publicPath: process.env.NODE_ENV === 'production' ? 'assets/' : null,
        extractCSS: true,
    },
    generate: {
        dir: 'nuxt-public',
    },
    server: {
        port: 3000,
        host: '127.0.0.1'
    },
    watchers: {
        webpack: {
            aggregateTimeout: 300,
            poll: 500,
        }
    }
}
