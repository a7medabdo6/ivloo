import React from "react";

function BigBanner({ url }) {
  return (
    <>
      <section
        class="
                                                    elementor-section
                                                    elementor-top-section
                                                    elementor-element
                                                    elementor-element-3d5da14d
                                                    rey-section-stretched
                                                    elementor-section-full_width
                                                    elementor-section-gap-no
                                                    rey-mobiOffset
                                                    elementor-section-height-default
                                                    elementor-section-height-default
                                                  "
        data-id="3d5da14d"
        data-element_type="section"
      >
        <div
          class="
                                                      elementor-container
                                                      elementor-column-gap-no
                                                    "
        >
          <div
            class="
                                                        elementor-column
                                                        elementor-col-100
                                                        elementor-top-column
                                                        elementor-element
                                                        elementor-element-65099b09
                                                      "
            data-id="65099b09"
            data-element_type="column"
          >
            <div
              class="
                                                          elementor-column-wrap--65099b09
                                                          elementor-widget-wrap
                                                          elementor-element-populated
                                                        "
            >
              <div
                class="
                                                            elementor-element
                                                            elementor-element-75a73d09
                                                            elementor-widget
                                                            elementor-widget-image
                                                          "
                data-id="75a73d09"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div
                  class="
                                                              elementor-widget-container
                                                            "
                >
                  <a href="https://ivloo.com/jeans-clothing/">
                    <img
                      width="1920"
                      height="701"
                      src={url}
                      class="
                                                                  attachment-full
                                                                  size-full
                                                                "
                      alt=""
                      loading="lazy"
                      sizes="(max-width: 1920px) 100vw, 1920px"
                    />
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

export default BigBanner;
