use std::collections::{ HashMap, HashSet };
use core::iter::FromIterator;

const BALLOON: &str = "";

pub fn maximum_balloons_caller() {
    // let word: String = String::from("nlaebolko");
    // let word: String = String::from("loonbalxballpoon");
    // let word: String = String::from("leetcode");
    // let word: String = String::from("balon");
    let word: String = String::from("bbaalllllloooonnlloonnnn");
    let word: String = String::from("balllllllllllloooooooooon");
    let max_bal_count = maximum_balloons(word.clone());
    dbg!(max_bal_count);
}

// Drunk 🥴
// TODO: Optimize - Revisit
fn maximum_balloons(text: String) -> i32 {
    let mut chars_map: HashMap<char, i32> = HashMap::new();
    let balon_set: HashSet<char> = HashSet::from_iter("balon".chars());

    for char in text.chars() {
        if balon_set.contains(&char) {
            chars_map.insert(char, match chars_map.get(&char) {
                Some(count) => count + 1,
                None => 1,
            });
        }
    }

    if chars_map.keys().len() != balon_set.len() {
        return 0
    }

    let mut min = match chars_map.values().min() {
        Some(count) => *count,
        None => 0
    };

    if let Some(count) = chars_map.get(&'l') {
        let count = *count / 2;
        if min > count {
            min = count;
        }

    } else {
        return 0
    }
    if let Some(count) = chars_map.get(&'o') {
        let count = *count / 2;
        if min > count {
            min = count
        }
    } else {
        return 0
    }
    min
}