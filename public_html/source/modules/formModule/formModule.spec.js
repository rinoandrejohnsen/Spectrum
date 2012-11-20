define({
    view: {
        render: {
            template: {module: 'text!source/modules/formModule/resources/templates/formTemplate.html'},
            css: {module: 'css!source/modules/formModule/resources/styles/formStyle.css'}
        },
        insert: {at: 'dom.first!aside'}
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