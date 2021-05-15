const config = {
    css: {
        extract: {
            ignoreOrder: true
        },
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/variables.scss";`
                // 注意键名 (prependData) 8.x
            }
        }
    }
}

module.exports = config