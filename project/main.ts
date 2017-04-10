/// <reference path="../typings/globals/jquery/index.d.ts" />

import * as $ from 'jquery';

class Interaccion{
    constructor(){
        $('#btnOK').click(function(){
            console.log('Se hizo click');
            $(this).css('color','red');
        })
    }
}

new Interaccion();