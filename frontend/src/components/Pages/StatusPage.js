import React from "react";

import Section from "../common/Section";
import { Title, Subtitle } from "../common/Typography";

class StatusPage extends React.Component {
  render() {
    return (
      <div className=" hero is-fullheight-with-navbar ">
        <Section>
          <Title title="Providing Quality Care with Patience" />
          <Subtitle subtitle={`${this.props.match.params.id}`} />
        </Section>
      </div>
    );
  }
}

export default StatusPage;
