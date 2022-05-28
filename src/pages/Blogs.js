import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-24'>
           <Accordion className='m-5'>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Difference between javascript and nodejs?</Accordion.Header>
    <Accordion.Body>
       JavaScript is a proper high - level programming language used to create web scripts whereas Node.js is a run time environment built on google’ s v8 engine.
<br /><br />
      JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
<br /><br />
      JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’ t have the capability to add HTML.
<br /><br />
      JavaScript is mainly used to create front end web applications or develop client - side whereas Node.js is used on the back end development that is server - side development
<br /><br />
      JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++
      while using the v8 engine, it runs JavaScript outside the browser.
<br /><br />
      JavaScript requires any running environment as it can execute on any engine such as Firefox’ s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
                    <Accordion.Body>
                        <strong>NodeJS</strong>
                              <br /><br />
     Node.js is one of the most popular environments, taking the lead
     for the second consecutive year.While JavaScript is a programming language, Node.js is an ecosystem built on JS, leveraging the V8– Google server engine.V8 uses the JavaScript code to translate it into a faster machine code, readable by a computer.
<br />
     Before Node.js stepped in , JavaScript could only work in a browser
     for writing the frontend part of web - apps.Yet, using JavaScript
     for general - purpose applications was challenging.Rayan Dahl filled this gap in 2009 when he came up with a new environment to execute JavaScript separately from a web browser.
<br />
     Since then, JavaScript has been used to make much more than simple websites and interactive web apps.It expanded its use to microcontrollers, REST APIs, static file servers, and even Internet of Things(IoT) !
                        <br /><br /><br />
                        <strong>MongoDB</strong>
                        <br /><br />
MongoDB is basically an Open Source cross platform document oriented DB program, often classified as NoSQL DB program. What it means is that instead of the traditional table based RDBMS, the emphasis is on JSON with dynamic schemas.
 <br /><br />
So when should this be used?
 <br /><br />
High Write Load- If the need is to load rows of data without much security issues, you can be using it. However do avoid using with transactions, unless there is security implemented.
 <br /><br />
High Availability in Cloud- It is easier to set up a series of master-slave servers and recovery from failure is faster too.
 <br /><br />
Scalability- RDBMS has it’s own limitations when it comes to scalability, especially the performance which often tends to degrade. MongoDB comes with a built in solution for partition and database sharding.
 <br /><br />
Big Data sets And Unstable Schema- When you are dealing with tables larger than 1 GB, whose schema is never consistent, MongoDB is a pretty good option. Whenever you add a new field in MongoDB, it does not effect existing rows, and is faster, unlike a traditional RBDMS.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Differences between sql and nosql databases.?</Accordion.Header>
    <Accordion.Body>
     
                  There are a lot of databases used today in the industry.Some are SQL databases, some are NoSQL databases.The conventional database is SQL database system that uses tabular relational model to represent data and their relationship.The NoSQL database is the newer one database that provides a mechanism
                  for storage and retrieval of data other than tabular relations model used in relational databases.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
    <Accordion.Body>
     JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
<br /><br />
It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
<br /><br />
The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
<br /><br />
JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            
        
        </div>
    );
};

export default Blogs;