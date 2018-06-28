// pipeline {
//   agent {
//     docker {
//       image 'node:8-alpine'
//       args '-p 3000:3000'
//     }
//   }

//   stages {
//     stage('Build') {
//       steps {
//         sh 'npm install'
//         sh 'npm install -g jest'
//       }
//     }
//     stage('Test') {
//       steps {
//         sh 'jest'
//       }
//     }
//   }

//   post {
//     always {
//       echo "I'm done come and get me"
//     }
//     success {
//       echo "Test completed successfully"
//       deleteDir()
//       mail to: 'victoryjames@witts-stratts.com',
//             from: 'victoryjames@witts-stratts.com',
//             subject: "Build succeeded ${currentBuild.fullDisplayName}",
//             body: "We are live in production. with ${env.BUILD_URL}"
//     }
//     failure {
//       echo "Error completing test"
//     }
//   }
// }

pipeline {
  agent any
  environment {
    CC = 'clang'
  }

  // Added parameter
  parameters {
    string(name: 'Greeting', description: 'How should I greet the world?')
  }

  stages {
    stage('Example') {
      environment {
        DEBUG_FLAG = '-g'
      }
      steps {
        sh 'printenv'
      }
    }

    // stage('Test') {
    //   echo "I'm done testing"
    // }
  }

  post {
    always {
      junit '**/target/*.xml'
    }
    success {
      echo "${env.CurrentBuild}"
      echo "${env.CC}"
      mail to: 'Victory James Ugwudike <victoryjames@witts-stratts.com>',
          from: 'infrastructure@witts-stratts.com',
          subject: 'New Updated build',
          body: "This is the new update. ${env.CC}. Hello ${params.Greeting} World!"
    }
  }
}
