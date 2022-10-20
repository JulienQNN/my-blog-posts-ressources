FROM python:3.8-slim-buster
LABEL maintainer="julienQNN"

# Install dependencies
RUN apt update \
&& apt install zip -y \
&& mkdir -p /layer/python/lib/python3.8/site-packages \
&& rm -rf /var/lib/apt/lists/*

# Copying your requirements.txt file in the container
COPY requirements.txt ./

#install packages, zip and copy to the root folder
RUN pip install --no-cache-dir -r requirements.txt -t layer/python/lib/python3.8/site-packages/ \
&& cd /layer \
&& zip -r lambdalayerpackage.zip *
