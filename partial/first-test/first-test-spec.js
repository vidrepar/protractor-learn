describe('Protractor Demo App', function() {

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(function () {

        browser.get('http://juliemr.github.io/protractor-demo');

    });

    afterEach(function () {

        browser.manage().logs().get('browser').then(function(browserLogs) {
            // browserLogs is an array of objects with level and message fields
            browserLogs.forEach(function(log){
                if (log.level.value > 900) { // it's an error log
                    console.log('Browser console error!');
                    console.log(log.message);
                }
            });
        });

    });

    it('should have a title', function () {

        expect(browser.getTitle()).toEqual('Super Calculator');

    });

    it('should add one and two', function () {

        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');

    });

    it('should add four and six', function () {

        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        goButton.click();

        expect(latestResult.getText()).toEqual('10');

    });

    it('should have a history', function () {

        add(4, 5);
        add(12, 23);

        expect(history.count()).toEqual(2);

        add(12, 23);

        expect(history.count()).toEqual(3);

        expect(history.first().getText()).toContain('12 + 23');

    });

});
