export class IndexedDB {
  private db!: IDBDatabase;

  private key: IDBValidKey;

  data: Record<string,unknown>;

  allRecors: Array<{
    name: string;
    lastName: string;
    email: string;
    image: string | ArrayBuffer | null;
    score: number;
  }>;

  private static instance: IndexedDB;

  constructor(
    public readonly dbName: string,
    public readonly dbVersion: number
  ) {
    this.key = "";
    this.data = {};
    this.allRecors = [];
  }

  public static getInstance(): IndexedDB {
    if (!IndexedDB.instance) {
      IndexedDB.instance = new IndexedDB("AleksandroSN", 1);
    }

    return IndexedDB.instance;
  }

  openDB() {
    const dbrequest = indexedDB.open(this.dbName, this.dbVersion);
    dbrequest.onupgradeneeded = () => {
      const db = dbrequest.result;
      const storage = db.createObjectStore("user", {
        keyPath: "email",
      });
      storage.createIndex("rating", "score");
    };
    dbrequest.onsuccess = () => {
      this.db = dbrequest.result;
    };
  }

  addRecord(storage: string, data: unknown) {
    const tx = this.db.transaction(storage, "readwrite");
    const store = tx.objectStore(storage);
    const req = store.add(data);
    req.onsuccess = () => {
      this.key = req.result;
    };
  }

  getRecord(storage: string) {
    const tx = this.db.transaction(storage, "readonly");
    const store = tx.objectStore(storage);
    const req = store.get(this.key);
    req.onsuccess = () => {
      if(!this.data) {
        this.data = req.result;
      }
    };
  }

  getAllRecords(storage: string, index: string) {
    const tx = this.db.transaction(storage, "readonly");
    const store = tx.objectStore(storage);
    const storeIndex = store.index(index);
    const req = storeIndex.openCursor(null, "prev");
    this.allRecors = [];
    let topTen = 10;
    req.onsuccess = () => {
      const cursor = req.result as IDBCursorWithValue;
      if (topTen && cursor !== null) {
        this.allRecors.push(cursor.value);
        topTen -= 1;
        cursor.continue();
      }
    };
  }

  updateRecord(storage: string, data: unknown) {
    const tx = this.db.transaction(storage, "readwrite");
    const store = tx.objectStore(storage);
    const req = store.put(data);
    req.onsuccess = () => {
      this.data = data as Record<string,unknown>; 
    };
  }
}
