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
    shapeRegion: {
        render: {
            template: {module: 'text!source/modules/shapeModule/resources/templates/circleTemplate.html'}
        },
        insert: {after: {$ref: 'shell'}}
    },
    shapeCollection: {
        create: {
            module: 'source/modules/shapeModule/models/shapeCollection'
        },
        ready: {
            addCircle: {$ref: 'modeldata.rino'}
        }
    },
    shapeModel: {
        create: {
            module: 'source/modules/shapeModule/models/circleModel',
            args: [
                {$ref: 'modeldata.rino'}
            ]
        }
    },
    shapeService: {
        create: {
            module: 'source/modules/shapeModule/services/shapeService',
            args: [
                {$ref: 'shapeCollection'}
            ]
        }
    },
    shapeView: {
        create: {
            module: 'source/modules/shapeModule/views/circleView',
            args: [
                {$ref: 'shapeCollection'},
                {$ref: 'myReferenceData'}
            ]
        },
        ready: {
            show: ''
        }
    },
    modeldata: {
        rino: ['PHP', 'JavaScript', 'C#']
    },
    myReferenceData: {
        list: {$ref: 'shapeRegion'}
    },
    formView: {
        render: {
            template: {module: 'text!source/modules/formModule/resources/templates/formTemplate.html'},
            css: {module: 'css!source/modules/formModule/resources/styles/formStyle.css'}
        },
        insert: {after: {$ref: 'shapeRegion'}}
    },
    formController: {
        create: {
            module: 'source/modules/formModule/controllers/formController',
            args: [
                {'$ref': 'formView'},
                {'$ref': 'shapeCollection'}
            ]

        },
        on: {
            formView: {
                'submit:form': 'parseForm | addItem'
            }
        }
    },
    parseForm: { module: 'cola/dom/formToObject' },
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