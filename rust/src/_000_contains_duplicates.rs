use std::collections::HashMap;

pub fn contains_duplicates_caller() {
    let list: Vec<i32> = vec![1, 2, 3, 4, 5, 6, -1, 0, 5, -1, 10];
    // let contains_duplicate_nums = contains_duplicates_v1(list.clone());
    let contains_duplicate_nums = contains_duplicates_v2(list.clone());
    println!("{:?} contains duplicates? {}", &list, contains_duplicate_nums);
}

// BruteForce
fn contains_duplicates_v1(mut arr: Vec<i32>) -> bool {
    if arr.len() == 0 {
        return false;
    }
    arr.sort();
    let mut seen = arr[0];
    for num in arr.iter().skip(1) {
        if seen == *num {
            return true;
        }
        seen = *num;
    }
    true
}

// BruteForce
fn contains_duplicates_v2(arr: Vec<i32>) -> bool {
    if arr.len() == 0 {
        return false;
    }
    let mut seen_map: HashMap<i32, bool> = HashMap::new();
    for num in &arr {
        if let Some(_) = seen_map.get(num) {
            return true;
        }
        seen_map.insert(*num, true);
    }
    false
}