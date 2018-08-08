
CKEditor 5 inline editor build
==============================================

Custom inline editor build for CKEditor 5 with additional Plugins from Samhammer AG.

## Quick start

While development you can link plugins by its source code instead of package. This is done with lerna. (https://github.com/lerna/lerna)

### Setp 1
Just create a folder "packages" in the root of this project and checkout your plugin to this folder

See also: lerna.json

### Step 2
After checkout the project has to be initialized once before building it.

Just run the following command to initialize the project and make it linkable (see further information below):
```bash
yarn bootstrap
```

### Step 3
Run one of the following commands to create a production (minified) or dev version

```bash
yarn build
yarn builddev
```

## How to use
This build can be referenced in other projects while development.
This is done with the yarn link feature.

See also: https://yarnpkg.com/lang/en/docs/cli/link/

Yarn link is directly executed by the "yarn bootstrap" command. After this the development version of the package is provided for linking.

Execute the following command in your target project to use the dev version of the inline build:

```bash
yarn link @samhammer/ssp-ckeditor5-build-inline
``` 


Include in your JavaScript application:

```js
import InlineEditor from '@samhammer/ckeditor5-build-inline';

InlineEditor
	.create(document.querySelector('#editor'))
	.then(editor => {
		window.editor = editor;
	})
	.catch(err => {
		console.error(err.stack);
	});
```

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file.
