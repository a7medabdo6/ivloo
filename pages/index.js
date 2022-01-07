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
import Footer from "../components/wommen-D/footer";
import BlackBanner from "../components/wommen-D/BlackBanner";
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
                  <BlackBanner url1="https://ivloo.com/wp-content/uploads/2021/12/iv102-232341.jpg" />
                  <StoriesWithoutText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/l3.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/l6.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/l2.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/l4.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/l7.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/l1.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/8.jpg"
                  />
                  <FourwithOneText
                    url1="https://ivloo.com/wp-content/uploads/2021/12/20-07-233Chocolate_900x.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/12/Meshkie-com19.107041_1728x-scaled.jpg"
                    video="https://ivloo.com/wp-content/uploads/2021/12/Untitled-video-‐-Made-with-Clipchamp-10.mp4"
                    color="#957B70"
                    text="Want to update your wardrobe with the latest styles? Our edit of new-in clothing has all the latest trends in one place. Shop IVLOO DESIGN for everything from staple T-shirt dresses and jumpsuits to cool co-ords and statement pieces. Browse Topshop for an everyday wardrobe refresh, with trousers, shirts and versatile dresses on rotation. For experimental designs at the forefront of fashion, check out COLLUSION’s colour blocking and bold prints. Whether you’re looking to reinvent your style or find a statement piece for your weekend wardrobe, our edit of new-in clothing will keep your ‘fits feeling fresh.

                    "
                    image="https://ivloo.com/wp-content/uploads/2021/12/home-page21-page-2-3.png"
                  />
                  <FiveCol
                    url1="https://cdn.shopify.com/s/files/1/0339/6517/products/21-06-17MeshkiEnchantedGarden-114_900x.jpg?v=1624923920"
                    url2="https://cdn.shopify.com/s/files/1/0339/6517/products/20-10-27MeshkiEcom-133_1728x.jpg?v=1607647386"
                    url3="https://cdn.shopify.com/s/files/1/0339/6517/products/20-09-22MeshkiEcom-175_1728x.jpg?v=1602169697"
                    url4="https://cdn.shopify.com/s/files/1/0339/6517/products/20-10-27MeshkiEcom-45_bba42d1b-cd6a-43b3-a39c-b16edb7b1bfc_900x.jpg?v=1604473387"
                    url5="https://cdn.shopify.com/s/files/1/0339/6517/products/21-03-09MeshkiUNISEX-86_51fab226-118b-42b1-b624-9f0aac5db62e_900x.jpg?v=1616655973"
                    text1="SWIMWEAR"
                    text2="LEGGINGS"
                    text3="BOTTOMS"
                    text4=" BODYSUITS"
                    text5="DRESSES"
                  />
                  <BlackBanner url1="https://ivloo.com/wp-content/uploads/2021/11/iv102-2341.jpg" />
                  <StoriesWithoutText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/l3.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/l6.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/l2.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/l4.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/l7.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/l1.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/8.jpg"
                  />
                  <FourCol />
                  <FiveCol
                    url1="https://images.asos-media.com/products/topshop-90s-shoulder-bag-with-buckle-in-mauve/200219950-1-grey?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url2="https://images.asos-media.com/products/helene-berman-ruth-coat-with-pleather-belt-in-cream/21971560-1-201cream?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url3="https://images.asos-media.com/products/topshop-animal-midi-slip-in-brown/24541918-1-brown?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url4="https://images.asos-media.com/products/topshop-mom-tapered-leg-jeans-in-washed-black/23875813-1-washedblack?$n_640w$&amp;wid=634&amp;fit=constrain"
                    url5="https://images.asos-media.com/products/topshop-plunge-shiny-swimsuit-in-khaki/200226985-1-khaki?$n_640w$&amp;wid=634&amp;fit=constrain"
                    text1="Swimwear"
                    text2="Jeans"
                    text3="Dresses"
                    text4=" Coats &amp; Jackets"
                    text5="Accessories"
                  />
                  <HorizontalText
                    text1="THE   
"
                    text=" CLOTHING STORE"
                  />

                  <StoriesWithoutText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/l3.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/l6.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/l2.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/l4.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/l7.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/l1.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/8.jpg"
                  />
                  <HorizontalText
                    text1="EVERYDAY OUTFIT 

