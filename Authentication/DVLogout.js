describe('Selenium Test Case', function() {
  it('should execute test case without errors', function() {
    var text, value, bool, source, url, title;
    var TestVars = {};
    element(by.linkText(VARS.login)).click();
    text = element(by.tagName('html')).getText();
    expect(text).toContain("" + VARS.login);
    console.log(VARS.login + " has logged out successfully");
    element(by.linkText("Logout")).click();
    text = element(by.tagName('html')).getText();
    expect(text).toContain("" + "Login");
  });
});
