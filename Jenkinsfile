pipeline {
    agent any
    stages {
	stage('Prepare build environment') {
	    steps {
                sh 'docker build -t node-builder -f Dockerfile.build .'
	    }
	}
        stage('Build') {
            steps {
                sh 'docker run -v $WORKSPACE:/app node-builder npm install'
            }
        }
        stage('dockerize') {
            steps {
	        sh 'dockit dockerize'
            }
        }
    }
}