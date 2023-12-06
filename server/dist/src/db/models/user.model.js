"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const refersh_token_model_1 = require("./refersh-token.model");
let User = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({ tableName: "user", underscored: true })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_1.Model;
    let _instanceExtraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _password_decorators;
    let _password_initializers = [];
    let _isVerified_decorators;
    let _isVerified_initializers = [];
    let _verificationToken_decorators;
    let _verificationToken_initializers = [];
    let _passwordReset_decorators;
    let _passwordReset_initializers = [];
    let _refreshToken_decorators;
    let _refreshToken_initializers = [];
    var User = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.email = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.isVerified = __runInitializers(this, _isVerified_initializers, void 0);
            this.verificationToken = __runInitializers(this, _verificationToken_initializers, void 0);
            this.passwordReset = __runInitializers(this, _passwordReset_initializers, void 0);
            this.refreshToken = __runInitializers(this, _refreshToken_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "User");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _email_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _password_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _isVerified_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _verificationToken_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _passwordReset_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _refreshToken_decorators = [(0, sequelize_typescript_1.HasMany)(() => refersh_token_model_1.RefershToken, {
                onDelete: "CASCADE",
            })];
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: obj => "password" in obj, get: obj => obj.password, set: (obj, value) => { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isVerified_decorators, { kind: "field", name: "isVerified", static: false, private: false, access: { has: obj => "isVerified" in obj, get: obj => obj.isVerified, set: (obj, value) => { obj.isVerified = value; } }, metadata: _metadata }, _isVerified_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _verificationToken_decorators, { kind: "field", name: "verificationToken", static: false, private: false, access: { has: obj => "verificationToken" in obj, get: obj => obj.verificationToken, set: (obj, value) => { obj.verificationToken = value; } }, metadata: _metadata }, _verificationToken_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _passwordReset_decorators, { kind: "field", name: "passwordReset", static: false, private: false, access: { has: obj => "passwordReset" in obj, get: obj => obj.passwordReset, set: (obj, value) => { obj.passwordReset = value; } }, metadata: _metadata }, _passwordReset_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _refreshToken_decorators, { kind: "field", name: "refreshToken", static: false, private: false, access: { has: obj => "refreshToken" in obj, get: obj => obj.refreshToken, set: (obj, value) => { obj.refreshToken = value; } }, metadata: _metadata }, _refreshToken_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
})();
exports.User = User;
