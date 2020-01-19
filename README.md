# Serverless Blueprint

[![](https://img.shields.io/github/license/ik-serverless/aws-sns-slack-subcriber-nodejs)](https://github.com/ik-serverless/aws-sns-slack-subcriber-nodejs)
![](https://github.com/ik-serverless/aws-sns-slack-subcriber-nodejs/workflows/NodeJS/badge.svg)
![](https://github.com/ik-serverless/aws-sns-slack-subcriber-nodejs/workflows/Validate/badge.svg)
![](https://img.shields.io/github/v/release/ik-serverless/aws-sns-slack-subcriber-nodejs?color=blue&include_prereleases)
![](https://img.shields.io/github/v/tag/ik-serverless/aws-sns-slack-subcriber-nodejs)
[![](https://img.shields.io/github/languages/code-size/ik-serverless/aws-sns-slack-subcriber-nodejs)](https://github.com/ik-serverless/aws-sns-slack-subcriber-nodejs)
[![](https://img.shields.io/github/repo-size/ik-serverless/aws-sns-slack-subcriber-nodejs)](https://github.com/ik-serverless/aws-sns-slack-subcriber-nodejs)
![](https://img.shields.io/github/languages/top/ik-serverless/aws-sns-slack-subcriber-nodejs?color=green&logo=typescript&logoColor=blue)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Commands

<!-- START makefile-doc -->
```
$ make help 
hooks                          Commit hooks setup
validate                       Validate with pre-commit hooks
changelog                      Update changelog
release                        Create release version
validatejs                     Validate solution
test                           Test solution
local                          Run locally 
```
<!-- END makefile-doc -->

## How to Contribute

Submit a pull request


import { SNSEventRecord, SNSMessage } from 'aws-lambda';