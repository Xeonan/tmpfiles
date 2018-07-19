pipeline {
    agent none
    stages {
        stage('Preparation') {
            steps {
                git 'https://github.com/pwcXiangnan/tmpfiles'
            }
        }
        stage('Start server') {
            agent {
                docker {
                    image 'node:8-stretch'
                    args '-p 3001:3000'
                }
            }
            steps {
                echo 'Install requirements'
                sh 'pwd && ls -l ./'
                sh 'cd demo-server && npm install'
                echo 'Start server'
                sh 'cd demo-server && nohup npm start &'
            }
        }
        stage('Server Test') {
            agent none
            steps {
                sh 'curl http://localhost:3001/'
                echo 'Server is accessible!'
            }
        }
        stage('Test') {
            agent none
            steps{
                sh 'docker pull testcafe/testcafe'
                sh 'docker run -v `pwd`:/tests testcafe/testcafe \'chromium --no-sandbox\' /tests/test02.js'
            }
        }
    }
}
