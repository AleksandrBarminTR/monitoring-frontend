#!/bin/bash

# Environment variables are all set in the Dockerfile

OPTIONALS=
#if [ "${DISABLE_SSL}" = "true" ]; then
#    OPTIONALS="${OPTIONALS} --http:disableSSL"
#fi

cd /opt/app

DANGEROUSLY_DISABLE_HOST_CHECK=true

npm start