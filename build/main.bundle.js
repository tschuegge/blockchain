webpackJsonp([1,4],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash__ = __webpack_require__(651);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockchainEntry; });

var BlockchainEntry = (function () {
    function BlockchainEntry(block) {
        this.block = block;
    }
    Object.defineProperty(BlockchainEntry.prototype, "block", {
        get: function () {
            return this.blockStorage;
        },
        set: function (block) {
            this.blockStorage = block;
            this.checkHash();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockchainEntry.prototype, "isValid", {
        get: function () {
            return this.isValidStorage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockchainEntry.prototype, "hash", {
        get: function () {
            return this.hashStorage;
        },
        enumerable: true,
        configurable: true
    });
    BlockchainEntry.prototype.checkHash = function () {
        this.hashStorage = __WEBPACK_IMPORTED_MODULE_0__hash__["a" /* Hash */].sha256(JSON.stringify(this.blockStorage));
        this.isValidStorage = this.hashStorage.substring(0, 4) === "1234";
    };
    return BlockchainEntry;
}());
//# sourceMappingURL=blockchain-entry.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_blockchain_component__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributedBlockchainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistributedBlockchainComponent = (function () {
    function DistributedBlockchainComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__shared_blockchain_component__["a" /* BlockchainComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* QueryList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* QueryList */]) === 'function' && _a) || Object)
    ], DistributedBlockchainComponent.prototype, "blockchains", void 0);
    DistributedBlockchainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-distributed-blockchain',
            template: __webpack_require__(737)
        }), 
        __metadata('design:paramtypes', [])
    ], DistributedBlockchainComponent);
    return DistributedBlockchainComponent;
    var _a;
}());
//# sourceMappingURL=distributed-blockchain.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blockchain_entry__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valid_blockchain__ = __webpack_require__(652);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockchainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockchainComponent = (function () {
    function BlockchainComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.entries = [];
        this.messages = [];
        this.highestBlockNo = 0;
    }
    Object.defineProperty(BlockchainComponent.prototype, "blockCount", {
        get: function () {
            return this.entries.length;
        },
        enumerable: true,
        configurable: true
    });
    BlockchainComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Gültige Blockchain laden
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__valid_blockchain__["a" /* ValidBlockchain */])().forEach(function (entry) {
            _this.entries.push(entry);
        });
        this.checkBlockchain();
    };
    BlockchainComponent.prototype.addBlock = function () {
        var entry = new __WEBPACK_IMPORTED_MODULE_1__blockchain_entry__["a" /* BlockchainEntry */]({
            blockno: this.highestBlockNo + 1,
            timestamp: Date.now(),
            nonce: 0,
            data: "",
            prev: this.entries[this.blockCount - 1].hash
        });
        this.entries.push(entry);
        this.checkBlockchain();
    };
    BlockchainComponent.prototype.removeBlock = function (block) {
        var indexToRemove = -1;
        for (var i = 0; i < this.entries.length; i++) {
            if (block === this.entries[i]) {
                indexToRemove = i;
                break;
            }
        }
        if (indexToRemove > -1) {
            this.entries.splice(indexToRemove, 1);
            this.checkBlockchain();
        }
    };
    BlockchainComponent.prototype.changeBlock = function ($event) {
        this.checkBlockchain();
    };
    BlockchainComponent.prototype.checkBlockchain = function () {
        this.isValid = true;
        for (var i = 0; i < this.entries.length; i++) {
            var entry = this.entries[i];
            // Nummer des vorherigen Blocks überschreiben
            if (i > 0) {
                entry.block.prev = this.entries[i - 1].hash; // Hash des vorherigen Blocks einfügen
            }
            else {
                entry.block.prev = "0000000000000000000000000000000000000000000000000000000000000000"; // Erster Block
            }
            // Höchste Blocknummer merken
            if (entry.block.blockno > this.highestBlockNo) {
                this.highestBlockNo = entry.block.blockno;
            }
            // Gültigkeit prüfen
            entry.checkHash();
            if (!entry.isValid) {
                this.isValid = false;
            }
        }
        this.change.emit(this);
    };
    BlockchainComponent.prototype.addMessage = function (type, text) {
        this.messages.push({ type: type, text: text });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', String)
    ], BlockchainComponent.prototype, "name", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], BlockchainComponent.prototype, "change", void 0);
    BlockchainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-blockchain',
            template: __webpack_require__(739),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlockchainComponent);
    return BlockchainComponent;
}());
//# sourceMappingURL=blockchain.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleBlockchainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleBlockchainComponent = (function () {
    function SingleBlockchainComponent() {
    }
    SingleBlockchainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-single-blockchain',
            template: __webpack_require__(740)
        }), 
        __metadata('design:paramtypes', [])
    ], SingleBlockchainComponent);
    return SingleBlockchainComponent;
}());
//# sourceMappingURL=single-blockchain.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 528;


