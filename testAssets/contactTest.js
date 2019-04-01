/**
 * this is more a proof of concept, then a genuine test. 
 * if I add more values it fails because I'm not submitting the info after each entry. 
 */
module.exports = (pageObject, contactinfo) => {
    pageObject
        .pause(500)
        .click('@topContact')
        .pause(500)
        .addCon(contactinfo)
        pageObject.expect.element('@conFName').value.to.equal(contactinfo.FName)
        pageObject.expect.element('@conLName').value.to.equal(contactinfo.LName)
        pageObject.expect.element('@conEmail').value.to.equal(contactinfo.Email)
        pageObject.expect.element('@conPhone').value.to.equal(contactinfo.Phone)
        pageObject.expect.element('@conMess').value.to.equal(contactinfo.Mess)

}