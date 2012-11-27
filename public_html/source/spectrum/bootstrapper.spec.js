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