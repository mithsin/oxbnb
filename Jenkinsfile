pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                sh 'node -v'
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