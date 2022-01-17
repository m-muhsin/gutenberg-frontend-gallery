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

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */


export default function save() {

	return (
		<p {...useBlockProps.save()}>
			<div class="gallery-container">

				<button class="btn-left">left</button>

				<div class="gallery-image-container">
					<img class='active' src="https://i.picsum.photos/id/929/600/400.jpg?hmac=mmmeqhlQps4_kzupk6aqkGVVTotK6zectPzy67Weymo" alt="from lorem pixel" />
					<img class='' src="https://i.picsum.photos/id/251/600/400.jpg?hmac=fgtXphw22xo5oD4Rr8iAOmLlSMBqp0nhdQdcR8ND1JU" alt="from lorem pixel" />
					<img class='' src="https://i.picsum.photos/id/152/600/400.jpg?hmac=JSE6ueTxsG8dYsvNUg2Ck-LXuzP8Hb1ZCI-1Q4etOdQ" alt="from lorem pixel" />
				</div>

				<button class="btn-right">right</button>
			</div>
		</p>

	);
}
