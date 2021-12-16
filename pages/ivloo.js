import React from "react";
import Banners from "../components/wommen-m/banners";
import BigBanner from "../components/wommen-m/BigBanner";
import Everyday from "../components/wommen-m/everyday";
import NewCollection from "../components/wommen-m/NewCollection";
import ShopByBrand from "../components/wommen-m/shopByBrand";
import Stories from "../components/wommen-m/Stories";
import SubFirstNewCollection from "../components/wommen-m/SubFirstNewCollection";
import SubThreecol from "../components/wommen-m/SubThreecol";
import SubTwoCol from "../components/wommen-m/SubTwoCol";
import TreeCol from "../components/wommen-m/ThreeCol";
import TwoCol from "../components/wommen-m/TwoCol";

function ivloo() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Womens Clothing &#038; Fashion | Shop Womenswear &#038; Ladies Clothes
          | IVLOO &#8211; IVLOO
        </title>

        <link
          rel="stylesheet"
          id="rey-wp-style-css"
          href="https://ivloo.com/wp-content/themes/rey/style.min.css?ver=2.2.1.1"
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
          id="reycore-541d1d0f1b-css"
          href="https://ivloo.com/wp-content/uploads/rey/header-541d1d0f1b.css?ver=2.2.1.1.1638099900"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          id="elementor-post-15-css"
          href="https://ivloo.com/wp-content/uploads/elementor/css/post-15.css?ver=1638094490"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          id="elementor-post-2145-css"
          href="https://ivloo.com/wp-content/uploads/elementor/css/post-2145.css?ver=1638099898"
          type="text/css"
          media="all"
        />
        <link rel="stylesheet" href="/wommen.css" type="text/css" media="all" />
      </head>

      <body class="page-template page-template-template-builder page-template-template-builder-php page page-id-1943 wp-custom-logo theme-rey woocommerce-no-js opt woo-variation-swatches woo-variation-swatches-on-mobile wvs-theme-rey-child wvs-theme-child-rey wvs-style-squared wvs-attr-behavior-blur wvs-tooltip wvs-no-css wvs-show-label rey-navDefault rey-no-js woo-variation-swatches-stylesheet-disabled rey-wishlist elementor-default elementor-kit-15 elementor-page elementor-page-1943 rey-cwidth--default --no-acc-focus">
        <main id="main" class="rey-siteMain rey-filterSidebar">
          <div
            data-elementor-type="wp-page"
            data-elementor-id="2145"
            class="elementor elementor-2145"
            data-elementor-settings="[]"
          >
            <div class="elementor-section-wrap">
              <Stories />
              <Banners />
              <Everyday />
              <ShopByBrand title="BRAND" />
              <Stories />
              <NewCollection />
              <SubFirstNewCollection />
              <ShopByBrand title="CATEGORY" />
              <TreeCol />
              <SubThreecol />
              <TreeCol />
              <SubThreecol />
              <TwoCol />
              <NewCollection />
              <SubFirstNewCollection />
              <TwoCol />
              <SubTwoCol />
              <TreeCol />
              <ShopByBrand title="the Beuaty Store" />
              <BigBanner />
              <ShopByBrand title="BRAND" />
              <Stories />
              <ShopByBrand title="EVERYDAY OUTFIT INSPO" />
              <TreeCol />
              <NewCollection />
              <SubFirstNewCollection />
              <ShopByBrand title="CATEGORY" />
              <TreeCol />
              <SubThreecol />
              <TreeCol />
              <SubThreecol />
              <TwoCol />
              <ShopByBrand title="foot Wear" />
              <BigBanner />
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default ivloo;
