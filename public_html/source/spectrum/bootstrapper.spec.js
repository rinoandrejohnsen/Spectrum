define({
    theme: {module: 'css!source/spectrum/resources/styles/theme.css'},
    shell: {
        render: {
            template: {module: 'text!source/spectrum/resources/templates/shellTemplate.html'},
            replace: {module: 'i18n!source/common/infrastructure/constants'},
            css: {module: 'css!source/spectrum/resources/styles/shellStyle.css'}
        },
        insert: {at: 'dom.first!.wrapper'}
    },
    shapeModule: {
        create: {
            module: 'source/modules/shapeModule/shapeModule',
            args: [
                {$ref: 'shell'}
            ]
        }
    },
    formModule: {
        create: {
            module: 'source/modules/formModule/formModule'
        }
    },
    
    statModule: {
        create: {
            module: 'source/modules/statModule/statModule',
            args: [
                {$ref: 'formModule'}
            ]
        }
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