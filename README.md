# Automation Framework with WebDriveriO

This repository contains a sample automation testing framework template with webdriverIo, with local run and docker run support. It is made up with the boiler template from wdio.
This example used `wdio` test runner. This example is configured to run in the cloud via docker-compose, and can be
also run in local mode, but it doesn't need the local Selenium standalone server.

## Requirements

- Node.js is installed to your local system
- Docker is installed in your local system to do testing with Docker

## Usages

At the first, clone or download this dir. Then install dependencies:

```bash
$ npm install
```

This example has `devDependencies` below:

- [Jasmine](https://jasmine.github.io/): testing framework
- [WebdriverIO](http://webdriver.io/): WebDriver and test runner (wdio)
  - wdio-jasmine-framework
  - wdio-spec-reporter
  - wdio-chromedriver-service
  - wdio-geckodriver-service

Note: Selenium standalone server is not needed.

Run the local test
```bash
$ npm run test-chrome-local will run tests locally using chrome driver
$ npm run test-firefox-local will run tests locally using firefox via geckodriver
```
Results:
```
Execution of 1 spec files started at 2019-10-31T19:20:55.581Z

Starting ChromeDriver 77.0.3865.40 (f484704e052e0b556f8030b65b953dce96503217-refs/branch-heads/3865@{#442}) on port 9515
Only local connections are allowed.
Please protect ports used by ChromeDriver and related test frameworks to prevent access by malicious code.
[0-0] RUNNING in chrome - /tests/specs/first.js
[1572549657.192][WARNING]: This version of ChromeDriver has not been tested with Chrome version 78.
[0-0] PASSED in chrome - /tests/specs/first.js

 "spec" Reporter:
------------------------------------------------------------------
[chrome  mac os x #0-0] Spec: /Users/jorge.perez/WebdriverIOProjects/popflyxp-platform/packages/qa/cms-ui-automation/tests/specs/first.js
[chrome  mac os x #0-0] Running: chrome on mac os x
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] First Test Group
[chrome  mac os x #0-0]    ✓ gets the title of MDN toppage
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] 1 passing (1.3s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:03
...
```



Run with Docker Container
```
$ docker-compose run --rm wdio conf/chrome.docker.js
$ docker-compose run --rm wdio conf/firefox.docker.js
```
Results:
```
Starting cms-ui-automation_geckodriver_1  ... done
Starting cms-ui-automation_chromedriver_1 ... done
Waiting for host: chromedriver:4444 ... ok
Waiting for host: geckodriver:4444  ... ok

Execution of 1 spec files started at 2019-10-31T19:31:35.316Z

[0-0] RUNNING in chrome - /tests/specs/first.js
[0-0] PASSED in chrome - /tests/specs/first.js

 "spec" Reporter:
------------------------------------------------------------------
[chrome  linux #0-0] Spec: /opt/tests/specs/first.js
[chrome  linux #0-0] Running: chrome on linux
[chrome  linux #0-0]
[chrome  linux #0-0] First Test Group
[chrome  linux #0-0]    ✓ gets the title of MDN toppage
[chrome  linux #0-0]
[chrome  linux #0-0] 1 passing (1.2s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:02
```

## Test files

- `tests/`
  - `specs/`
    - `first.js` : the first group of tests
    - `second.js` : the second group of test
  - `wdio.shared.conf.js` : base settings for local run
  - `wdio.chrome.local.js` : settings for local run with chrome
  - `chrome.docker.js` : settings for docker with chrome
  - `firefox.docker.js` : settings for docker with firefox

## Docker files
  - `Dockerfile` : The Docker file for wdio run
  - `docker-compose.yml` : settings for docker container to run in AWS
