(this["webpackJsonpneilbostian-github-io"]=this["webpackJsonpneilbostian-github-io"]||[]).push([[51,81],{156:function(e,n,t){"use strict";var a=t(64);function i(e){e.register(a),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=i,i.displayName="handlebars",i.aliases=[]},64:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,i,o){if(t.language===a){var s=t.tokenStack=[];t.code=t.code.replace(i,(function(e){if("function"===typeof o&&!o(e))return e;for(var i,r=s.length;-1!==t.code.indexOf(i=n(a,r));)++r;return s[r]=e,i})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var i=0,o=Object.keys(t.tokenStack);!function s(r){for(var l=0;l<r.length&&!(i>=o.length);l++){var u=r[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=o[i],p=t.tokenStack[c],g="string"===typeof u?u:u.content,f=n(a,c),d=g.indexOf(f);if(d>-1){++i;var b=g.substring(0,d),k=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),h=g.substring(d+f.length),m=[];b&&m.push.apply(m,s([b])),m.push(k),h&&m.push.apply(m,s([h])),"string"===typeof u?r.splice.apply(r,[l,1].concat(m)):u.content=m}}else u.content&&s(u.content)}return r}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.75f5159a.chunk.js.map