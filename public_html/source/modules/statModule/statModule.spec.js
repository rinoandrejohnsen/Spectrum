define({
    view: {
        render: {
            template: {module: 'text!source/modules/statModule/resources/templates/statTemplate.html'},
            css: {module: 'css!source/modules/statModule/resources/styles/statStyle.css'}
        },
        insert: {at: 'dom.first!footer'}
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