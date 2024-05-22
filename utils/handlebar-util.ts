import Handlebars from 'handlebars';

export const helpers = {
    'if_eq': function (a: any, b: any, opts: any) {
        if (a === b)
            return opts.fn(this);
        else
            return opts.inverse(this);
    },

    'ifStyleToggle': function (styleToggle: boolean, options: Handlebars.HelperOptions) {
        if (styleToggle) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }
};
