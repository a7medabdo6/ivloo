import React from "react";

function SubFourcol({ text1, text2, text3, text4 }) {
  return (
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-bceaaac rey-section-stretched elementor-section-full_width elementor-section-gap-no rey-mobiOffset elementor-section-height-default elementor-section-height-default"
      data-id="bceaaac"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-no">
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-a5ee569"
          data-id="a5ee569"
          data-element_type="column"
        >
          <div class="elementor-column-wrap--a5ee569 elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-b64d8b5 el-mark--hp elementor-widget elementor-widget-heading"
              data-id="b64d8b5"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div class="elementor-widget-container">
                <h2 class="elementor-heading-title elementor-size-default">
                  <mark>{text1}</mark>
                </h2>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-705e68c"
          data-id="705e68c"
          data-element_type="column"
        >
          <div class="elementor-column-wrap--705e68c elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-338fe9e el-mark--hp elementor-widget elementor-widget-heading"
              data-id="338fe9e"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div class="elementor-widget-container">
                <h2 class="elementor-heading-title elementor-size-default">
                  <mark> {text2} </mark>
                </h2>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-6cd73a5"
          data-id="6cd73a5"
          data-element_type="column"
        >
          <div class="elementor-column-wrap--6cd73a5 elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-4cffe82 el-mark--hp elementor-widget elementor-widget-heading"
              data-id="4cffe82"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div class="elementor-widget-container">
                <h2 class="elementor-heading-title elementor-size-default">
                  <mark> {text3} </mark>
                </h2>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-070f6e4"
          data-id="070f6e4"
          data-element_type="column"
        >
          <div class="elementor-column-wrap--070f6e4 elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-7f80d26 el-mark--hp elementor-widget elementor-widget-heading"
              data-id="7f80d26"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div class="elementor-widget-container">
                <h2 class="elementor-heading-title elementor-size-default">
                  <mark> {text4} </mark>
                </h2>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubFourcol;
