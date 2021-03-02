---
title: Spring Overview
date: 2020-09-28 20:00:00 +05:30
# modified: 2020-10-05 00:00:00 +05:30
tags: [Java]
category: [Software Development]
description: The Spring Framework.
image: "/assets/img/posts/2020-09-28-spring-overview/banner.jpg"
---

![Spring](/assets/img/posts/2020-09-28-spring-overview/banner.jpg)

*Spring Framework* is a Java platform that provides comprehensive infrastructure support for developing Java applications. Spring handles the infrastructure so you can focus on your application.

[Spring](https://spring.io) is not just a core framework; however, it might have started that way. There are a lot of [projects](https://spring.io/projects) underneath it to do different kinds of tasks! 
* RESTful services and Web Applications using [Spring MVC](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/web.html) 
* Data Access using [Hibernate](https://hibernate.org/), [Spring Data](https://spring.io/projects/spring-data), [Spring JDBC](https://spring.io/guides/gs/relational-data-access/) etc.
* [Authentication & Security](https://spring.io/projects/spring-security)
* [Test cases](https://spring.io/guides/gs/testing-web/)
* [Spring Boot](https://spring.io/projects/spring-boot/) which comes with pre-built production-ready features

They are all part of the *Spring family of projects* known as **'Spring Eco System'**.

<!-- There were a bunch of other Java frameworks to proceed with. However, considering *Spring*'s versatility, scalability as well as it's simplicity is what led me to choose it over any other frameworks.
Here, my **core purpose** is not to roam around all the technologies and functionalities that *Spring* offer; rather, just to focus on the **Server Side Technologies** for **Web Development**. -->

---

### Contents
* [Prerequisites](#prerequisites)
* [Core Concepts](#core-concepts)

### Prerequisites
**Core Java**: Core Java is the part of Java programming language that is used for creating or developing a general-purpose application. It is not possible to develop any advanced java applications without the knowledge of core java. Here's a [Core Java Application](https://github.com/arkomandal/core_java_concepts) for demo purpose.

**Servlet & JSP**: Most Java web frameworks, including *Spring MVC*, use servlets behind the scenes. Servlets are based upon a low-level API for handling requests and responses. Spring uses it for the web application over HTTP. It is nice to have the knowledge of Servlet & JSP before proceeding further. Here's a [web application using Servlet & JSP](https://github.com/arkomandal/servlet_jsp_concept) for demo purpose.

### Core Concepts
The underlying mechanism that Spring uses is the [Spring Container](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans-introduction).

**Spring Container**: The *Spring IoC Container* is at the core of the *Spring Framework* used to manage automatic [dependency injection]({% post_url 2020-11-12-dependency-injection %}) throughout the application. The container will create the objects, wire them together, configure them, and manage their complete life cycle from creation till destruction. 

The container just uses *DI* to manage the components that make up an application. These objects are called *Spring Beans*.

The container gets its instructions on what objects to instantiate, configure, and assemble by reading the configuration metadata provided. The configuration metadata can be represented either by XML, Java annotations, or Java code. The Spring IoC container makes use of Java POJO classes and configuration metadata to produce a fully configured and executable system or application.

Spring provides the following two distinct types of containers.

* **Spring BeanFactory Container**: This is the simplest container providing the basic support for DI and is defined by the *org.springframework.beans.factory.BeanFactory* interface.
* **Spring ApplicationContext Container**: Application context is an *implementation class* for IoC container. Spring manages our application services and object instances using Application Context. This container is defined by the *org.springframework.context.ApplicationContext* interface.

The ApplicationContext container includes all functionality of the BeanFactorycontainer, so it is generally recommended over BeanFactory.

```java
//without using ApplicationContext
public void AccountService {}
public void Account {
    AccountService accountService = new AccountService();
}

//using ApplicationContext
public void AccountService {}
public void Account {
    ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml"); //will discuss about it later
    AccountService accountService = (AccountService)context.getBean("some_account");
}
<bean id="some_account" class="com.packagename.AccountService"> //beans.xml
```