"
                    text="INSPO"
                    color="black"
                    bg_color="white"
                  />
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
                    heading="clothing
                    "
                    text="Want to update your wardrobe with the latest styles? Our edit of new-in clothing has all the latest trends in one place. Shop IVLOO DESIGN for everything from staple T-shirt dresses and jumpsuits to cool co-ords and statement pieces. Browse Topshop for an everyday wardrobe refresh, with trousers, shirts and versatile dresses on rotation. For experimental designs at the forefront of fashion, check out COLLUSION’s colour blocking and bold prints. Whether you’re looking to reinvent your style or find a statement piece for your weekend wardrobe, our edit of new-in clothing will keep your ‘fits feeling fresh.

                    "
                  />
                  <HorizontalText
                    text1="SHOP BY 
 

"
                    text="CATEGORY"
                    color="black"
                    bg_color="#f8f8f8"
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
                    url5="https://images.asos-media.com/products/new-look-two-tone-mom-jean-in-blue/24294755-1-midblue?$n_640w$&wid=634&fit=constrain"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/220611420-1-burgundy.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/200329534-1-black.jpeg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/23560177-1-orangeadeaa.jpeg"
                    url1="https://images.asos-media.com/products/reebok-natural-dye-sweatshirt-in-sepia/23508108-1-wildbrown?$n_640w$&wid=634&fit=constrain"
                    text2="CASUAL DRESSES"
                    text1="Jeans"
                    text4="DESIGNER"
                    text3=" Coats &amp; Jackets"
                    text5="SKIRTS"
                  />
                  <HorizontalText
                    text1="THE   "
                    text="BEAUTY STORE"
                    color="white"
                    bg_color="#e6bcbc"
                  />
                  <StoriesWithoutText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/huda-1.png"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/cha-1.png"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/bobby-1.png"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/bare-1.png"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/m-1.png"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/aveda-1.png"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/story22-1.png"
                  />
                  <FourwithOneText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/f0912-scaled.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/08/face-body.jpg"
                    video="https://ivloo.com/wp-content/uploads/2021/08/face-2.mp4"
                    color="#dbb3b3"
                    heading="face & body
                    "
                    text="our entire offering of makeup, skincare, hair products and more is available to view right here. Whether it’s a fizzing bath bomb or melting bath salts you’re after, or just some fake tan for that night out you forgot was on the agenda this weekend, our edit’s got it all. Makeup brushes seen better days? Shop a wide selection of tools and accessories, including makeup brush sets and makeup brushes for your face, eyes and lips. And if you’re feeling generous, bag yourself some serious present-buying points with our range of gifts and gift sets – think everything from nail-polish duos and lipgloss trios to dreamy fragrances."
                  />
                  <HorizontalText
                    text1="SHOP BY  "
                    text="CATEGORY"
                    color="black"
                    bg_color="#f8f8f8"
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
                    text2="MAKEUP"
                    text1="TANNING"
                    text4="SUNCARE"
                    text3="NAILS"
                    text5="BODY CARE"
                    text6="SKIN CARE"
                  />
                  <HorizontalText
                    text1="SPORTS  "
                    text="WEAR"
                    color="white"
                    bg_color="#8f868c"
                  />
                  <StoriesWithoutText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/238900123.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/12893120.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/k128312jpg.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/j122333.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/1990oo312.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/adidas-1-12.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/n213.jpg"
                  />
                  <HorizontalText
                    text1="EVERYDAY OUTFIT 

                     "
                    text="INSPO"
                    color="black"
                    bg_color="white"
                  />
                  <SevenCol
                    url7="https://ivloo.com/wp-content/uploads/2021/11/23912.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/320012-2342.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/2300912.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/309912.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/320012.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/322450012-2.jpg"
                    url1="https://ivloo.com/wp-content/uploads/2021/11/399012.jpg"
                  />
                  <FourwithOneText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/24376121-2.jpeg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/23791420-4.jpeg"
                    video="https://ivloo.com/wp-content/uploads/2021/11/Untitled-video-%E2%80%90-Made-with-Clipchamp-7.mp4"
                    color="#8f868c"
                    heading="sportswear"
                    text="If you want to look fresh when working out, make our edit of 
                    men’s sports clothing your go-to. For men’s activewear to suit every workout, 
                    our very own IVLOO DESIGN steps up to the plate, and Nike Running has you covered 
                    with a variety of leggings and thermal base layers to keep you cool when it starts to heat up
                     on your run. And, whether you’re hitting the gym or meeting friends to kick the ball around,
                      check out Under Armour for all your men’s sportswear essentials.
                     From sweatpants and shorts to track jackets and men’s
                      sports tops, we’ve got all your activities covered."
                  />
                  <HorizontalText
                    text1="EVERYDAY OUTFIT 

                     "
                    text="INSPO"
                    color="black"
                    bg_color="white"
                  />
                  <SevenCol
                    url1="https://ivloo.com/wp-content/uploads/2021/11/ks012.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/s2399012.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/s02912.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/93012-1.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/23239012.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/hod.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/90123.jpg"
                  />
                  <FiveCol
                    url1="https://images.asos-media.com/products/adidas-backpack-in-peach/23475215-1-peach?$n_640w$&wid=634&fit=constrain"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/24429998-1-greytiedye٣-1-803x1024.jpg"
                    url3="https://images.asos-media.com/products/nike-unisex-vintage-logo-fleece-oversized-joggers-in-washed-black/23690673-1-black?$n_640w$&wid=634&fit=constrain"
                    url4="https://images.asos-media.com/products/the-north-face-glacier-cropped-t-shirt-in-mint-green-green/23376041-1-mintgreen?$n_640w$&wid=634&fit=constrain"
                    url5="https://images.asos-media.com/products/adidas-training-seamless-light-support-sports-bra-in-black/21859475-1-black?$n_640w$&wid=634&fit=constrain"
                    text2="TOPS"
                    text1="SPORTS BRAS"
                    text4="SHORTS"
                    text3="JOGGERS"
                    text5="BAGS"
                  />
                  <HorizontalText
                    text=" WEAR
                     "
                    text1="FOOT"
                    color="white"
                    bg_color="#bc9475"
                  />
                  <StoriesWithoutText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/stor23y.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/con1.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/vans.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/all.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/2312kj.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/aldo09.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/ch.jpg"
                  />
                  <HorizontalText
                    text="  INSPO

                     "
                    text1="EVERYDAY OUTFIT"
                    color="black"
                    bg_color="white"
                  />
                  <TenCol
                    url1="https://ivloo.com/wp-content/uploads/2021/11/Women_SBB_Dune0.jpeg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/charlsKEITH.jpeg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/Aldocopy4.jpeg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/Skecherscopy.jpeg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/ADIDAScopy.jpeg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/Nike2.jpeg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/ninewest.jpeg"
                    url8="https://ivloo.com/wp-content/uploads/2021/11/CallitSpring.jpeg"
                    url9="https://ivloo.com/wp-content/uploads/2021/11/BIRKENSTOCK.jpeg"
                    url10="https://ivloo.com/wp-content/uploads/2021/11/NATURALISER.jpeg"
                  />
                  <FourwithOneText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/22944307-1-23.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/08/shoe-1.jpeg"
                    video="https://ivloo.com/wp-content/uploads/2021/08/shoes-1.mp4"
                    color="#bc9475"
                    heading="shoes"
                    text="You’ve nailed your outfit, now all that’s left is the footwear. This is where our edit of women’s shoes comes in. Whether you’re looking for everyday winners or something for a night out, give your feet the VIP treatment, whatever your style. Refresh your wardrobe with IVLOO DESIGN’s selection of fashionable shoes, including ankle boots and lace shoes, and find comfortable shoes that never compromise on style from New Look. Looking for women’s trainers? Classic shoe designs from Vans will add a street-style edge to any outfit.
                    "
                  />
                  <FiveCol
                    url1="https://images.asos-media.com/products/new-look-faux-snake-lace-up-chunky-boot-in-black/21727617-1-black1?$n_640w$&wid=634&fit=constrain"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/22783276-1-tidepool.jpeg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/21883678-1-red.jpeg"
                    url4="https://images.asos-media.com/products/loungeable-twist-detail-faux-fur-slider-in-mint/22884212-1-mint?$n_640w$&wid=634&fit=constrain"
                    url5="https://images.asos-media.com/products/topshop-court-sporty-lace-up-trainer-in-beige/200246231-1-beige?$n_640w$&wid=634&fit=constrain"
                    text2="SLIPPERS"
                    text1=" SNEAKERS"
                    text4="FLAT SANDALS"
                    text3="FLAT SHOES"
                    text5="BOOTS"
                  />
                  {/************************************************************* */}
                  <HorizontalText
                    text="  RIES

                     "
                    text1="ACCESSO"
                    color="white"
                    bg_color="#5a6273"
                  />
                  <StoriesWithoutText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/12099312.jpg"
                    url2="https://ivloo.com/wp-content/uploads/2021/11/900999012.jpg"
                    url3="https://ivloo.com/wp-content/uploads/2021/11/mp00.jpg"
                    url4="https://ivloo.com/wp-content/uploads/2021/11/90po123.jpg"
                    url5="https://ivloo.com/wp-content/uploads/2021/11/dk.jpg"
                    url6="https://ivloo.com/wp-content/uploads/2021/11/lev123.jpg"
                    url7="https://ivloo.com/wp-content/uploads/2021/11/mp099.jpg"
                  />
                  <FourwithOneText
                    url1="https://ivloo.com/wp-content/uploads/2021/11/201291296-1-blue.jpeg"
                    url2="https://ivloo.com/wp-content/uploads/2021/08/200427188-1-rustanimal-1-1.jpg"
                    video="https://ivloo.com/wp-content/uploads/2021/08/dresses-2-1.mp4"
                    color="#5a6273"
                    heading="accessories"
                    text="Because an outfit without accessories just isn’t the same, right? Express your individuality and take your look to the next level with our edit of women’s accessories. IVLOO DESIGN delivers all the latest trends, while My Accessories London is the go-to for hair accessories for women. All about finding the bag of your dreams? Check out River Island for a whole range of styles, including quilted satchels and crossbody bags for when you’re travelling light. From sunglasses and belts to essential jewellery and women’s hat and scarf sets, we’ve got you covered.

                    "
                  />
                  <div style={{ marginTop: "20px" }}>
                    <SexCol
                      url1="https://ivloo.com/wp-content/uploads/2021/11/Dune4.jpeg"
                      url2="https://ivloo.com/wp-content/uploads/2021/11/Aldo3.jpeg"
                      url3="https://ivloo.com/wp-content/uploads/2021/11/TommyHilfiger.jpeg"
                      url4="https://ivloo.com/wp-content/uploads/2021/11/BHPCbag2.jpeg"
                      url5="https://ivloo.com/wp-content/uploads/2021/11/Guessbag9.jpeg"
                      url6="https://ivloo.com/wp-content/uploads/2021/11/charlsKEITH2.jpeg"
                    />
                  </div>

                  <FiveCol
                    url1="https://images.asos-media.com/products/aldo-sevorewen-cross-body-bag-with-gold-detail-in-black/23769445-1-blackwithgold?$n_640w$&wid=634&fit=constrain"
                    url2="https://images.asos-media.com/products/asos-design-leaf-hairband-in-gold/23428594-1-gold?$n_640w$&wid=634&fit=constrain"
                    url3="https://images.asos-media.com/products/adidas-originals-trefoil-bucket-hat-in-light-pink/22878567-1-pink?$n_640w$&wid=634&fit=constrain"
                    url4="https://images.asos-media.com/products/adidas-originals-trefoil-bucket-hat-in-light-pink/22878567-1-pink?$n_640w$&wid=634&fit=constrain"
                    url5="https://images.asos-media.com/products/asos-design-hoop-earrings-with-pearl-row-in-gold-tone/22480099-1-gold?$n_640w$&wid=634&fit=constrain"
                    text2="SCARVES"
                    text1="JEWELLERY"
                    text4="HAIR ACCESSORIES"
                    text3="HATS"
                    text5="BAGS & HANDBAGS"
                  />
                  <Footer />
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