/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(653);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_blockchain_single_blockchain_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distributed_blockchain_distributed_blockchain_component__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: "",
        redirectTo: "/singleblockchain",
        pathMatch: "full"
    },
    {
        path: "singleblockchain",
        component: __WEBPACK_IMPORTED_MODULE_2__single_blockchain_single_blockchain_component__["a" /* SingleBlockchainComponent */]
    },
    {
        path: "distributedblockchain",
        component: __WEBPACK_IMPORTED_MODULE_3__distributed_blockchain_distributed_blockchain_component__["a" /* DistributedBlockchainComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(736)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__single_blockchain_single_blockchain_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__distributed_blockchain_distributed_blockchain_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_block_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_blockchain_component__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__single_blockchain_single_blockchain_component__["a" /* SingleBlockchainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__distributed_blockchain_distributed_blockchain_component__["a" /* DistributedBlockchainComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_block_component__["a" /* BlockComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_blockchain_component__["a" /* BlockchainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* BsRootModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blockchain_entry__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockComponent = (function () {
    function BlockComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    BlockComponent.prototype.onBlockChanged = function ($event) {
        if ($event) {
            $event.preventDefault();
        }
        this.blockchainentry.checkHash();
        this.change.emit(this.blockchainentry);
    };
    BlockComponent.prototype.onBlockDelete = function ($event) {
        $event.preventDefault();
        this.delete.emit(this.blockchainentry);
    };
    BlockComponent.prototype.doMine = function () {
        this.blockchainentry.block.nonce = 0;
        var antiloopCounter = 0;
        do {
            this.blockchainentry.block.nonce = this.blockchainentry.block.nonce.valueOf() + 1; // Hässlicher Hack, wegen Typescript Bug!
            this.blockchainentry.checkHash();
            antiloopCounter++;
        } while (!this.blockchainentry.isValid && antiloopCounter < 1000000);
        this.onBlockChanged();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blockchain_entry__["a" /* BlockchainEntry */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__blockchain_entry__["a" /* BlockchainEntry */]) === 'function' && _a) || Object)
    ], BlockComponent.prototype, "blockchainentry", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], BlockComponent.prototype, "change", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], BlockComponent.prototype, "delete", void 0);
    BlockComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-block',
            template: __webpack_require__(738)
        }), 
        __metadata('design:paramtypes', [])
    ], BlockComponent);
    return BlockComponent;
    var _a;
}());
//# sourceMappingURL=block.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hash; });
/**
 * Bietet Hash-Funktionen an
 *
 * @export
 * @class Hash
 */
