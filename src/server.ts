import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

enableProdMode();
const domino = require('domino');
const DIST_FOLDER = join(process.cwd(), 'dist');
const templatee = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const win = domino.createWindow(templatee);
global['window'] = win;
global['document'] = win.document;

const PORT = process.env.PORT || 4200;

const app = express();

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const { AppServerModuleNgFactory } = require('main.server');

app.engine('html', (_, options, callback) => {
    const opts = { document: template, url: options.req.url };

    renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
    res.render('index', { req });
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
});
