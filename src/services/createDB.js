export const createDB = async () => {
  const dbName = "SongFavorite";
  const request = indexedDB.open(dbName, 3);

  if (!window.indexedDB) {
    alert("Su navegador no es compatible con IndexedDB");
    return;
  }

  return new Promise((resolve) => {
    request.onupgradeneeded = (event) => {
      let db = event.target.result;

      let store = db.createObjectStore("Playlist", {
        autoIncrement: true,
      });

      store.createIndex("id", "id", {
        unique: true,
      });
    };

    request.onerror = (event) => {
      alert(`Database error: ${event.target.errorCode}`);
    };

    request.onsuccess = (event) => {
      return resolve(event.target.result);
    };
  });
};

export function insertSong(db, song) {
  const txn = db.transaction("Playlist", "readwrite");

  const store = txn.objectStore("Playlist");

  let query = store.put(song);
  return new Promise((resolve) => {
    query.onsuccess = function (event) {
      return resolve("Se adiciono a favoritos");
    };

    query.onerror = function (event) {
      deleteSong(db, song.id);
      return resolve("Se elimino de favoritos");
    };

    txn.oncomplete = function () {
      db.close();
    };
  });
}

export function getAllSong(db) {
  const txn = db.transaction("Playlist", "readonly");
  const objectStore = txn.objectStore("Playlist");
  let Playlist = [];
  return new Promise((resolve) => {
    objectStore.openCursor().onsuccess = (event) => {
      let cursor = event.target.result;
      if (cursor) {
        Playlist = [...Playlist, cursor.value];
        cursor.continue();
      } else {
        txn.oncomplete = function () {
          db.close();
        };
        return resolve(Playlist);
      }
    };
  });
}

export function deleteSong(db, id) {
  const txn = db.transaction("Playlist", "readwrite");
  const store = txn.objectStore("Playlist");
  const index = store.index("id");

  index.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor.key === id) {
      store.delete(cursor.primaryKey);
    } else {
      cursor.continue();
    }
  };

  txn.oncomplete = function () {
    db.close();
  };
}
