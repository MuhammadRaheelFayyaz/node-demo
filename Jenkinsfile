pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from the repository
                checkout scm
            }
        }
        stage('Setup Node.js') {
            steps {
                sh 'nvm install 20.17.0'
                sh 'nvm use 20.17.0'
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
