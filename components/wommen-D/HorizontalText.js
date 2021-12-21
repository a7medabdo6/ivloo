import React from "react";

function HorizontalText({ text1, text, bg_color, color }) {
  return (
    <>
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-3fb58b0 elementor-section-content-middle elementor-section-height-min-height rey-section-bg--classic elementor-section-boxed elementor-section-gap-default elementor-section-height-default elementor-section-items-middle"
        data-id="3fb58b0"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
        style={{ backgroundColor: bg_color }}
      >
        <div class="elementor-container elementor-column-gap-default">
          <div
            class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3d64ec1"
            data-id="3d64ec1"
            data-element_type="column"
          >
            <div class="elementor-column-wrap--3d64ec1 elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-6cb306d elementor-widget__width-auto rey-widget-inline--stretch elementor-widget elementor-widget-heading"
                data-id="6cb306d"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2
                    class="elementor-heading-title elementor-size-default"
                    style={{ color: color }}
                  >
                    {text1}
                    <span style={{ fontWeight: "bold" }}>{text}</span>
                  </h2>
                  <b>
                    <b> </b>
                  </b>
                </div>
                <b>
                  <b></b>
                </b>
              </div>
              <b>
                <b></b>
              </b>
            </div>
            <b>
              <b></b>
            </b>
          </div>
          <b>
            <b></b>
          </b>
        </div>
        <b>
          <b></b>
        </b>
      </section>
    </>
  );
}

export default HorizontalText;
