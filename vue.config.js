module.exports = {
    publicPath: "./",
    chainWebpack: config => {
        config
        .plugin("html")
        .tap(args => {
            args[0].title = "Curriculum vitae"
            return args
        })
    }
}