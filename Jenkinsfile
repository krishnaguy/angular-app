pipeline {
  environment {
    registry="somethimg"
  }
  agent {
    docker {
      image '15.5.1-alpine3.10'
      }
    }
  stages {
    stage('Build'){
      steps {
        sh 'pwd'
      }
    }
  }
}
