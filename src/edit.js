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
import {
    useBlockProps,
    __experimentalUnitControl as UnitControl,
    useSetting,
} from '@wordpress/block-editor';

import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';

import {
    Button,
    BaseControl,
    __experimentalToolsPanelItem as ToolsPanelItem,
    __experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

import { useInstanceId } from '@wordpress/compose';

import { Icon } from '@wordpress/components';

const COVER_MIN_HEIGHT = 50;
const PlusIcon = () => <Icon icon="plus" />;

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
export default function Edit({ attributes, setAttributes, clientId, }) {

    const ALLOWED_MEDIA_TYPES = ['image'];

    const { images, minHeight, minHeightUnit } = attributes;

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

    const instanceId = useInstanceId(UnitControl);
    const inputId = `block-cover-height-input-${instanceId}`;
    const isPx = minHeightUnit === 'px';

    const min = isPx ? COVER_MIN_HEIGHT : 0;

    const units = useCustomUnits({
        availableUnits: useSetting('spacing.units') || [
            'px',
            'em',
            'rem',
            'vw',
            'vh',
        ],
        defaultValues: { px: '430', em: '20', rem: '20', vw: '20', vh: '50' },
    });

    return (
        <p {...useBlockProps()}>

            <InspectorControls __experimentalGroup="dimensions">
                <ToolsPanelItem
                    hasValue={() => !!minHeight}
                    label={__('Minimum height')}
                    isShownByDefault={true}
                    panelId={clientId}
                >
                    <BaseControl label={__('Height of slider')} id={inputId}>
                        <UnitControl
                            id={inputId}
                            min={min}
                            onBlur={(newMinHeight) => setAttributes({ minHeight: newMinHeight })}
                            onChange={(newMinHeight) => {
                                console.log('newMinHeight', newMinHeight)
                                setAttributes({ minHeight: newMinHeight })
                                console.log('attributes', attributes)
                            }}
                            onUnitChange={(nextUnit) => setAttributes({ minHeightUnit: nextUnit })}
                            style={{ maxWidth: 80 }}
                            unit={minHeightUnit}
                            units={units}
                            value={minHeight}
                        />
                    </BaseControl>
                </ToolsPanelItem>
            </InspectorControls>

            <h3 className="block-title">
                {__(
                    'Gutenberg Slideshow'
                )}
            </h3>
            <div className="gallery-image-container--edit">
                {
                    images.length > 0
                        ? images.map((image, index) =>
                            <div className="single-image-container">
                                <span className="remove-btn" onClick={() => removeImg(index)}>&times;</span>
                                <img className={`gallery-image current`} src={image.url} alt={image.alt} />
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
                        <Button icon={PlusIcon} className="add-image" variant="secondary" onClick={open}>Add Gallery Image</Button>
                    )}
                />
            </MediaUploadCheck>
        </p>
    );
}
