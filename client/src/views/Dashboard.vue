<template>
  <div>
    <v-row>
      <v-col>
        <v-navigation-drawer permanent>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEVFBEREREXFxEXGyMdGxcXGxkfHxojIyAlJSMgIiInLDkwJyk1KyIiMTcxNS8xNDQ0Ji85RkUyPDk+NDIBCwsLDw4PHRERHTMoIigzMTE6MTM0LzExMTMxMTEvNDExMTMxMS8xLzEvMTExMTExMTE6MT0xMTExMTExMzExMf/AABEIAMgAxgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EADwQAAIBAgQDBgQFAgYCAwEAAAECEQADBBIhMQVBURMiYXGBkQYyobEjQlLB0RTwFTNicuHxQ4IkY6IW/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQIAAwQFBv/EAC0RAAICAgIBAwMCBgMAAAAAAAABAhEDIRIxQQQTUSIyYQVxgZGhscHwI0LR/9oADAMBAAIRAxEAPwCwi7ZkEFVg6BQc3kOf9mu7S3HKi2jEc2YoOe41n3rLjW5Qzm7snVdNdSI25nrpRQwfeBktbDgF0iVkTII3/veue8cXvsmiA2rgfISmfTmSDygePnW7uUGAoBAAgAiOs671l5MpMmYOmo1gxPvQzuZIzT61myPimq7AH4bF9mpiZOmnLTcUJYfKR0mYImtoBlJJObcRzreQq5nSOoP1qhxlxIxxZu23ORkzA7Tz2nX2qLGcKBK9kQpE93nPWTuKCGLAiSZDSIE+lc/4vekmVnxUbdJp8c3F72NYXwzBLcJ7RxCGWBPjtVms3VJKZcpAgDTbkRHKqn23atbAKqdQwXQkb/ej+GkKj3jcZrqL8p5AcvWujhyJq0hRubFq0c7NAJGrRAPLXp51Hfa3fRhauLmOk9P73pVieNswkMlsGNWBMcw0R5+1S/41ZKLKG435iqQszG52mr+cXpBEF/4SxJcZghDNqynruY8KsZ4F3rMOQLYEsAAXjaRsDpE+NHcOh1Nxe7mPT3/fWjyQv96mpHHFbIR28OqmUUL1AETQ97FLm7i9o6ztEL1ljoNvOiipO5gdAfuaXcYv27aAG4ts8gFzFhzAXnTshx/TWcUAbri4u+RT3B5j83mfpQmKVMV+CDlwKQHYGBdIMC2p/QI7x57daVrhL10o62hawz3ApBBW8y7EGPlB586s5wuZOzKKtsCFQAaRtQVsPQRg2t5QttgVXQARpGkRyrMRcIDZADcAkZpgeZH2qDB8KsWzmt2grcyOtFraUTGx3ptgI8ACLdufmKgk9SdSfc1Fj8atpczGADqSGPiYjcxU2GEKqgch9qXGzbS1cv4qYEsQ5zZB0FB9aIEY7iaJZF78pAgjx5+lefYfiCIxulDddmOYNoCFMg6c6cNxDEXoVEVbF05UUoTlAOhA5Hf2PSm+D4Tbt3LwD5rtzUld0B3PQTVErm1RAfgBBtdmiQJLsWJPebcCBAjXTlpWUPjPiP8Ap2Ni2muZ2LNse9sOvnW6s5JBIEW1ke7YKm6SJtnUkctOo/mpgFtWiiDJdzGVmY/TqI85FDvhy7qjAK2wP7Aj+9axuFXwxZy+UEAzq0ExIjflp41mc3JfSgI5UKzHt3OxIYHSZ5+f70f/AEtkxbAUBj3mU5iIPInX/ul6HvqUYZs5WGIG+mvSiLhS0VKXJJ5gyP8AcSOf1rP19VBN4zDC25iInSPMxI3BqEEmJ111E7+tQjEMxEtvoWqW0oDwCCJ08aolNSdxQvZzbtsxI18gOn8UXh8LYdCCRmUauxM+GnT+K3gnIcuYlZK5p1/eoWvfPn0LHoOdDrsJ1w8qpAEBhrIE/eiMbi7iFlUCH36REaCJG9Lb1oKdMx31jQ0PxbiXZW/xACTqs7+HlV2Fz5VHyHsbYi4Lpt2yRbsgS2mug3PP9qhsY3Bo4KOhVR8zAkSBvHn96864hx242dsxBIy6aaTMUGmKcwBMV1I412+yUewYL4itfKJYbwoC7mToeVN8NxG3c71tWZ42jX32ivFbWJcbMAPrTrhPxA1tgc5I5n+Ks4ko9TuLdIlnFteiwWPqdB6ChsDgrVpyzSbzjvO7Bmidgd4qtf8A9UtxALmTTXMw1roXrbtpcJJGYAHceB6DTyqucnHdELlubcNK+O5gHn61sXyWZQjQv5joCeg61UP6y4jWtS0MRq3VTyHlPpTixj3uAjP2Z66EnwXxJ5UFNMg9LgRJA8zXFy8FAk77Uu4dhyQXvIc0gLnMkAbb86ZhFGwHtVidoBq2Zg6RHKsu2lbRlBHQiZqQVlEhzlGmg028KXXbRftFssLbFhnaAW23HQ+dFYrFW07rtBOnvVexzpbt3GsM5me6ToxiNJ3qnJNRWyEWNx74cql212oAgOQGnX0rdS8PvzbHaXFQ6GCAYkbaisqhTb8hoxLBu27ZKIs/LBzHQaDw05UUrdx7d4MGImNwI0lfDTakWAdLbjNcdV1mOsaftvTXGYxXYtbuTC6MAJmdojaN6EZprl5ACGyjw8AMyjMHynpm1jQjWD5UB3O8Cp8P+uYo44i0blpgv4Y0ZW01nRielZj7qM5C21EHdTM+vnWfIrjdonYudIiY9BXaWmOgmetEJBkEFucA+FR4bRxOkcx9qy15GNOl3LOrKJgTO3SomDtl3g6jXpTxMBbme0JYSSp8ulL7aSAqhgASTsAOWnSrIxb0Ajxo7JTcLxbRJjp5615dxriz37jOx05AcvCrF8f8XIixbIyfmI/NB2qpcJ4bcvNsQvWupigoRuQ0Yt6RCl8THSiVxLTtHlVsw3w3bUCFBPjXN/gW8KIp/dXwXew/LKu9089PGtJf1kmfCmHFOE3EEhSR0pJ2sb1dGaktFU4OL2MUxUnfblTyxxhVtqralWlSNx6/tVWS6On1oi5dTKOvgaZ0xT0zh/EUvqGU5X1kHnymmeDtItyQZZRKSI1OhjlI8a8x4LjArakhSInn4R6xXoOGculszqw6b9Pc1myQ4u0BheIvuLhLuxcHUHSCNtB4VZuFYo3Ek7j6+Jqq2UDXEDmBqTHzSDH3+9PcI1uCLYdCk6nqTqDUjrbAOmcDcgedQtilBIkeGu9L3vlpXMG1BBIGn/NK72KzXMiCTt5+tVZPUV9pBlf4laZSbgIIkbSR5VVeJYsO6lSYXYHoKJxRado6wZnzpVevABYBkakn6Vmll5PeyEt7FE6NOnKKymNnhbMoMwTrJJJP0rKFsJGyAMD028fOmb4Qdmbi3yufcEDXwgUvuoCCoiBqDtH8zWrlt1t6mEdonkCATJpMd8qfkjMdAQEDkHYkxl0nUEVCwMwfef2qREuC2zIQU2aDsZjUVALTFgDJLH+zQyOSlxoiC0Mcu8OY8K6SNTInNJn9q4t2SB5aknlyqbDBJ1giNN9/Wqr1dBOsOhe4CXJblG56fQVr4gvG0jXTAjKduZMehiD70ZicqNmYyQMsDef2qs/GuKY4XmEzqO9PKY9NZrV6eL5JtCtro894qk3HJ1J1nzq88Ewq27SADWK87uXZuIBqWI+ten2GS2ih2A051uyPpGnCqTZMFrYqH+usnQXFnzFT23WNxVJoWzT2wdCKWYngGGuGWtCfDSnIIrqBUveiV8iGz8NYZdRb18TNVX4h4aLTyB3TtFejlNNKq3xeg7OTyNWQm1IrnBOLKjhCZAB0616XwK/NsNlVsmgA1BGh+leVhspJHWvSPgjD3Dh1CCWZnYHwBHMbbVbPoyPosXD7ZbtALKmdMxgEdQD1piUyNC3SynXXUk+nKlWCsEyxtACYKlmAJ5kdCAOdT4d7jAsoIy6AEb6nWetZ53W+hAq7e2HInYcvCl2JdbbhywBywEGsa6+vjR1l2Vcz24Y7Et50svoLknKA8R5dKyyWwmnxrMrSe4dlA/eobEZgIkbRp4fxRWGw9sIwuExOkczPSo1VAW10nc1W09EOxdvsWzNCzoAQR9K3W7eKf8pAXUCJjfwrVB/xDobJwgANcu3BptIHpOtJ8UT2lzIQ4VjIBGWCARA85FEpxI3FuIzkkrIJEgRzmlxtIGUzPdjcGYO5Ec/2rouKfSEsZYfEOYQ2QLx1b8ON9ATymZ96gKANkiTOgnY+lc469bJm33DHe1c5toG/KN9aitX872lUgM7ga6iSOfqPrVU8SbuxuXgNxiag/KCASo0+9cJc7OCss0kwOXQk/tWsW0ysfiDTN1168v8Amu1UdpcOSAAFMnmN/rz8KkYorfZziX1DFtG0M+B1I6GKr3xliUuYO4tuSqEd7/2GketNOLAlFVnGYnYbnppttS27ambTlSg3WNCPPn/NM5KLDFbPPOB2S+KtAD5STHkP+quOO4RcuaveielB/C/CymLuBh8iEjyZgAfYU84hw92Y5iTb/Spj1J5+VGU7laOhCFJplVv8CtoZ7Qk+Jp1wlbs6NKqNqW4PgbKxzvIiFAJ67nrVo4JgiD4RBpJNt92WpJLqhZxLGX1aFEDrSwDHOxKXoB5TpVn4xhAzfSq5iOHXcpNpz2obWGgR9+lSDdkkk0E4Y4+2QW7wHQ138SXhdwlx4hgJI6a1Fw8462F7SXB3nl086Ycas5sLiDEEoTFO5bVicUkedJr5V6/8P3Ozw9gJKXAigxGu5HLyma8v4Bw57t5LYGgMt5CvXb2CNq3auaMHiNNuYEGr570jFLoixGOuXVIdswOgGwBA3qLCi4WMKdBBA8PHY+dZiLlwsTEciAoA012oixi71tEuBFyHQnWTJ51RVvYkVZvG33YLmCqTrpyA8+dQYciIB9a4xF7MuqxqRJM7Hao7LDvyNuc7aUjhfYwS5JJmJGgA+9R52nKBoOddG7qAB4+wrbHLBJOXlSLG2xWyMWiQFGgGu1ZRAD5nyhgAehPiKylfpmwivhiMWZWDBSIMjfwiu+K4VkyXAhNtpA9BMfSpFxtxsSlqe6B38xBzSNZ+mnhTd8f2r4RTYOUG4xGmyplkDzYVqTVUTgJ8CYKFxkIkgkgbb77+vWucS2S6ty2RoQQN4PQA7n6Ubi3dWcjD2rYABLXZO0lQANB50FxTCBWsOG7126qEaaE7sQDpuKD2icRtxrH9o1q2rDLGY90g5uhqPBYVrttsghpJLQeu3tXXHbSnEpbzQqWGdm3PcmieB4dzgQ2gZwW1/T0PtRptuw8fIkfBXFzZ4BJ3nU+FDX7bF7SkQDOn6gIJmrDcZWiQcw5sV59deWtCcQtlAjqwy2wdAeu/3qmUQxVMV8KBN+9cYASoUeQJ/mnF2yrbil6AB0IAGZT67GmHaaVDc3btAX9Go1gUXg7YANC3b9sSbrQuw6TRaYq2ABI86KoZ2R37YJM0Pc4WjGY16iiLl+0Se+JHjW8NipGtTRNnFrhwHM+tCcdtgYe+P/rb7U1e8IpVxW5+Gw3zQI8zUXYHZWeA8OUWwwP4pdSeo1ivUMMbNxOycZsupBnQzpHtVPwOFyXCwAHOPrTsq3YtdRmRy35TB0bUVbCTtsp9TSqK6QNjbSrcfKpAGrSYn1OvpRuHWcOEY5g7BUH6ddxHMCTSu9h7hKswYhiO8TO/1qE5soDM3dnQzoZ+mlOjIkPThrUugA7Ne6CA2rkakeWg96TXkKu6693c69aMGAurbVjcbI2wk6c9vGghYZXu584HYlumxEipKPgOpK0dWjJfXQAadZo3F8OKIjhiwaIA1gmI26xS7DLcXQIWJUSBGhk668qtFmyTbCltcu/iNj6ECpGKJxK0l59c2aeck7jlWUwwWIw925duXrgSY7sxB2P2rKRx/wBsnEqPB75t4q3cZsstDZttRBPjvVjv8QZ8az2RmtWh2YCkd6YLR11B9qF+IALlq2cmqNExyMgg+wo/4a4YzWUKkqpYliD0MREa6AVPwh7Uo2TWMauIufhAyVJZWUlZB6T6+lA/EaIlu3kcNc7VXhRCpkOoHTcaU6sYgYfEJbuE5bmitoBO8VB8UhLtpLlpcygmWCmI01np40V0KuxT8RW1N23ctlgt+0S20wW1FXTCZLmGUW1IQplUHcACB9qpbE3Hw6rqUtIvtmJqxcFxLoi2jBKyIJHiRPSjFqwy1SFdvhGIR7rx3GMr1FCYl7gD24ERBmndzjsqNdToRG1A3xauAES7RGuh8PD18Kz5JxXRFKPK2A4m24NgsBlK90jwGs+Nc4jFBFLE6AUdjwTYtnWEZSD9D96U460GDIw0OhFBtGrE7tC4cTa6CbY7gO/WoWs3WzMGjoAalXhKKNC0dAT9qHZLAJBYg/7jRtMvjH8k2ElDmKAkc9J96Y4XiVu4SEMHmKXphbbDuOw8Q01HhuGNbuB2cluvM+cVHVBa2PjcrhbLXHSFLBdTA25D96iDU7wWEUWwxaLjHMeULtHXY1IVeyrLPgjnGYVEwmcfOXUlp1+bLHsTU+CU5rguXFCJcJBJHezAH6TRGJewcObBMEjSAdDMj60gS1ZFxWv3gQSwZMjTqIifKrucE6TMbkpbZa1u2gSS6AAfqFVvE4rvflKrm2G8zRj4DDvZNpdARAMdDIgnfbnUqcOtZy4BiB+XQcifGaWeVeBZOgHD4sMIu3CoTYa9N59qi4hjFdbYVu+xKsQCRkbRo08BTS5wm0Q2QosyJUn03qG3wfL81wAa6c/+6nv2rfYkKjFJCpry3CCslW0Ehl2bnzHP2qxpirapbZxIWQGG4nTSh0wVgA5i76wF86J/p7YW2rKcqwVU6xHj1iaSOcPIWYDhuZ70qYnukqdQCdfqKym166ggsLjLsuUn3NZU9yXwh+ZV8TbuBLhuIRoDIkgSRzPjTj4Rvwt60eTZh66H7fWlmIxRIZp7rGecDUmBJ2rLGNa2QRsdJBBjzpYZGnb/AKBgqTQ64haDYjDubohW/wAthvOmnjvTbiIRLVzPcy2ypXWIEiABAqnXXu3WLG4AD8vX0EVK+GxGUBnDGf8AUfvvTLL3SEvZHwy0FuBrwGTKTGbWY8Kmsk3GuRJYkAZtyCNc30rLeAAOtxhG4MT99KITBWTJuXjDc56/eleRhk1J2IVw1wXCGZSvqIplaJzKhcBSI3+tHmxhFgyJAjMdT4GNjUq9gghgCDBkAa+dIhKSBygZFS4O8R8vlzJHKlfFe4cw1ETT69dw9u21xli2NSPPYDX6VVrPETiBcuEQuYqq9FGwqxw7l4L/AE7d7J7OJQqDXQSyZJUE+VVnH2L1pi1kyp3Q/tQlrjjjR0ZT0oU/Bs/cuiJaUSoAoLE3xO9Vz/Grh0S2T51Jhrdx2zXDvyqcfkZMfYZ8zADXlVuvvbtgEqx15jbr7Uh4NgYUXrgItjUf6j0Hj96c4XGOEdJPaqAC8Ssg8/OYq+ODlBvyYvUzuSSJLjWkW2zWpzLmOpyr0GnpQ1zjNgSwsjTWdNfU1NiMdiVggB7fMKJ08qlwlpbhzXWW2G07MAAn/dI8KztuL6KZxktMjxPGOzIUjOGGaQY9BQl/icnMAQOhJ08aYcWti4mRUi4DIkcgfelD8LvRsszqe+f2oW2GGLkrJzxgmYtjQHx0oe7xRyPkSJmI5xWv8Lv7BRPXK5rn/B8SSDsAZ0tfzQ4/gdYPyafiN4yRAMwWUdeX3rg469sWYweR5gz9gaITgeJ7wm4B4BB+9dD4bvHftJ6doij6A9TTpP4G9qHyQ2cHfujMLuVOQLE+e0CsreIwtyyy2cxQBZ7pzTJ5nTxrKBnfZyLNgGUUM5MaLI15make6y5YQgTI0EERoI9astngdlDKhvPManHC7O/ZijwZbryypBL4ZQ0qSdJOtdW7dzMx7RNAR3jO/SriMFZ37NZ8qlSwg2RR5AUVjDcV4KOmEdpg6xMgMZ30/vrRdnhV1okNHgp018atty4qiWIA6mleK44i6IMx6nQUyxoeEJTf0RFw4HpMP5HKB661xbsYd7nYBszoJKg7a92YHSlnxBx24LZhu+3dQTHeOg/mj+CpZw9lrPa58Qe9dYGXJb8zRt0A6AVbDApbDmh7SqXYp+J7+YCwCBZtmdPzGDMmlPCrg7NI2j761Nx0wlzICRBgkzyOhpdwVG7JfKj6jSSRPTLsY4hCRtNK3wxJ2im6yRQ93TlWNm1AIsqo1pl8P8ObE3CYIsJ85WJPgB060Jh8E964lpSBmMSeVXW/wo4S1msS2QaAaMW/eTWnBh5O2Zs+fiqQVcu5z2AVSqAQy/KX/IsciN48KG4nh2RIJA73iSYoPg+LJuLZvQbijtLtyIlvyqwHMdd9K3xbEI1wKpJK7kydTrAJ9K2y+mLM3po+5lik+3/bslw+II50Yl0E5iAWiJNKEeirb1k1JUzt5cEZdob8OB7TMbmwiNJb+4pyCY13qq9ppR3D8Z3UVyTcIzbfKDqJ9IpowpVE5efDHHTvsdtdFQNiQOVQtc51Gzf3FArUUEHFeFQPijpBIPLz5VGzedC3pg0ApIW8bsksLoJh+U7HpW6Ot31HziVOvk3OspHFPyDgvgdf1I61o4pepNJlzEDQ1MllyNSR15Ulss9tDE4rp9TUi3T1oK3YHMmaj4q5Sy5U6xE+ZimIoKUlFeRJxPHm47EE5Bov80GWqJTUeLxAS29w7KJqLZ34wjjjS6QPgLguY3MVzW8OJA5dodvONPetcKe+bd7JbgsxZmykkljOp6wKcfD2Du2LBZkftmzXHC5V7x5SddCwH/rU1ixc/p7zm2ZOaM93oIEx410Ma4wqjy/qZ+5k5X3v+Aotdq1oG6kNoW1GugOgnx+9RcOQ9mgdMjdPXfyp9Y4b+G6uLajPAK5tICj1MiocatwAZlPd/OwjMNgygbCdxyPnVWWPKL0PhklJbADaAqG5a36ASaNYwJNIrpFxu7le/cbLatHNsPmOnt71nxYuUtmjLl4LXYLj72Hu5bVo9pctal4OTxIA3M6Dyp5wa9i1S3dGKFy2gJW3dIJMT3pIEeGvKswnw/2K3yjql1otwi5grHeCd4n70143hLww5tqbTbIMyEac9vAGt3FdROfzv7rFPD/jO7luvc4arldWcXVltdJEGu7WMa7+IyBZ5DzmaJu8Da3ZWyVtuoU3Lgy5GGmgBHTxoXDxkB2ETWbO30ujs/pmLHuXlf2YUtTI9V7EfEeHWVSbjD9I09zU3COKG9nJXKVMRM+VVcZJWb1mxylwTtjzEXItuRvEe+go7C3L2fs+yByR2jxueSDy50pZ9BoD3l0J37w0pzbRrdr5UzbnV9WbU/X6CtGF6OT+ppKSTZzxPjKKTaysp5v08B41mBfuqwu5y+iqSFJ8YoLCW7rsDcQMsS8MSB0gMKJfCg3VDg9oROeIRV5DTZvHatEoxqqObDT5N68eBhuxAcEj+96jcwYJqVwyqUQobYMS5MqfTn486GTFpcUOCCsx7VkyY+O10aIZL0zasu3L03rKju5Z2NZVVFxIuKbkfpUlrEExuaD1rsM87wOWX96pHGiuen1oPjBPYvJ6aDzFaSdJO3M1BxUxacTJ6Ue9D49TT/KPPMXxe+r3ArLAYgDLPOrBkNy/hbESC4dx/pTvEnwmPeqriUm8y9bke7CrXw0ntMRfyg/LZtyNJdhnPtHtWmEE2qHn6iax5HJ+aQ9x+NuraZgtsFiPmuDnLnYeK1Jib1xbFi3NmXKAy7czmP2NIeKcRZ2s21VBmJaAo/M2VfoBR3HeLOr2QBb7ouP8g/KkD6mtvGVL+ZxpTjya3rQU2MuDCtdF2yrnMwIz6S5g/au8FxD+qsG3ca0b2ozgkCRHeCkeOopXj+I3lwaLK/Ig+RecUNwTiN8pbgJnzXApKLvlEGg4PjeuwxnHlW+rBeI4o5RaBhiYYgEwAYJ+9WjAIltVup2SqqQpcyVUCTtsTuaqPGr5XE3EVEZnygzOhffT0mnfG+LNbw5S2loSAg7vUgfahHC4xSXkMsyk22bwWKvu2GXtLDZma68Fhpyj6URicYb1+1YFxkVGljbQsGjU94jbSNKDw2NZVv3wEBtrkQqo/INf/wBH6Uo4FxDEAX7zXXIS3Anqxj+adQfFyF5RclFXstFy9duL+HctubrkkOMhyJy94pSm7qQJBIIHnRWA4jca8bTIj9nZQZmXUFjJoPH4jLiSpUKLiBxlECdm09AfWs2aD4p/B1v07PH3ZRXnX8igXkyXLifpYj606+Gb0XLi/qUH2MUv+IEyYi50bvD1qPhGIy3rRnc5T60stwK8P/H6tL8tfzL8DJtCJ/ETTr3qI4xjrwZba9kIEkOxmT5eH3pXib+VM/6SraeDCg8FxIXMQB2KQWJJJJ7oJJPsKf0ybTaXQ/6sorJHk3teC22WvA27eW2RGe6Q0eQE8qMwOIzC4zA27jmBInujmOtILnFLZAy2lNy8+VQCfl/6qe5xI27lpbTTZy5F66ePnVqjJ/xOdOUE0letBd2w4vA5rzi7sQFAVlGm+4Nc2wbbIGRktP8ArH+W+x1HLbfl5VziBevKUGYncROh5VBbtXnUEuQXORlDSRcGzfsaLjrb/AFNPSW1tf8AgxaQSNQRvWVBg7zOOzuf5qaEx8wGnuNvasrO8DTLVnTJFLT0FTr4RXSYZtyZ6/8AFSpZjSNOlc+zYRhJ0iR0obixItmQNwPcEf8APpTQTGwApP8AEjAWhBUHNpM75W6b1ZiVzQs5NJtFHv8AZrfAa2RczAhgx66yvpyirxhMRbtWbCMe8Fa42h3g+HV6qJs3b2NIy6G4LmYj/wAejemkCPGrliMLcLBReYDswsQu5uKP2NbIQ42UZc3PVduwa3xDDnGW7ef/AC8o+U/lWenWi+M8Sw7XLgFxJFpU2O9x46dBQvCsFdOKvXBfaO+e8ixvFTX8Jea8xN5ADetj/L5Isx71e6tGNW7ZP8ScUw6JbQOup6HZRH71Dh8bYNpQHAzIoBg7uxJ5dB9KH+JMLfZrQF5Yg/8Aj8anfC3lS2narKhgZT9FuPuxqNKkFXbF91bD4y2/4bZhaOYx08fAU24w2Hy2lm1LXUEdzrSDGYW5/V4cNatOwtW5Y6R3TyphxPA3PwfwrOjFpM6QpA+pFM/AvyNcTirFvCXPxEGYExt8zTy8xQXC8XZazdi4hz3FTUjz/eieNYW+LDqBY0yjVT1Hh4Up4Vhr/Z281uyfx1mPIUv/AFZZB/Wix4NcP22JYC2CGVZGTpSv4nwCXTbFvJ2qwVYR+qIMctak4XYu9piicNb1unUMOlDY+xc7VYw+Qi00PbYEiGDRHPag43a/A2KbhJSXz/kovHnRTbvXLC3SJQq7OoB6nL5HSkuI4sShRbFm2u/cTXQz8xJNOvjSw1suSLhtXWDq7rEE8hHrVRjrPrArP7MU9/5NWfOpz5x1a3+GXe5eD2hqYYLt5in3D+D4dLd9wkuYtiWPMifeqLwbFg23VnKraghlExJgD3n2p7wbEFi0tiHQOHLxEhATt5xVmKMoxZb6zPDNkg14Wy1vwe0bgK93slyKZ0k7+tQrw63bsOGl2tNI/nwGtAX+LGzbshmN13PaqOZk6A+VHEhrh7Z4tXlkW156a1a7VM58akpLz2P7fELZVTnGUjRbY/ihLF4JcuWFs3Mtzv2zA7rc/rQnBLl4Wylu0tpUJALamu+IpcUJdN52dWGiiBr4mpStoW3pnGPx6greyXELyG7v5hv771umNuz+I9sh+zIDgM2k8408aygp/geWNN6JjcrQuVlZXHOkYXoDjFgXLaK2n4gjXnBFZWVdg+9FWb7GIODZ1/p2cfjKnZMS0yA4IM+UUxxHFLim8wiUmJP6FVl+rE1lZXUSVnPt/wBGB/D/ABtu0uAxnYaH115+VEJxS81+2oK63bpMjoI+larKslFcv9+CmMnxIeO8Wu9vatgroUB7vVpP3qW5xe8VJYKTnvjbT5QR9qysqTivp/YkJPjL90Q3uMf/AC7JNsEtbt7H/QTTLH8ejKDakzbHzfrfy6LWVlRxWicnsI47x4LZYm1IzLpm8fKlnD+Pp2Wbs2EXl2IrKyi4LgxoSfuIb8O4xbzYmQwi9G0/lHjUV7jtn+psJLSUY6r41lZS8VbIpPRXvi3HWL+CRMxzEsE02IOlecPjraEjsEVgMpBBYg8zqd6yspJRXFFr++X7mYTjVy25dRKFcjLAAI5eo3q0cD+JAYt5G/EIUknlIFZWUsehl2yx/FOFUXEa0IZu6co1aBIg7DfU0Xhblq2uGckXLgGQlROU9JrKym7jsXH97JbGNKXrloKIbvLMk+P9+FF4t7723QkqCOSjTodqysp5Kqoqi7uxS3FMR2Fl3S4SJQEQJA6+1ZWVlUz+424l9CP/2Q=="></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Kousthubha Krishna CH
                </v-list-item-title>
                <v-list-item-subtitle>kousthubha@cbit.org.in</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="'/dashboard/' + item.route"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <!-- Logout Button -->
              <v-list-item @click="logout">
                <v-list-item-icon>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Register", icon: "mdi-clipboard-text", route: "register" },
      { text: "Placements", icon: "mdi-school", route: "placements" },
      { text: "Placement History", icon: "mdi-chart-line", route: "history" },
      { text: "Experiences", icon: "mdi-star", route: "exp" },
      { text: "Profile", icon: "mdi-account-box", route: "profile" },
    ]
  }),
  methods:{
    logout(){
      axios.delete("/api/logout")
      .then(res => {
        if(res.status == 200){
          this.$router.push({ name: "Home" });
        }
      })
      .catch(err => {
        if (err.response.data.message)
          console.log(err.response.data.message);
      });
    }
  }
};
</script>
