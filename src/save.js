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
			<div class="gallery-container" id="imagesContainer" data-images={dataImages}>

				{
					images.length > 1 &&
					<button class="btn-left">left</button>
				}

				<div class="gallery-image-container">
					{
						images.length > 0 ?
							images.map((image, index) => <img className={index === 0 ? "gallery-image active" : "gallery-image"} src={image.url} alt={image.alt} />)
							:
							'No images have been added to the Gallery.'
					}
				</div>

				{
					images.length > 1 &&
					<button class="btn-right">right</button>
				}
			</div>
		</p>

	);
}
