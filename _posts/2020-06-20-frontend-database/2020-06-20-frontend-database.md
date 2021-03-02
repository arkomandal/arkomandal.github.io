---
title: Frontend Database!
date: 2020-06-20 11:58:47 +05:30
# modified: 2020-09-10 16:49:47 +07:00
tags: [Database]
description: IndexedDB is a database that is built into browsers, much more powerful than localStorage.
image: "/assets/img/posts/2020-06-20-frontend-database/banner.jpg"
---

![Frontend Database](/assets/img/posts/2020-06-20-frontend-database/banner.jpg)

**IndexedDB** is a *database* that is built into browsers, much more powerful than *localStorage*.

***

### Features
* Stores almost any kind of values by keys, multiple key types.
* Supports transactions for reliability.
* Supports key range queries, indexes.
* Can store much bigger volumes of data than localStorage.

That power is usually excessive for traditional client-server apps. IndexedDB is intended for offline apps, to be combined with ServiceWorkers and other technologies.

Support for **IndexedDB** was added to *Firefox version 4*, *Google Chrome version 11*, and *Internet Explorer version 10*. *Safari* added support in version 8.

### Object store
To store something in IndexedDB, we need an object store.

An object store is a core concept of IndexedDB. It’s where the data is stored. A database may have multiple stores: one for users, another one for products, etc.

Despite being named an “object store”, primitives can be stored too.

**We can store almost any value, including complex objects.**

IndexedDB uses the *standard serialization algorithm* to clone-and-store an object. It’s like JSON.stringify, but more powerful, capable of storing much more datatypes.

**There must be a unique key for every value in the store.**

A key must have a type one of: number, date, string, binary, or array. It’s a unique identifier: we can search/remove/update values by the key.

### Points to Note
* It is not a relational database.
* IndexedDB API is mostly asynchronous.
* It is not a structured query language.
* It has supported to access the data from same domain.


To use **IndexedDB** in Angular projects use [ngx-index-db](https://www.npmjs.com/package/ngx-indexed-db). It is a *service* that wraps **IndexedDB** database in an Angular service. For reference use this [link](https://github.com/arkomandal/Angular-IndexedDB). 

Here goes the [demo](https://arkomandal.github.io/works/Angular-IndexedDB).