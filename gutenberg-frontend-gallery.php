<?php
/**
 * Plugin Name:       Gutenberg Frontend Gallery
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-frontend-gallery
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function create_block_gutenberg_frontend_gallery_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_gutenberg_frontend_gallery_block_init' );

/**
 * Enqueue script to the footer.
 *
 * @return void
 */
function gfg_block_register_scripts() {

	wp_register_script(
		'gfg-block-script',
		plugins_url( 'inc/script.js', __FILE__ ),
		[ 'jquery' ],
		true,
		true
	);

	wp_enqueue_script( 'gfg-block-script' );
}
add_action( 'wp_enqueue_scripts', 'gfg_block_register_scripts' );
