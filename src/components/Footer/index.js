import React from "react";
import Container from "react-bootstrap/Container";
import * as Icon from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import "./footer.css";

export default function Footer() {
  return (
    <Navbar bg="primary" variant="dark" className="footer">
      <Container className="justify-content-center">
        <Navbar.Brand>Footer</Navbar.Brand>
        <Row>
          <a href="/">
            <i class="fa fa-facebook fa-lg text-white mr-md-5 mr-3 fa-2x"></i>
          </a>
        </Row>
      </Container>
    </Navbar>
    // <footer class="page-footer">
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-md-12 py-5">
    //         <div class="flex-center">
    //           {/* <!-- Facebook --> */}
    //           <a href="/">
    //             <i class="fa fa-facebook fa-lg text-white mr-md-5 mr-3 fa-2x"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}
