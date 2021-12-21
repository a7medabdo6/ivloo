import React from "react";

function BlackBanner({ url1 }) {
  return (
    <div
      class="elementor-element elementor-element-ddbf3eb elementor-widget elementor-widget-image"
      data-id="ddbf3eb"
      style={{ marginTop: "15px" }}
      data-element_type="widget"
      data-widget_type="image.default"
    >
      <div class="elementor-widget-container">
        <img
          width="2048"
          height="102"
          src={url1}
          class="attachment-full size-full"
          alt=""
          loading="lazy"
          sizes="(max-width: 2048px) 100vw, 2048px"
        />{" "}
      </div>
    </div>
  );
}

export default BlackBanner;
