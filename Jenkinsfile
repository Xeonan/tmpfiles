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
                sh 'cd demo-server'
                sh 'npm install'
            }
        }
        stage('Run server') {
            steps {
                sh 'cd demo-server'
                sh 'npm start'
            }
        }
    }
}
