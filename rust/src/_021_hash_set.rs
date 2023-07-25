use std::collections::HashSet;
use std::ptr::hash;

struct MyHashSet {
    hash_set: HashSet<i32>,
}

impl MyHashSet {
    fn new() -> Self {
        MyHashSet {
            hash_set: HashSet::new()
        }
    }

    fn add(&mut self, key: i32) {
        let _ = self.hash_set.insert(key);
    }

    fn remove(&mut self, key: i32) {
        let _ = self.hash_set.remove(&key);
    }

    fn contains(&self, key: i32) -> bool {
        self.hash_set.contains(&key)
    }
}

pub fn hash_set_caller() {
    hash_set();
}

fn hash_set() {
    let mut my_hash_set = MyHashSet::new();
    my_hash_set.add(1);
    my_hash_set.add(1);
    dbg!(my_hash_set.contains(1));
    my_hash_set.remove(1);
    dbg!(my_hash_set.contains(1));
}
