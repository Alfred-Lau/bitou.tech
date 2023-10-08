---
title: What is Bitou
description: Bitou is a database schema change and version control management tool for teams. It consists of a web console and a backend. The backend has a migration core to manage database schema changes. It also integrates with VCS to enable version controlled schema management.
---

Bitou is an open-source database DevOps tool, it's the GitLab for managing databases throughout the application development lifecycle. It offers a web-based workspace for DBAs and Developers to collaborate and manage the database change safely and efficiently.

![lifecycle](/images/change-query-secure-govern.webp)

> Bitou is GitLab/GitHub for Database, built for team collaboration.

As GitLab/GitHub provides a GUI and collaboration workspace for teams to manage code, Bitou does the similar job for managing database.
This is the **most significant difference from all existing schema migration, SQL client tools**.

Bitou complements the existing cloud provider's database platforms or the company's internal database operation platforms. While those platforms take care of the database instance level operations (e.g. provisioning a database instance), Bitou helps teams to use the provisioned database to build their application.

## Key Features

### [SQL Review](/docs/sql-review/overview/)

Bitou analyzes SQL changes to enforce rules in compliance with your organization's policy. The enforcement includes naming conventions, anti-SQL pattern detection and etc. Prod and non-prod environments can also enforce different rules respectively.

### [Database CI/CD and Change Automation](/docs/change-database/change-workflow/)

Like code review, Bitou streamlines the database change process. Within a single workflow, a database change can be reviewed and deployed from the dev environment all the way to the production environment.

### [SQL Web Editor](/docs/sql-editor/overview/)

A web-based SQL Editor to query and export data. DBAs no longer need to give away sensitive database credentials when Developers need to access the data.

### [Data Access Control and Governance](/docs/security/data-query/)

Bitou provides a suite of features to enable organizations to enforce data security policies, avoid data leaks and conform compliance.

### [Version Control with VCS Integration (GitOps)](/docs/vcs-integration/overview/)

Bitou keeps the complete schema change history. It also integrates with VCS systems. Teams can manage the SQL migration scripts in the VCS and trigger schema deployment on code commit.

### [Data Rollback and Disaster Recovery](/docs/change-database/rollback-data-changes/)

- Statement-level rollback

- Database-level manual and periodical backup and restore

- Point-in-time recovery (PITR)

## Comparison

### Database Change Management

If Liquibase, Flyway are Git, then Bitou is GitLab/GitHub. And as an open source project. Bitou
is growing way faster.

- [Bitou vs. Liquibase](/blog/Bitou-vs-liquibase/)
- [Bitou vs. Flyway](/blog/Bitou-vs-flyway/)

### SQL GUI Client

SQL GUI Client such as MySQL Workbench, pgAdmin, DBeaver, Navicat provide a GUI to interact with the
database. Bitou not only provides a GUI client, it can also enforce centralized data access control
for data security and governance.

- [Bitou vs. Navicat](/blog/stop-using-navicat/)
