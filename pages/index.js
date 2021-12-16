import axios from "axios";
import Head from "next/head";
import Banner from "../components/wommen-D/Banner";
import Discount from "../components/wommen-D/Discount";
import FiveCol from "../components/wommen-D/FiveCol";
import FourBanners from "../components/wommen-D/FourBanners";
import FourCol from "../components/wommen-D/FourCol";
import FourwithOneText from "../components/wommen-D/FourwithOneText";
import HorizontalText from "../components/wommen-D/HorizontalText";
import SevenCol from "../components/wommen-D/SevenCol";
import SexCol from "../components/wommen-D/SexCol";
import Stories from "../components/wommen-D/Stories";
import StoriesWithoutText from "../components/wommen-D/StoriesWithoutText";
import TenCol from "../components/wommen-D/TenCol";

export default function Home({ allPostsData }) {
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
          id="reycore-82321d78a8-css"
          href="https://ivloo.com/wp-content/uploads/rey/header-82321d78a8.css?ver=2.2.1.1.1638094668"
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
          id="elementor-post-1943-css"
          href="https://ivloo.com/wp-content/uploads/elementor/css/post-1943.css?ver=1638433094"
          type="text/css"
          media="all"
        />

        <link rel="stylesheet" href="/wommen.css" type="text/css" media="all" />
      </head>

      <body class="page-template page-template-template-builder page-template-template-builder-php page page-id-1943 wp-custom-logo theme-rey woocommerce-no-js opt woo-variation-swatches woo-variation-swatches-on-mobile wvs-theme-rey-child wvs-theme-child-rey wvs-style-squared wvs-attr-behavior-blur wvs-tooltip wvs-no-css wvs-show-label rey-navDefault rey-no-js woo-variation-swatches-stylesheet-disabled rey-wishlist elementor-default elementor-kit-15 elementor-page elementor-page-1943 rey-cwidth--default --no-acc-focus">
        <div class="rey-siteContainer rey-pbTemplate">
          <div class="rey-siteRow">
            <main id="main" class="rey-siteMain rey-filterSidebar">
              <div
                data-elementor-type="wp-page"
                data-elementor-id="1943"
                class="elementor elementor-1943"
                data-elementor-settings="[]"
              >
                <div class="elementor-section-wrap">
                  <Discount />
                  <Stories />
                  <Banner />
                  <StoriesWithoutText />
                  <FourCol />
                  <FiveCol
                    url1="https://images.asos-media.com/products/topshop-90s-shoulder-bag-with-buckle-in-mauve/200219950-1-grey?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url2="https://images.asos-media.com/products/helene-berman-ruth-coat-with-pleather-belt-in-cream/21971560-1-201cream?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url3="https://images.asos-media.com/products/topshop-animal-midi-slip-in-brown/24541918-1-brown?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url4="https://images.asos-media.com/products/topshop-mom-tapered-leg-jeans-in-washed-black/23875813-1-washedblack?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url5="https://images.asos-media.com/products/topshop-plunge-shiny-swimsuit-in-khaki/200226985-1-khaki?$n_640w$&amp;wid=634&amp;fit=constrain"
                  />
                  <HorizontalText
                    text="SHOP BY CATEGORY
"
                    color="black"
                    bg_color="white"
                  />
                  <StoriesWithoutText />
                  <HorizontalText />
                  <SevenCol
                    url1="https://ivloo.com/wp-content/uploads/2021/11/bhpc2.jpeg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/levis3.jpeg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/Women_SBB_ALDO.jpeg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/MicrosoftTeams-image31-14.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/Dune_Grid-1.jpeg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/Women_SBB_CK.jpeg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/Ardene2.jpeg"
                  />
                  <FourwithOneText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/232390123-3.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/08/clothings-1-1.jpg"
                    video="https://ivloo.com/wp-content/uploads/2021/11/Untitled-video-%E2%80%90-Made-with-Clipchamp-5.mp4"
                    color="#A48B9E"
                  />
                  <HorizontalText
                    text="SHOP BY CATEGORY
"
                    color="black"
                    bg_color="white"
                  />
                  <TenCol
                    url1="https://ivloo.com/wp-content/uploads/2021/11/a123.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/k0o123.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/j90123.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/0912op12.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/dres1203.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/bj0912.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/co01239.jpg"
                    url8="https://ivloo.com/wp-content/uploads/2021/11/123.jpg"
                    url9="https://ivloo.com/wp-content/uploads/2021/11/levi2s233.jpg"
                    url10="https://ivloo.com/wp-content/uploads/2021/11/0912123.jpg"
                  />
                  <FiveCol
                    url1="https://images.asos-media.com/products/new-look-two-tone-mom-jean-in-blue/24294755-1-midblue?$n_640w$&wid=634&fit=constrain"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/220611420-1-burgundy.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/200329534-1-black.jpeg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/23560177-1-orangeadeaa.jpeg"
                    url5="https://images.asos-media.com/products/reebok-natural-dye-sweatshirt-in-sepia/23508108-1-wildbrown?$n_640w$&wid=634&fit=constrain"
                  />
                  <HorizontalText
                    text="SHOP BY CATEGORY
                            "
                    color="white"
                    bg_color="#e6bcbc"
                  />
                  <StoriesWithoutText />
                  <FourwithOneText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/f0912-scaled.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/08/face-body.jpg"
                    video="https://ivloo.com/wp-content/uploads/2021/08/face-2.mp4"
                    color="#dbb3b3"
                  />
                  <HorizontalText
                    text="SHOP BY CATEGORY
                            "
                    color="black"
                    bg_color="white"
                  />
                  <FourBanners
                    url1="https://ivloo.com/wp-content/uploads/2021/11/209921.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/hu.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/levis3-321.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/FRAG.jpg"
                  />
                  <SexCol
                    url1="https://images.asos-media.com/products/the-ordinary-balance-set-worth-2530/22184712-1-nocolour?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url2="https://images.asos-media.com/products/sunday-rain-sleep-easy-soaking-salts/23320925-1-nocolour?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url3="https://images.asos-media.com/products/tan-luxe-super-glow-hyaluronic-self-tan-serum-10ml/24465995-1-nocolour?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/22184712-1-noco2lour.jpg"
                    url5="https://images.asos-media.com/products/bareminerals-mineralist-lip-gloss-balm-vision/200820437-1-vision?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/2312jpg.jpg"
                  />
                  <HorizontalText
                    text="SPORTS WEAR "
                    color="black"
                    bg_color="#8f868c"
                  />
                  <StoriesWithoutText />
                  <HorizontalText
                    text="EVERYDAY OUTFIT INSPO
                    "
                    color="black"
                    bg_color="white"
                  />
                  <SevenCol
                    url1="https://ivloo.com/wp-content/uploads/2021/11/23912.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/320012-2342.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/2300912.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/309912.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/320012.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/322450012-2.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/399012.jpg"
                  />
                  <FourwithOneText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/24376121-2.jpeg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/23791420-4.jpeg"
                    video="https://ivloo.com/wp-content/uploads/2021/11/Untitled-video-%E2%80%90-Made-with-Clipchamp-7.mp4"
                    color="#8f868c"
                  />
                  <SevenCol
                    url1="https://ivloo.com/wp-content/uploads/2021/11/23912.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/320012-2342.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/2300912.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/309912.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/320012.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/322450012-2.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/399012.jpg"
                  />
                  <SexCol
                    url1="https://images.asos-media.com/products/the-ordinary-balance-set-worth-2530/22184712-1-nocolour?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url2="https://images.asos-media.com/products/sunday-rain-sleep-easy-soaking-salts/23320925-1-nocolour?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url3="https://images.asos-media.com/products/tan-luxe-super-glow-hyaluronic-self-tan-serum-10ml/24465995-1-nocolour?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/22184712-1-noco2lour.jpg"
                    url5="https://images.asos-media.com/products/bareminerals-mineralist-lip-gloss-balm-vision/200820437-1-vision?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/2312jpg.jpg"
                  />
                  <HorizontalText
                    text="FOOT WEAR
                     "
                    color="white"
                    bg_color="#bc9475"
                  />
                  <StoriesWithoutText />
                  <HorizontalText
                    text=" EVERYDAY OUTFIT INSPO

                     "
                    color="black"
                    bg_color="white"
                  />
                  <TenCol
                    url1="https://ivloo.com/wp-content/uploads/2021/11/a123.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/k0o123.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/j90123.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/0912op12.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/dres1203.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/bj0912.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/co01239.jpg"
                    url8="https://ivloo.com/wp-content/uploads/2021/11/123.jpg"
                    url9="https://ivloo.com/wp-content/uploads/2021/11/levi2s233.jpg"
                    url10="https://ivloo.com/wp-content/uploads/2021/11/0912123.jpg"
                  />
                  <FourwithOneText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/f0912-scaled.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/08/face-body.jpg"
                    video="https://ivloo.com/wp-content/uploads/2021/08/face-2.mp4"
                    color="#bc9475"
                  />
                  <FiveCol
                    url1="https://images.asos-media.com/products/new-look-two-tone-mom-jean-in-blue/24294755-1-midblue?$n_640w$&wid=634&fit=constrain"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/220611420-1-burgundy.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/200329534-1-black.jpeg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/23560177-1-orangeadeaa.jpeg"
                    url5="https://images.asos-media.com/products/reebok-natural-dye-sweatshirt-in-sepia/23508108-1-wildbrown?$n_640w$&wid=634&fit=constrain"
                  />
                  {/************************************************************* */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: "hello",
    },
  };
}
