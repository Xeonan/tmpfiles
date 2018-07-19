pipeline {
    agent {
        docker {
            image 'node:8-stretch'
            args '-p 3000:3000'
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
                sh 'cd demo-server && npm start'
            }
        }
        stage('Test') {
            setps{
                sh 'curl http://localhost:3000/'
            }
            success {
                echo 'Server is running!'
            }
        }
    }
}
