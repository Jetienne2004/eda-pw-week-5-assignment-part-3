console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line

let myCollection = [];
function addToCollection(collection, title, artist, yearPublished) {
  const record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  myCollection.push(record);
  return record;
}
console.log(addToCollection(myCollection, "Disturbia", "Rihanna", "2007"));
console.log(
  addToCollection(
    myCollection,
    "Stereo Love",
    "Edward Maya, Vika Jigulina",
    "2008"
  )
);
console.log(
  addToCollection(
    myCollection,
    "On the Floor",
    "Jennifer Lopez, Pitbull",
    "2010"
  )
);
console.log(addToCollection(myCollection, "Maneater", "Nelly Furtado", "2008"));
console.log(addToCollection(myCollection, "Galang", "M.I.A", "2011"));
console.log(addToCollection(myCollection, "Say it Right", "Nelly Furtado", "2011"));
console.log(addToCollection(myCollection, "Promiscuous", "Nelly Furtado", "2011"));

console.log(
  addToCollection(
    myCollection,
    "Last Night",
    "Diddy feat. Keyshia Cole",
    "2006"
  )
);

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    const music = collection[i];
    console.log(
      `${music.title} by ${music.artist}, released in ${music.yearPublished}`
    );
  }
}
showCollection(myCollection);

function findByArtist(collection, artist){
  const match = [];
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === artist){
      match.push(collection[i]);
    }
  }
  return match;
}
console.log(findByArtist(myCollection, "Nelly Furtado"));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
