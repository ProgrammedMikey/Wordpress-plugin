<?php
 
/*
 
Plugin Name: Visual Composer Circle Graph
 
Description:  Visual Composer element for WordPress that displays data in a circle graph.
 
Version: 1.0
 
Author: Michael Da Silva
 
License: GPLv2 or later
 
*/


// don't load directly
if (!defined('ABSPATH')) {
    die('-1');
}

add_action(
/**
 * @param $api \VisualComposer\Modules\Api\Factory
 */
    'vcv:api',
    function ($api) {
        $elementsToRegister = [
            'donutChart',
        ];
        $pluginBaseUrl = rtrim(plugins_url(basename(__DIR__)), '\\/');
        /** @var \VisualComposer\Modules\Elements\ApiController $elementsApi */
        $elementsApi = $api->elements;
        foreach ($elementsToRegister as $tag) {
            $manifestPath = __DIR__ . '/elements/' . $tag . '/manifest.json';
            $elementBaseUrl = $pluginBaseUrl . '/elements/' . $tag;
            $elementsApi->add($manifestPath, $elementBaseUrl);
        }
    }
);
