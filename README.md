# Tournament
A single-page application that displays tournament's results. Using an API that retrieve the tournament data - results and list of players that are suspected for cheating by the tournament’s organizers.

![app](/app.gif)

## Features
- Contain a table to display the results, a row for each player, with 4 columns showing all player's attributes - id, name, level and score.

- The table have pagination

- The table have an option of filtering by level, to display only the players that have a certain level.

- The table have a free search input, to allow the user to type a search phrase. The table displays only these players that the search phrase is a substring of their name, their id, their level or their score.

- Players that are suspected of cheating have a clear table indication - the entire row containing the player’s details is “highlighted”.

## Installation instructions
You’ll need to have Node >= 8.10.

1. Clone this repo to your local machine.
1. Place the server file in the build folder.

## Usage
1. Start the server (from the build folder)
1. Open http://localhost:[port]/ to see the app. where port is the port that the server is listening on.
