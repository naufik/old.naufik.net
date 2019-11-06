pipeline {
  agent any

  stages {
    stage('Build and Test') {
      steps {
        sh 'npm install'
        sh 'ng test --karmaConfig=karma.jenkins.conf.js'
      }
    }
    stage('Production Grade Build') {
      steps {
        sh 'ng build --prod'
        junit '**/test-results.xml'
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
