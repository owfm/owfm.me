---
title: developer experience
slug: developer-experience
category: dev
order: 3
---

## Stylus Education, London

> freelance, Jan 2019-present

As a key member of the Stylus Education team, I have built and deployed the **Node, Python and React/Redux architecture** for this London EdTech start-up. The company supports science, English and maths tutoring by providing students and tutors with bespoke practice exam-papers and detailed, targeted feedback reports.

### Services implemented:

- **Customer Dashboard**: Customer-facing web app for customer admins, tutors and students to monitor the completion of learning cycles, pausing service, and reviewing outcomes over time
- **In-house client**: single page web-app to allow staff to monitor and execute product workflows. It includes a drag & drop interface for producing exam papers from the question bank, and an interface for assigning tasks to 3rd party partners

1. React/Redux
2. Amplify
3. amCharts
4. CI/CD&nbsp;with&nbsp;AWS&nbsp;Codebuild

- **Client API**: The REST API serving the web apps. Exposes the interface to our database and implements the service that generates our personalised exam papers

1. Python
2. Serverless&nbsp;Framework
3. Reportlab
4. AWS&nbsp;Lambda
5. S3
6. API&nbsp;Gateway
7. Cognito

- **Paper Processing Service**: a Node-based lambda service which receives PDFs via an email endpoint, parses the email and attachments, performs pdf-image conversion, OCR, and database updates. Implemented using Serverless Framework and Step Functions **[see this article]**(https://medium.com/swlh/how-to-add-human-decision-making-into-automated-workflows-using-aws-step-functions-serverless-46c0a3412fe4)

1. Lambda
2. Node
3. CloudFormation
4. Rekognition
5. AWS Step Functions
6. DynamoDb
7. SES
8. CI/CD with Seed

## Finura Partners, London

> freelance, 2019

This successful London financial services company employed me to streamline how their financial advisors get new business prospects into their in-house tracker. After consulting with them on their requirements I delivered:

- **Frontend SPA** A web-app composed of a Formik form with dynamic fields and validation schema

1. React
2. Formik
3. Amplify

- **Backend API** A REST API which securely updates their internal tracking system using the Google Apps APIs

1. AWS Lambda
2. API Gateway
3. Python

The directors reported that the app has significantly reduced both overheads and errors associated with performing the tasks manually.

## Airtable Python Wrapper

> open source contributor, 2020

Through using this library for my project work I identified and implemented a way to make certain batch operations [**≈10x faster than the previous implementation**](https://github.com/gtalarico/airtable-python-wrapper/pull/88).

1. Python
2. Tox
3. Pytest
