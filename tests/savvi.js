var savvi = {}
let contactTest = require('../testAssets/contactTest')
let vaildCon = require('../testAssets/vaildConInfo')

module.exports = {
    beforeEach: browser => {
        savvi = browser.page.savviPage()
        savvi.navigate()
            .waitForElementVisible('@app', 5000)
    },
    after: browser => {
        browser.end()
    },
    'top Partners': ()=> {
        savvi
        .click('@partners')
        .expect.element('@PartVar').text.to.contain('Attorneys', 'Efficiency')
    },
    'Top contact': browser=> {
        vaildCon.forEach(contactinfo=> {
            contactTest(savvi, contactinfo)
        })
    },
    'Top login': ()=> {
        savvi
        .click('@topLogin')
        .expect.element('@loginVar').text.to.contain('Sign in to Savvi')
        savvi
        .setValue('@LEmail', 'Test@test.com')
        .setValue('@LPass', '123asdfafe')
        .expect.element('@LEmail').value.to.equal('Test@test.com')
    },
    'Top plans': ()=> {
        savvi
        .click('@topPlans')
        .expect.element('@plansVar').text.to.contain('Create An Account To Get Started')
    },
    'Solutions dropdown IP': ()=> {
        savvi.solIP()
    },
    'Solutions dropdown TE transition to IP,for,fin': ()=> {
        savvi.solTE()
        savvi.solIP()
        savvi.solFor()
        savvi.solFin()
    },
    'Solutions dropdown fin': ()=> {
        savvi.solFin()
    },
    'Solutions dropdown For': ()=> {
        savvi.solFor()
    },
    'can I create and acct': browser=> {
        savvi
        .click('@createAcct')
        .pause(500)
        .setValue('@acctFName', 'test')
        .setValue('@acctLName', 'Tester')
        .setValue('@acctEmail', 'test@testing.com')
        .setValue('@acctPass', '12345874634521')
        .click('@acctTerm')
        .expect.element('@acctFName').value.to.contain('test')
    },
    'entity, team | equity, counsel, Fundraising': ()=> {
        savvi.expect.element('@entity').text.to.contain('We set up up your entity, provide your registered')
        savvi.expect.element('@TE').text.to.contain('Streamline the hiring process')
        savvi.expect.element('@counsel').text.to.contain('Get better access you an attorney')
        savvi.expect.element('@Fundraising').text.to.contain('The tools and consultation ')
        // I plan on making this it's own funtion, and to have it verify all elements on the home screen
    },
    'Forgot password': ()=> {
            savvi.click('@topLogin')
            savvi.expect.element('@loginVar').text.to.contain('Sign in to Savvi')
            savvi.click('@forPass')
            savvi.setValue('@forEmail', 'Test@test.com')
            savvi.expect.element('@forEmail').value.to.contain('Test@test.com')
    }
}