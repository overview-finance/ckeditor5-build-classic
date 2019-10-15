/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter"
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
// import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote"
// import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder"
// import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage"
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// import Image from "@ckeditor/ckeditor5-image/src/image"
// import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption"
// import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle"
// import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar"
// import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload"
// import Link from "@ckeditor/ckeditor5-link/src/link"
import List from '@ckeditor/ckeditor5-list/src/list';
// import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed"
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// import Table from "@ckeditor/ckeditor5-table/src/table"
// import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar"
import Font from '@ckeditor/ckeditor5-font/src/font';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	// UploadAdapter,
	Autoformat,
	Alignment,
	Bold,
	Italic,
	Underline,
	Strikethough,
	// BlockQuote,
	// CKFinder,
	// EasyImage,
	Heading,
	// Image,
	// ImageCaption,
	// ImageStyle,
	// ImageToolbar,
	// ImageUpload,
	// Link,
	List,
	// MediaEmbed,
	Paragraph,
	PasteFromOffice,
	// Table,
	// TableToolbar,
	Font
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'alignment:left',
			'alignment:center',
			'alignment:right',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			// "|",
			// "link",
			'|',
			// "bulletedList",
			// "numberedList",
			// "imageUpload",
			// "blockQuote",
			// "insertTable",
			// "mediaEmbed",
			'undo',
			'redo'
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', view: 'p', title: 'Paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Title 1' },
			{ model: 'heading2', view: 'h2', title: 'Title 2' },
			{ model: 'heading3', view: 'h3', title: 'Title 3' }
		]
	},
	fontSize: {
		options: [
			...[
				{ value: '-4', name: '-4 (Tiny)' },
				{ value: '-3', name: '-3 (Tiny)' },
				{ value: '-2', name: '-2 (Small)' },
				{ value: '-1', name: '-1 (Small)' }
			].map( val => ( {
				model: val.value,
				title: `${ val.name }`,
				view: {
					name: 'span',
					classes: [ `t-${ val.value }` ]
				}
			} ) ),
			'default',
			...[
				{ value: '1', name: '+1 (Normal)' },
				{ value: '2', name: '+2 (Normal)' },
				{ value: '3', name: '+3 (Medium)' },
				{ value: '4', name: '+4 (Medium)' },
				{ value: '5', name: '+5 (Large)' },
				{ value: '6', name: '+6 (Large)' },
				{ value: '7', name: '+7 (Extra Large)' },
				{ value: '8', name: '+8 (Extra Large)' },
				{ value: '9', name: '+9 (Huge)' },
				{ value: '10', name: '+10 (Huge)' },
				{ value: '11', name: '+11 (Massive)' },
				{ value: '12', name: '+12 (Massive)' }
			].map( val => ( {
				model: val.value,
				title: `${ val.name }`,
				view: {
					name: 'span',
					classes: [ `t-${ val.value }` ]
				}
			} ) )
		]
	},
	fontFamily: {
		options: [ 'default' ]
	},
	fontColor: {
		colors: [
			{
				color: 'rgb(0,0,0)',
				label: 'Black'
			},
			{
				color: 'rgba(0,0,0,0.8)',
				label: 'Black (80%)'
			},
			{
				color: 'rgba(0,0,0,0.6)',
				label: 'Black (60%)'
			},
			{
				color: 'rgba(0,0,0,0.4)',
				label: 'Black (40%)'
			},
			{
				color: 'rgba(0,0,0,0.2)',
				label: 'Black (20%)'
			},
			{
				color: 'rgb(255,255,255)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'rgba(255,255,255,0.8)',
				label: 'White (80%)',
				hasBorder: true
			},
			{
				color: 'rgba(255,255,255,0.6)',
				label: 'White (60%)',
				hasBorder: true
			},
			{
				color: 'rgba(255,255,255,0.4)',
				label: 'White (40%)',
				hasBorder: true
			},
			{
				color: 'rgba(255,255,255,0.2)',
				label: 'White (20%)',
				hasBorder: true
			},
			{
				color: 'rgb(81,152,237)',
				label: 'Blue'
			},
			{
				color: 'rgb(114,191,88)',
				label: 'Green'
			},
			{
				color: 'rgb(252,203,102)',
				label: 'Yellow'
			},
			{
				color: 'rgb(251,141,64)',
				label: 'Orange'
			},
			{
				color: 'rgb(235,79,90)',
				label: 'Red'
			},
			{
				color: '#212121',
				label: 'Nearly Black'
			},
			{
				color: '#212121',
				label: 'Dark Grey'
			},
			{
				color: '#9e9e9e',
				label: 'Grey'
			},
			{
				color: '#e0e0e0',
				label: 'Light Grey'
			},
			{
				color: '#f5f5f5',
				label: 'Nearly White'
			}
		]
	},
	// image: {
	// 	toolbar: [
	// 		"imageStyle:full",
	// 		"imageStyle:side",
	// 		"|",
	// 		"imageTextAlternative"
	// 	]
	// },
	// table: {
	// 	contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
	// },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
