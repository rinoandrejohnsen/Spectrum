(function(curl) {
    var config = {
        baseUrl: '',
        packages: [
            {name: 'curl', location: 'library/curl/src/curl', main: 'curl'},
            {name: 'wire', location: 'library/wire', main: 'wire'},
            {name: 'cola', location: 'library/cola', main: 'cola'},
            {name: 'when', location: 'library/when', main: 'when'},
            {name: 'meld', location: 'library/meld', main: 'meld'},
            {name: 'poly', location: 'library/poly'}
        ],
        preloads: ['poly/all']
    };

    try {
        curl(config, ['source/spectrum/bootstrapper'], function(bootstrapper) {
            new bootstrapper();
        });
    }
    catch (error) {
        console.log("Error wiring the bootstrapper. Message: " + error + ".");
    }
})(curl);