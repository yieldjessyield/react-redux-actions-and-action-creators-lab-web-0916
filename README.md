# Lights...Camera...Action!

![Camera](https://media.giphy.com/media/10bL6SqRBRfMUU/giphy.gif)

## Objectives

1. Build out action creators that return the correct data.
2. Create actions to read, create, and destroy data.

## Instructions

Imagine we're building a movie app for users to keep track of their favorite movies. We'll be building out action creator functions so that the user can take the following actions.

1. Add a new movie
2. Delete an existing movie
3. Update their username
4. Reset their username to the default username of 'default'

## But Where Do I Write My Code?

By convention in Redux, we write our action creator functions in a folder called `actions`. For a small project, we can define all of the actions in a single file file called `index` and export them as named exports.

For example:

```javascript
// src/actions/index.js

export function incrementCount(){
  return {
    type: 'INCREMENT_COUNT'
  }
}
```
