import React from "react";

const Blog = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="pb-5">
                    <h2 className=" text-start pb-3">Difference between javascript and nodejs</h2>
                    <p className="text-start">
                        Javascript is a programming language that is used to develop dynamic and web applications. NodeJS is an interpreter and environment for javascript which includes a bunch of
                        libraries. JavaScript normally follows standard of Java Programming language and Node.js is written in the C++ that only support the V8 engine. Javascript is mostly used on the
                        client-side whereas NodeJS dedicated to server-side. Javascript have capability to add HTML tags, however NodeJS does not capable to add HTML tags. To the node community, all
                        JavaScript is not important, but all node projects reflect the JavaScript community.
                    </p>
                </div>
                <div className="pb-5 pt-3">
                    <h2 className="text-start pb-3">When should you use nodejs and when should you use mongodb?</h2>
                    <p className="text-start">
                        NodeJS is a server-side JavaScript run-time environment. The Asynchronous pattern is used by default in NodeJS. That means, it does not await the completion of a task.
                        Meanwhile, NodeJS started to do another task. Therefore, when we need to do several things at the same time as well as need to share code between the browser and the backend
                        then nodeJS is the best choice for programmers. <br />
                        MongoDB is an open-source document database that uses a flexible schema to store data and is built on a horizontal scale-out architecture. JSON format is used by MongoDB to
                        store a lot of data. When we need to work on multiple servers and handle a large number of access requests, then MongoDB is the right choice.
                    </p>
                </div>

                <div className="pb-5 pt-3">
                    <h2 className="text-start pb-3">What is the purpose of jwt and how does it work?</h2>

                </div>
                <div className="pb-5 pt-3">
                    <h2 className="text-start pb-3">Differences between sql and nosql databases</h2>
                    <p className="text-start">
                        SQL databases are primarily called RDBMS or relational databases and NoSQL databases are primarily referred to as non-relational or distributed databases. These databases have
                        rigid schema such as Tables with fixed rows and columns whereas NoSQL have dynamic schema which is Flexible. SQL is Vertically scalable that means (scale-up with a larger
                        server, on the other hand NoSQL is horizontally scalable. SQL databases are not suited for hierarchical data storage however, NoSQL is preferred for Graph or hierarchical data.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
