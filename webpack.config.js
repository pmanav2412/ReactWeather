module.exports={
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias:{
         Main: 'app/components/Main.jsx',
         Navigation: 'app/components/Navigation.jsx',
         Weather: 'app/components/Weather.jsx',
         About: 'app/components/About.jsx',
         Examination: 'app/components/Examination.jsx',
         WeatherForm: 'app/components/Weather/WeatherForm',
         WeatherMessage: 'app/components/Weather/WeatherMessage',
         WeatherAPI: 'app/components/Weather/WeatherAPI'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-inline-source-map'
};
