#!/usr/bin/env node

/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

const path = require('path');
const { bundler } = require('@ckeditor/ckeditor5-dev-utils');
const buildConfig = require('../build-config');
const fs = require('fs-extra');

console.log('Creating the entry file...');

var entryFile = path.join('src', 'ckeditor.js');
fs.ensureFileSync(entryFile);
bundler.createEntryFile(entryFile, buildConfig );

console.log('Done.');
