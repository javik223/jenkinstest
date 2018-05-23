pipeline {
    agent any
    stages {
      stage('Deploy') {
        steps {
          retry(3) {
            sh './flakey-deploy.sh'
          }

          timeout(time: 30, unit: 'SECONDS') {
            sh './health-check.sh'
          }
        }
      }
    }

    post {
      always {
        eccho 'This will always run'
      }
      success {
        echo 'This will run only if succesful'
      }
      failure {
        echo 'This will run only if failed'
      }
      unstable {
        echo 'This will run only if the run was marked as unstable'
      }
      changed {
        echo 'This will run only if the state of the Pipeline has changed'
        echo 'For example, if the Pipeline was previously failing but is now successful'
      }
    }
}