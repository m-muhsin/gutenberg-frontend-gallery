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

    // const [active, setActive] = useState(0)
    const { images } = attributes;

    console.log('images', images)

    return (
        <p {...useBlockProps()}>
            {__(
                'gutenberg-frontend-gallery'
            )}

            <button class="btn-left">left</button>

            <div class="gallery-image-container">
                {
                    images.length > 0 ? images.map((image, index) => <img src={image.url} alt={image.alt} className={`gallery-image active`} />) : ''
                }
            </div>

            <button class="btn-right">right</button>

            <MediaUploadCheck>
                <MediaUpload

                    onSelect={(media) => {
                        console.log('images 1', images)
                        console.log('images 2', images)

                        let updateImages = {
                            url: media.url, alt: media.alt
                        }

                        setAttributes({
                            images: [
                                ...images,
                                updateImages
                            ]
                    })

                    }}

                allowedTypes={ALLOWED_MEDIA_TYPES}

                    // value={images ? images[images.length - 1] : null}

                render={({ open }) => (
                    <Button onClick={open}>Open Media Library</Button>
                )}

                />
            </MediaUploadCheck>
        </p>
    );
}
