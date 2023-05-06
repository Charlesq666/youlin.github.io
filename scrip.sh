#!/bin/bash

# Set your AWS credentials and other configurations here
AWS_ACCESS_KEY_ID="AKIA2HVNOX2EP76PLKHX"
AWS_SECRET_ACCESS_KEY="/rWoVYvEUHcZa0RA1C1Umauz+QOMrtM1+ktpsdn7"
AWS_REGION="us-east-2"
S3_BUCKET="quyoulin.com"
LOCAL_FOLDER="portfolio/out"

# Sync the local folder to the S3 bucket
aws s3 sync "$LOCAL_FOLDER" "s3://$S3_BUCKET" --acl public-read --cache-control "max-age=86400"
