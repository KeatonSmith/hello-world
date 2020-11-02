pipeline {
  agent any

  tools { nodejs 'NodeJS 15' }

  stages {
    stage('Install') {
      steps { 
        sh 'npm config set registry http://registry.npmjs.org/' 
        sh 'npm set progress=false' 
        sh 'npm install -g @angular/cli@latest'
        sh 'npm install -g @angular-devkit/build-angular'
        sh 'npm install' 
        }
    }

   //  stage('Test') {
   //    parallel {
   //      stage('Unit tests') {
   //          steps { sh 'npm test' }
   //      }
   //    }
   //  }

    stage('Test') {
      steps { sh 'npm run test' }
    }
  }

}