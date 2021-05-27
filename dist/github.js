"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var cheerio_1 = __importDefault(require("cheerio"));
exports.default = (function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, $, state, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default({
                        method: 'get',
                        url: "https://education.github.com/discount_requests/student_application",
                        // Set the content type header, so that we get the response in JSON
                        headers: {
                            Host: 'education.github.com',
                            'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0',
                            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                            'Accept-Language': 'en-GB,en;q=0.5',
                            'Accept-Encoding': 'gzip, deflate, br',
                            Referer: 'https://education.github.com/',
                            Connection: 'keep-alive',
                            Cookie: '_octo=GH1.1.1112847921.1620355635; logged_in=yes; dotcom_user=AbdumalikDev; _education_session=YlI0ZEdlU0orNVRUbFkyajZtTitTMTYzSjZuUGR0V3pIc3pwdGZhTXVmeGNHYmpjdFd4d1dURjRYN1B0TDZHYXEzSFpXeTQ3QnNKVVdORGQ5OTdMRTM3UVBxVXRHYTJtc25mL1JmQjFVUHRsT0k5WVo0MzF0VnNGSHZ6cHEyNnlIS0J0THluTml4V1BucFNVTURpY1BJZUNPaEJDRGhRcmNFbk9ZYnRkeTQzM2FvWUJydis3ZlRvNE41REFsV0ZhWDNUSHZBWWtEZkRTelFVUDN5M2Z0NGdwNFFPN0kzUElzSXhBSCtzcjBQQ3IxK0pRY2EwdG5ZZEN3OWJmVzJNTE0xSlZ2Y1JzQ1EzTWFGQUhJZHZIRHowdUphMjQ1NXVYa3hTWEpRbGpJMThRcVRLbGtLT2gzdjZtcnlVSWg5dWQvVEZUUFJrYndUVmdDaU1weE1uTFB3dWJYTEllOGFVQTZzTTlVazJhYndMbkFWbnlsMEI1RnFSVVFrZkh3YVVQM1l2S3NCN3ZITGsvdEc2Q3YrZml5TW01ZFVRRVBUMVRYNmhyVmVQMW5LUmFFaGN4NVFGdEhyUlpQVS82RGxTRWV2dHRFQ0RUcEM4TTFYQXRlZDZiSmE0eDhoWjJNZS9tTDVNY25Wa1lhZ2FSL2IwKzBIdzZsUmx0ekJLYVdRWHlad05rU292VUcwTGlDdTVHZlBUVFIzWjJtZGtiM0cxM2NhekJPZFB3UE84dm8xMkNxaUpsbkJFY2pZcnBYYU5kbkhKNGNkZkFIc0tQdkVvQzdES3JmWmhvalJFaHJybXMxTDVDVnFsUEUwUT0tLWJRVzdJZ3IwRTVZZnUxeEdwT2VPK2c9PQ%3D%3D--ea1b78c4dc50869da2c3b375539ad9bc187a2e5a; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D',
                            'Upgrade-Insecure-Requests': '1',
                            'If-None-Match': 'W/"90e94d7b558e58ade0dc2d80cc6e26c3"',
                            'Cache-Control': 'max-age=0, no-cache',
                            TE: 'Trailers',
                            Pragma: 'no-cache',
                        },
                    })];
            case 1:
                response = _a.sent();
                $ = cheerio_1.default.load(response.data);
                state = $('span.mr-6').find('strong.State').text();
                return [2 /*return*/, state];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
