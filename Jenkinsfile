pipeline {
  environment {
        registry = "krishnaguy/nginx-test"
        registryCredential = 'dockerhub'
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
        sh  "npm run ng build -- --prod"
        script {
                 docker.build registry + ":$BUILD_NUMBER"
             }
      }
    }
  }
}
