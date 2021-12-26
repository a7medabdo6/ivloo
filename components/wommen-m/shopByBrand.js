import React from "react";

function shopByBrand({ title, image, color, firstword }) {
  return (
    <>
      <section
        class="
                          elementor-section
                          elementor-top-section
                          elementor-element
                          elementor-element-61e07e8
                          rey-section-stretched
                          elementor-section-content-middle
                          elementor-section-boxed
                          elementor-section-gap-default
                          elementor-section-height-default
                          elementor-section-height-default
                        "
        data-id="61e07e8"
        data-element_type="section"
      >
        <div
          class="
                            elementor-container elementor-column-gap-default
                          "
        >
          <div
            class="
                              elementor-column
                              elementor-col-100
                              elementor-top-column
                              elementor-element
                              elementor-element-ec65e38
                            "
            data-id="ec65e38"
            data-element_type="column"
          >
            <div
              class="
                                elementor-column-wrap--ec65e38
                                elementor-widget-wrap
                                elementor-element-populated
                              "
            >
              <div
                class="
                                  elementor-element
                                  elementor-element-66ee79d
                                  elementor-widget
                                  elementor-widget-heading
                                "
                data-id="66ee79d"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  {image && <img src={image} />}

                  {title && (
                    <h2
                      style={
                        color
                          ? {
                              height: "35px",
                              textAlign: "center",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              background: color,
                              color: "black",
                            }
                          : {}
                      }
                      class="
                                      elementor-heading-title
                                      elementor-size-default
                                    "
                    >
                      <span>{firstword ? `${firstword} ` : " SHOP BY "}</span>
                      <b style={{ marginInline: "2px" }}>
                        {title} <b></b>
                      </b>
                    </h2>
                  )}
                </div>
                <b>
                  <b> </b>
                </b>
              </div>
              <b>
                <b> </b>
              </b>
            </div>
            <b>
              <b> </b>
            </b>
          </div>
          <b>
            <b> </b>
          </b>
        </div>
        <b>
          <b> </b>
        </b>
      </section>
    </>
  );
}

export default shopByBrand;
