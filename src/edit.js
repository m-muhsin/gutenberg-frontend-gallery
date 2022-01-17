/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';

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
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {

	const [active, setActive] = useState(0)

	return (
		<p {...useBlockProps()}>
			{__(
				'gutenberg-frontend-gallery'
			)}
			<div className="gallery-container">
				<button onClick={() => setActive(active > 0 ? (active - 1) : 2)}>left</button>

				<div className="gallery-image-container">
					<img className={active === 0 ? 'active' : ''} src="https://i.picsum.photos/id/929/600/400.jpg?hmac=mmmeqhlQps4_kzupk6aqkGVVTotK6zectPzy67Weymo" alt="from lorem pixel" />
					<img className={active === 1 ? 'active' : ''} src="https://i.picsum.photos/id/251/600/400.jpg?hmac=fgtXphw22xo5oD4Rr8iAOmLlSMBqp0nhdQdcR8ND1JU" alt="from lorem pixel" />
					<img className={active === 2 ? 'active' : ''} src="https://i.picsum.photos/id/152/600/400.jpg?hmac=JSE6ueTxsG8dYsvNUg2Ck-LXuzP8Hb1ZCI-1Q4etOdQ" alt="from lorem pixel" />
				</div>

				<button onClick={() => setActive(active < 2 ? (active + 1) : 0)}>right</button>
			</div>
		</p>
	);
}
