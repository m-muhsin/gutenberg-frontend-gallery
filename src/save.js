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


export default function save({ attributes }) {

	const { images } = attributes;
	const dataImages = [
		...images
	]

	return (
		<p {...useBlockProps.save()}>
			<div className="gallery-container" id="imagesContainer" data-images={dataImages}>

				<button className="btn-left">left</button>

				<div className="gallery-image-container">
					{
						images.length > 0 ? images.map((image, index) => <img src={image} className={`gallery-image ${index === 0 ? "active" : ""}`} />) : ''
					}
				</div>

				<button className="btn-right">right</button>
			</div>
		</p>

	);
}
