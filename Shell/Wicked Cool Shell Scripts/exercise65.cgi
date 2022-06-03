#!/usr/bin/env bash

full_date=$(date +'%Y%m%d')
year=${full_date:0:4}
url="https://www.kevinandkell.com/${year}/strips/kk${full_date}.jpg"

echo "Content-type: text/html"
echo ""
echo "<html><body>
 <div style=\"background-color: black; color: white; text-align: center; font-size: 20px\">Bill Holbrook's Kevin &amp; Kell</div>
<img src=\"${url}\" alt=\"Your daily comic\">
<div style=\"text-align:center\">&copy; Bill Holbrook. Please see <a href=\"http://www.kevinandkell.com/\">kevinandkell.com</a> for more strips, books, etc.</div>
</body></html>"

exit 0
