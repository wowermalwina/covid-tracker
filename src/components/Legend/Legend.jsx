import React, { Component } from "react";
import styles from "./Legend.module.scss";

class Legend extends Component {
  handleSelectLegend = (label) => {
    this.props.handleSelectLegend(label);
  };

  render() {
    const { colors, fields, query } = this.props;

    return (
      <div className={styles.legend}>
        {fields.map((field, index) => (
          <div
            // className={styles.legendField}
            className={styles.legendField}
            key={index}
            onClick={this.handleSelectLegend.bind(this, field)}
          >
            <div
              className={`legend-icon ${
                query === field ? "legend-icon-active" : ""
              }`}
              style={{
                backgroundColor: colors[index],
              }}
            />
            <div
              className={`legend-label ${
                query === field ? "legend-label-active" : ""
              }`}
            >
              {field}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Legend;
