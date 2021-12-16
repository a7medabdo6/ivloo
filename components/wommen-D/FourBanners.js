import React from "react";

function FourBanners({ url1, url2, url3, url4 }) {
  return (
    <>
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-ee23116 elementor-section-gap-no rey-mobiOffset elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="ee23116"
        data-element_type="section"
      >
        <div class="elementor-container elementor-column-gap-no">
          <div
            class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-fe5637d"
            data-id="fe5637d"
            data-element_type="column"
          >
            <div class="elementor-column-wrap--fe5637d elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-6b914cf elementor-widget elementor-widget-image"
                data-id="6b914cf"
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
            class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-08ef9d2"
            data-id="08ef9d2"
            data-element_type="column"
          >
            <div class="elementor-column-wrap--08ef9d2 elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-25b0618 elementor-widget elementor-widget-image"
                data-id="25b0618"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div class="elementor-widget-container">
                  <a href="https://ivloo.com/jeans-clothing/">
                    <img
                      width="500"
                      height="669"
                      src={url2}
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
            class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-8677705"
            data-id="8677705"
            data-element_type="column"
          >
            <div class="elementor-column-wrap--8677705 elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-f8eadd7 elementor-widget elementor-widget-image"
                data-id="f8eadd7"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div class="elementor-widget-container">
                  <a href="https://ivloo.com/shorts-clothing/">
                    <img
                      width="500"
                      height="669"
                      src={url3}
                      class="attachment-large size-large"
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
            class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ce3485c"
            data-id="ce3485c"
            data-element_type="column"
          >
            <div class="elementor-column-wrap--ce3485c elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-9e99e4f elementor-widget elementor-widget-image"
                data-id="9e99e4f"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div class="elementor-widget-container">
                  <a href="https://ivloo.com/shorts-clothing/">
                    <img
                      width="500"
                      height="669"
                      src={url4}
                      class="attachment-large size-large"
                      alt=""
                      loading="lazy"
                      sizes="(max-width: 500px) 100vw, 500px"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FourBanners;
