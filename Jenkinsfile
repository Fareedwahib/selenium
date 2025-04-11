pipeline {
  agent any

  //  tools {
  //   nodejs "Node14"
  // }

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

    stage('Run Google Search Test') {
      steps {
        sh 'node googleTest.js'
      }
    }
  }
}
