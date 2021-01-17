pipeline {
  environment {
    registry="somethimg"
  }
  agent {
    docker {
      image 'node:15.5.1-alpine3.10'
      }
    }
  stages {
    stage('Build'){
      steps {
        sh 'ls -l'
        sh 'npm install'
        sh 'ng build --prod'
      }
    }
  }
}