var Hash = (function () {
    function Hash() {
    }
    /**
     * Bildet einen SHA256-Hash
     *
     * @static
     * @param {string} stringToHash
     * @returns {string}
     */
    Hash.sha256 = function (stringToHash) {
        var hexCharsConst = '0123456789abcdef'.split('');
        var extra = [-2147483648, 8388608, 32768, 128];
        var shift = [24, 16, 8, 0];
        // tslint:disable-next-line:max-line-length
        var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
        var blocks = new Array();
        var code;
        var first = true;
        var end = false;
        var i;
        var j;
        var index = 0;
        var start = 0;
        var bytes = 0;
        var length = stringToHash.length;
        var s0;
        var s1;
        var maj;
        var t1;
        var t2;
        var ch;
        var ab;
        var da;
        var cd;
        var bc;
        var h0 = 0x6a09e667;
        var h1 = 0xbb67ae85;
        var h2 = 0x3c6ef372;
        var h3 = 0xa54ff53a;
        var h4 = 0x510e527f;
        var h5 = 0x9b05688c;
        var h6 = 0x1f83d9ab;
        var h7 = 0x5be0cd19;
        var block = 0;
        do {
            blocks[0] = block;
            blocks[1] = 0;
            blocks[2] = 0;
            blocks[3] = 0;
            blocks[4] = 0;
            blocks[5] = 0;
            blocks[6] = 0;
            blocks[7] = 0;
            blocks[8] = 0;
            blocks[9] = 0;
            blocks[10] = 0;
            blocks[11] = 0;
            blocks[12] = 0;
            blocks[13] = 0;
            blocks[14] = 0;
            blocks[15] = 0;
            blocks[16] = 0;
            for (i = start; index < length && i < 64; ++index) {
                code = stringToHash.charCodeAt(index);
                if (code < 0x80) {
                    blocks[i >> 2] |= code << shift[i++ & 3];
                }
                else if (code < 0x800) {
                    blocks[i >> 2] |= (0xc0 | (code >> 6)) << shift[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << shift[i++ & 3];
                }
                else if (code < 0xd800 || code >= 0xe000) {
                    blocks[i >> 2] |= (0xe0 | (code >> 12)) << shift[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << shift[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << shift[i++ & 3];
                }
                else {
                    code = 0x10000 + (((code & 0x3ff) << 10) | (stringToHash.charCodeAt(++index) & 0x3ff));
                    blocks[i >> 2] |= (0xf0 | (code >> 18)) << shift[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << shift[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << shift[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << shift[i++ & 3];
                }
            }
            bytes += i - start;
            start = i - 64;
            if (index === length) {
                blocks[i >> 2] |= extra[i & 3];
                ++index;
            }
            block = blocks[16];
            if (index > length && i < 56) {
                blocks[15] = bytes << 3;
                end = true;
            }
            var a = h0;
            var b = h1;
            var c = h2;
            var d = h3;
            var e = h4;
            var f = h5;
            var g = h6;
            var h = h7;
            // rotate right
            for (j = 16; j < 64; ++j) {
                t1 = blocks[j - 15];
                s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
                t1 = blocks[j - 2];
                s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
                blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
            }
            bc = b & c;
            for (j = 0; j < 64; j += 4) {
                if (first) {
                    ab = 704751109;
                    t1 = blocks[0] - 210244248;
                    h = t1 - 1521486534 << 0;
                    d = t1 + 143694565 << 0;
                    first = false;
                }
                else {
                    s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
                    s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
                    ab = a & b;
                    maj = ab ^ (a & c) ^ bc;
                    ch = (e & f) ^ (~e & g);
                    t1 = h + s1 + ch + K[j] + blocks[j];
                    t2 = s0 + maj;
                    h = d + t1 << 0;
                    d = t1 + t2 << 0;
                }
                s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
                s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
                da = d & a;
                maj = da ^ (d & b) ^ ab;
                ch = (h & e) ^ (~h & f);
                t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
                t2 = s0 + maj;
                g = c + t1 << 0;
                c = t1 + t2 << 0;
                s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
                s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
                cd = c & d;
                maj = cd ^ (c & a) ^ da;
                ch = (g & h) ^ (~g & e);
                t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
                t2 = s0 + maj;
                f = b + t1 << 0;
                b = t1 + t2 << 0;
                s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
                s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
                bc = b & c;
                maj = bc ^ (b & d) ^ cd;
                ch = (f & g) ^ (~f & h);
                t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
                t2 = s0 + maj;
                e = a + t1 << 0;
                a = t1 + t2 << 0;
            }
            h0 = h0 + a << 0;
            h1 = h1 + b << 0;
            h2 = h2 + c << 0;
            h3 = h3 + d << 0;
            h4 = h4 + e << 0;
            h5 = h5 + f << 0;
            h6 = h6 + g << 0;
            h7 = h7 + h << 0;
        } while (!end);
        return hexCharsConst[(h0 >> 28) & 0x0F] + hexCharsConst[(h0 >> 24) & 0x0F] +
            hexCharsConst[(h0 >> 20) & 0x0F] + hexCharsConst[(h0 >> 16) & 0x0F] +
            hexCharsConst[(h0 >> 12) & 0x0F] + hexCharsConst[(h0 >> 8) & 0x0F] +
            hexCharsConst[(h0 >> 4) & 0x0F] + hexCharsConst[h0 & 0x0F] +
            hexCharsConst[(h1 >> 28) & 0x0F] + hexCharsConst[(h1 >> 24) & 0x0F] +
            hexCharsConst[(h1 >> 20) & 0x0F] + hexCharsConst[(h1 >> 16) & 0x0F] +
            hexCharsConst[(h1 >> 12) & 0x0F] + hexCharsConst[(h1 >> 8) & 0x0F] +
            hexCharsConst[(h1 >> 4) & 0x0F] + hexCharsConst[h1 & 0x0F] +
            hexCharsConst[(h2 >> 28) & 0x0F] + hexCharsConst[(h2 >> 24) & 0x0F] +
            hexCharsConst[(h2 >> 20) & 0x0F] + hexCharsConst[(h2 >> 16) & 0x0F] +
            hexCharsConst[(h2 >> 12) & 0x0F] + hexCharsConst[(h2 >> 8) & 0x0F] +
            hexCharsConst[(h2 >> 4) & 0x0F] + hexCharsConst[h2 & 0x0F] +
            hexCharsConst[(h3 >> 28) & 0x0F] + hexCharsConst[(h3 >> 24) & 0x0F] +
            hexCharsConst[(h3 >> 20) & 0x0F] + hexCharsConst[(h3 >> 16) & 0x0F] +
            hexCharsConst[(h3 >> 12) & 0x0F] + hexCharsConst[(h3 >> 8) & 0x0F] +
            hexCharsConst[(h3 >> 4) & 0x0F] + hexCharsConst[h3 & 0x0F] +
            hexCharsConst[(h4 >> 28) & 0x0F] + hexCharsConst[(h4 >> 24) & 0x0F] +
            hexCharsConst[(h4 >> 20) & 0x0F] + hexCharsConst[(h4 >> 16) & 0x0F] +
            hexCharsConst[(h4 >> 12) & 0x0F] + hexCharsConst[(h4 >> 8) & 0x0F] +
            hexCharsConst[(h4 >> 4) & 0x0F] + hexCharsConst[h4 & 0x0F] +
            hexCharsConst[(h5 >> 28) & 0x0F] + hexCharsConst[(h5 >> 24) & 0x0F] +
            hexCharsConst[(h5 >> 20) & 0x0F] + hexCharsConst[(h5 >> 16) & 0x0F] +
            hexCharsConst[(h5 >> 12) & 0x0F] + hexCharsConst[(h5 >> 8) & 0x0F] +
            hexCharsConst[(h5 >> 4) & 0x0F] + hexCharsConst[h5 & 0x0F] +
            hexCharsConst[(h6 >> 28) & 0x0F] + hexCharsConst[(h6 >> 24) & 0x0F] +
            hexCharsConst[(h6 >> 20) & 0x0F] + hexCharsConst[(h6 >> 16) & 0x0F] +
            hexCharsConst[(h6 >> 12) & 0x0F] + hexCharsConst[(h6 >> 8) & 0x0F] +
            hexCharsConst[(h6 >> 4) & 0x0F] + hexCharsConst[h6 & 0x0F] +
            hexCharsConst[(h7 >> 28) & 0x0F] + hexCharsConst[(h7 >> 24) & 0x0F] +
            hexCharsConst[(h7 >> 20) & 0x0F] + hexCharsConst[(h7 >> 16) & 0x0F] +
            hexCharsConst[(h7 >> 12) & 0x0F] + hexCharsConst[(h7 >> 8) & 0x0F] +
            hexCharsConst[(h7 >> 4) & 0x0F] + hexCharsConst[h7 & 0x0F];
    };
    return Hash;
}());
//# sourceMappingURL=hash.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blockchain_entry__ = __webpack_require__(203);
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidBlockchain;

function ValidBlockchain() {
    return [
        new __WEBPACK_IMPORTED_MODULE_0__blockchain_entry__["a" /* BlockchainEntry */]({
            blockno: 1,
            timestamp: 1489875370124,
            nonce: 10851,
            data: "Inhalt des Blocks 1",
            prev: "0000000000000000000000000000000000000000000000000000000000000000"
        }),
        new __WEBPACK_IMPORTED_MODULE_0__blockchain_entry__["a" /* BlockchainEntry */]({
            blockno: 2,
            timestamp: 1489875370212,
            nonce: 41605,
            data: "Inhalt des Blocks 2",
            prev: "1234ddd5f5f9b6a3f0092b1f0404a9a1f4de1c032fdfe785f7c606bba004f762"
        }),
        new __WEBPACK_IMPORTED_MODULE_0__blockchain_entry__["a" /* BlockchainEntry */]({
            blockno: 3,
            timestamp: 1489875370239,
            nonce: 115951,
            data: "Inhalt des Blocks 3",
            prev: "1234b2d9a1378162ef463937cabbe544a8f44a42df49af7833326fe38fed4754"
        }),
        new __WEBPACK_IMPORTED_MODULE_0__blockchain_entry__["a" /* BlockchainEntry */]({
            blockno: 4,
            timestamp: 1489875370312,
            nonce: 6521,
            data: "Inhalt des Blocks 4",
            prev: "12348f96657d1f2a4d51274d93d0693d5b5ca09c8695a55de0df20bb6d899e29"
        }),
        new __WEBPACK_IMPORTED_MODULE_0__blockchain_entry__["a" /* BlockchainEntry */]({
            blockno: 5,
            timestamp: 1489875370358,
            nonce: 90836,
            data: "Inhalt des Blocks 5",
            prev: "1234f443f2ab6198842deae1be2a438fbd4d8669cd914a2b4ddb9fd726dd30e2"
        })
    ];
}
;
//# sourceMappingURL=valid-blockchain.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(220)();
// imports


// module
exports.push([module.i, "app-block {\n  display: inline;\n  margin-right: 10px; }\n\n.blockchainwrapper {\n  overflow-x: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 350,
	"./af.js": 350,
	"./ar": 356,
	"./ar-dz": 351,
	"./ar-dz.js": 351,
	"./ar-ly": 352,
	"./ar-ly.js": 352,
	"./ar-ma": 353,
	"./ar-ma.js": 353,
	"./ar-sa": 354,
	"./ar-sa.js": 354,
	"./ar-tn": 355,
	"./ar-tn.js": 355,
	"./ar.js": 356,
	"./az": 357,
	"./az.js": 357,
	"./be": 358,
	"./be.js": 358,
	"./bg": 359,
	"./bg.js": 359,
	"./bn": 360,
	"./bn.js": 360,
	"./bo": 361,
	"./bo.js": 361,
	"./br": 362,
	"./br.js": 362,
	"./bs": 363,
	"./bs.js": 363,
	"./ca": 364,
	"./ca.js": 364,
	"./cs": 365,
	"./cs.js": 365,
	"./cv": 366,
	"./cv.js": 366,
	"./cy": 367,
	"./cy.js": 367,
	"./da": 368,
	"./da.js": 368,
	"./de": 370,
	"./de-at": 369,
	"./de-at.js": 369,
	"./de.js": 370,
	"./dv": 371,
	"./dv.js": 371,
	"./el": 372,
	"./el.js": 372,
	"./en-au": 373,
	"./en-au.js": 373,
	"./en-ca": 374,
	"./en-ca.js": 374,
	"./en-gb": 375,
	"./en-gb.js": 375,
	"./en-ie": 376,
	"./en-ie.js": 376,
	"./en-nz": 377,
	"./en-nz.js": 377,
	"./eo": 378,
	"./eo.js": 378,
	"./es": 380,
	"./es-do": 379,
	"./es-do.js": 379,
	"./es.js": 380,
	"./et": 381,
	"./et.js": 381,
	"./eu": 382,
	"./eu.js": 382,
	"./fa": 383,
	"./fa.js": 383,
	"./fi": 384,
	"./fi.js": 384,
	"./fo": 385,
	"./fo.js": 385,
	"./fr": 388,
	"./fr-ca": 386,
	"./fr-ca.js": 386,
	"./fr-ch": 387,
	"./fr-ch.js": 387,
	"./fr.js": 388,
	"./fy": 389,
	"./fy.js": 389,
	"./gd": 390,
	"./gd.js": 390,
	"./gl": 391,
	"./gl.js": 391,
	"./he": 392,
	"./he.js": 392,
	"./hi": 393,
	"./hi.js": 393,
	"./hr": 394,
	"./hr.js": 394,
	"./hu": 395,
	"./hu.js": 395,
	"./hy-am": 396,
	"./hy-am.js": 396,
	"./id": 397,
	"./id.js": 397,
	"./is": 398,
	"./is.js": 398,
	"./it": 399,
	"./it.js": 399,
	"./ja": 400,
	"./ja.js": 400,
	"./jv": 401,
	"./jv.js": 401,
	"./ka": 402,
	"./ka.js": 402,
	"./kk": 403,
	"./kk.js": 403,
	"./km": 404,
	"./km.js": 404,
	"./ko": 405,
	"./ko.js": 405,
	"./ky": 406,
	"./ky.js": 406,
	"./lb": 407,
	"./lb.js": 407,
	"./lo": 408,
	"./lo.js": 408,
	"./lt": 409,
	"./lt.js": 409,
	"./lv": 410,
	"./lv.js": 410,
	"./me": 411,
	"./me.js": 411,
	"./mi": 412,
	"./mi.js": 412,
	"./mk": 413,
	"./mk.js": 413,
	"./ml": 414,
	"./ml.js": 414,
	"./mr": 415,
	"./mr.js": 415,
	"./ms": 417,
	"./ms-my": 416,
	"./ms-my.js": 416,
	"./ms.js": 417,
	"./my": 418,
	"./my.js": 418,
	"./nb": 419,
	"./nb.js": 419,
	"./ne": 420,
	"./ne.js": 420,
	"./nl": 422,
	"./nl-be": 421,
	"./nl-be.js": 421,
	"./nl.js": 422,
	"./nn": 423,
	"./nn.js": 423,
	"./pa-in": 424,
	"./pa-in.js": 424,
	"./pl": 425,
	"./pl.js": 425,
	"./pt": 427,
	"./pt-br": 426,
	"./pt-br.js": 426,
	"./pt.js": 427,
	"./ro": 428,
	"./ro.js": 428,
	"./ru": 429,
	"./ru.js": 429,
	"./se": 430,
	"./se.js": 430,
	"./si": 431,
	"./si.js": 431,
	"./sk": 432,
	"./sk.js": 432,
	"./sl": 433,
	"./sl.js": 433,
	"./sq": 434,
	"./sq.js": 434,
	"./sr": 436,
	"./sr-cyrl": 435,
	"./sr-cyrl.js": 435,
	"./sr.js": 436,
	"./ss": 437,
	"./ss.js": 437,
	"./sv": 438,
	"./sv.js": 438,
	"./sw": 439,
	"./sw.js": 439,
	"./ta": 440,
	"./ta.js": 440,
	"./te": 441,
	"./te.js": 441,
	"./tet": 442,
	"./tet.js": 442,
	"./th": 443,
	"./th.js": 443,
	"./tl-ph": 444,
	"./tl-ph.js": 444,
	"./tlh": 445,
	"./tlh.js": 445,
	"./tr": 446,
	"./tr.js": 446,
	"./tzl": 447,
	"./tzl.js": 447,
	"./tzm": 449,
	"./tzm-latn": 448,
	"./tzm-latn.js": 448,
	"./tzm.js": 449,
	"./uk": 450,
	"./uk.js": 450,
	"./uz": 451,
	"./uz.js": 451,
	"./vi": 452,
	"./vi.js": 452,
	"./x-pseudo": 453,
	"./x-pseudo.js": 453,
	"./yo": 454,
	"./yo.js": 454,
	"./zh-cn": 455,
	"./zh-cn.js": 455,
	"./zh-hk": 456,
	"./zh-hk.js": 456,
	"./zh-tw": 457,
	"./zh-tw.js": 457
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 712;


/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/\"><i class=\"fa fa-cubes\" aria-hidden=\"true\"></i> Blockchain Prototype</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-left\">\n      <li routerLinkActive=\"active\"><a routerLink=\"/singleblockchain\">Single Blockchain</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/distributedblockchain\">Distributed Blockchain</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"navbar-text\">© 2017 Jürg Danuser</li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container-fluid\" style=\"padding-top: 70px;\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<app-blockchain name=\"1\"></app-blockchain>\n<app-blockchain name=\"2\"></app-blockchain>\n<app-blockchain name=\"3\"></app-blockchain>\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\" [ngClass]=\"{'panel-success': blockchainentry.isValid, 'panel-danger': !blockchainentry.isValid}\" style=\"display: inline-block; width: 500px;\">\n  <div class=\"panel-heading\">\n    <a href=\"\" class=\"pull-right\" (click)=\"onBlockDelete($event)\"><i class=\"fa fa-times\"></i></a>\n    <h3 class=\"panel-title\" *ngIf=\"blockchainentry.isValid\">Gültiger Block</h3>\n    <h3 class=\"panel-title\" *ngIf=\"!blockchainentry.isValid\">Ungültiger Block</h3>\n  </div>\n  <div class=\"panel-body\">\n    <form (change)=\"onBlockChanged($event)\" class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label for=\"blockno\" class=\"col-sm-4 control-label\">Block Nr:</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control\" name=\"blockno\" id=\"blockno\" [(ngModel)]=\"blockchainentry.block.blockno\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"timestamp\" class=\"col-sm-4 control-label\">Timestamp:</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control\" name=\"timestamp\" id=\"timestamp\" [(ngModel)]=\"blockchainentry.block.timestamp\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"nonce\" class=\"col-sm-4 control-label\">Nonce:</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control\" name=\"nonce\" id=\"nonce\" [(ngModel)]=\"blockchainentry.block.nonce\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"data\" class=\"col-sm-4 control-label\">Daten:</label>\n        <div class=\"col-sm-8\">\n          <textarea class=\"form-control\" name=\"data\" id=\"data\" rows=\"4\" [(ngModel)]=\"blockchainentry.block.data\"></textarea>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"prev\" class=\"col-sm-4 control-label\">Vorheriger Block:</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" name=\"prev\" id=\"prev\" [(ngModel)]=\"blockchainentry.block.prev\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"hash\" class=\"col-sm-4 control-label\">Hash dieses Blocks:</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" name=\"hash\" id=\"hash\" disabled [(ngModel)]=\"blockchainentry.hash\">\n          <span class=\"help-block small text-muted\">Ein Block ist gültig wenn der Hash mit <em>1234</em> beginnt.</span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-4 col-sm-8\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"doMine()\">Mine</button>\n        </div>\n      </div>\n    </form>\n  </div>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<h3>Blockchain<span *ngIf=\"name\">: {{name}}</span>&nbsp;&nbsp;&nbsp;\n  <small *ngIf=\"isValid\" class=\"text-success\"><i class=\"fa fa-check\"></i> gültig</small>\n  <small *ngIf=\"!isValid\" class=\"text-danger\"><i class=\"fa fa-times\"></i> ungültig</small>\n</h3>\n<div *ngFor=\"let message of messages\">\n  <alert [type]=\"message.type\" [dismissOnTimeout]=\"5000\">{{message.text}}</alert>\n</div>\n<div class=\"blockchainwrapper\">\n  <div [style.width.px]=\"blockCount * (500+10) + 250\">\n    <app-block *ngFor=\"let entry of entries\" [blockchainentry]=\"entry\" (change)=\"changeBlock($event)\" (delete)=\"removeBlock($event)\"></app-block>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addBlock()\"><i class=\"fa fa-plus\"></i> Neuen Block hinzufügen</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<app-blockchain></app-blockchain>\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(529);


/***/ })

},[777]);
//# sourceMappingURL=main.bundle.js.map