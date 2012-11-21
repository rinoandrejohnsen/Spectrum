define({
    view: {
        render: {
            template: {module: 'text!source/spectrum/resources/templates/shellTemplate.html'},
            replace: {module: 'i18n!source/common/infrastructure/constants'},
            css: {module: 'css!source/spectrum/resources/styles/shellStyle.css'}
        },
        insert: {at: 'dom.first!.wrapper'}
    },
    plugins: [
        {
            module: 'wire/debug', 
            trace: {pointcut: /^((?!(model$|constructor$|_)).*)$/}
        },
        {
            module: 'wire/dom', 
            classes: {init: 'loading'}
        },
        {module: 'wire/domReady'},
        {module: 'wire/dom/render'}
    ]
});