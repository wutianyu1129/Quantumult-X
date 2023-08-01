// ==UserScript==
// @name         Hide Ads on www.cc98.org
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide ads on www.cc98.org
// @author       You
// @match        https://www.cc98.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the CSS selector for the ad node you want to hide
    const adSelector = 'div.adButtons';

    // Function to hide the ad node
    function hideAd() {
        const adNode = document.querySelector(adSelector);
        if (adNode) {
            adNode.style.display = 'none';
        }
    }

    // Run the hideAd function when the page finishes loading
    window.addEventListener('load', hideAd);
})();
