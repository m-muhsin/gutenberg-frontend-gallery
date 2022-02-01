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

import { BlockAlignmentToolbar } from '@wordpress/block-editor';

import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import { Button } from '@wordpress/components';

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
export default function Edit({ attributes, setAttributes }) {

    const ALLOWED_MEDIA_TYPES = ['image'];

    const { images } = attributes;

    const removeImg = (removeIndex) => {
        const newImages = images.filter((img, i) => {
            if (removeIndex !== i) {
                return img;
            }
        })
        setAttributes({
            images: newImages
        })
    }

    return (
        <p {...useBlockProps()}>
            <h3>
                {__(
                    'Gutenberg Frontend Gallery'
                )}
            </h3>
            <div className="gallery-image-container--edit">
                {
                    images.length > 0
                        ? images.map((image, index) =>
                            <div className="single-image-container">
                                <span className="remove-btn" onClick={() => removeImg(index)}>x</span>
                                <img className={`gallery-image active`} src={image.url} alt={image.alt} />
                            </div>
                        )
                        : 'No images have been added to the Gallery.'
                }
            </div>

            <MediaUploadCheck>
                <MediaUpload

                    multiple={true}

                    onSelect={(media) => {

                        let updatedImages = [];

                        media.forEach((mediaItem) => {
                            updatedImages = [
                                ...updatedImages,
                                {
                                    url: mediaItem.url, alt: mediaItem.alt
                                }
                            ]
                        })

                        setAttributes({
                            images: [
                                ...images,
                                ...updatedImages
                            ]
                        })

                    }}

                    allowedTypes={ALLOWED_MEDIA_TYPES}

                    render={({ open }) => (
                        <Button onClick={open}>Open Media Library</Button>
                    )}

                />
            </MediaUploadCheck>
        </p>
    );
}
