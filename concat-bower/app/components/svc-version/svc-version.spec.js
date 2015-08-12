/// <reference path="_references.js" />
/// <reference path="services.js" />

'use strict';

describe('service', function () {
    beforeEach(module('app'));

    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });
});
