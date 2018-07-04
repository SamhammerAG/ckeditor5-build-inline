CKEditor 5 inline editor build
==============================================

Custom inline editor build for CKEditor 5 with additional Plugins from Samhammer AG.

## Quick start

First, install the build from npm:

```bash
npm install --save @samhammer/ckeditor5-build-inline
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
