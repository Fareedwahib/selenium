pipeline {
  agent any

  environment {
    CHROME_BIN = "/usr/bin/google-chrome"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/Fareedwahib/selenium.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx mocha test/*.js --reporter mochawesome'
      }
    }

    stage('Publish Report') {
      steps {
        publishHTML (target: [
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'mochawesome-report',
          reportFiles: 'mochawesome.html',
          reportName: 'Mochawesome Test Report'
        ])
      }
    }
  }
}
