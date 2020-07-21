---
title: developer experience
slug: developer-experience
category: dev
order: 3
---

### Stylus Education, London (freelance, Jan 2019-present)

As a key member of the Stylus Education team, I have built and deployed the Node, Python and React/Redux architecture for this London EdTech start-up. The company supports science, English and maths tutoring by providing students and tutors with bespoke practice exam-papers and detailed, targeted feedback reports.

#### Services I have implemented for Stylus:

- **Customer Dashboard** Customer-facing web app for customer admins, tutors and students to monitor the completion of learning cycles, pausing service, and reviewing outcomes over time.
- **In-house client** single page web-app to allow staff to monitor and execute product workflows. It includes a drag & drop interface for producing exam papers from the question bank, and an interface for assigning tasks to 3rd party partners **_(React/Redux, Amplify, amCharts, CI/CD with AWS Codebuild)_**
- **Client API** The REST API serving the webapps. Exposes the interface to our database and implements the service that generates our personalised exam papers **_(Python, Serverless Framework, Reportlab, AWS Lambda, S3, API Gateway, Cognito)_**
- **Paper Processing Service** a Node-based lambda service which receives PDFs via an email endpoint, parses the email and attachments, performs pdf-image conversion, OCR, and database updates **_(Lambda, Node, CloudFormation, Rekognition, AWS Step Functions, DynamoDb, SES, CI/CD with Seed)_**

---

### Finura Partners, London (freelance, 2019)

This successful London financial services company employed me to streamline how their financial advisors get new business prospects into their in-house tracker. After consulting with them on their requirements I delivered:

- **Frontend SPA** A web-app composed of a Formik form with dynamic fields and validation schema **_(React, Formik, Amplify)_**
- **Backend API** A REST API which securely updates their internal tracking system using the Google Apps APIs **_(AWS Lambda, API Gateway, Python)_**

The directors reported that the app has significantly reduced both overheads and errors associated with performing the tasks manually.

---

### Airtable Python Wrapper (open source contributor, 2020)

Through using this library for my project work I identified and implemented a way to make certain batch operations **≈10x faster than the previous implementation**. **_(Python, Tox, Pytest)_**
