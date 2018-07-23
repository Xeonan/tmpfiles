FROM jenkinsci/blueocean

WORKDIR /tests

ADD . /tests

RUN ls -l /tests

USER root

RUN apk add nodejs nodejs-npm chromium firefox-esr xwininfo xvfb dbus eudev ttf-freefont fluxbox

RUN npm i -g testcafe

#USER jenkins
