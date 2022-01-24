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

    const { images } = attributes;

    return (
        <p {...useBlockProps()}>
            <h3>
                {__(
                    'Gutenberg Frontend Gallery'
                )}
            </h3>
            <div class="gallery-image-container">
                {
                    images.length > 0 
                    ? images.map((image, index) => <img src={image.url} alt={image.alt} className={`gallery-image active`} />)
                    : 'No images have been added to the Gallery.'
                }
            </div>

            <MediaUploadCheck>
                <MediaUpload

                    onSelect={(media) => {
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

                    render={({ open }) => (
                        <Button onClick={open}>Open Media Library</Button>
                    )}

                />
            </MediaUploadCheck>
        </p>
    );
}
