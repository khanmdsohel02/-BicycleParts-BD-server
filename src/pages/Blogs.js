import React from 'react';


const Blogs = () => {
    return (
        
        <div className='m-28'>
            <div className='my-16'>
                <h1 className=' text-2xl font-semibold uppercase'>How will you improve the performance of a React Application?</h1>
                <p className='capitalize'>Keeping component state local where necessary.
Memoizing React components to prevent unnecessary re-renders.
Code-splitting in React using dynamic import()
Windowing or list virtualization in React.
Lazy loading images in React.optimization is the number one thing that is on the mind of every dev when building any software, especially web apps. JS frameworks like Angular, React and others, have included some awesome configurations and features. Here, I’ll review the features and tricks that will help you optimize your app’s performance.

Regardless of the specific patterns and methods you use to optimize your code. It's always important to keep your code DRY. Always strive to reuse components — that’s guaranteed to help in writing optimized code. If you spend more time writing excellent code and less time re-writing mediocre code (with a much greater chance for errors) — wonderful things will happen. </p>
            </div>
            <div className='my-16'>
                <h1 className=' text-2xl font-semibold uppercase'>What are the different ways to manage a state in a React application?</h1>
                <p className='capitalize'>Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of "easier redux" abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.

There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks (and massive improvements to React context) this method of state management has been drastically simplified.

We often talk about React components as lego building blocks to build our applications, and I think that when people hear this, they somehow think this excludes the state aspect. The "secret" behind my personal solution to the state management problem is to think of how your application's state maps to the application's tree structure.</p>
            </div>
            <div className='my-16'>
                <h1 className=' text-2xl font-semibold uppercase'> How does prototypical inheritance work?</h1>
                <p className='capitalize'>JavaScript has only primitives types, null, undefined, and objects. A big world of objects. In JavaScript, contrary to languages like Java or PHP, there’s no concept of class that serves as a template to create objects.In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is named prototype.

Following the example, you can make pet a prototype of cat which will then inherit legs property.

When creating an object using the object literal, you can use the special property __proto__ to set the prototype of the created object.</p>
            </div>
           
            <div className='my-16'>
                <h1 className=' text-2xl font-semibold uppercase'>What is a unit test? Why should write unit tests?</h1>
                <p className='capitalize'>Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests. If the test relies on an external system, it is not a Unit Test. Unit Tests should be written during the design phase, prior to implementation to prevent defects from being deployed to production. They should be run every time the code is changed and provide a clear description of the feature being tested.

Unit Test coverage is a subtype of Code Coverage - it shows which lines of code were tested by Unit Tests. However, the goal is not to have a 100% Unit Test coverage. In fact, you should have as few Unit Tests as possible and cover as many types of behavior as possible. 100% Unit Test coverage exists only in a perfect world. While writing Unit Tests focus on behaviors - adding new tests just to improve coverage leads to tests without any purpose and you would be just wasting your time.

Unit Testing can be done manually but it is usually automated. In terms of automated tests, there is a concept called the test pyramid that shows how to efficiently balance the automated tests.</p>
            </div>
       </div>
    );
};

export default Blogs;