FROM mcr.microsoft.com/devcontainers/base:bullseye

# install aws sam
RUN curl "https://github.com/aws/aws-sam-cli/releases/download/v1.100.0/aws-sam-cli-linux-x86_64.zip" \
  -L -o "aws-sam-cli-linux-x86_64.zip" \
  && unzip aws-sam-cli-linux-x86_64.zip -d sam-installation \
  && ./sam-installation/install
