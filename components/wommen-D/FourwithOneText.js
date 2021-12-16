import React from "react";

function FourwithOneText({ url1, url2, video, color }) {
  return (
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-4e9c2e6 elementor-section-gap-narrow elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="4e9c2e6"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-narrow">
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-c462608"
          data-id="c462608"
          data-element_type="column"
        >
          <div class="elementor-column-wrap--c462608 elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-2e074f3 elementor-aspect-ratio-916 elementor-widget elementor-widget-video"
              data-id="2e074f3"
              data-element_type="widget"
              data-settings='{"video_type":"hosted","autoplay":"yes","mute":"yes","aspect_ratio":"916","loop":"yes"}'
              data-widget_type="video.default"
            >
              <div class="elementor-widget-container">
                <div class="e-hosted-video elementor-wrapper elementor-fit-aspect-ratio elementor-open-inline">
                  <video
                    class="elementor-video"
                    src={`${video}`}
                    autoplay=""
                    loop=""
                    muted="muted"
                    controlslist="nodownload"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-a91a8d1 rey-colbg--classic"
          data-id="a91a8d1"
          data-element_type="column"
          data-settings='{"background_background":"classic"}'
        >
          <div
            class="elementor-column-wrap--a91a8d1 elementor-widget-wrap elementor-element-populated"
            style={{
              backgroundImage: `url(` + url2 + `)`,
            }}
          >
            <section
              class="elementor-section elementor-inner-section elementor-element elementor-element-5d530c2 elementor-section-boxed elementor-section-gap-default elementor-section-height-default elementor-section-height-default"
              data-id="5d530c2"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-default"></div>
            </section>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-83cbda8 rey-colbg--classic"
          data-id="83cbda8"
          data-element_type="column"
          data-settings='{"background_background":"classic"}'
        >
          <div
            class="elementor-column-wrap--83cbda8 elementor-widget-wrap elementor-element-populated"
            style={{
              backgroundImage: `url(` + url1 + `)`,
            }}
          >
            <section
              class="elementor-section elementor-inner-section elementor-element elementor-element-38da403 elementor-section-boxed elementor-section-gap-default elementor-section-height-default elementor-section-height-default"
              data-id="38da403"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-default"></div>
            </section>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-d0ec808 rey-colbg--classic"
          data-id="d0ec808"
          data-element_type="column"
          data-settings='{"background_background":"classic"}'
        >
          <div
            class="elementor-column-wrap--d0ec808 elementor-widget-wrap elementor-element-populated"
            style={{ backgroundColor: color }}
          >
            <section
              class="elementor-section elementor-inner-section elementor-element elementor-element-1f3b201 elementor-section-boxed elementor-section-gap-default elementor-section-height-default elementor-section-height-default"
              data-id="1f3b201"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-563a773 column-flex-dir--vertical"
                  data-id="563a773"
                  data-element_type="column"
                >
                  <div class="elementor-column-wrap--563a773 elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-df160d2 elementor-widget elementor-widget-heading"
                      data-id="df160d2"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h1 class="elementor-heading-title elementor-size-default">
                          Clothing
                        </h1>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-af3e5e4 u-links-anim-ul elementor-widget elementor-widget-text-editor"
                      data-id="af3e5e4"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <p>
                          Want to update your wardrobe with the latest styles?
                          Our edit of new-in clothing has all the latest trends
                          in one place. Shop IVLOO DESIGN for everything from
                          staple T-shirt dresses and jumpsuits to cool co-ords
                          and statement pieces. Browse Topshop for an everyday
                          wardrobe refresh, with trousers, shirts and versatile
                          dresses on rotation. For experimental designs at the
                          forefront of fashion, check out COLLUSION’s colour
                          blocking and bold prints. Whether you’re looking to
                          reinvent your style or find a statement piece for your
                          weekend wardrobe, our edit of new-in clothing will
                          keep your ‘fits feeling fresh.
                        </p>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-f15c290 elementor-button-underline-2 elementor-widget elementor-widget-button"
                      data-id="f15c290"
                      data-element_type="widget"
                      data-widget_type="button.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-button-wrapper">
                          <a
                            href="https://ivloo.com/product-category/women/clothing/"
                            class="elementor-button-link elementor-button elementor-size-sm"
                            role="button"
                          >
                            <span class="elementor-button-content-wrapper">
                              <span class="elementor-button-text">
                                SHOP NOW
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourwithOneText;
