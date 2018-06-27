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
  stages {
    stage('Example') {
      steps {
        ech "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
      }
    }
  }
}

node {
  echo "Running ${env.BUILD_ID"} ON ${env.JENKINS_URL}
}