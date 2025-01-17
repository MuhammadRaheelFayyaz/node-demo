pipeline {
    agent any
 tools {nodejs "nodejs"}
    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from the repository
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        // stage('Run Tests') {
        //     steps {
        //         // Run the test suite
        //         sh 'npm test'
        //     }
        // }

        stage('Build') {
            steps {
                // Build the project
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            // Clean up workspace after every build
            cleanWs()
        }
    }
}
