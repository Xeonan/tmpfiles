pipeline {
    agent none
    stages {
        stage('Preparation') {
            agent any
            steps {
                git 'https://github.com/pwcXiangnan/tmpfiles'
            }
        }
        stage('Start server') {
            agent {
                docker {
                    image 'node:8-stretch'
                    args '-p 31001:3000'
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
            agent any
            try {
                sh 'curl http://localhost:3000'
                sh 'curl http://localhost:31001/'
            } catch (e) {
                echo e
            }
            echo 'Server is accessible!'
        }
        stage('Test') {
            agent any
            steps{
                sh 'docker pull testcafe/testcafe'
                sh 'docker run -v `pwd`:/tests testcafe/testcafe \'chromium --no-sandbox\' /tests/test02.js'
            }
        }
    }
}
