pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                sh 'node -v'
                sh 'npm install'
            }
        }
        stage("test") {
            steps {
                echo 'testing application'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploy application'
            }
        }
    }
}