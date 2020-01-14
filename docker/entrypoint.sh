#!/bin/bash

# Environment variables are all set in the Dockerfile

OPTIONALS=
#if [ "${DISABLE_SSL}" = "true" ]; then
#    OPTIONALS="${OPTIONALS} --http:disableSSL"
#fi

cd /opt/app

npm start