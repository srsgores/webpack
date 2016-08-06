// For authoring Nightwatch tests, see http://nightwatchjs.org/guide#usage

"use strict";

module.exports = {
	"default e2e tests": (browser) => {
		browser
			.url("http://localhost:8080")
			.waitForElementVisible("#app", 5000)
			.assert.elementPresent(".logo")
			.assert.containsText("h1", "Hello World!")
			.assert.elementCount("p", 3)
			.end();
	}
};
