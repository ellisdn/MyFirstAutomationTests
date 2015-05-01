describe('Selenium Test Case', function() {
  it('should execute test case without errors', function() {
    var text, value, bool, source, url, title;
    var TestVars = {};
    text = element(by.tagName('html')).getText();
    expect(text).toContain("" + "Search");
    text = element(by.tagName('html')).getText();
    expect(text).toContain("" + "Download");
    text = element(by.tagName('html')).getText();
    expect(text).toContain("" + "Upload");
    text = element(by.tagName('html')).getText();
    expect(text).toContain("" + "Admin");
    element(by.xpath("//nav/ul/li[1]/a")).click();
    text = element(by.xpath("//div[1]/ui-view/ui-view/ul/li[1]/a/span[2]")).getText();
      TestVars.{NumberOfSamples} = text;
    element(by.xpath("//div[1]/ui-view/ui-view/ul/li[1]/a/span[2]")).click();
    console.log(VARS.NumberOfSamples + " Samples found by search");
  });
});
