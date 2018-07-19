pipeline {
    agent {
        docker {
            image 'node:8-stretch'
            args '-p 3001:3000'
        }
    }
    stages {
        stage('Preparation') {
            steps {
                git 'https://github.com/pwcXiangnan/tmpfiles'
            }
        }
        stage('Build') {
            steps {
                sh 'pwd && ls -l ./'
                sh 'cd demo-server && npm install'
            }
        }
        stage('Run server') {
            steps {
                sh 'cd demo-server && nohup npm start &'
            }
        }
        stage('Test') {
            steps{
                sh 'curl http://localhost:3000/'
                echo 'Server is running!'
            }
        }
    }
    agent {
        docker {
            iamge 'testcafe/testcafe'
            args '-v /var/jenkins_home/workspace/test:/tests \'chromium --no-sandbox\' /tests/test-wiki.test.js'
        }
    }
}
