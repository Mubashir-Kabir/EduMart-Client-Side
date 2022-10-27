import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="bg-white text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Blog
          </h2>
          <div className="divide-y divide-gray-300 text-left">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold text-xl md:col-span-5">
                what is cors?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold text-xl md:col-span-5">
                Why are we using firebase? What other options do we have to
                implement authentication?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                We are using Firebase Authentication for authenticate users,
                using passwords, phone numbers, popular federated identity
                providers like Google, Facebook and Twitter, and more. Firebase
                provides backend services, easy-to-use SDKs, and ready-made UI
                libraries to authenticate users to your app.
                <br />
                Usually, authentication by a server entails the use of a user
                name and password. Other ways to authenticate can be through
                cards, retina scans, voice recognition, and fingerprints.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold text-xl md:col-span-5">
                How does the private route work?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                The react private route component renders child components (
                children ) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold text-xl md:col-span-5">
                What is Node? How does Node work?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Node. js is a JavaScript runtime environment that achieves low
                latency and high throughput by taking a “non-blocking” approach
                to serving requests. In other words, Node. js wastes no time or
                resources on waiting for I/O requests to return. <br />
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
