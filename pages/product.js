import React, { useState } from "react";
import { Dropdown, Accordion, Icon } from "semantic-ui-react";
import { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});
import "@brainhubeu/react-carousel/lib/style.css";
function product() {
  const countryOptions = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
    { key: "al", value: "al", text: "Albania" },
    { key: "dz", value: "dz", text: "Algeria" },
  ];
  const [value, setVal] = useState(0);

  const [activeIndex, setactiveIndex] = useState(1);
  const [activeIndexMobile, setactiveIndexMobile] = useState(1);

  const [Slides, setSlidse] = useState({
    slides: [
      <img
        src={
          "https://images.asos-media.com/products/asos-design-curve-cotton-shacket-in-light-khaki/200407184-1-lightkhaki?$n_750w$&wid=750&fit=constrain"
        }
      />,
      <img
        src={
          "https://images.asos-media.com/products/asos-design-curve-cotton-shacket-in-light-khaki/200407184-1-lightkhaki?$n_750w$&wid=750&fit=constrain"
        }
      />,
      <img
        src={
          "https://images.asos-media.com/products/asos-design-curve-cotton-shacket-in-light-khaki/200407184-1-lightkhaki?$n_750w$&wid=750&fit=constrain"
        }
      />,
    ],
    thumbnails: [
      <img
        src={
          "https://images.asos-media.com/products/asos-design-curve-cotton-shacket-in-light-khaki/200407184-1-lightkhaki?$n_750w$&wid=750&fit=constrain"
        }
      />,
      <img
        src={
          "https://images.asos-media.com/products/asos-design-curve-cotton-shacket-in-light-khaki/200407184-1-lightkhaki?$n_750w$&wid=750&fit=constrain"
        }
      />,
      <img
        src={
          "https://images.asos-media.com/products/asos-design-curve-cotton-shacket-in-light-khaki/200407184-1-lightkhaki?$n_750w$&wid=750&fit=constrain"
        }
      />,
    ],
  });
  const onchange = (value) => {
    setVal(value);
  };
  const DropdownSizes = () => (
    <Dropdown
      placeholder="View All sizes"
      fluid
      search
      selection
      options={countryOptions}
    />
  );
  const DropdownSizesOnMobile = () => (
    <Dropdown
      placeholder="sizes"
      fluid
      search
      selection
      options={countryOptions}
    />
  );
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setactiveIndex(newIndex);
  };
  const handleClickOnMobile = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndexMobile === index ? -1 : index;

    setactiveIndexMobile(newIndex);
  };
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          IVLOO DESIGN cord colour block denim jacket in brown | IVLOO
        </title>
        <link
          rel="stylesheet"
          href="/product.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="rey-wp-style-css"
          href="https://ivloo.com/wp-content/themes/rey/style.min.css?ver=2.2.1.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="https://ivloo.com/wp-includes/css/dist/block-library/style.min.css?ver=5.8.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wc-blocks-vendors-style-css"
          href="https://ivloo.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-vendors-style.css?ver=5.7.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wc-blocks-style-css"
          href="https://ivloo.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-style.css?ver=5.7.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-frontend-css"
          href="https://ivloo.com/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.4.8"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
          integrity="sha512-XJ3ntWHl40opEiE+6dGhfK9NAKOCELrpjiBRQKtu6uJf9Pli8XY+Hikp7rlFzY4ElLSFtzjx9GGgHql7PLSeog=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          id="reycore-363d3fc842-css"
          href="https://ivloo.com/wp-content/uploads/rey/header-363d3fc842.css?ver=2.2.1.1.1638095665"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="photoswipe-css"
          href="https://ivloo.com/wp-content/plugins/woocommerce/assets/css/photoswipe/photoswipe.min.css?ver=5.7.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="photoswipe-default-skin-css"
          href="https://ivloo.com/wp-content/plugins/rey-core/assets/css/woocommerce-components/photoswipe-skin.css?ver=5.7.0"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          id="woo-variation-swatches-tooltip-css"
          href="https://ivloo.com/wp-content/plugins/woo-variation-swatches/assets/css/frontend-tooltip.min.css?ver=1.1.19"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-3373-css"
          href="https://ivloo.com/wp-content/uploads/elementor/css/post-3373.css?ver=1638606876"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-2243-css"
          href="https://ivloo.com/wp-content/uploads/elementor/css/post-2243.css?ver=1638094488"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-858541-css"
          href="https://ivloo.com/wp-content/uploads/elementor/css/post-858541.css?ver=1638094488"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-1321205-css"
          href="https://ivloo.com/wp-content/uploads/elementor/css/post-1321205.css?ver=1638094664"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-shared-0-css"
          href="https://ivloo.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-fa-brands-css"
          href="https://ivloo.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-858791-css"
          href="https://ivloo.com/wp-content/uploads/elementor/css/post-858791.css?ver=1638625078"
          type="text/css"
          media="all"
        />
      </head>
      <body
        class="product-template-default single single-product postid-1194241 wp-custom-logo theme-rey woocommerce woocommerce-page woocommerce-no-js opt woo-variation-swatches wvs-theme-rey-child wvs-theme-child-rey wvs-style-squared wvs-attr-behavior-blur wvs-tooltip wvs-no-css wvs-show-label rey-navDefault rey-no-js woo-variation-swatches-stylesheet-disabled rey-wishlist elementor-default elementor-kit-15 rey-cwidth--default --no-acc-focus single-skin--default --fixed-summary --fixed-summary-cssfirst --fixed-summary-anim --gallery-grid"
        itemtype="https://schema.org/WebPage"
        itemscope="itemscope"
      >
        <div id="page" class="rey-siteWrapper ">
          <div id="content" class="rey-siteContent --tpl-default">
            <div class="rey-siteContainer ">
              <div class="rey-siteRow">
                <main id="main" class="rey-siteMain ">
                  <div class="woocommerce-notices-wrapper"></div>
                  <div
                    id="product-1194241"
                    class="product type-product post-1194241 status-publish first instock product_cat-jackets-coats-jackets has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes rey-product"
                  >
                    <div class="rey-productSummary">
                      <div
                        class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-5 images woocommerce-product-gallery--grid --init --even"
                        data-columns="5"
                        data-params='{"active_gallery_type":"grid","gallery__enable_thumbs":false,"gallery__enable_animations":true,"product_page_gallery_max_thumbs":"","product_page_gallery_thumbs_nav_style":"boxed","cascade_bullets":true,"product_page_gallery_arrows":false,"gallery_should_min_height":false,"gallery_thumb_gallery_slider":false,"gallery_thumb_event":"click","gallery_wait_defaults_initial_load":false,"product_page_gallery_open":false,"product_page_gallery_open_icon":"reycore-icon-zoom","product_page_gallery_open_hover":false,"product_page_gallery_open_text":"OPen","product_page_mobile_gallery_nav":"bars","product_page_mobile_gallery_nav_thumbs":4,"product_page_mobile_gallery_arrows":false,"product_page_mobile_gallery_loop":false}'
                      >
                        <figure class="woocommerce-product-gallery__wrapper">
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                            }}
                          >
                            <div style={{ width: "10%", height: "100%" }}>
                              <Dots
                                number={Slides.thumbnails.length}
                                thumbnails={Slides.thumbnails}
                                value={value}
                                onChange={onchange}
                                number={Slides.slides.length}
                              />
                            </div>
                            <div style={{ width: "90%", height: "100%" }}>
                              <Carousel
                                plugins={[
                                  "infinite",
                                  {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                      numberOfSlides: 2,
                                    },
                                  },
                                ]}
                                breakpoints={{
                                  640: {
                                    plugins: [
                                      {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                          numberOfSlides: 1,
                                        },
                                      },
                                    ],
                                  },
                                  900: {
                                    plugins: [
                                      {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                          numberOfSlides: 2,
                                        },
                                      },
                                    ],
                                  },
                                }}
                                value={value}
                                slides={Slides.slides}
                                onChange={onchange}
                              />
                            </div>
                          </div>
                        </figure>
                      </div>
                      <div class="summary entry-summary">
                        <div class="rey-innerSummary">
                          <nav
                            class="navigation rey-postNav post-navigation"
                            role="navigation"
                            aria-label="Product navigation"
                          >
                            <h2 class="screen-reader-text">
                              Product navigation
                            </h2>
                            <div class="nav-links">
                              <div class="nav-previous">
                                <a
                                  href="https://ivloo.com/IVLOODESIGNCurveoversizedchuckonfauxleatherjacketinsage-22316461/"
                                  rel="prev"
                                >
                                  <span
                                    class="rey-productNav__meta"
                                    data-id="1194231"
                                    aria-hidden="true"
                                    title="IVLOO DESIGN Curve oversized chuck on faux leather jacket in sage"
                                  >
                                    <div
                                      class="rey-arrowSvg rey-arrowSvg--left "
                                      aria-label="left"
                                      role="button"
                                    >
                                      <svg
                                        width="50px"
                                        height="8px"
                                        viewBox="0 0 50 8"
                                        version="1.1"
                                        class="--default"
                                      ></svg>
                                    </div>
                                  </span>
                                  <span class="screen-reader-text">
                                    Previous product:
                                  </span>
                                  <div class="rey-productNav__metaWrapper --full">
                                    <div class="rey-productNav__thumb">
                                      <img
                                        width="1"
                                        height="1"
                                        src="https://images.asos-media.com/products/asos-design-curve-oversized-chuck-on-faux-leather-jacket-in-sage/22316461-1-sage?$n_750w$&amp;wid=750&amp;fit=constrain"
                                        class="attachment-woocommerce_single size-woocommerce_single"
                                        alt=""
                                        loading="lazy"
                                      />
                                    </div>
                                    <div class="rey-productNav__metaExtend">
                                      <div class="rey-productNav__title">
                                        IVLOO DESIGN Curve oversized chuck on
                                        faux leather jacket in sage
                                      </div>
                                      <div class="rey-productNav__price">
                                        <span class="woocommerce-Price-amount amount">
                                          <span class="woocommerce-Price-currencySymbol">
                                            $
                                          </span>
                                          51.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="nav-next">
                                <a
                                  href="https://ivloo.com/MissSelfridgefauxleatherlonglinebikerjacketinblack-200371772/"
                                  rel="next"
                                >
                                  <span
                                    class="rey-productNav__meta"
                                    data-id="1194277"
                                    aria-hidden="true"
                                    title="Miss Selfridge faux leather longline biker jacket in black"
                                  >
                                    <div
                                      class="rey-arrowSvg rey-arrowSvg--right "
                                      aria-label="right"
                                      role="button"
                                    >
                                      <svg
                                        width="50px"
                                        height="8px"
                                        viewBox="0 0 50 8"
                                        version="1.1"
                                        class="--default"
                                      ></svg>
                                    </div>
                                  </span>
                                  <span class="screen-reader-text">
                                    Next product:
                                  </span>
                                  <div class="rey-productNav__metaWrapper --full">
                                    <div class="rey-productNav__thumb">
                                      <img
                                        width="1"
                                        height="1"
                                        src="https://images.asos-media.com/products/miss-selfridge-faux-leather-longline-biker-jacket-in-black/200371772-1-black?$n_750w$&amp;wid=750&amp;fit=constrain"
                                        class="attachment-woocommerce_single size-woocommerce_single"
                                        alt=""
                                        loading="lazy"
                                      />
                                    </div>
                                    <div class="rey-productNav__metaExtend">
                                      <div class="rey-productNav__title">
                                        Miss Selfridge faux leather longline
                                        biker jacket in black
                                      </div>
                                      <div class="rey-productNav__price">
                                        <span class="woocommerce-Price-amount amount">
                                          <span class="woocommerce-Price-currencySymbol">
                                            $
                                          </span>
                                          99.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </nav>
                          <div
                            class="rey-productTitle-wrapper"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-end",
                            }}
                          >
                            <div>
                              <div class="rey-brandLink">
                                <a href="https://ivloo.com/shop/?filter_brand=only">
                                  <span class="__text">Only</span>
                                </a>
                              </div>
                              <h1 class="product_title entry-title">
                                Only faux leather jacket in brown
                              </h1>
                            </div>

                            <p class="priceMobile price">
                              <span
                                className="oldPrice"
                                style={{ marginRight: "30px" }}
                              >
                                <del>$149.00</del>
                              </span>
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  87.00
                                </bdi>
                              </span>
                              <span
                                className="savedivmobile"
                                style={{
                                  marginLeft: "50px",
                                  backgroundColor: "black",
                                  color: "white",
                                  padding: "8px",
                                }}
                              >
                                <span>Save 20%</span>
                              </span>
                            </p>
                          </div>

                          <div class="woocommerce-product-rating d-none d-sm-block">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 4.46 out of 5"
                            >
                              <i class="rey-starsGroup">
                                <svg
                                  class="rey-icon rey-icon-reycore-icon-star "
                                  aria-hidden="true"
                                  role="img"
                                ></svg>
                                <svg
                                  class="rey-icon rey-icon-reycore-icon-star "
                                  aria-hidden="true"
                                  role="img"
                                ></svg>
                                <svg
                                  class="rey-icon rey-icon-reycore-icon-star "
                                  aria-hidden="true"
                                  role="img"
                                ></svg>
                                <svg
                                  class="rey-icon rey-icon-reycore-icon-star "
                                  aria-hidden="true"
                                  role="img"
                                ></svg>
                                <svg
                                  class="rey-icon rey-icon-reycore-icon-star "
                                  aria-hidden="true"
                                  role="img"
                                ></svg>
                              </i>
                              <span>
                                <i class="rey-starsGroup">
                                  <svg
                                    class="rey-icon rey-icon-reycore-icon-star "
                                    aria-hidden="true"
                                    role="img"
                                  ></svg>
                                  <svg
                                    class="rey-icon rey-icon-reycore-icon-star "
                                    aria-hidden="true"
                                    role="img"
                                  ></svg>
                                  <svg
                                    class="rey-icon rey-icon-reycore-icon-star "
                                    aria-hidden="true"
                                    role="img"
                                  ></svg>
                                  <svg
                                    class="rey-icon rey-icon-reycore-icon-star "
                                    aria-hidden="true"
                                    role="img"
                                  ></svg>
                                  <svg
                                    class="rey-icon rey-icon-reycore-icon-star "
                                    aria-hidden="true"
                                    role="img"
                                  ></svg>
                                </i>
                                Rated <strong class="rating">4.46</strong> out
                                of 5 based on <span class="rating">26</span>{" "}
                                customer ratings
                              </span>
                            </div>

                            <a
                              href="#reviews"
                              class="woocommerce-review-link"
                              rel="nofollow"
                            >
                              (<span class="count">20</span> customer reviews)
                            </a>
                          </div>
                          <p class="price">
                            <span
                              className="oldPrice"
                              style={{ marginRight: "30px" }}
                            >
                              <del>$149.00</del>
                            </span>
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                87.00
                              </bdi>
                            </span>
                            <span
                              className="savediv"
                              style={{
                                marginLeft: "50px",
                                backgroundColor: "black",
                                color: "white",
                                padding: "8px",
                              }}
                            >
                              <span>Save 20%</span>
                            </span>
                          </p>

                          <form
                            class="variations_form cart wvs-loaded"
                            action="https://ivloo.com/Onlyfauxleatherjacketinbrown-23879362/"
                            method="post"
                            enctype="multipart/form-data"
                            data-product_id="1194241"
                            data-product_variations='[{"attributes":{"attribute_pa_size":"eu-34-eu34","attribute_pa_color":"brown"},"availability_html":"","backorders_allowed":false,"dimensions":{"length":"","width":"","height":""},"dimensions_html":"N\/A","display_price":87,"display_regular_price":87,"image":{"title":"Onlyfauxleatherjacketinbrown-23879362","caption":"published","url":"https:\/\/images.asos-media.com\/products\/only-faux-leather-jacket-in-brown\/23879362-1-brown?$n_750w$&amp;wid=750&amp;fit=constrain","alt":"","src":"https:\/\/images.asos-media.com\/products\/only-faux-leather-jacket-in-brown\/23879362-1-brown?$n_750w$&amp;wid=750&amp;fit=constrain","srcset":false,"sizes":"(max-width: 1px) 100vw, 1px","full_src":"https:\/\/images.asos-media.com\/products\/only-faux-leather-jacket-in-brown\/23879362-1-brown?$n_750w$&amp;wid=750&amp;fit=constrain","full_src_w":0,"full_src_h":0,"gallery_thumbnail_src":"https:\/\/images.asos-media.com\/products\/only-faux-leather-jacket-in-brown\/23879362-1-brown?$n_750w$&amp;wid=750&amp;fit=constrain","gallery_thumbnail_src_w":1,"gallery_thumbnail_src_h":1,"thumb_src":"https:\/\/images.asos-media.com\/products\/only-faux-leather-jacket-in-brown\/23879362-1-brown?$n_750w$&amp;wid=750&amp;fit=constrain","thumb_src_w":1,"thumb_src_h":1,"src_w":1,"src_h":1},"image_id":1194254,"is_downloadable":false,"is_in_stock":true,"is_purchasable":true,"is_sold_individually":"no","is_virtual":false,"max_qty":100,"min_qty":1,"price_html":"","sku":"23879362","variation_description":"","variation_id":1194258,"variation_is_active":true,"variation_is_visible":true,"weight":"","weight_html":"N\/A"}]'
                            current-image="1194254"
                          >
                            <table class="variations" cellspacing="0">
                              <tbody>
                                <tr className="size_div">
                                  <td class="label size_div">
                                    <label for="pa_size">Size</label>
                                    <span
                                      class="woo-selected-variation-item-name"
                                      data-default=""
                                    >
                                      : EU 34 - EU34{" "}
                                    </span>
                                  </td>
                                  <td>{DropdownSizes()}</td>
                                  <td class="value woo-variation-items-wrapper">
                                    <select
                                      id="pa_size"
                                      class=" hide woo-variation-raw-select woo-variation-raw-type-button"
                                      style={{ display: "none" }}
                                      name="attribute_pa_size"
                                      data-attribute_name="attribute_pa_size"
                                      data-show_option_none="yes"
                                    >
                                      <option value="">Choose an option</option>
                                      <option
                                        value="eu-34-eu34"
                                        selected="selected"
                                        class="attached enabled"
                                      >
                                        EU 34 - EU34{" "}
                                      </option>
                                    </select>
                                    <ul
                                      role="radiogroup"
                                      aria-label="Size"
                                      class="variable-items-wrapper button-variable-wrapper sizesOn_mobile"
                                      data-attribute_name="attribute_pa_size"
                                      data-attribute_values='["eu-34-eu34","eu-36-eu36","eu-38-eu38","eu-40-eu40","eu-42-eu42","eu-44-eu44"]'
                                    >
                                      <li
                                        aria-checked="true"
                                        data-wvstooltip="EU 34 - EU34"
                                        class="variable-item button-variable-item button-variable-item-eu-34-eu34 selected"
                                        title="EU 34 - EU34 "
                                        data-title="EU 34 - EU34 "
                                        data-value="eu-34-eu34"
                                        role="radio"
                                        tabindex="0"
                                      >
                                        <div class="variable-item-contents">
                                          <span class="variable-item-span variable-item-span-button">
                                            EU 34 - EU34{" "}
                                          </span>
                                        </div>
                                      </li>
                                      <li
                                        aria-checked="true"
                                        data-wvstooltip="EU 34 - EU34"
                                        class="variable-item button-variable-item button-variable-item-eu-34-eu34 selected"
                                        title="EU 34 - EU34 "
                                        data-title="EU 34 - EU34 "
                                        data-value="eu-34-eu34"
                                        role="radio"
                                        tabindex="0"
                                      >
                                        <div class="variable-item-contents">
                                          <span class="variable-item-span variable-item-span-button">
                                            EU 34 - EU34{" "}
                                          </span>
                                        </div>
                                      </li>
                                      <li
                                        aria-checked="true"
                                        data-wvstooltip="EU 34 - EU34"
                                        class="variable-item button-variable-item button-variable-item-eu-34-eu34 selected"
                                        title="EU 34 - EU34 "
                                        data-title="EU 34 - EU34 "
                                        data-value="eu-34-eu34"
                                        role="radio"
                                        tabindex="0"
                                      >
                                        <div class="variable-item-contents">
                                          <span class="variable-item-span variable-item-span-button">
                                            EU 34 - EU34{" "}
                                          </span>
                                        </div>
                                      </li>
                                      <li
                                        aria-checked="true"
                                        data-wvstooltip="EU 34 - EU34"
                                        class="variable-item button-variable-item button-variable-item-eu-34-eu34 selected"
                                        title="EU 34 - EU34 "
                                        data-title="EU 34 - EU34 "
                                        data-value="eu-34-eu34"
                                        role="radio"
                                        tabindex="0"
                                      >
                                        <div class="variable-item-contents">
                                          <span class="variable-item-span variable-item-span-button">
                                            EU 34 - EU34{" "}
                                          </span>
                                        </div>
                                      </li>
                                      <li
                                        aria-checked="true"
                                        data-wvstooltip="EU 34 - EU34"
                                        class="variable-item button-variable-item button-variable-item-eu-34-eu34 selected"
                                        title="EU 34 - EU34 "
                                        data-title="EU 34 - EU34 "
                                        data-value="eu-34-eu34"
                                        role="radio"
                                        tabindex="0"
                                      >
                                        <div class="variable-item-contents">
                                          <span class="variable-item-span variable-item-span-button">
                                            EU 34 - EU34{" "}
                                          </span>
                                        </div>
                                      </li>
                                      <li
                                        aria-checked="true"
                                        data-wvstooltip="EU 34 - EU34"
                                        class="variable-item button-variable-item button-variable-item-eu-34-eu34 selected"
                                        title="EU 34 - EU34 "
                                        data-title="EU 34 - EU34 "
                                        data-value="eu-34-eu34"
                                        role="radio"
                                        tabindex="0"
                                      >
                                        <div class="variable-item-contents">
                                          <span class="variable-item-span variable-item-span-button">
                                            EU 34 - EU34{" "}
                                          </span>
                                        </div>
                                      </li>
                                      <li
                                        aria-checked="true"
                                        data-wvstooltip="EU 34 - EU34"
                                        class="variable-item button-variable-item button-variable-item-eu-34-eu34 selected"
                                        title="EU 34 - EU34 "
                                        data-title="EU 34 - EU34 "
                                        data-value="eu-34-eu34"
                                        role="radio"
                                        tabindex="0"
                                      >
                                        <div class="variable-item-contents">
                                          <span class="variable-item-span variable-item-span-button">
                                            EU 34 - EU34{" "}
                                          </span>
                                        </div>
                                      </li>
                                      <li
                                        aria-checked="true"
                                        data-wvstooltip="EU 34 - EU34"
                                        class="variable-item button-variable-item button-variable-item-eu-34-eu34 selected"
                                        title="EU 34 - EU34 "
                                        data-title="EU 34 - EU34 "
                                        data-value="eu-34-eu34"
                                        role="radio"
                                        tabindex="0"
                                      >
                                        <div class="variable-item-contents">
                                          <span class="variable-item-span variable-item-span-button">
                                            EU 34 - EU34{" "}
                                          </span>
                                        </div>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="label">
                                    <label for="pa_color">Color</label>
                                    <span
                                      class="woo-selected-variation-item-name"
                                      data-default=""
                                    >
                                      : Brown
                                    </span>
                                  </td>
                                  <td class="value woo-variation-items-wrapper">
                                    <select
                                      id="pa_color"
                                      class=" hide woo-variation-raw-select woo-variation-raw-type-color"
                                      style={{ display: "none" }}
                                      name="attribute_pa_color"
                                      data-attribute_name="attribute_pa_color"
                                      data-show_option_none="yes"
                                    >
                                      <option value="">Choose an option</option>
                                      <option
                                        value="brown"
                                        selected="selected"
                                        class="attached enabled"
                                      >
                                        Brown
                                      </option>
                                    </select>
                                    <ul
                                      role="radiogroup"
                                      aria-label="Color"
                                      class="variable-items-wrapper color-variable-wrapper"
                                      data-attribute_name="attribute_pa_color"
                                      data-attribute_values='["brown"]'
                                    >
                                      <li
                                        aria-checked="true"
                                        data-wvstooltip="Brown"
                                        class="variable-item color-variable-item color-variable-item-brown selected"
                                        title="Brown"
                                        data-title="Brown"
                                        data-value="brown"
                                        role="radio"
                                        tabindex="0"
                                      >
                                        <div class="variable-item-contents">
                                          <span class="variable-item-span variable-item-span-color"></span>
                                        </div>
                                      </li>
                                    </ul>
                                    <a
                                      class="reset_variations"
                                      href="#"
                                      style={{
                                        visibility: "visible",
                                        display: "inline",
                                      }}
                                    >
                                      Clear
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div class="single_variation_wrap">
                              <div class="woocommerce-variation single_variation"></div>
                              <div class="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-enabled">
                                <div class="rey-cartBtnQty --atc-normal-hover --style-basic --stretch">
                                  <div class="quantity quantityMobile">
                                    <div className="cartBtnQty-controls2">
                                      {DropdownSizesOnMobile()}
                                    </div>
                                    <div class="rey-qtyField cartBtnQty-controls">
                                      <span class="cartBtnQty-control --minus">
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-minus "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                      </span>
                                      <span class="cartBtnQty-control --plus">
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-plus "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                      </span>
                                      <label
                                        class="screen-reader-text"
                                        for="quantity_61bb5a8245038"
                                      >
                                        Only faux leather jacket in brown
                                        quantity
                                      </label>
                                      <input
                                        type="text"
                                        id="quantity_61bb5a8245038"
                                        class="input-text qty text --select-text --prevent-focus"
                                        step="1"
                                        min="1"
                                        max="100"
                                        name="quantity"
                                        value="1"
                                        title="Qty"
                                        size="4"
                                        placeholder=""
                                        inputmode="numeric"
                                      />
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    class="single_add_to_cart_button button alt"
                                  >
                                    <span class="single_add_to_cart_button-text">
                                      <span class="__text">Add to bag</span>
                                    </span>
                                    <span class="rey-lineLoader"></span>
                                  </button>
                                  <div class="rey-wishlistBtn-wrapper">
                                    <a
                                      href="https://ivloo.com/Onlyfauxleatherjacketinbrown-23879362/"
                                      class="btn btn-secondary rey-wishlistBtn"
                                      data-id="1194241"
                                      aria-label="Add to wishlist"
                                      data-rey-tooltip='{"text":"Add to wishlist","class":"--basic","fixed":true}'
                                    >
                                      <i
                                        class="fa fa-heart-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                                <div class="rey-cartBtn-afterText">
                                  <div
                                    data-elementor-type="wp-post"
                                    data-elementor-id="860041"
                                    class="elementor elementor-860041"
                                    data-elementor-settings="[]"
                                  >
                                    <div class="elementor-section-wrap">
                                      <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-40c323b elementor-section-gap-narrow elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="40c323b"
                                        data-element_type="section"
                                      >
                                        <div class="elementor-container elementor-column-gap-narrow">
                                          <div
                                            class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e103034"
                                            data-id="e103034"
                                            data-element_type="column"
                                          >
                                            <div class="elementor-column-wrap--e103034 elementor-widget-wrap elementor-element-populated">
                                              <div
                                                class="elementor-element elementor-element-d3fd259 elementor-widget elementor-widget-reycore-trigger-v2"
                                                data-id="d3fd259"
                                                data-element_type="widget"
                                                data-widget_type="reycore-trigger-v2.default"
                                              >
                                                <div class="elementor-widget-container">
                                                  <button
                                                    class="btn rey-triggerBtn js-triggerBtn --button2 btn-secondary --reverse-icon "
                                                    data-offcanvas-id="859993"
                                                    data-action="offcanvas"
                                                    data-trigger="click"
                                                    aria-label="Open"
                                                  >
                                                    <span>SIZE GUIDE</span>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  name="add-to-cart"
                                  value="1194241"
                                />
                                <input
                                  type="hidden"
                                  name="product_id"
                                  value="1194241"
                                />
                                <input
                                  type="hidden"
                                  name="variation_id"
                                  class="variation_id"
                                  value="1194258"
                                />
                              </div>
                            </div>
                          </form>
                          <div class="rey-summarySpecs">
                            <h2>Specifications</h2>
                            <table class="woocommerce-product-attributes shop_attributes">
                              <tbody>
                                <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                                  <th class="woocommerce-product-attributes-item__label">
                                    Size
                                  </th>
                                  <td class="woocommerce-product-attributes-item__value">
                                    <p>
                                      EU 34 – EU34 , EU 36 – EU36 , EU 38 – EU38
                                      , EU 40 – EU40 , EU 42 – EU42 , EU 44 –
                                      EU44
                                    </p>
                                  </td>
                                </tr>
                                <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size-fit">
                                  <th class="woocommerce-product-attributes-item__label">
                                    Size &amp; Fit
                                  </th>
                                  <td class="woocommerce-product-attributes-item__value">
                                    <p>
                                      {" "}
                                      Model’s height: 168cm/5’6", Model wears:
                                      UK 8/ EU 36/ US 4{" "}
                                    </p>
                                  </td>
                                </tr>
                                <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_care">
                                  <th class="woocommerce-product-attributes-item__label">
                                    Care
                                  </th>
                                  <td class="woocommerce-product-attributes-item__value">
                                    <p>
                                      Machine wash according to instructions on
                                      care label
                                    </p>
                                  </td>
                                </tr>
                                <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_about-me">
                                  <th class="woocommerce-product-attributes-item__label">
                                    About Me
                                  </th>
                                  <td class="woocommerce-product-attributes-item__value">
                                    <p>
                                      Soft faux leatherMatte finish LinedShell:
                                      100% Viscose, Lining: 100% Polyester.
                                    </p>
                                  </td>
                                </tr>
                                <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_brand">
                                  <th class="woocommerce-product-attributes-item__label">
                                    Brand
                                  </th>
                                  <td class="woocommerce-product-attributes-item__value">
                                    <p>Only</p>
                                  </td>
                                </tr>
                                <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_product-type">
                                  <th class="woocommerce-product-attributes-item__label">
                                    Product-type
                                  </th>
                                  <td class="woocommerce-product-attributes-item__value">
                                    <p>Jackets</p>
                                  </td>
                                </tr>
                                <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
                                  <th class="woocommerce-product-attributes-item__label">
                                    Color
                                  </th>
                                  <td class="woocommerce-product-attributes-item__value">
                                    <p>Brown</p>
                                  </td>
                                </tr>
                                <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_discount">
                                  <th class="woocommerce-product-attributes-item__label">
                                    Discount %
                                  </th>
                                  <td class="woocommerce-product-attributes-item__value"></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="rey-productShare ">
                            <div class="rey-productShare-inner">
                              <h5>SHARE</h5>
                              <ul class="rey-postSocialShare ">
                                <li class="rey-shareItem--twitter">
                                  <a
                                    href="https://twitter.com/share?text=Only+faux+leather+jacket+in+brown&amp;url=https://ivloo.com/Onlyfauxleatherjacketinbrown-23879362/"
                                    data-share-props='{"name":"twitter-share","size":"width=550,height=235"}'
                                    title="Only faux leather jacket in brown"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    <svg
                                      class="rey-icon rey-icon-twitter "
                                      aria-hidden="true"
                                      role="img"
                                    ></svg>
                                  </a>
                                </li>
                                <li class="rey-shareItem--facebook-f">
                                  <a
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://ivloo.com/Onlyfauxleatherjacketinbrown-23879362/"
                                    data-share-props='{"name":"facebook-share","size":"width=580,height=296"}'
                                    title="Only faux leather jacket in brown"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    <svg
                                      class="rey-icon rey-icon-facebook-f "
                                      aria-hidden="true"
                                      role="img"
                                    ></svg>
                                  </a>
                                </li>
                                <li class="rey-shareItem--linkedin">
                                  <a
                                    href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ivloo.com/Onlyfauxleatherjacketinbrown-23879362/&amp;title=Only+faux+leather+jacket+in+brown"
                                    data-share-props='{"name":"linkedin-share","size":"width=930,height=720"}'
                                    title="Only faux leather jacket in brown"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    <svg
                                      class="rey-icon rey-icon-linkedin "
                                      aria-hidden="true"
                                      role="img"
                                    ></svg>
                                  </a>
                                </li>
                                <li class="rey-shareItem--pinterest-p">
                                  <a
                                    href="https://pinterest.com/pin/create/button/?url=https://ivloo.com/Onlyfauxleatherjacketinbrown-23879362/&amp;description=Only+faux+leather+jacket+in+brown"
                                    data-share-props='{"name":"pinterest-share","size":"width=490,height=530"}'
                                    title="Only faux leather jacket in brown"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    <svg
                                      class="rey-icon rey-icon-pinterest-p "
                                      aria-hidden="true"
                                      role="img"
                                    ></svg>
                                  </a>
                                </li>
                                <li class="rey-shareItem--mail">
                                  <a
                                    href="mailto:?body=https://ivloo.com/Onlyfauxleatherjacketinbrown-23879362/"
                                    title="Only faux leather jacket in brown"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    <svg
                                      class="rey-icon rey-icon-envelope "
                                      aria-hidden="true"
                                      role="img"
                                    ></svg>
                                  </a>
                                </li>
                                <li class="rey-shareItem--whatsapp">
                                  <a
                                    href="https://wa.me/?text=Only+faux+leather+jacket+in+brown+https://ivloo.com/Onlyfauxleatherjacketinbrown-23879362/"
                                    title="Only faux leather jacket in brown"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    <svg
                                      class="rey-icon rey-icon-whatsapp "
                                      aria-hidden="true"
                                      role="img"
                                    ></svg>
                                  </a>
                                </li>
                                <li class="rey-shareItem--copy">
                                  <a
                                    href="#"
                                    data-url="https://ivloo.com/Onlyfauxleatherjacketinbrown-23879362/"
                                    class="js-copy-url u-copy-url"
                                    title="Only faux leather jacket in brown"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    <svg
                                      class="rey-icon rey-icon-link "
                                      aria-hidden="true"
                                      role="img"
                                    ></svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="rey-wcPanels --no-description ">
                      <div class="rey-wcPanel rey-wcPanel--reviews rey-wcPanel--ord-1">
                        <div
                          class="rey-reviewsBtn js-toggle-target btn btn-secondary-outline btn--block Accordion_on_desktop"
                          data-target=".rey-wcPanel--reviews #reviews"
                          role="button"
                          style={{ padding: "0px" }}
                        >
                          <Accordion styled>
                            <Accordion.Title
                              active={activeIndex === 0}
                              index={0}
                              onClick={handleClick}
                            >
                              Reviews (20)
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                              <p>
                                A dog is a type of domesticated animal. Known
                                for its loyalty and faithfulness, it can be
                                found as a welcome guest in many households
                                across the world.
                              </p>
                            </Accordion.Content>
                          </Accordion>
                        </div>
                        <div className="Accordion_on_mobile">
                          <Accordion fluid styled>
                            <Accordion.Title
                              active={activeIndexMobile === 0}
                              index={0}
                              onClick={handleClickOnMobile}
                            >
                              <Icon name="dropdown" />
                              What is a dog?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndexMobile === 0}>
                              <p>
                                A dog is a type of domesticated animal. Known
                                for its loyalty and faithfulness, it can be
                                found as a welcome guest in many households
                                across the world.
                              </p>
                            </Accordion.Content>

                            <Accordion.Title
                              active={activeIndexMobile === 1}
                              index={1}
                              onClick={handleClickOnMobile}
                            >
                              <Icon name="dropdown" />
                              What kinds of dogs are there?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndexMobile === 1}>
                              <p>
                                There are many breeds of dogs. Each breed varies
                                in size and temperament. Owners often select a
                                breed of dog that they find to be compatible
                                with their own lifestyle and desires from a
                                companion.
                              </p>
                            </Accordion.Content>

                            <Accordion.Title
                              active={activeIndexMobile === 2}
                              index={2}
                              onClick={handleClickOnMobile}
                            >
                              <Icon name="dropdown" />
                              How do you acquire a dog?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndexMobile === 2}>
                              <p>
                                Three common ways for a prospective owner to
                                acquire a dog is from pet shops, private owners,
                                or shelters.
                              </p>
                              <p>
                                A pet shop may be the most convenient way to buy
                                a dog. Buying a dog from a private owner allows
                                you to assess the pedigree and upbringing of
                                your dog before choosing to take it home.
                                Lastly, finding your dog from a shelter, helps
                                give a good home to a dog who may not find one
                                so readily.
                              </p>
                            </Accordion.Content>
                          </Accordion>
                        </div>

                        <div class="rey-wcPanel-inner">
                          <div
                            id="reviews"
                            class="woocommerce-Reviews --style-minimal --ajax"
                          >
                            <div id="comments">
                              <h2 class="woocommerce-Reviews-title">
                                <span class="rey-reviewTop-title ">
                                  <div class="rey-reviewTop">
                                    <div
                                      class="star-rating"
                                      role="img"
                                      aria-label="Rated 4.46 out of 5"
                                    >
                                      <i class="rey-starsGroup">
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                      </i>
                                      <span>
                                        <i class="rey-starsGroup">
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                        </i>
                                        Rated{" "}
                                        <strong class="rating">4.46</strong> out
                                        of 5 based on{" "}
                                        <span class="rating">20</span> customer
                                        ratings
                                      </span>
                                    </div>
                                    <span>
                                      <strong>4.46</strong>/5
                                    </span>
                                  </div>
                                  20 reviews for{" "}
                                  <span>Only faux leather jacket in brown</span>
                                </span>
                                <a
                                  href="#review_form"
                                  class="rey-reviewTop-add"
                                >
                                  Add a review
                                </a>
                              </h2>
                              <div class="rey-reviewsOverall">
                                <div class="rey-reviewsOverall-row">
                                  <div class="rey-reviewsOverall-number">5</div>
                                  <div class="rey-reviewsOverall-star">
                                    <div
                                      class="star-rating"
                                      role="img"
                                      aria-label="Rated 5 out of 5"
                                    >
                                      <i class="rey-starsGroup">
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                      </i>
                                      <span>
                                        <i class="rey-starsGroup">
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                        </i>
                                        Rated <strong class="rating">5</strong>{" "}
                                        out of 5
                                      </span>
                                    </div>
                                  </div>
                                  <div class="rey-reviewsOverall-percentCount">
                                    100%
                                  </div>
                                  <div class="rey-reviewsOverall-percent">
                                    <span
                                      class="rey-reviewsOverall-percentLevel"
                                      style={{ width: "100%" }}
                                    ></span>
                                  </div>
                                  <div class="rey-reviewsOverall-ratingsCount">
                                    20
                                  </div>
                                </div>
                                <div class="rey-reviewsOverall-row">
                                  <div class="rey-reviewsOverall-number">4</div>
                                  <div class="rey-reviewsOverall-star">
                                    <div
                                      class="star-rating"
                                      role="img"
                                      aria-label="Rated 4 out of 5"
                                    >
                                      <i class="rey-starsGroup">
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                      </i>
                                      <span>
                                        <i class="rey-starsGroup">
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                        </i>
                                        Rated <strong class="rating">4</strong>{" "}
                                        out of 5
                                      </span>
                                    </div>
                                  </div>
                                  <div class="rey-reviewsOverall-percentCount">
                                    15%
                                  </div>
                                  <div class="rey-reviewsOverall-percent">
                                    <span
                                      class="rey-reviewsOverall-percentLevel"
                                      style={{ width: "15%" }}
                                    ></span>
                                  </div>
                                  <div class="rey-reviewsOverall-ratingsCount">
                                    3
                                  </div>
                                </div>
                                <div class="rey-reviewsOverall-row">
                                  <div class="rey-reviewsOverall-number">3</div>
                                  <div class="rey-reviewsOverall-star">
                                    <div
                                      class="star-rating"
                                      role="img"
                                      aria-label="Rated 3 out of 5"
                                    >
                                      <i class="rey-starsGroup">
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                      </i>
                                      <span>
                                        <i class="rey-starsGroup">
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                        </i>
                                        Rated <strong class="rating">3</strong>{" "}
                                        out of 5
                                      </span>
                                    </div>
                                  </div>
                                  <div class="rey-reviewsOverall-percentCount">
                                    0%
                                  </div>
                                  <div class="rey-reviewsOverall-percent">
                                    <span
                                      class="rey-reviewsOverall-percentLevel"
                                      style={{ width: "0%" }}
                                    ></span>
                                  </div>
                                  <div class="rey-reviewsOverall-ratingsCount">
                                    0
                                  </div>
                                </div>
                                <div class="rey-reviewsOverall-row">
                                  <div class="rey-reviewsOverall-number">2</div>
                                  <div class="rey-reviewsOverall-star">
                                    <div
                                      class="star-rating"
                                      role="img"
                                      aria-label="Rated 2 out of 5"
                                    >
                                      <i class="rey-starsGroup">
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                      </i>
                                      <span>
                                        <i class="rey-starsGroup">
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                        </i>
                                        Rated <strong class="rating">2</strong>{" "}
                                        out of 5
                                      </span>
                                    </div>
                                  </div>
                                  <div class="rey-reviewsOverall-percentCount">
                                    5%
                                  </div>
                                  <div class="rey-reviewsOverall-percent">
                                    <span
                                      class="rey-reviewsOverall-percentLevel"
                                      style={{ width: "5%" }}
                                    ></span>
                                  </div>
                                  <div class="rey-reviewsOverall-ratingsCount">
                                    1
                                  </div>
                                </div>
                                <div class="rey-reviewsOverall-row">
                                  <div class="rey-reviewsOverall-number">1</div>
                                  <div class="rey-reviewsOverall-star">
                                    <div
                                      class="star-rating"
                                      role="img"
                                      aria-label="Rated 1 out of 5"
                                    >
                                      <i class="rey-starsGroup">
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                        <svg
                                          class="rey-icon rey-icon-reycore-icon-star "
                                          aria-hidden="true"
                                          role="img"
                                        ></svg>
                                      </i>
                                      <span>
                                        <i class="rey-starsGroup">
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                          <svg
                                            class="rey-icon rey-icon-reycore-icon-star "
                                            aria-hidden="true"
                                            role="img"
                                          ></svg>
                                        </i>
                                        Rated <strong class="rating">1</strong>{" "}
                                        out of 5
                                      </span>
                                    </div>
                                  </div>
                                  <div class="rey-reviewsOverall-percentCount">
                                    10%
                                  </div>
                                  <div class="rey-reviewsOverall-percent">
                                    <span
                                      class="rey-reviewsOverall-percentLevel"
                                      style={{ width: "10%" }}
                                    ></span>
                                  </div>
                                  <div class="rey-reviewsOverall-ratingsCount">
                                    2
                                  </div>
                                </div>
                              </div>
                              <ul class="rey-reviewSort">
                                <li>Sort:</li>
                                <li class="--active" data-key="newest">
                                  <span>Newest</span>
                                </li>
                                <li data-key="oldest">
                                  <span>Oldest</span>
                                </li>
                                <li data-key="highest">
                                  <span>Highest ratings</span>
                                </li>
                                <li data-key="lowest">
                                  <span>Lowest ratings</span>
                                </li>
                              </ul>
                              <ol class="commentlist">
                                <li class="__loader">
                                  <div class="rey-lineLoader"></div>
                                </li>
                              </ol>
                              <div class="rey-ajaxRatings-buttons">
                                <button
                                  class="btn btn-secondary rey-ajaxRatings-btn --disabled"
                                  data-config='{"qid":1194241,"total":4}'
                                >
                                  <span class="rey-ajaxRatings-btnText">
                                    Show more reviews{" "}
                                    <span
                                      class="__count"
                                      data-total="4"
                                      data-current="1"
                                    >
                                      /
                                    </span>
                                  </span>
                                  <div class="rey-lineLoader"></div>
                                </button>
                                <button class="btn btn-primary rey-ajaxRatings-addBtn">
                                  Add a review{" "}
                                </button>
                              </div>
                            </div>
                            <p class="woocommerce-verification-required">
                              Only logged in customers who have purchased this
                              product may leave a review.
                            </p>
                            <div class="clear"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-elementor-type="wp-post"
                      data-elementor-id="858791"
                      class="elementor elementor-858791"
                      data-elementor-settings="[]"
                    >
                      <div class="elementor-section-wrap">
                        <section
                          class="elementor-section elementor-top-section elementor-element elementor-element-2f796641 elementor-section-gap-no elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeIn"
                          data-id="2f796641"
                          data-element_type="section"
                          data-settings='{"animation":"fadeIn"}'
                        >
                          <div class="elementor-container elementor-column-gap-no">
                            <div
                              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2c16d52a"
                              data-id="2c16d52a"
                              data-element_type="column"
                            >
                              <div class="elementor-column-wrap--2c16d52a elementor-widget-wrap elementor-element-populated">
                                <section
                                  class="elementor-section elementor-inner-section elementor-element elementor-element-186a7378 elementor-section-gap-no elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="186a7378"
                                  data-element_type="section"
                                >
                                  <div class="elementor-container elementor-column-gap-no">
                                    <div
                                      class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-416b9f7e"
                                      data-id="416b9f7e"
                                      data-element_type="column"
                                    >
                                      <div class="elementor-column-wrap--416b9f7e elementor-widget-wrap elementor-element-populated">
                                        <div
                                          class="elementor-element elementor-element-115f6039 elementor-widget elementor-widget-heading"
                                          data-id="115f6039"
                                          data-element_type="widget"
                                          data-widget_type="heading.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <h4 class="elementor-heading-title elementor-size-default">
                                              Shipping
                                            </h4>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-4ec4cbfa elementor-widget elementor-widget-text-editor"
                                          data-id="4ec4cbfa"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div class="elementor-widget-container">
                                            We currently offer free shipping in
                                            uae on all orders over 150aed.
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-75fb597 elementor-widget elementor-widget-heading"
                                          data-id="75fb597"
                                          data-element_type="widget"
                                          data-widget_type="heading.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <h4 class="elementor-heading-title elementor-size-default">
                                              Sizing
                                            </h4>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-299016f u-links-anim-ul elementor-widget elementor-widget-text-editor"
                                          data-id="299016f"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <p>
                                              Click on the Size Guide button on
                                              each product page or check out our{" "}
                                              <a href="https://ivloo.com/size-guide/">
                                                <strong>size guide</strong>
                                              </a>{" "}
                                              page
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-15edb0c elementor-widget elementor-widget-heading"
                                          data-id="15edb0c"
                                          data-element_type="widget"
                                          data-widget_type="heading.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <h4 class="elementor-heading-title elementor-size-default">
                                              Return &amp; Exchange
                                            </h4>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-b20ec0d u-links-anim-ul elementor-widget elementor-widget-text-editor"
                                          data-id="b20ec0d"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <p>
                                              If you are not satisfied with your
                                              purchase you can return it to us
                                              within 14 days for an{" "}
                                              <a href="https://ivloo.com/delivery-and-returns/">
                                                <strong>
                                                  exchange or refund.
                                                </strong>
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-93c5483 elementor-widget elementor-widget-heading"
                                          data-id="93c5483"
                                          data-element_type="widget"
                                          data-widget_type="heading.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <h4 class="elementor-heading-title elementor-size-default">
                                              Assistance
                                            </h4>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-d7b9a1c u-links-anim-ul elementor-widget elementor-widget-text-editor"
                                          data-id="d7b9a1c"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div class="elementor-widget-container">
                                            Contact us on (+44) 555 88 65, or
                                            email us at care@ivloo.com.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-34b7bfd elementor-hidden-mobile"
                                      data-id="34b7bfd"
                                      data-element_type="column"
                                    >
                                      <div class="elementor-column-wrap--34b7bfd elementor-widget-wrap elementor-element-populated">
                                        <div
                                          class="elementor-element elementor-element-db1a198 elementor-widget elementor-widget-heading"
                                          data-id="db1a198"
                                          data-element_type="widget"
                                          data-widget_type="heading.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <h4 class="elementor-heading-title elementor-size-default">
                                              Payments
                                            </h4>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-97d97cf elementor-widget elementor-widget-text-editor"
                                          data-id="97d97cf"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div class="elementor-widget-container">
                                            List of the payment methods we
                                            accept{" "}
                                            <img
                                              style={{ width: "200px" }}
                                              src="https://ivloo.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-26-at-3.31.43-PM-1.png"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-1b26aaa elementor-widget elementor-widget-heading"
                                          data-id="1b26aaa"
                                          data-element_type="widget"
                                          data-widget_type="heading.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <h4 class="elementor-heading-title elementor-size-default">
                                              Tracking
                                            </h4>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-9f38882 u-links-anim-ul elementor-widget elementor-widget-text-editor"
                                          data-id="9f38882"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div class="elementor-widget-container">
                                            You can now earn points every time
                                            you shop &amp; use them to activate
                                            amazing offers. The more rewards you
                                            activate, the better discounts
                                            you’ll access.
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-7d91823 elementor-widget elementor-widget-heading"
                                          data-id="7d91823"
                                          data-element_type="widget"
                                          data-widget_type="heading.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <h4 class="elementor-heading-title elementor-size-default">
                                              Rewards
                                            </h4>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-2718d56 u-links-anim-ul elementor-widget elementor-widget-text-editor"
                                          data-id="2718d56"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <p>
                                              You can now earn points every time
                                              you shop &amp; use them toactivate
                                              amazing&nbsp; offers.
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-8e1ee81 elementor-widget elementor-widget-heading"
                                          data-id="8e1ee81"
                                          data-element_type="widget"
                                          data-widget_type="heading.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <h4 class="elementor-heading-title elementor-size-default">
                                              Mobile app
                                            </h4>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-ece885f u-links-anim-ul elementor-widget elementor-widget-text-editor"
                                          data-id="ece885f"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <p>
                                              Get more than 850 brands straight
                                              to your pocket with the IVLOO app,
                                              available on <strong>iOS</strong>{" "}
                                              and <strong>Android</strong>.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-67fd4f1 rey-colbg--gradient elementor-hidden-mobile"
                                      data-id="67fd4f1"
                                      data-element_type="column"
                                      data-settings='{"background_background":"gradient"}'
                                    >
                                      <div class="elementor-column-wrap--67fd4f1 elementor-widget-wrap elementor-element-populated">
                                        <div
                                          class="elementor-element elementor-element-eb68956 elementor-widget elementor-widget-heading"
                                          data-id="eb68956"
                                          data-element_type="widget"
                                          data-widget_type="heading.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <h1 class="elementor-heading-title elementor-size-default">
                                              GET <b>15%</b> OFF ON
                                            </h1>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-8d9b603 elementor-widget elementor-widget-heading"
                                          data-id="8d9b603"
                                          data-element_type="widget"
                                          id="hed"
                                          data-widget_type="heading.dynamic_title"
                                        >
                                          <div class="elementor-widget-container">
                                            <p class="elementor-heading-title elementor-size-default">
                                              Only faux leather jacket in brown
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-be0838e --btn-block-yes elementor-widget elementor-widget-reycore-newsletter"
                                          data-id="be0838e"
                                          data-element_type="widget"
                                          data-widget_type="reycore-newsletter.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <div class="rey-element rey-newsletterForm rey-nlForm--inline-basic">
                                              <form
                                                id="mc4wp-form-1"
                                                class="mc4wp-form mc4wp-form-2897"
                                                method="post"
                                                data-id="2897"
                                                data-name="IVLOO"
                                              >
                                                <div class="mc4wp-form-fields">
                                                  <p>
                                                    <label>
                                                      <input
                                                        type="email"
                                                        name="EMAIL"
                                                        placeholder="Your email address"
                                                        required=""
                                                      />
                                                    </label>
                                                  </p>
                                                  <p>
                                                    <input
                                                      type="submit"
                                                      value="GO"
                                                    />
                                                  </p>
                                                </div>
                                                <label
                                                  style={{ display: "none" }}
                                                >
                                                  Leave this field empty if
                                                  you're human:
                                                  <input
                                                    type="text"
                                                    name="_mc4wp_honeypot"
                                                    value=""
                                                    tabindex="-1"
                                                    autocomplete="off"
                                                  />
                                                </label>
                                                <input
                                                  type="hidden"
                                                  name="_mc4wp_timestamp"
                                                  value="1639668354"
                                                />
                                                <input
                                                  type="hidden"
                                                  name="_mc4wp_form_id"
                                                  value="2897"
                                                />
                                                <input
                                                  type="hidden"
                                                  name="_mc4wp_form_element_id"
                                                  value="mc4wp-form-1"
                                                />
                                                <div class="mc4wp-response"></div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-2151c840 u-last-p-margin u-links-anim-ul elementor-widget elementor-widget-text-editor"
                                          data-id="2151c840"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <p>
                                              Remember to show off your new
                                              purchase on insta by tagging us
                                              and <b>get $20 off</b> your next
                                              order.
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-105d7ba4 elementor-button-simple elementor-align-center elementor-widget elementor-widget-button"
                                          data-id="105d7ba4"
                                          data-element_type="widget"
                                          data-widget_type="button.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <div class="elementor-button-wrapper">
                                              <a
                                                href="#"
                                                class="elementor-button-link elementor-button elementor-size-sm"
                                                role="button"
                                              >
                                                <span class="elementor-button-content-wrapper">
                                                  <span class="elementor-button-icon elementor-align-icon-right"></span>
                                                  <span class="elementor-button-text">
                                                    FOLLOW US ON INSTAGRAM
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="elementor-element elementor-element-31f5097 elementor-widget__width-auto rey-widget-inline--stretch elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons"
                                          data-id="31f5097"
                                          data-element_type="widget"
                                          data-widget_type="social-icons.default"
                                        >
                                          <div class="elementor-widget-container">
                                            <div class="elementor-social-icons-wrapper elementor-grid">
                                              <span class="elementor-grid-item">
                                                <a
                                                  class="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-animation-pop elementor-repeater-item-cc642a2"
                                                  target="_blank"
                                                >
                                                  <span class="elementor-screen-only">
                                                    Facebook-f
                                                  </span>
                                                  <i class="fab fa-facebook-f"></i>{" "}
                                                </a>
                                              </span>
                                              <span class="elementor-grid-item">
                                                <a
                                                  class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-pop elementor-repeater-item-554673f"
                                                  target="_blank"
                                                >
                                                  <span class="elementor-screen-only">
                                                    Twitter
                                                  </span>
                                                  <i class="fab fa-twitter"></i>{" "}
                                                </a>
                                              </span>
                                              <span class="elementor-grid-item">
                                                <a
                                                  class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-pop elementor-repeater-item-7f38a9c"
                                                  href="#"
                                                  target="_blank"
                                                >
                                                  <span class="elementor-screen-only">
                                                    Instagram
                                                  </span>
                                                  <i class="fab fa-instagram"></i>{" "}
                                                </a>
                                              </span>
                                              <span class="elementor-grid-item">
                                                <a
                                                  class="elementor-icon elementor-social-icon elementor-social-icon-tiktok elementor-animation-pop elementor-repeater-item-76fc501"
                                                  target="_blank"
                                                >
                                                  <span class="elementor-screen-only">
                                                    Tiktok
                                                  </span>
                                                  <i class="fab fa-tiktok"></i>{" "}
                                                </a>
                                              </span>
                                              <span class="elementor-grid-item">
                                                <a
                                                  class="elementor-icon elementor-social-icon elementor-social-icon-pinterest elementor-animation-pop elementor-repeater-item-c77be59"
                                                  target="_blank"
                                                >
                                                  <span class="elementor-screen-only">
                                                    Pinterest
                                                  </span>
                                                  <i class="fab fa-pinterest"></i>{" "}
                                                </a>
                                              </span>
                                              <span class="elementor-grid-item">
                                                <a
                                                  class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-pop elementor-repeater-item-4e01552"
                                                  target="_blank"
                                                >
                                                  <span class="elementor-screen-only">
                                                    Youtube
                                                  </span>
                                                  <i class="fab fa-youtube"></i>{" "}
                                                </a>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-b81c36c rey-colbg--gradient elementor-hidden-mobile"
                                      data-id="b81c36c"
                                      data-element_type="column"
                                      data-settings='{"background_background":"gradient"}'
                                    >
                                      <div class="elementor-column-wrap--b81c36c elementor-widget-wrap elementor-element-populated">
                                        <section
                                          class="elementor-section elementor-inner-section elementor-element elementor-element-46cf039 elementor-hidden-mobile elementor-section-boxed elementor-section-gap-default elementor-section-height-default elementor-section-height-default"
                                          data-id="46cf039"
                                          data-element_type="section"
                                        >
                                          <div class="elementor-container elementor-column-gap-default">
                                            <div
                                              class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5789cad column-flex-dir--vertical"
                                              data-id="5789cad"
                                              data-element_type="column"
                                            >
                                              <div class="elementor-column-wrap--5789cad elementor-widget-wrap elementor-element-populated">
                                                <div
                                                  class="elementor-element elementor-element-f4cd6a4 elementor-widget elementor-widget-image"
                                                  data-id="f4cd6a4"
                                                  data-element_type="widget"
                                                  data-widget_type="image.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <img
                                                      width="670"
                                                      height="219"
                                                      src="https://ivloo.com/wp-content/uploads/2021/11/home-page-page-232-1.png"
                                                      class="attachment-full size-full"
                                                      alt=""
                                                      loading="lazy"
                                                      srcset="https://ivloo.com/wp-content/uploads/2021/11/home-page-page-232-1.png 670w, https://ivloo.com/wp-content/uploads/2021/11/home-page-page-232-1-300x98.png 300w"
                                                      sizes="(max-width: 670px) 100vw, 670px"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-9ded402 elementor-widget elementor-widget-heading"
                                                  data-id="9ded402"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      We create
                                                    </h2>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-1f3668b elementor-widget elementor-widget-heading"
                                                  data-id="1f3668b"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      exclusive hand-crafted
                                                      pieces designed in Sydney
                                                    </h2>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-32061d6 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                  data-id="32061d6"
                                                  data-element_type="widget"
                                                  data-widget_type="divider.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <div class="elementor-divider">
                                                      <span class="elementor-divider-separator"></span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-65b65a9 elementor-widget elementor-widget-heading"
                                                  data-id="65b65a9"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      We are
                                                    </h2>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-7fc6665 elementor-widget elementor-widget-heading"
                                                  data-id="7fc6665"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      worn and loved by
                                                      celebrities and queens
                                                      around the world
                                                    </h2>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-94b7b71 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                  data-id="94b7b71"
                                                  data-element_type="widget"
                                                  data-widget_type="divider.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <div class="elementor-divider">
                                                      <span class="elementor-divider-separator"></span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-ac372a8 elementor-widget elementor-widget-heading"
                                                  data-id="ac372a8"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      We provide
                                                    </h2>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-3760d21 elementor-widget elementor-widget-heading"
                                                  data-id="3760d21"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      express shipping for when
                                                      you left your weekend fit
                                                      till last minute
                                                    </h2>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-1421bf1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                  data-id="1421bf1"
                                                  data-element_type="widget"
                                                  data-widget_type="divider.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <div class="elementor-divider">
                                                      <span class="elementor-divider-separator"></span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-f4a57ba elementor-widget elementor-widget-heading"
                                                  data-id="f4a57ba"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      We care
                                                    </h2>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-66cf250 elementor-widget elementor-widget-heading"
                                                  data-id="66cf250"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      our 5 star customer
                                                      service will ensure you
                                                      never feel like you’re
                                                      left on read
                                                    </h2>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-9d7dc61 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                  data-id="9d7dc61"
                                                  data-element_type="widget"
                                                  data-widget_type="divider.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <div class="elementor-divider">
                                                      <span class="elementor-divider-separator"></span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-50909d5 elementor-widget elementor-widget-heading"
                                                  data-id="50909d5"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      We got you
                                                    </h2>
                                                  </div>
                                                </div>
                                                <div
                                                  class="elementor-element elementor-element-8259169 elementor-widget elementor-widget-heading"
                                                  data-id="8259169"
                                                  data-element_type="widget"
                                                  data-widget_type="heading.default"
                                                >
                                                  <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                      from your basic to glam
                                                      days. ‘Cause you could run
                                                      into your ex, crush …
                                                    </h2>
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
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <section class="related products">
                      <h2>You might be interested in..</h2>
                      <div
                        class="splide __related-carousel splide--slide splide--ltr splide--draggable is-active"
                        id="splide01"
                        style={{ visibility: "visible" }}
                      >
                        <div class="splide__track" id="splide01-track">
                          <ul
                            class="products columns-tablet-2 columns-mobile-2 --skin-basic rey-wcGap-line rey-wcGrid-default --no-margins --prevent-metro --prevent-thumbnail-sliders --prevent-scattered --prevent-masonry columns-4 splide__list"
                            data-cols="4"
                            data-grid-config='{"enabled":true,"upsells":true,"autoplay":true,"interval":6000,"per_page":"4","per_page_tablet":3,"per_page_mobile":"2","gap":30,"gap_mobile":15}'
                            data-params='{"equalize_product_items":[".woocommerce-loop-product__title"]}'
                            id="splide01-list"
                            style={{ transform: "translateX(0px)" }}
                          >
                            <li
                              class="product is-animated rey-wc-skin--basic --customImageContainerHeight rey-wc-loopAlign-left --extraImg-no --extraImg-mobile --uncropped type-product post-1172703 status-publish first instock product_cat-jackets-coats-jackets has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes splide__slide is-active is-visible"
                              data-pid="1172703"
                              id="splide01-slide01"
                              style={{ marginRight: "30px", width: "296.25px" }}
                              aria-hidden="false"
                              tabindex="0"
                            >
                              <div class="rey-productInner" data-id="1172703">
                                <div class="rey-productThumbnail">
                                  <a
                                    href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                  >
                                    <img
                                      width="1"
                                      height="1"
                                      src="https://images.asos-media.com/products/only-faux-leather-jacket/9158369-1-black?$n_750w$&amp;wid=750&amp;fit=constrain"
                                      class="rey-thumbImg img--1 attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>{" "}
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    backgroundColor: "#EBEBEB",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-play"
                                      aria-hidden="true"
                                    ></i>
                                    Video
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    (3 Ratings)
                                  </div>
                                </div>

                                <div class="rey-brandLink">
                                  <a href="https://ivloo.com/shop/?filter_brand=only">
                                    Only
                                  </a>
                                </div>
                                <h2
                                  class="woocommerce-loop-product__title"
                                  style={{ minHeight: "21px" }}
                                >
                                  <a href="https://ivloo.com/Onlyfauxleatherjacket-9158369/">
                                    Only faux leather jacket
                                  </a>
                                </h2>
                                <div class="rey-productLoop-footer">
                                  <span class="price rey-loopPrice">
                                    <span class="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span class="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        87.00
                                      </bdi>
                                    </span>
                                  </span>
                                  <div class="rey-productFooter-item rey-productFooter-item--addtocart">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        data-quantity="1"
                                        class="button product_type_variable add_to_cart_button rey-btn--clean"
                                        data-product_id="1172703"
                                        data-product_sku="9158369"
                                        aria-label="Select options for “Only faux leather jacket”"
                                        rel="nofollow"
                                      >
                                        <span class="__text">Add to cart</span>
                                        <span class="rey-lineLoader __ajax-preloader"></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--quickview">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        class="button rey-btn--clean rey-quickviewBtn js-rey-quickviewBtn"
                                        data-id="1172703"
                                        title="QUICKVIEW"
                                      >
                                        QUICKVIEW
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--wishlist">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        class="--show-mobile--top rey-wishlistBtn rey-wishlistBtn-link"
                                        data-id="1172703"
                                        aria-label="Add to wishlist"
                                        data-rey-tooltip='{"text":"Add to wishlist","class":"--basic","fixed":true}'
                                      >
                                        <i
                                          class="fa fa-heart-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="product is-animated rey-wc-skin--basic --customImageContainerHeight rey-wc-loopAlign-left --extraImg-no --extraImg-mobile --uncropped type-product post-1172893 status-publish instock product_cat-jackets-coats-jackets has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes splide__slide is-visible"
                              data-pid="1172893"
                              id="splide01-slide02"
                              style={{ marginRight: "30px", width: "296.25px" }}
                              aria-hidden="false"
                              tabindex="0"
                            >
                              <div class="rey-productInner" data-id="1172893">
                                <div class="rey-productThumbnail">
                                  <a
                                    href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                  >
                                    <img
                                      width="1"
                                      height="1"
                                      src="https://images.asos-media.com/products/bershka-cropped-puffer-jacket-in-brown/200955026-1-brown?$n_750w$&amp;wid=750&amp;fit=constrain"
                                      class="rey-thumbImg img--1 attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>{" "}
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    backgroundColor: "#EBEBEB",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-play"
                                      aria-hidden="true"
                                    ></i>
                                    Video
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    (3 Ratings)
                                  </div>
                                </div>

                                <div class="rey-brandLink">
                                  <a href="https://ivloo.com/shop/?filter_brand=bershka">
                                    Bershka
                                  </a>
                                </div>
                                <h2
                                  class="woocommerce-loop-product__title"
                                  style={{ minHeight: "21px" }}
                                >
                                  <a href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/">
                                    Bershka cropped puffer jacket in brown
                                  </a>
                                </h2>
                                <div class="rey-productLoop-footer">
                                  <span class="price rey-loopPrice">
                                    <span class="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span class="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        63.00
                                      </bdi>
                                    </span>
                                  </span>
                                  <div class="rey-productFooter-item rey-productFooter-item--addtocart">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        data-quantity="1"
                                        class="button product_type_variable add_to_cart_button rey-btn--clean"
                                        data-product_id="1172893"
                                        data-product_sku="200955026"
                                        aria-label="Select options for “Bershka cropped puffer jacket in brown”"
                                        rel="nofollow"
                                      >
                                        <span class="__text">Add to cart</span>
                                        <span class="rey-lineLoader __ajax-preloader"></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--quickview">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        class="button rey-btn--clean rey-quickviewBtn js-rey-quickviewBtn"
                                        data-id="1172893"
                                        title="QUICKVIEW"
                                      >
                                        QUICKVIEW
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--wishlist">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        class="--show-mobile--top rey-wishlistBtn rey-wishlistBtn-link"
                                        data-id="1172893"
                                        aria-label="Add to wishlist"
                                        data-rey-tooltip='{"text":"Add to wishlist","class":"--basic","fixed":true}'
                                      >
                                        <i
                                          class="fa fa-heart-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="product is-animated rey-wc-skin--basic --customImageContainerHeight rey-wc-loopAlign-left --extraImg-no --extraImg-mobile --uncropped type-product post-1172703 status-publish first instock product_cat-jackets-coats-jackets has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes splide__slide is-active is-visible"
                              data-pid="1172703"
                              id="splide01-slide01"
                              style={{ marginRight: "30px", width: "296.25px" }}
                              aria-hidden="false"
                              tabindex="0"
                            >
                              <div class="rey-productInner" data-id="1172703">
                                <div class="rey-productThumbnail">
                                  <a
                                    href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                  >
                                    <img
                                      width="1"
                                      height="1"
                                      src="https://images.asos-media.com/products/only-faux-leather-jacket/9158369-1-black?$n_750w$&amp;wid=750&amp;fit=constrain"
                                      class="rey-thumbImg img--1 attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>{" "}
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    backgroundColor: "#EBEBEB",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-play"
                                      aria-hidden="true"
                                    ></i>
                                    Video
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    (3 Ratings)
                                  </div>
                                </div>

                                <div class="rey-brandLink">
                                  <a href="https://ivloo.com/shop/?filter_brand=only">
                                    Only
                                  </a>
                                </div>
                                <h2
                                  class="woocommerce-loop-product__title"
                                  style={{ minHeight: "21px" }}
                                >
                                  <a href="https://ivloo.com/Onlyfauxleatherjacket-9158369/">
                                    Only faux leather jacket
                                  </a>
                                </h2>
                                <div class="rey-productLoop-footer">
                                  <span class="price rey-loopPrice">
                                    <span class="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span class="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        87.00
                                      </bdi>
                                    </span>
                                  </span>
                                  <div class="rey-productFooter-item rey-productFooter-item--addtocart">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        data-quantity="1"
                                        class="button product_type_variable add_to_cart_button rey-btn--clean"
                                        data-product_id="1172703"
                                        data-product_sku="9158369"
                                        aria-label="Select options for “Only faux leather jacket”"
                                        rel="nofollow"
                                      >
                                        <span class="__text">Add to cart</span>
                                        <span class="rey-lineLoader __ajax-preloader"></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--quickview">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        class="button rey-btn--clean rey-quickviewBtn js-rey-quickviewBtn"
                                        data-id="1172703"
                                        title="QUICKVIEW"
                                      >
                                        QUICKVIEW
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--wishlist">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        class="--show-mobile--top rey-wishlistBtn rey-wishlistBtn-link"
                                        data-id="1172703"
                                        aria-label="Add to wishlist"
                                        data-rey-tooltip='{"text":"Add to wishlist","class":"--basic","fixed":true}'
                                      >
                                        <i
                                          class="fa fa-heart-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="product is-animated rey-wc-skin--basic --customImageContainerHeight rey-wc-loopAlign-left --extraImg-no --extraImg-mobile --uncropped type-product post-1172893 status-publish instock product_cat-jackets-coats-jackets has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes splide__slide is-visible"
                              data-pid="1172893"
                              id="splide01-slide02"
                              style={{ marginRight: "30px", width: "296.25px" }}
                              aria-hidden="false"
                              tabindex="0"
                            >
                              <div class="rey-productInner" data-id="1172893">
                                <div class="rey-productThumbnail">
                                  <a
                                    href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                  >
                                    <img
                                      width="1"
                                      height="1"
                                      src="https://images.asos-media.com/products/bershka-cropped-puffer-jacket-in-brown/200955026-1-brown?$n_750w$&amp;wid=750&amp;fit=constrain"
                                      class="rey-thumbImg img--1 attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>{" "}
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    backgroundColor: "#EBEBEB",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-play"
                                      aria-hidden="true"
                                    ></i>
                                    Video
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    (3 Ratings)
                                  </div>
                                </div>

                                <div class="rey-brandLink">
                                  <a href="https://ivloo.com/shop/?filter_brand=bershka">
                                    Bershka
                                  </a>
                                </div>
                                <h2
                                  class="woocommerce-loop-product__title"
                                  style={{ minHeight: "21px" }}
                                >
                                  <a href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/">
                                    Bershka cropped puffer jacket in brown
                                  </a>
                                </h2>
                                <div class="rey-productLoop-footer">
                                  <span class="price rey-loopPrice">
                                    <span class="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span class="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        63.00
                                      </bdi>
                                    </span>
                                  </span>
                                  <div class="rey-productFooter-item rey-productFooter-item--addtocart">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        data-quantity="1"
                                        class="button product_type_variable add_to_cart_button rey-btn--clean"
                                        data-product_id="1172893"
                                        data-product_sku="200955026"
                                        aria-label="Select options for “Bershka cropped puffer jacket in brown”"
                                        rel="nofollow"
                                      >
                                        <span class="__text">Add to cart</span>
                                        <span class="rey-lineLoader __ajax-preloader"></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--quickview">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        class="button rey-btn--clean rey-quickviewBtn js-rey-quickviewBtn"
                                        data-id="1172893"
                                        title="QUICKVIEW"
                                      >
                                        QUICKVIEW
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--wishlist">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        class="--show-mobile--top rey-wishlistBtn rey-wishlistBtn-link"
                                        data-id="1172893"
                                        aria-label="Add to wishlist"
                                        data-rey-tooltip='{"text":"Add to wishlist","class":"--basic","fixed":true}'
                                      >
                                        <i
                                          class="fa fa-heart-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="product is-animated rey-wc-skin--basic --customImageContainerHeight rey-wc-loopAlign-left --extraImg-no --extraImg-mobile --uncropped type-product post-1172703 status-publish first instock product_cat-jackets-coats-jackets has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes splide__slide is-active is-visible"
                              data-pid="1172703"
                              id="splide01-slide01"
                              style={{ marginRight: "30px", width: "296.25px" }}
                              aria-hidden="false"
                              tabindex="0"
                            >
                              <div class="rey-productInner" data-id="1172703">
                                <div class="rey-productThumbnail">
                                  <a
                                    href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                  >
                                    <img
                                      width="1"
                                      height="1"
                                      src="https://images.asos-media.com/products/only-faux-leather-jacket/9158369-1-black?$n_750w$&amp;wid=750&amp;fit=constrain"
                                      class="rey-thumbImg img--1 attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>{" "}
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    backgroundColor: "#EBEBEB",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-play"
                                      aria-hidden="true"
                                    ></i>
                                    Video
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    (3 Ratings)
                                  </div>
                                </div>

                                <div class="rey-brandLink">
                                  <a href="https://ivloo.com/shop/?filter_brand=only">
                                    Only
                                  </a>
                                </div>
                                <h2
                                  class="woocommerce-loop-product__title"
                                  style={{ minHeight: "21px" }}
                                >
                                  <a href="https://ivloo.com/Onlyfauxleatherjacket-9158369/">
                                    Only faux leather jacket
                                  </a>
                                </h2>
                                <div class="rey-productLoop-footer">
                                  <span class="price rey-loopPrice">
                                    <span class="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span class="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        87.00
                                      </bdi>
                                    </span>
                                  </span>
                                  <div class="rey-productFooter-item rey-productFooter-item--addtocart">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        data-quantity="1"
                                        class="button product_type_variable add_to_cart_button rey-btn--clean"
                                        data-product_id="1172703"
                                        data-product_sku="9158369"
                                        aria-label="Select options for “Only faux leather jacket”"
                                        rel="nofollow"
                                      >
                                        <span class="__text">Add to cart</span>
                                        <span class="rey-lineLoader __ajax-preloader"></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--quickview">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        class="button rey-btn--clean rey-quickviewBtn js-rey-quickviewBtn"
                                        data-id="1172703"
                                        title="QUICKVIEW"
                                      >
                                        QUICKVIEW
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--wishlist">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        class="--show-mobile--top rey-wishlistBtn rey-wishlistBtn-link"
                                        data-id="1172703"
                                        aria-label="Add to wishlist"
                                        data-rey-tooltip='{"text":"Add to wishlist","class":"--basic","fixed":true}'
                                      >
                                        <i
                                          class="fa fa-heart-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="product is-animated rey-wc-skin--basic --customImageContainerHeight rey-wc-loopAlign-left --extraImg-no --extraImg-mobile --uncropped type-product post-1172893 status-publish instock product_cat-jackets-coats-jackets has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes splide__slide is-visible"
                              data-pid="1172893"
                              id="splide01-slide02"
                              style={{ marginRight: "30px", width: "296.25px" }}
                              aria-hidden="false"
                              tabindex="0"
                            >
                              <div class="rey-productInner" data-id="1172893">
                                <div class="rey-productThumbnail">
                                  <a
                                    href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                  >
                                    <img
                                      width="1"
                                      height="1"
                                      src="https://images.asos-media.com/products/bershka-cropped-puffer-jacket-in-brown/200955026-1-brown?$n_750w$&amp;wid=750&amp;fit=constrain"
                                      class="rey-thumbImg img--1 attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>{" "}
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    backgroundColor: "#EBEBEB",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-play"
                                      aria-hidden="true"
                                    ></i>
                                    Video
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    (3 Ratings)
                                  </div>
                                </div>

                                <div class="rey-brandLink">
                                  <a href="https://ivloo.com/shop/?filter_brand=bershka">
                                    Bershka
                                  </a>
                                </div>
                                <h2
                                  class="woocommerce-loop-product__title"
                                  style={{ minHeight: "21px" }}
                                >
                                  <a href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/">
                                    Bershka cropped puffer jacket in brown
                                  </a>
                                </h2>
                                <div class="rey-productLoop-footer">
                                  <span class="price rey-loopPrice">
                                    <span class="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span class="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        63.00
                                      </bdi>
                                    </span>
                                  </span>
                                  <div class="rey-productFooter-item rey-productFooter-item--addtocart">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        data-quantity="1"
                                        class="button product_type_variable add_to_cart_button rey-btn--clean"
                                        data-product_id="1172893"
                                        data-product_sku="200955026"
                                        aria-label="Select options for “Bershka cropped puffer jacket in brown”"
                                        rel="nofollow"
                                      >
                                        <span class="__text">Add to cart</span>
                                        <span class="rey-lineLoader __ajax-preloader"></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--quickview">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        class="button rey-btn--clean rey-quickviewBtn js-rey-quickviewBtn"
                                        data-id="1172893"
                                        title="QUICKVIEW"
                                      >
                                        QUICKVIEW
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--wishlist">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        class="--show-mobile--top rey-wishlistBtn rey-wishlistBtn-link"
                                        data-id="1172893"
                                        aria-label="Add to wishlist"
                                        data-rey-tooltip='{"text":"Add to wishlist","class":"--basic","fixed":true}'
                                      >
                                        <i
                                          class="fa fa-heart-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="product is-animated rey-wc-skin--basic --customImageContainerHeight rey-wc-loopAlign-left --extraImg-no --extraImg-mobile --uncropped type-product post-1172703 status-publish first instock product_cat-jackets-coats-jackets has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes splide__slide is-active is-visible"
                              data-pid="1172703"
                              id="splide01-slide01"
                              style={{ marginRight: "30px", width: "296.25px" }}
                              aria-hidden="false"
                              tabindex="0"
                            >
                              <div class="rey-productInner" data-id="1172703">
                                <div class="rey-productThumbnail">
                                  <a
                                    href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                  >
                                    <img
                                      width="1"
                                      height="1"
                                      src="https://images.asos-media.com/products/only-faux-leather-jacket/9158369-1-black?$n_750w$&amp;wid=750&amp;fit=constrain"
                                      class="rey-thumbImg img--1 attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>{" "}
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    backgroundColor: "#EBEBEB",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-play"
                                      aria-hidden="true"
                                    ></i>
                                    Video
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    (3 Ratings)
                                  </div>
                                </div>

                                <div class="rey-brandLink">
                                  <a href="https://ivloo.com/shop/?filter_brand=only">
                                    Only
                                  </a>
                                </div>
                                <h2
                                  class="woocommerce-loop-product__title"
                                  style={{ minHeight: "21px" }}
                                >
                                  <a href="https://ivloo.com/Onlyfauxleatherjacket-9158369/">
                                    Only faux leather jacket
                                  </a>
                                </h2>
                                <div class="rey-productLoop-footer">
                                  <span class="price rey-loopPrice">
                                    <span class="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span class="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        87.00
                                      </bdi>
                                    </span>
                                  </span>
                                  <div class="rey-productFooter-item rey-productFooter-item--addtocart">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        data-quantity="1"
                                        class="button product_type_variable add_to_cart_button rey-btn--clean"
                                        data-product_id="1172703"
                                        data-product_sku="9158369"
                                        aria-label="Select options for “Only faux leather jacket”"
                                        rel="nofollow"
                                      >
                                        <span class="__text">Add to cart</span>
                                        <span class="rey-lineLoader __ajax-preloader"></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--quickview">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        class="button rey-btn--clean rey-quickviewBtn js-rey-quickviewBtn"
                                        data-id="1172703"
                                        title="QUICKVIEW"
                                      >
                                        QUICKVIEW
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--wishlist">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Onlyfauxleatherjacket-9158369/"
                                        class="--show-mobile--top rey-wishlistBtn rey-wishlistBtn-link"
                                        data-id="1172703"
                                        aria-label="Add to wishlist"
                                        data-rey-tooltip='{"text":"Add to wishlist","class":"--basic","fixed":true}'
                                      >
                                        <i
                                          class="fa fa-heart-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="product is-animated rey-wc-skin--basic --customImageContainerHeight rey-wc-loopAlign-left --extraImg-no --extraImg-mobile --uncropped type-product post-1172893 status-publish instock product_cat-jackets-coats-jackets has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes splide__slide is-visible"
                              data-pid="1172893"
                              id="splide01-slide02"
                              style={{ marginRight: "30px", width: "296.25px" }}
                              aria-hidden="false"
                              tabindex="0"
                            >
                              <div class="rey-productInner" data-id="1172893">
                                <div class="rey-productThumbnail">
                                  <a
                                    href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                  >
                                    <img
                                      width="1"
                                      height="1"
                                      src="https://images.asos-media.com/products/bershka-cropped-puffer-jacket-in-brown/200955026-1-brown?$n_750w$&amp;wid=750&amp;fit=constrain"
                                      class="rey-thumbImg img--1 attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>{" "}
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    backgroundColor: "#EBEBEB",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-play"
                                      aria-hidden="true"
                                    ></i>
                                    Video
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      textAlign: "center",
                                      padding: "7px 0px",
                                    }}
                                  >
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      class="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                    (3 Ratings)
                                  </div>
                                </div>

                                <div class="rey-brandLink">
                                  <a href="https://ivloo.com/shop/?filter_brand=bershka">
                                    Bershka
                                  </a>
                                </div>
                                <h2
                                  class="woocommerce-loop-product__title"
                                  style={{ minHeight: "21px" }}
                                >
                                  <a href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/">
                                    Bershka cropped puffer jacket in brown
                                  </a>
                                </h2>
                                <div class="rey-productLoop-footer">
                                  <span class="price rey-loopPrice">
                                    <span class="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span class="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        63.00
                                      </bdi>
                                    </span>
                                  </span>
                                  <div class="rey-productFooter-item rey-productFooter-item--addtocart">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        data-quantity="1"
                                        class="button product_type_variable add_to_cart_button rey-btn--clean"
                                        data-product_id="1172893"
                                        data-product_sku="200955026"
                                        aria-label="Select options for “Bershka cropped puffer jacket in brown”"
                                        rel="nofollow"
                                      >
                                        <span class="__text">Add to cart</span>
                                        <span class="rey-lineLoader __ajax-preloader"></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--quickview">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        class="button rey-btn--clean rey-quickviewBtn js-rey-quickviewBtn"
                                        data-id="1172893"
                                        title="QUICKVIEW"
                                      >
                                        QUICKVIEW
                                      </a>
                                    </div>
                                  </div>
                                  <div class="rey-productFooter-item rey-productFooter-item--wishlist">
                                    <div class="rey-productFooter-inner">
                                      <a
                                        href="https://ivloo.com/Bershkacroppedpufferjacketinbrown-200955026/"
                                        class="--show-mobile--top rey-wishlistBtn rey-wishlistBtn-link"
                                        data-id="1172893"
                                        aria-label="Add to wishlist"
                                        data-rey-tooltip='{"text":"Add to wishlist","class":"--basic","fixed":true}'
                                      >
                                        <i
                                          class="fa fa-heart-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="__arrows  ">
                          <div
                            class="rey-arrowSvg rey-arrowSvg--left is-disabled"
                            aria-label="left"
                            role="button"
                          >
                            <svg
                              width="50px"
                              height="8px"
                              viewBox="0 0 50 8"
                              version="1.1"
                              class="--default"
                            ></svg>
                          </div>
                          <div
                            class="rey-arrowSvg rey-arrowSvg--right"
                            aria-label="right"
                            role="button"
                          >
                            <svg
                              width="50px"
                              height="8px"
                              viewBox="0 0 50 8"
                              version="1.1"
                              class="--default"
                            ></svg>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default product;
