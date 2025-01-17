for deploy on github page

 ```
    1  in vite.config.js
        base: '/whether' <-- whether is repo name 
    2  in package.json
          "homepage": "https://KishanDhaval.github.io/whether",
    3  npm i gh-pages
    4  in package.json , in script
        "preview": "vite preview",
        "predeploy": "npm run build",
        "deploy":"gh-pages -d dist"
    5 npm run deploy
```
