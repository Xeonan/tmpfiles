FROM testcafe/testcafe:latest

WORKDIR /tests

ADD . /tests

RUN ls -l /tests

CMD ["chromium:headless", "/tests/test-wiki.test.js"]
