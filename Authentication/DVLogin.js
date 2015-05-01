describe('Selenium Test Case', function() {
  it('should execute test case without errors', function() {
    var text, value, bool, source, url, title;
    var TestVars = {};
    browser.get("http://165.88.173.65:8100");
    element(by.id("email")).click();
    element(by.id("email")).sendKeys(VARS.login);
    element(by.xpath("//div[@class='panel-body']//button[.='Login']")).click();
    text = element(by.tagName('html')).getText();
    expect(text).toContain("" + VARS.login);
    text = element(by.linkText(VARS.login)).getText();
      TestVars.{emailaddress} = text;
    console.log(VARS.emailaddress + " logged in successfully");
  });
});
