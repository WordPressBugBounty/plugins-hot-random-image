/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { Panel, PanelBody, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	return (
		<div { ...useBlockProps() }>
			<InspectorControls key="setting">
			<Panel>
				<PanelBody title="Hot Random Image Options" initialOpen={true}>
					<TextControl className="blocks-base-control__input"
						label={"Path"}
						value={attributes.path}
						onChange={(val) => setAttributes({path: val})}
					/>
					<TextControl className="blocks-base-control__input"
						label={"Width"}
						value={attributes.width}
						onChange={(val) => setAttributes({width: val})}
					/>
					<TextControl className="blocks-base-control__input"
						label={"Height"}
						value={attributes.height}
						onChange={(val) => setAttributes({height: val})}
					/>
					<TextControl className="blocks-base-control__input"
						label={"Alt"}
						value={attributes.alt}
						onChange={(val) => setAttributes({alt: val})}
					/>
					<TextControl className="blocks-base-control__input"
						label={"Link"}
						value={attributes.link}
						onChange={(val) => setAttributes({link: val})}
					/>
				</PanelBody>
			</Panel>
			</InspectorControls>
			<img id="hot-random-image" decoding="async" style={{width:attributes.width, height:attributes.height}} src={hot_random_image_cover} alt={attributes.alt} />
		</div>
	);
}
