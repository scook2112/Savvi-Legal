/**
 * all the commands that start with "sol" are used to just the solution dropdown menu
 * the commands that start with "side" test the options on the side of main page
 */

var savviCommands = {
  solIP: function() {
      this
        .click('@solutions') 
        .click('@solIP')
        .expect.element('@solipVar').text.to.contain('File for a Trademark')
        return this
    },
    solTE: function() {
      this
        .click('@solutions') 
        .click('@solTe')
        .expect.element('@solTeVar').text.to.contain('Adopt an Option Plan')
        return this
    },
    solFin: function() {
      this
        .click('@solutions') 
        .click('@solFin')
        .expect.element('@solFinVar').text.to.contain('Financing Documents')
        return this
    },
    solFor: function() {
      this
        .click('@solutions') 
        .click('@solFor')
        .expect.element('@solForVar').text.to.contain('Organizational Documents')
        return this
},
    sideFor: function() {
      this
        .click('@sideFor')
        .expect.element('@solForVar').text.to.contain('Organizational Documents')
        return this
    },
    sideFun: function() {
      this
      .click('@sideFun')
      .expect.element('@funVar').text.to.contain('The legal service you need')
      return this
    },
    sideLaunch: function() {
      this
      .click('@sideLaunch')
    .expect.element('@launchVar').text.to.contain('All the essentials to protect yourself')
    return this
  },
    sideTG: function() {
      this
      .click('@sideTG')
      .expect.element('@TGvar').text.to.contain('From offer letters to stock options')
      return this
    },
    addCon: function(contactinfo) {
      if(contactinfo.FName)
        this
          .setValue('@conFName', contactinfo.FName)
          if(contactinfo.LName)
        this
          .setValue('@conLName', contactinfo.LName)
        if(contactinfo.Email)
        this
          .setValue('@conEmail', contactinfo.Email)
        if(contactinfo.Phone)
        this
          .setValue('@conPhone', contactinfo.Phone)
          if(contactinfo.Mess)
        this
          .setValue('@conMess', contactinfo.Mess)
    return this}
}
module.exports = {
    url: 'https://www.savvi.legal/',
    commands: [savviCommands],
    elements: {
       app: '#comp-jm13gvohimgimage',
       solutions:'#comp-jkvmmx8x0label',
       solipVar: '#comp-jrqxsbauinlineContent',
       solTeVar: '#comp-jp4m2o72inlineContent',
       solFinVar: '#comp-jp4g7umyinlineContent',
       solForVar: '#comp-jp33tag7inlineContent',
       solIP: '#comp-jkvmmx8xmoreContainer3label',
       solTe: '#comp-jkvmmx8xmoreContainer2label',
       solFin: '#comp-jkvmmx8xmoreContainer1label',
       solFor: '#comp-jkvmmx8xmoreContainer0label',
       sideFor: '#comp-joj6kk9nlink',
       sideFun: '#comp-joj916sflink',
       funVar: '#comp-jp4g7ulzinlineContent',
       sideLaunch: '#comp-joj91d4zlink',
       launchVar: '#comp-jp4khu04inlineContent',
       sideTG: '#comp-joj91izwlink',
       TGvar: '#comp-jp4m2o63inlineContent',
       partners: '#comp-j9suf0qilabel',
       PartVar: '#comp-j9srqvrzinlineContent',
       topContact: '#comp-jrtrg4xwlabel',
       contactVar: '#comp-jqppmdm0form',
        conFName: '#comp-jqppmfee1input',
        conLName: '#comp-jqppmfe7input',
        conEmail: '#comp-jqppmfe9input',
        conPhone: '#comp-jqppmfeainput',
        conMess: '#comp-jqppmfeetextarea',
       topLogin: '#comp-jdxicelelabel',
        LEmail: 'input[name="email"',
        LPass: 'input[name="password"',
       loginVar: '.form__heading',
       topPlans: '#comp-j9suf0qi',
       plansVar: '#comp-jrqyrvn1inlineContent',
      }
    }