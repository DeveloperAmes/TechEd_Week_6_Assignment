tailwind-scrollbar package to style the scrollbars

https://www.youtube.com/watch?v=sMWfU60bwfI to add a custom font to tailwind css

Google Fonts

I've noticed that things seem to but getting cut off on the right side of the page (like the thumbnail gallery and the scrollbar). I'm sure not sure why this is happening but seems to be something to do with the sizing (width and possibly the margins).

I initially had put the thumbnail bar and search bar at the top of the page but then thought that in a mobile view it would be better for those clickable things to be closer to the bottom of the page as on a mobile view, people most likely be using their thumbs to select thumbnsils and type text into the search bar.

I wanted to have a media query so that after getting to a medium and large size, the thumbnails were going down the right side of the page vertically rather than horizontally. I tried to implement this using grid, but couldn't work out how to change the width of the grid columns as it was just rendering as two equal-width columns. I have managed to do it using flexbox but I'm not quite sure if that's the right way to go about it.

I think the gallery looks good on mobile view but I have struggled to style it using media queries on larger screens. The page looks very empty on larger screens, especially for images that are not landscape.
