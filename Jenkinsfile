
pipeline {
    environment {
        registryFrontend = 'iamstarcode/team-boot-frontend'
        registryBackend = 'iamstarcode/team-boot-backend'
        registryCredential = 'dockerhub'
        dockerImageFrontend = ''
        dockerImageBackend = ''
    }

    agent any

    tools { nodejs 'Nodjs16' }

    stages {
            stage('Unit Tests') {
            steps {
                script {
                        sh 'cd client/ && npm install --verbose'

                        //sh 'cd ..'
                        sh 'cd server/ && npm install --verbose'
                }
            }
            }

        stage('Building Docker Image') {
                steps {
                    script {
                        /* remove all container */
                        sh 'docker stop $(docker ps -aq)'

                        dir('client') {
                        dockerImageFrontend = docker.build registryFrontend + ':latest'
                        }

                        dir('server') {
                        dockerImageBackend = docker.build registryBackend + ':latest'
                        }
                    }
                }
        }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    script {
                        docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        dockerImageFrontend.push()
                        dockerImageBackend.push()
                        }
                    }
                }
            }

        stage('Deploying') {
                steps {
                sh 'docker-compose up -d'
                }
        }
    }
}
