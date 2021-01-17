pipeline {
  environment {
        registry = "krishnaguy/nginx-test"
        registryCredential = 'dockerhub'
    }

  stages {
    stage('Build'){
      agent {
        docker {
          image 'node:15.5.1-alpine3.10'
          }
        }
      steps {
        sh 'ls -l'
        sh 'npm install'
        sh  "npm run ng build -- --prod"

      }
    }
    stage('Image'){
      agent none
      script {
                 docker.build registry + ":$BUILD_NUMBER"
             }

    }
  }
}
