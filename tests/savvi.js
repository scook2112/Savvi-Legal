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
        .expect.element('@plansVar').text.to.contain('Subscription Plans')
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
    'Side For': ()=> {
        savvi.sideFor()
    },
    'Side Fun': ()=> {
        savvi.sideFun()
    },
    'Side Launch': ()=> {
        savvi.sideLaunch()
    },
    'Side TG': ()=> {
        savvi.sideTG()
    },
}