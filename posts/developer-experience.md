---
title: developer experience
slug: developer-experience
category: dev
order: 3
---

## StoneX, London

> fulltime, Nov 2020-present

StoneX is a Fortune 100 multinational which provides commodity trading services to a wide variety of clients. As a member of the development team supporting the metals front office, my role has mainly been on greenfield projects developing services in support of the base- and precious-metal trading and operations staff.

### Selected projects:

- **Trade Execution Platform**: Primary developer on the base metal team's flagship trade execution project. This project will afford in-house traders as well as clients direct access to market price and trade execution facility, from within our enterprise micro-frontend platform. I was responsible for making a basic POC production-ready, including a large re-write of the main Java backend service, a fully-responsive and accessible redesign of the trading widget, and full-stack design and implementation of a separate "activity log" widget.

1. Java
1. Typescript
1. Lightstreamer
1. FIX protocol
1. React
1. Kafka

- **Credit Optimisation Tool**: A data exploration and visualisation tool built in React/Typescript, with an express backend service acting as a cache/query layer. The tool affords front-office staff excellent visibility of their client accounts, allowing them to explore allocation of credit lines in comparison with revenue via a rich search, aggregation and filtering interface. The first phase release of this tool has been hugely successful, and I was asked to present it the CEO and executive committee as a potential strategic tool to be expanded and rolled out to other business lines.

1. React / Express
1. Typescript
1. Highcharts
1. Express
1. SQL, MongoDB, Postgres

- **Multi-stage CI/CD Pipelines**: I did a complete re-write of our teams CI/CD pipelines. This improvement allowed higher fidelity unit-testing inside replica production containers, as well as adding automated SemVer management for all our microservice containers.

1. Azure DevOps
2. CI/CD
3. Docker
4. Jest

- **Trade Blotter**: A React micro-frontend allowing the user to perform complex search queries on a trade information API, which is then presented to the user in a sortable/filterable/searchable table view.

1. React
1. Typescript
1. AG-Grid

- **SonarQube Integration**: I have overseen our team's integration with SonarQube for static code-checking and code-quality checks, incorporating it into our PR and CI/CD workflow.

## Stylus Education, London

> freelance, Jan 2019-late 2020

As a key member of the Stylus Education team, I have built and deployed the **Node, Python and React/Redux architecture** for this London EdTech start-up. The company supports science, English and maths tutoring by providing students and tutors with bespoke practice exam-papers and detailed, targeted feedback reports. (Note: as of mid-2021, Stylus is no longer trading).

### Services implemented:

- **Customer Dashboard**: Customer-facing web app for customer admins, tutors and students to monitor the completion of learning cycles, pausing service, and reviewing outcomes over time.
- **In-house client**: single page web app to allow staff to monitor and execute product workflows. It includes a drag & drop interface for producing exam papers from the question bank, and an interface for assigning tasks to 3rd party partners.

1. React/Redux
2. Amplify
3. amCharts
4. CI/CD&nbsp;with&nbsp;AWS&nbsp;Codebuild

- **Client API**: The REST API serving the web apps. Exposes the interface to our database and implements the service that generates our personalised exam papers.

1. Python
2. Serverless&nbsp;Framework
3. Reportlab
4. AWS&nbsp;Lambda
5. S3
6. API&nbsp;Gateway
7. Cognito

- **Paper Processing Service**: a Node-based lambda service which receives PDFs via an email endpoint, parses the email and attachments, performs pdf-image conversion, OCR, and database updates. Implemented using [**Serverless Framework and Step Functions**.](https://medium.com/swlh/how-to-add-human-decision-making-into-automated-workflows-using-aws-step-functions-serverless-46c0a3412fe4)

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

- **Frontend SPA** A web app composed of a Formik form with dynamic fields and validation schema

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
