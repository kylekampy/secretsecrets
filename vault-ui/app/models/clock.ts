/// <reference path="../../typings/tsd.d.ts" />

module vaultUi.models {
    "use strict";

    export class Clock { 
        public get time(): Date { 
            return new Date();
        }
    }
}
