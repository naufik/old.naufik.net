pipeline {
  agent any

  stages {
    stage('Build and Test') {
      steps {
        sh 'npm install'
        sh 'ng test --karmaConfig=karma.jenkins.conf.js'
        junit '**/test-results.xml'
      }
    }
    stage('Production Grade Build') {
      steps {
        sh 'ng build --prod'
      }
    }
    stage('Staging') {
      steps {
        input 'Is this OK?'
      }
    }
    stage('Post-Build') {
      steps {
        archive includes: "dist/**/*"
      }
    }
  }
}
