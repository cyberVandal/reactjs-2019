const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
           })
       
    ],
    rules: [

    
        {                
          test: [/.css$/],                
          use:[                    
           'style-loader',                  
           'css-loader'
          ]            
        }
        
        ]

    
}

