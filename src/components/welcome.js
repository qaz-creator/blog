import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="view ">
      <div className=" container ">
        <div className="d-flex flex-column mt-5 ">
          <div className="text-center text-light mt-5">
            <h1 className="display-3 pb-2 mt-5 ">
              <strong>Express with Blog System</strong>
            </h1>

            <h2 className="my-5">
              <strong>Free way of sharing your ideas</strong>
            </h2>

            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=c9B4TPnak1A"
              className="btn btn-outline-light btn-lg my-2"
            >
              <strong>Start Writing Your Blog</strong>
              <i class="fa fa-pencil ml-3"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="icon-bar">
        <a href="#" class="facebook">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#" class="twitter">
          <i class="fa fa-twitter"></i>
        </a>

        <a href="#" class="youtube">
          <i class="fa fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Welcome;
