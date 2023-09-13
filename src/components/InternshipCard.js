import { Col } from "react-bootstrap";

export const InternshipCard = ({ title, description, imgUrl,duration }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h6>{description}</h6>
          <p>{duration}</p>
        </div>
      </div>
    </Col>
  )
}