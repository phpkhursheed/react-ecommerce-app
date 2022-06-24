import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../atoms/Header";
import Navigation from "../../atoms/Navigation";
import Footer from "../../atoms/Footer";

function StaticPageContent() {
  const params = useParams();
  return (
    <>
      <Header />
      <div className="container-fluid py-5">
        <div className="col-lg-12 col-md-12">
          <div className="row px-xl-5">
            <h2>{params.pageName.toUpperCase()}</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis, repellendus error? Deleniti ad, maxime deserunt libero
              accusantium corrupti nemo velit, numquam ab sapiente cum
              excepturi? Neque, unde magni. Quaerat, accusantium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              accusamus expedita mollitia natus optio tempore. Voluptatum,
              reprehenderit optio. Quidem exercitationem magni quibusdam
              officiis cum! Veniam molestiae harum quo inventore minus!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StaticPageContent;
