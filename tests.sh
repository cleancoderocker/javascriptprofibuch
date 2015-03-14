#!/bin/bash
: '
for i in {1..32}
do
    echo Kapitel1/Listing_1-$i.js
    node Kapitel1/Listing_1-$i.js | grep error
done
for i in {1..99}
do
    echo Kapitel2/Listing_2-$i.js
    node Kapitel2/Listing_2-$i.js | grep error
done
for i in {1..57}
do
    echo Kapitel3/Listing_3-$i.js
    node Kapitel3/Listing_3-$i.js | grep error
done
'
for i in {1..108}
do
    echo Kapitel4/Listing_4-$i.js
    node Kapitel4/Listing_4-$i.js | grep error
done