import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="bg-white text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Read For knoledge
          </h2>
          <div className="divide-y divide-gray-300 text-left">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold text-xl md:col-span-5">
                what is cors?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque in fugiat magni, quas animi enim veritatis deleniti ex.
                Impedit.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold text-xl md:col-span-5">
                Why are we using firebase? What other options do we have to
                implement authentication?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur quae, eos explicabo odit minima libero veniam
                similique quibusdam doloribus facilis ipsa accusantium vel
                maiores corrupti! Libero voluptate a doloribus?
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold text-xl md:col-span-5">
                How does the private route work?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                voluptates aspernatur dolores in consequatur doloremque
                inventore reprehenderit, consequuntur perspiciatis architecto.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold text-xl md:col-span-5">
                What is Node? How does Node work?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
