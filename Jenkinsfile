pipeline {
    agent any
    stages {
        stage('dockerize') {
            steps {
	        sh 'dockit dockerize'
            }
        }
    }
}