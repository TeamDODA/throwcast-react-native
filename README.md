In order to start the mobile client there will be a few initial steps.  If Xcode is already install please skip step 1.

To start app:

1. Install Xcode
2. In Terminal: npm install
3. In Terminal: react-native run-ios

If no account has been made please use sign-up page to register to a new account.  After login the initial page view shows the homepage.  Use the navigation bar on top of the app to search, toggle profile/homepage view, and logout.

The search option on the top left of the navigation bar allows the user to search podcasts, stations, and playlists.

The logout button does exactly what the user might imply.  It does however warn the user of their action as to not logout by mistake.

The middle two options, homepage and profile, require a bit more detail as explained in the following:

The homepage contains 4 aspects:

1. A scroll-view of stations available on the app
2. All of the podcasts available.
3. Popular playlists which have been created either by current or any user of the app
4. A remote player located on the very bottom to keep track of the playing podcasts

Each one of these aspects have unique interactions.  

Stations
  - Upon clicking a station, the user can view all the podcasts produced by that station
  - In the station view clicking on the checkmark will favorite the station; this can later be viewed on the personal profile page
  - If the checkmark is highlighted then the user is already subscribed and clicking the highlighted checkmark will unfavorite the station for the user
  - Clicking a podcast inside the station will play the podcast; this adds all of the podcasts in the station to the player queue as well
  - Clicking on the plus icon next to a podcast allows the user to add to an existing playlist they own or create a new playlist

Podcasts
  - Clicking the podcasts from the homepage plays the podcast and takes the user to the player view
  - Here, on the top right the checkmark icon allows the user to add the podcast to favorites.  A highlighted checkmark indicates it is already favorited, clicking again will remove it from favorites.

Playlists
  - The popular playlists are available to all users, clicking on any of the playlists will open up to a view with the podcasts for that playlist
  - Inside the playlist view, clicking on the checkmark icon favorites the playlist for the user.  This option will not be available to the owner of the playlist, instead it is replaced by a delete icon which allows the user to delete their playlist.
  - Each podcast inside the playlist has an add icon; this adds the podcast to a playlist the user owns or creates an entirely new playlist.  An owner viewing their own playlist will instead see a delete icon to remove a particular podcast from their playlist.
  - Clicking on any podcast inside the playlist will play that podcast and add the rest of the podcasts to the player queue.

**This concludes the options available on the homepage**

The profile page contains 4 aspects:
  1. User's created playlists
  2. Favorited stations
  3. Favorited podcasts
  4. Favorited playlists

The favorited stations, podcasts, and playlists contain all of the same functionality as that on the homepage version of each component; except on the profile page the user only sees favorited items instead of all the available content which is displayed on the homepage.  This is meant to make navigation to favorited items more efficient and personalize the experience for the user.  

Clicking on any of the user owned playlists allow the user to delete podcasts from their playlist and/or delete the entire playlist itself.
