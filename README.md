# Movie Nominations App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Functionality

This app allows a user to search for movies by title. It then displays the search results in the form of the movie poster and allows the user to nominate up to 5 selections, with the nominees appearing below the search results.

## Features

This app was built as part of a challenge from a potential employer, and it includes the following requirements:

1. Search results come from OMDB's API
2. Each search result lists its title, year of release and a button to nominate that film
3. Updates to the search terms update the result list
4. Movies in search results can be added and removed from the nomination list
5. If a search result has already been nominated, its nomination button is disabled
6. A banner is displayed when the user has 5 nominations

## Additional Features

In order to create a better user experience, the following features are also included:

1. The search can handle truncated search terms
2. If the search returns an error message, it is displayed
3. If the search is successful, the app shows the total number of results to give the user an idea of the precision of their search
4. Any duplicate movies (using the imdbID property) are removed before the search results are shown
5. Using the imdbID property, an additional search is made for each returned movie to retrieve more information
6. The movie poster image forms the basis of each movie, but if no image is returned, a placeholder image and the movie's name are displayed instead
7. To help the user identify the correct movie to nominate, additional information appears when hovering over a movie (or when clicking a movie on a mobile device):
   - the movie's year of release
   - the movie's genre, if returned (if a movie has more than 1 genre, the first one is listed)
   - the movie's box office, if returned (formatted in $M or $K for space purposes)
8. Nominated movies are saved to local storage

## Design Considerations

The most important design consideration was the layout of the movie 'cards' from the search results and when a movie is nominated. A horizontal scrolling option was selected to keep the nominated movies just below the search results and because it is a layout that will hopefully feel familiar to most users.

## How to get started

Enter a search term, then to nominate a movie, hover over it, and click `Nominate +`. To remove a nominated movie, hover and click `Remove -`.

## Project maintenance and contributions

The app is maintained by Graeme Stewart and was built as part of a challenge from a potential employer.

## Deployed link

https://gistewart.github.io/movie-nominations/
