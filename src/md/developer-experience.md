---
title: developer experience
slug: developer-experience
category: Dev Experience
order: 3
---

## StoneX, London (2020–Present, Full Time)

StoneX is a Fortune 100 multinational providing commodity trading services. As part of the metals front-office development team, I focus on greenfield projects supporting base- and precious-metal trading operations.

### Selected Projects

**Forwards Pricer**: Developed a Next.js application for pricing precious metals forwards. Features include forward curve skew control, markup/spread curve adjustments, and interpolation for broken dates. I also designed and implemented an averaging and Asian swap pricer for accurately pricing more complex structures. This pricer is now used for deals with notional values of hundreds of millions of dollars every day and has become central to both sales and trading's pricing workflows.

1. Next.js
1. TypeScript
1. Bun
1. Websockets
1. Redis

**RegCap Playground**: Built a React tool allowing front office users to simulate the impact of trades on regulatory capital requirements. I worked closely with the treasury team and our regulatory accountants to validate this tool, and in the process identified a long-standing calculation error, fixing which led to a material improvement of our capital efficiency.

1. React
1. APIs

**Trade Execution Platform**: Led development of a trade execution platform for base metals. I re-wrote a Java backend service that had been created as a POC, created a fully responsive and accessible trade ticket widget, and implemented an additional "activity log" widget.

1. Java
1. TypeScript
1. React
1. Lightstreamer
1. FIX protocol
1. Kafka

**Credit Optimization Tool**: Created a React-based tool for visualizing credit line allocation versus revenue. Presented it to EXCO as a potential strategic tool for broader adoption.

1. React
1. Express
1. Highcharts
1. SQL

**CI/CD Pipelines**: Overhauled CI/CD pipelines to enable production-like unit testing and automated semantic versioning for microservices.

1. Azure DevOps
1. Docker

**Trade Blotter**: Designed a React micro-frontend for querying trade data via an API and displaying results in an interactive table.

1. React
1. AG-Grid

**SonarQube Integration**: Integrated SonarQube into the CI/CD workflow for static code analysis and quality checks.

**Confluent Cloud Migration**: Oversaw migration from on-prem K8S deployment of Kafka to use a cloud-based vendor solution.

1. Ansible
1. Apache Kafka
1. Helm

## Stylus Education, London (2019–2020; 2024–Present, Freelance)

As a key member of the Stylus Education team, I designed, built and deployed the Node, Python and React/Redux architecture for this London EdTech start-up. The company supports Science, English and Maths tutoring by providing students and tutors with bespoke practice exam-papers and detailed, targeted feedback reports. As of 2025, Stylus has secured it's second round of investment and has won support from the DoE.

### Services implemented:

- **Customer Dashboard**: Customer-facing web app for customer admins, tutors and students to monitor the completion of learning cycles, pausing service, and reviewing outcomes over time.
- **In-house client**: single page web app to allow staff to monitor and execute product workflows. It includes a drag & drop interface for producing exam papers from the question bank, and an interface for assigning tasks to 3rd party partners.

1. React/Redux
2. Amplify
3. amCharts
4. CI/CD with AWS Codebuild

- **Client API**: The REST API serving the web apps. Exposes the interface to our database and implements the service that generates our personalised exam papers.

1. Python
2. Serverless Framework
3. Reportlab
4. Lambda
5. S3
6. API Gateway
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

## Finura Partners, London (2019; 2024–2025, Freelance)

Streamlined client onboarding processes for this financial services firm.

Frontend SPA: Developed a dynamic form interface for client data entry.

1. React
1. Formik

Backend API: Built a secure API to integrate with Google Apps for data synchronization.

1. Python
1. Lambda

## Open Source Contribution – Pyairtable (2020)

Optimized batch operations in the Airtable Python library to [improve performance by ~10x](https://github.com/gtalarico/airtable-python-wrapper/pull/88).

1. Python
