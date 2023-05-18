import React from 'react';
import useTitle from '../../Title/UseTitle';

const Blog = () => {
    useTitle("Blog")
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 my-10">
        <div className="border-2 p-3">
          <h1 className="font-bold text-2xl">
            What is an access token and refresh token?
          </h1>

          <p>
            An access token and refresh token are both used in the context of
            authentication and authorization systems, particularly in web
            applications and APIs. They serve different purposes and are used
            together to ensure secure access to protected resources.
          </p>
          <h1 className="font-bold text-2xl">
            Compare SQL and NoSQL databases?
          </h1>

          <p>
            SQL databases use SQL as the standard query language for managing
            and manipulating data. SQL provides a powerful and expressive
            language for querying and manipulating structured data.
          </p>
          <p>
            NoSQL databases often use non-SQL query languages or APIs specific
            to their data model. For example, document-based NoSQL databases
            might use JSON-like queries, while graph databases have graph-based
            query languages
          </p>
        </div>
        <div className="border-2 p-3">
          <h1 className="font-bold text-2xl">
            What is express js and What is Nest JS?
          </h1>

          <p>
            Express.js is a minimal and lightweight web application framework
            for Node.js. It provides a simple and flexible API for handling HTTP
            requests, routing, middleware, and managing server-side logic.
            Express.js follows the "middleware" pattern, where a request passes
            through a series of middleware functions to handle various tasks
          </p>
          <p>
            Nest.js is a progressive and opinionated framework for building
            scalable and maintainable server-side applications with TypeScript.
            It takes inspiration from Angular's architecture and applies it to
            the server-side, providing a cohesive development experience.
          </p>
          <h1 className="font-bold text-2xl">
            What is MongoDB aggregate and how does it work ?
          </h1>

          <p>
             In MongoDB, the aggregate method is used to
            perform complex data analysis and aggregation operations on
            collections. It allows you to process and transform the data stored
            in MongoDB using a pipeline of stages that define various operations
            to be performed on the documents.
          </p>
        </div>
      </div>
    );
};

export default Blog;