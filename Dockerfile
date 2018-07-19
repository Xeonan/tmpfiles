FROM testcafe/testcafe:latest

WORKDIR /tests

ADD . /tests

RUN ls -l /tests

CMD ["firefox", "/tests/test-wiki.test.js"]
