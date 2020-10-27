#!/usr/bin/env groovy
pipeline {
  agent any
  tools {nodejs "latest"}
  stages {
    stage('preflight') {
      steps {
        echo sh(returnStdout: true, script: 'env')
        sh 'node -v'
      }
    }
    stage('build') {
      steps {
        echo 'building stage happening'
        sh 'npm --version'
        sh 'git log --reverse -1'
        sh 'npm install'
      }
    }
  }
}