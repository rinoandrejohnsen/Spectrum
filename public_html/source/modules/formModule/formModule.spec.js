define({
    view: {
        render: {
            template: {module: 'text!source/modules/formModule/resources/templates/formTemplate.html'},
            css: {module: 'css!source/modules/formModule/resources/styles/formStyle.css'}
        },
        insert: {at: 'dom.first!aside'}
    },
    controller: {
        create: {
            module: 'source/modules/formModule/controllers/formController',
            args: [
                {'$ref': 'view'}
            ]

        },
        init: {
            addItem: 'Rino'
        },
        properties: {
            createTodo: {compose: 'parseForm' | 'createer'},
            createer: function(d) {debugger;}
        },
        on: {
            view: {
                'submit:form': 'createTodo'
            }
        },
        connect: {
            'todos.onSubmit': 'todos.findNode | todos.findItem'
        }
    },
    todos: {
        create: {
            module: 'cola/Hub',
            args: {
                strategyOptions: {
                    validator: {module: 'source/common/infrastructure/validateTodo'}
                }
            }
        },
        before: {
            add: 'cleanTodo | controller.addItem',
            update: 'cleanTodo'
        }
    },
    parseForm: {module: 'cola/dom/formToObject'},
    cleanTodo: {module: 'source/common/infrastructure/cleanTodo'},
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
        {module: 'wire/dom/render'},
        {module: 'wire/on'},
        {module: 'wire/connect'},
        {module: 'cola'},
        {module: 'wire/aop'}
    ]
});