#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SampleAppCdkStack } from '../lib/sample-app-cdk-stack';
import { FoxyCdkStack } from '../lib/foxy_cdk-stack';

const app = new cdk.App();
new SampleAppCdkStack(app, 'SampleAppCdkStack');

new FoxyCdkStack(app, 'FoxyCdkStack');