---
title: Dependency Injection
date: 2020-11-12 00:00:00 +05:30
# modified: 2020-10-05 00:00:00 +05:30
tags: [Software Engineering]
description: In software engineering, dependency injection is a technique in which an object receives other objects that it depends on.
image: "/assets/img/posts/2020-11-12-dependency-injection/banner.jpg"
---

![Dependency Injection](/assets/img/posts/2020-11-12-dependency-injection/banner.jpg)

In software engineering, dependency injection is a *design pattern* in which an object receives other objects that it depends on. These other objects are called dependencies. In the typical "using" relationship the receiving object is called a client and the passed object is called a service.

* **Design Principle**: Design Priciples provide high level guidelines to design better software applications. They do not provide implementation guidelines and are not bound to any programming language.
* **Design Pattern**: It suggests a specific implementation for the specific object-oriented programming problem.

| Term   |   Type  |
|----------|:-------------:|
| Inversion of Control (IoC) | Principle |
| Dependency Injection | Pattern |

**Inversion of Control**: IoC is a *design principle* which recommends the inversion of different kinds of controls in object-oriented design to achieve loose coupling between application classes. That means, Objects do not create other objects on which they rely to do their work. Instead, they get the objects that they need from an outside source (for example, an xml configuration file).

**Dependency Injection**: Dependency Injection (DI) is a *design pattern* used to implement IoC. It allows the creation of dependent objects outside of a class and provides those objects to a class through different ways. Using DI, we move the creation and binding of the dependent objects outside of the class that depends on them.
The Dependency Injection pattern involves 3 types of classes.

* **Client Class**: The client class (dependent class) is a class which depends on the service class
* **Service Class**: The service class (dependency) is a class that provides service to the client class.
* **Injector Class**: The injector class injects the service class object into the client class.

The following figure illustrates the relationship between these classes:

![Dependency Injection Diagram](/assets/img/posts/2020-11-12-dependency-injection/DI.svg)