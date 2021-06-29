Быстрая настройка Tailwind

Версия для bash
echo node_modules/ >> .gitignore
npm init -y && npm i -d tailwindcss@latest postcss@latest autoprefixer@latest cssnano@latest

touch postcss.config.js
в нём:
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // require('cssnano')({
    //   preset: 'default',
    // }),
  ],
}

npx tailwindcss init
npm install -D postcss-cli && node_modules/.bin/postcss --version
mkdir src && touch src/styles.css

дописать в tailwind.config.js:
  purge: [
    './dist/**/*.html',
    './dist/**/*.js',
    './dist/**/*.jsx',
    './dist/**/*.vue',
  ],

дописать в package.json:
  "scripts": {    
    "dev": "node_modules/.bin/postcss src/styles.css -o dist/compiled.css --watch",
    "build": "node_modules/.bin/postcss src/styles.css -o dist/compiled.css"      
  },

npm run dev

Продакшн
NODE_ENV=production node_modules/.bin/postcss src/styles.css -o dist/compiled.css



Версия для PowerShell
echo node_modules/ >> .gitignore
npm init -y 
npm i -d tailwindcss@latest postcss@latest autoprefixer@latest cssnano@latest

создать файл:
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // require('cssnano')({
    //   preset: 'default',
    // }),
  ],
}

npx tailwindcss init
npm install -D postcss-cli 
node_modules/.bin/postcss --version
mkdir src 
в папке src создать файл:
styles.css


дописать в tailwind.config.js:
  purge: [
    './dist/**/*.html',
    './dist/**/*.js',
    './dist/**/*.jsx',
    './dist/**/*.vue',
  ],

дописать в package.json:
  "scripts": {    
    "dev": "node_modules/.bin/postcss src/styles.css -o dist/compiled.css --watch",
    "build": "node_modules/.bin/postcss src/styles.css -o dist/compiled.css"     
  },


npm run dev

Продакшн
$env:NODE_ENV="production" 
npm run build
