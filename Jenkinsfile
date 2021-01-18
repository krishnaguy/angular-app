pipeline {
  agent any
  environment {

        registry = "krishnaguy/nginx-test"
        registryCredential = 'dockerhub'
        dockerImage = ''
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

      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
          docker.withRegistry('', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
            dockerImage.push('latest')
          }
          }
      }

    }
  }
}
