pipeline {
  agent any

  parameters {
    string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Branch to build')
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: "${params.BRANCH_NAME}", url: 'https://github.com/Fareedwahib/selenium.git'
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
