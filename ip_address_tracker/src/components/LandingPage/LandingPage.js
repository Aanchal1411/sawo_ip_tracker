import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Card, Space } from "antd";
import pattern from "./../../img/pattern-bg.png";
import arrow from "./../../img/icon-arrow.svg";
import locationIcon from "./../../img/icon-location.svg";
import "antd/dist/antd.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "./landingPage.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const locIcon = new L.icon({
  iconUrl: locationIcon,
  iconSize: [20, 30],
});

const LandingPage = () => {
  const APP_KEY = "at_EMWg2CyasaoJHn3z2qsVd6zKTUgZw";
  const [IPdata, SetIPData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("8.8.8.8");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getIp();
    setLoaded(true);
  }, [query]);

  async function getIp() {
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${APP_KEY}&ipAddress=${query}`
    );
    const data = await response.json();
    console.log(data);
    SetIPData(data);
  }

  function handleChange(event) {
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <React.Fragment>
      {loaded ? (
        <div className="landingMain">
          <Layout
            className="appHeader"
            style={{ backgroundImage: `url(${pattern})` }}
          >
            <Row justify="center">
              <Col>
                <h1 className="appHeading">IP Address Tracker</h1>
              </Col>
            </Row>
            <Row justify="center">
              <form onSubmit={handleSubmit} className="search-form">
                <input
                  className="inputField"
                  type="text"
                  placeholder="Search for any IP address or domain"
                  onChange={handleChange}
                />
                <button className="searchButton" type="submit">
                  {" "}
                  <img src={arrow} height="15"></img>{" "}
                </button>
              </form>
            </Row>
            <Row>
              <Card
                // style={{margin:"0px"}}
                className="detailsLayout"
                bodyStyle={{ margin: "0px", padding: "0px" }}
              >
                <Row>
                  <Col xs={24} xl={6}>
                    <Space direction="vertical">
                      <span className="detailsHeading">IP ADDRESS</span>
                      <span className="detailsBody">{IPdata.ip}</span>
                    </Space>
                  </Col>
                  <Col className="sep" xs={24} xl={6}>
                    <Space direction="vertical">
                      <span className="detailsHeading">LOCATION</span>
                      <span className="detailsBody">
                        {IPdata?.location?.city}, {IPdata?.location?.country}
                        {IPdata?.location?.postalCode}
                      </span>
                    </Space>
                  </Col>
                  <Col className="sep" xs={24} xl={6}>
                    <Space direction="vertical">
                      <span className="detailsHeading">TIMEZONE</span>
                      <span className="detailsBody">
                        {"UTC" + IPdata?.location?.timezone}
                      </span>
                    </Space>
                  </Col>
                  <Col className="sep" xs={24} xl={6}>
                    <Space direction="vertical">
                      <span className="detailsHeading">ISP</span>
                      <span className="detailsBody">{IPdata.isp}</span>
                    </Space>
                  </Col>
                </Row>
              </Card>
            </Row>
          </Layout>
          {IPdata.location && (
            <MapContainer
              center={[IPdata.location?.lat, IPdata.location?.lng]}
              zoom={13}
              scrollWheelZoom={true}
              key={`${IPdata.location?.lat}${IPdata.location?.lng}`}
              style={{ height: "100vh", width: "100wh" }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[IPdata?.location?.lat, IPdata?.location?.lng]}
                icon={locIcon}
              >
                <Popup>
                  {IPdata?.location?.city}, {IPdata?.location?.country}
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
};

export default LandingPage;
