const Markdoc = require("@markdoc/markdoc");

module.exports = {
    initArguments: {},
    configFunction: function (eleventyConfig, config = {}) {
        eleventyConfig.addTemplateFormats("markdoc.js");
        eleventyConfig.addExtension("markdoc.js", {
            compile: async (inputContent) => {
                const ast = Markdoc.parse(inputContent)
                const content = Markdoc.transform(ast, config);
                const html = Markdoc.renderers.html(content);
        
                return async () => {
                    return html;
                };
            }
        });
    }
};
