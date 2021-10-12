import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUSBxMWFRUVGBoaFxYYGCAXGxsbGyAfHxogGiAaICkgGyAnGxUYJTEhJSkrLi8uFyIzODMtNyktMCsBCgoKDg0OGxAQGjclHyUtLS0tNS4rLisrLS0tLS0tLS0vLTUtLS0tLi0tKy0rLS0rLTc3LS0rNS0vLS0tNy0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABgcIAwQFAgH/xABJEAABAwIDBAYFBgsGBwAAAAABAAIDBBEFBiEHEjFBE1FhcYGRNnOhsbIiMkJSYnIUFTNDkpOzwcLR0iMkJjQ1ghclU1R0g+L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/xAAsEQEAAgEDAgQGAQUAAAAAAAAAAQIRAwQxEiEFE0KhIjJBUXGRgQYVI6Lw/9oADAMBAAIRAxEAPwCtkRF0vEREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEU32V5SgzLizpMRF4ILEt5Pe6+60/ZABJHPQcCVJnCwi+GYJiuLC+GQSyjrYwlvnw9q7tVk7MtJFvVFHMB1hu957t1oTHMcwjKuGtdiDhGz5rGNbqT1Na3qHgF18rZwwfNO8MLc7eZq5j27rgDwPURfqJXn1y10wzPzX3DFLPJuwNc5x4BoLj5DVXNtpyzSPwj8OpmhssbmiQgfPa8ho3ushxbr1XHVaIbFvToepk/hWurtlMd8IbPQ1lOzeqIpGDhdzHNF+8iy7NBgWMYlFv4fTTSN+syNzh5gWK0pmTBafH8N6Ctv0ZfG5w6wxwdu9x3bHsJXLhuIYVUExYbLE7oxbcjc07oGlrNOg5LPmL0stVVPPRzllWxzHji1zS0jvB1XYw7B8TxQH8WwSygcSxhcB3kCy0PnXJ1DmunjFT8l8b2kSD525cdIy/U5t7dRseS9OgqMGonikoXwsLBZsLXNDgB9kG6eYdLMFdQ1mHTblfG+N31XtLT4XGq661FmnAKPMeDvgrGg3B3Hc2Pt8lzTyPvFwdCsx0lJPV1jIoRd73hgH2ibD2rVbZSYw+aeGWpmDKZrnuPBrQXE9wGpXuMyTml8d20U1u1tj5E39ivrKeWMOyrhu5Sgb1h0kp+c88yTyHU3gPMryf8AijlX8YdEJXWvbpNw9Hfhx42+1a3as9c/Ren7qDr6Csw6bcxCJ8Tup7S0+FxquutVY3g9DjmHOhxFgexw8QeRafokdYWYMXoH4Xi0sEpuYnuZfr3TYHxFj4rVbZSYwRYXiU0YdBBM5p4ObE9wPcQLFfX4mxb/ALao/Uv/AKVd+UM7Zao8qUkVVVRsfHBEx7Te4c1gBHDrBUnwfMmDY3M5mEztlc0XcG30HAX001U65+yxVmn8T4sONNUfqX/0rpLWlVUQ0lO6SpcGtYC5xJsABqSVmHDcNmzJmYQ4foZ5XEEj5rSS4uI7G3NvDmrW2UmMPOpaaorJtyjY6Rx+ixpcfIar0KnLOPUsO9UUlQ1o4kxOsO/TRaKwTBMJynhBbRgMYxu9JI75zrDVz3c9B3DlZdLAs+Zex7Eegw6UmTXdDmOZvW1O6XDXTWynX9l6Wbbgr7iikmkDYWlzjwDQST3AalXRtYyPTVWHvrcLYGyxgula0WEjB84kD6YGt+YBBvpaF7Gtc9M9XJ7lertlMd8IhPQ1tPHvVEUjB1uY5o8yLLnw7BMWxSPew6nllaNN5jHOF+8Cy0nmvBI8xYK6mnNmPfEX2NjuskY9wBHAlrCL8rrmw+uwYSfg2HSQ70Qt0THNu0DlujhZZ8xell2spKmhn3K2N8bh9F7S0+RC4VpPaDl+DH8tStc0GSNjnxO5h7RcC/U61iO3sCzYDcaLdbZSYwIiLTIiIgIiIC9bAsw45gji3A5ns6Qi7WgO3ncBo4G55aaryVcGw/LtO6lfXVLQXlxjiv8ARAA33DtJO7fkGnrKzacQsQ8qryln7OYjfje4wMBDOlIYQHWuS2ME30HGx0Up2d7PK3KuNmoq52PvE6PcY0/Scx17n1fVzXc2pZyqsrUUbMNDemmLrOcLhrW23jbmbuAF9O/goxskzLmDHM2PbitQ+WNsD3EENADt+MNNmtAvYu9q8+8w12ymm1b0Aqe5n7RqqzYt6dD1MnvarU2q65BqbdTPjaqr2LenQ9TJ72q1+WSeVubRqqSkyRVOhJB6MtuNCN8hpt1aOKo/ZjM+mz5S9Dpdzmm3NpY649x8Arp2pegVV91vxtVJ7OfTuk9YfhcleJLctFY1Uvo8Hmkj4sie4d7Wkj3LMGAzSx4/TyAnf6eM73MkvFyT23N+9aZzP6NVPqJfgcsx4L/rEHrovjalOCzVyyeaialxIyUzi17ZC5rhxBBuCFrFZiyrgzcwZujp5Lhr5HF9tDuNu51uq4Fr9qlPqtkkwTE9ouaqJ8dG90kTwWOke1jG2OjgH7oubXB3blc9PsZxqVn96ngZcct59vY33q5JXUuC4S4xtDIoYyd1osA1gvYDuCoHGtpmacQmc6mm6BpvuxxtboOV3EFzj23t2BWJmeEmIjloemjMNO1pN91oF+uwss1bQB/jer9afcFpSj3zSM6X52629+u2qzXtB9N6v1p9wU0+Vtw8OngmqqhsdM0ue8hrWjiSdAB4rSWQ8rw5VwQRixlf8qV/W7qH2W8B581CtjWT+jjGIYi35TgRTg8mnQv73cB2XP0lNs84tiWFYE44LDJLO/5LNxhfu34vdYchwHM25XVvOeyVjHdXu2TN/TzGgw53yWkGdw5uGoZ3Die2w5FdfYPRslx6omdxjia0f+x1z+y9pVc1lNWUsv8AzBkjHOJ/KNc1xJ1J+WLknjdWXsDna3FKuM8XRxuHcwvB/aDzVmMVTOZTPbBUvp8iTCPTfdGw9xeLjxAI8VRmWKl9HmSmkj0LZ4vIuAd5tJHirw2yROkyHKW/RfET3b4H8SorAo3TY7TtZqXTxAeL2pThbctVPY2RhDxcHQjrBVD7K6UUO0x0TeEX4RH+gS3+FX0qK2bTMqdrEskZuHvqng9jnEj2FYrxKzzC287Vs2HZSqpaY7r2wv3XdTiLA+BN/BZ6yRM+lzhSOiNj0zB4OO6fMEq+tpPoJV+qPvCoHKPpXSf+RF8QWqcSluWnqsA0r7/VPuWSWfMHctb1X+Wd90+5ZIZ8wdyumXfSIi9GBERAREQFeOw7E4Z8uPp7jfhkcbdbZNQf0t4eHaqOXZw3EKzCq0TYbI6ORvBzermDyINtQdNFm0ZhYnDQmf8AJcWb6aO0nRSRE7r93eFnW3gRcfVB48lwZSy3hWQKImqmaZJ3sYZH2YHOOjGMFzzJ0uSb9mlaN2tZqEVrwE/WMevsdb2KKY5jeJ4/VdJi8rpHDQX0a0fZaLBvgNbC6xFJ4azDTOPU1FW4JNHihDYnRuEjid3dbbU3PC3G/YqU2Oxsj2glsTt9rY5g19rbwBaA6x4XFjbtUdxTNOO47h8VNXTF7GEAN0BcfomQ/TI0sT38dVx0NVjOT8XEkAMUgBaCWhwIPHjoeA4KZivwzPeVxM/Fjsvfal6BVX3W/G1Uns59O6T1h+Fy5MYz/mPGsOdBXytMb7bwEbWk2II1AvxAXg4bXVGF4gyeiduyRneabA2PDgdDoT5rdazEYZme7T2Zz/hqp9RL8BWY8F/1eD10XxtUjrdpOaK2jfFPKzdkaWutG0GzhY2NtNCVE4ZHwytdEbFpBB6iDce0JWswTLW/NZvyBicOE58ikqjZhe9jieA3wWgnsuQu3/xTzbb8sz9U3+ShjjvEl2t+KlazHKzZrKspoqylfHPq17XNcOsOFj7Cq0wTZBS0OMNlrqgyxsdvNj3N0m3DfNzccLgAXUDwTaNmXB6YRxStkYBZolbvlo6g4EOt2Em3JfGObQcy43TmOomDGHRzYm7lx1E3LrdYvYqRSYJmGh8PxCkxGIuoXtkaHOaXNNxvNNnDTmCFR222hw+DMgfRvHSSt/toxxaQAGuPUXN5fZvzUYy9mbF8tiQYRJuCQWcCA4X5OAOgcBpfzvYLyJnvmeXTkuLiS5xNySeJJOpKtaYlJnLWMklNQU15HNjY0WuSGtAHDjoNAvIdnXKwfY11N+uZbzvZUgcvZhzE8S43K77JlcXuA7G8G8OxdtmQoy3WoN+xn/0vnaniO005xa/6zLsps9e8Ziq874XjtEQDFURO0Ni2Rp8rhUHhuKRZM2jSPgBEMc0sTmjU9EXEWHM7tmnt3AuhieFV+U6tktHMQXXAfGTG7SxsbHUa8LkLw55pKiZz5yXOcS5zjqSTqSe8rt0NSmrTrpOYlzatLUt02jEw1LV09BmHA3McQ+GeO2806FrhoWkeYKhWU9ldNgOOtqKmczdGSY27m5Y8AXG5uQDytrqqpy3m/HMtC2Fy/IJuYnjfZc8SAfmn7pF+akNVtczPNDuxiCM/WbGSfDfcR7FvpmOGcwsvaXmqLLeBObE4fhEwLYm8xfRz+5oPnYKrNjLQ3PMYH/Sk9wURr62qxGrMte90j3cXONyf5DsGgXNgmL12BYiJ8MduvaCASA4WOhuCtRXEYTPdobaT6C1fqj7wqByl6V0nr4viC9PFtoOZMXw58FbK0xyCzgI2tJHG1wNOCjdJUy0dUySmNnscHNPGxabjjodQlazEEz3awqv8s77p9yyQz5gU0l2n5sljLXTM1BGkTefgoaBYaJSswWnIiItsiIiAiIgIiICIiApLgmZY2wdBjreli4BxG8W9/WO3iO1RpFz7jbaevXpvH4+8fh66WtfStmqb1mTaSth6TBZQA7UAneae4jUeN1Gq/AcUw8/3iJ1vrN+U3zHDxsuLC8WrcKlvRPtfi06tPeP38VNsKzrRVIArx0Tuvizz4jx818nUnxDacf5K/wC3/ft31ja6/PwW9leAg8EVty4fhOKx7z445L/SABP6Q19q8uoyRhMv5LfZ3Ov8QKmn/UGhxqVmsrfwrU9ExKuEU4lyDH+ZnI72A+4hcByDPynb+gf6l1R41s59ftLwnw7cR6feEORTJuQZb/KqG+DD/Uu1DkGlH5eZ5+6A333Ut41s49ef4lY8N3E+n3hA19RsfK/diBcTyAufIaqzKbKGDU+pjLz9txPsFh7F9VWNYJgcZbGWAj83EBfxtoPFc0+ORqT06GnNpe39smsZ1bxEIpRZYxzEDeqc5g65HEu/RvfzsuKno30GbIoaKbfs9l3N053eDYkaNBX7jWba7EQW0/8AZMPIH5R73fuC/cnGmoZJKqsNmxN3WjmXO5N7bXH+5bmNzXRtqa0R3jEViPrPHdiJ0Z1K10885mZn6Q720WqDquKJv0Wlx/3aD2NUPXZxGtlxGudLPxcb26hyA7gusvo7Hb+Rt66c8xHf8uXc6vm6triIi63OIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIrlp6melfele5h62kj3cV7VLnDGacfLc1/32/vbYrwEXhq7XR1fnrE/w9Ka2pT5bTCYxZ9nH5aBp7nlvvBXOM+xW1gP6Y/koOi4beC7OfR7y6Y8R3Eer2hNZM/H81T+cn8mro1GeMTk/INjZ4Fx9pt7FGEW6eEbOvGn+8yzbf7i3qd6txjEq4f3qZ5HVfdHk2wXR4cERd9NOlIxWMfhy2va05tORERaZERFQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q=="
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__Nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLinetwo">
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLinetwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLinetwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLinetwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
