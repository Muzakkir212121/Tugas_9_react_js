import { Table, Tabs, Tab, Breadcrumb, Navbar, Nav, NavDropdown, Form, Button, Container, Spinner } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Akses Sport</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Berita</Nav.Link>
              <Nav.Link href="#action3">Live Scores</Nav.Link>
              <NavDropdown title="Piala & Liga" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#actioan3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action5">Transfer Pemain</Nav.Link>
              <Nav.Link href="#action6">Tim</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="col-md-12">
        <div className="row justify-content-end">
          <Breadcrumb style={{ background: "lightgrey", width: "30%", height: "30px", marginRight: "228px" }}>
            <Breadcrumb.Item href="#1">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#2">Liga Inggris</Breadcrumb.Item>
            <Breadcrumb.Item href="#3">Transfer Pemaini</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="text-center">
        <h3 className="d-inline-block" style={{ marginRight: "600px", marginTop: "20px" }}>
          Rumor Transfer Pemain
        </h3>
        <span className="d-inline-block">
          <Spinner animation="border" variant="primary" />
          <Spinner animation="grow" variant="primary" />
        </span>
      </div>
      <div className="d-flex justify-content-center">
        <div style={{ width: "960px" }}>
          <Tabs ActiveKey={activeTab} onSelect={handleTabChange}>
            <Tab eventKey="home" title="Semua Transfer">
              <div className="tbale-container">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama Pemain</th>
                      <th>Tim</th>
                      <th>Transfer</th>
                      <th>Proses Transfer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Marouane Fellaini</td>
                      <td>Manchester United</td>
                      <td>Shandong Luneng</td>
                      <td>D</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>John Doe</td>
                      <td>Team A</td>
                      <td>Team B</td>
                      <td>P</td>
                    </tr>
                    {/* Tambahkan baris tabel lainnya sesuai kebutuhan */}
                  </tbody>
                </Table>
              </div>
            </Tab>
            <Tab eventKey="liga" title="Liga Primer Inggris"></Tab>
            <Tab eventKey="seri" title="Seri A"></Tab>
            <Tab eventKey="divisi" title="Devisi Primera"></Tab>
            <Tab eventKey="bundesliga" title="bundesliga"></Tab>
            <Tab eventKey="liga1" title="Liga 1 Indonesia"></Tab>
            <Tab eventKey="proses" title="Proses Transfer"></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
