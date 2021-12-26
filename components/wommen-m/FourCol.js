import React from "react";

function FourCol({ url1, url2, url3, url4 }) {
  return (
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-4121bfb rey-section-stretched elementor-section-full_width elementor-section-gap-no rey-mobiOffset elementor-section-height-default elementor-section-height-default"
      data-id="4121bfb"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-no">
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-cdf7796"
          data-id="cdf7796"
          data-element_type="column"
        >
          <div class="elementor-column-wrap--cdf7796 elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-eaf5f0c elementor-widget elementor-widget-image"
              data-id="eaf5f0c"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div class="elementor-widget-container">
                <a href="https://ivloo.com/jeans-clothing/">
                  <img
                    width="500"
                    height="669"
                    src={url1}
                    class="attachment-full size-full"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 500px) 100vw, 500px"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-6f39549"
          data-id="6f39549"
          data-element_type="column"
        >
          <div class="elementor-column-wrap--6f39549 elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-cd221a9 elementor-widget elementor-widget-image"
              data-id="cd221a9"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div class="elementor-widget-container">
                <a href="">
                  <img
                    width="355"
                    height="475"
                    src={url2}
                    class="attachment-large size-large"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 355px) 100vw, 355px"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-244e210"
          data-id="244e210"
          data-element_type="column"
        >
          <div class="elementor-column-wrap--244e210 elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-213fc19 elementor-widget elementor-widget-image"
              data-id="213fc19"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div class="elementor-widget-container">
                <a href="https://ivloo.com/jeans-clothing/">
                  <img
                    width="355"
                    height="475"
                    src={url3}
                    class="attachment-full size-full"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 355px) 100vw, 355px"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-dcc361b"
          data-id="dcc361b"
          data-element_type="column"
        >
          <div class="elementor-column-wrap--dcc361b elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-56ab855 elementor-widget elementor-widget-image"
              data-id="56ab855"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div class="elementor-widget-container">
                <a href="https://ivloo.com/jeans-clothing/">
                  <img
                    width="355"
                    height="475"
                    src={url4}
                    class="attachment-full size-full"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 355px) 100vw, 355px"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourCol;
