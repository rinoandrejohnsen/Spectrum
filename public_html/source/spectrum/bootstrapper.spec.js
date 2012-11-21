define({
    theme: {module: 'css!source/spectrum/resources/styles/theme.css'},
    shell: {
        create: {
            module: 'source/spectrum/shell',
            args: [
                {$ref: 'shellView'}
            ]
        }
    },
    shellView: {
        wire: {
            spec: 'source/spectrum/views/shellView.spec'
        }
    },
    service : {
        create: {
            module: 'source/common/infrastructure/service'
        }
    },
    shapeModule: {
        create: {
            module: 'source/modules/shapeModule/shapeModule',
            args: [
                {$ref: 'service'}
            ]
        }
    },
    formModule: {
        create: {
            module: 'source/modules/formModule/formModule',
            args: [
                {$ref: 'service'}
            ]
        }
    },   
    statModule: {
        create: {
            module: 'source/modules/statModule/statModule',
            args: [
                {$ref: 'service'}
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