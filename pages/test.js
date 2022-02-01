import React from "react";
import axios from "axios";

function test() {
  React.useEffect(async () => {
    try {
      const response = await axios.get(
        "https://ivloo.com/wp-json/wc/v3/products",
        {
          headers: {
            consumerKey: "ck_16d055e3cb4d3330765e3f285991dfdaf72a9e69",
            consumerSecret: "cs_2c6109ae2e59648f94302ec499211aada9e47901",
          },
        }
      );
      console.log(response.data, "data");
    } catch (error) {
      console.log(error.response, "error");
    }
  }, []);
  return <div>hello</div>;
}

export default test;
