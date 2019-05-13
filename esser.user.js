// ==UserScript==
// @name         Esser
// @version      1
// @description  GBF userscripts collection
// @author       Lei
// @match        *://game.granbluefantasy.jp/*
// @match        *://gbf.game.mbga.jp/*
// @run-at document-end
// ==/UserScript==


// out of focus sound
(
    function()
    {
        'use strict';
        window.addEventListener("blur", function (e)
        {
            e.stopImmediatePropagation();
        },
        false);
    }
)
();
