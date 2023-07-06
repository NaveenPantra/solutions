use std::hash::Hash;
use std::str::FromStr;
use std::collections::HashMap;

pub fn valid_anagram_caller() {
    let word1 = String::from_str("Naveen").unwrap();
    let word2 = String::from_str("neevaN").unwrap();
    let is_a_valid_anagram = is_anagram(word1.clone(), word2.clone());
    println!("Are {word1} and {word2} anagrams? {is_a_valid_anagram}");
}

// O(n)
fn is_anagram(word1: String, word2: String) -> bool {
    if word1.len() != word2.len() {
        return false;
    }

    let mut chars_map: HashMap<char, u8> = HashMap::new();
    for ch in word1.chars() {
        if let Some(char_count) = chars_map.get(&ch) {
            chars_map.insert(ch, char_count + 1);
            continue;
        }
        chars_map.insert(ch, 1);
    }
    for ch in word2.chars() {
        if let Some(char_count) = chars_map.get(&ch) {
            if *char_count == 1 {
                chars_map.remove(&ch);
                continue;
            }
            chars_map.insert(ch, *char_count - 1);
            continue;
        }
        return false;
    }

    chars_map.is_empty()
}