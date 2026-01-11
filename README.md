### What requirements did you achieve?

I believed I have achieved all of the standard goals and some of the stretch goals.

### Were there any requirements or goals that you were unable to achieve?

I have struggled with the styling as I have got a variety of different photos from the UnSplash API with different dimensions and have struggled with creativity this week. I didn't have time to implement the search bar function either as one of the stretch goals. I feel I would need to rewatch all of the recordings before trying to implement this.

### If so, what was it that you found difficult about these tasks?

Lack of creativity, difficulty with using certain things in tailwind, and time limitations.

### What useful external sources helped you complete the assignment (e.g Youtube tutorials)?

- I used the "tailwind-scrollbar" package to style the scrollbars as there is no inherent ability to style the scrollbars in tailwind.

- This youTube video was helpful to learn how to add a custom font to tailwind css https://www.youtube.com/watch?v=sMWfU60bwfI

- Google Fonts to choose a sans-serif font for accessibility.

### What errors or bugs did you encounter while completing your assignment?

The main one was the ".map is not a function" but that was because after searching on unsplash for the theme of butterflies, the structure of the API changed into an object. I simply added ".results" to my response which then focused map back onto the array I wanted.

### What went really well and what could have gone better?

I wanted to get used to using tailwind as it seemed quite complicated when we were first shown it, but I have used it for most things and I think using it has gone quite well.

I've noticed that things seem to but getting cut off on the right side of the page (like the thumbnail gallery and the scrollbar on mobile view). I'm sure not sure why this is happening but seems to be something to do with the sizing (width and possibly the margins).

I initially had put the thumbnail bar and search bar at the top of the page but then thought that in a mobile view it would be better for those clickable things to be closer to the bottom of the page as on a mobile view, people most likely be using their thumbs to select thumbnsils and type text into the search bar.

I wanted to have a media query so that after getting to a medium and large size, the thumbnails were going down the right side of the page vertically rather than horizontally. I tried to implement this using grid, but couldn't work out how to change the width of the grid columns as it was just rendering as two equal-width columns. I have managed to do it using flexbox but I'm not quite sure if that's the right way to go about it.

I think the gallery looks good on mobile view but I have struggled to style it using media queries on larger screens. The page looks very empty on larger screens, especially for images that are not landscape.
