import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  await store.add(content);
  await tx.done;
  console.log("Added to database:", content);
};

// Method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const allItems = await store.getAll();
  await tx.done;
  console.log("All content from database:", allItems);
  return allItems;
};

initdb();
