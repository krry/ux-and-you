# UX-and-You

This is a very simple node app that serves up an Impress.js presentation.
The presentation is contained in a single HTML file `index.html`.

To make changes:
1. clone the repo locally
2. run the server: `node app.js`
3. run the sass compiler: `node-sass -w -r -o src/css/ux.scss > public/css/ux.css`
4. deploy to heroku
