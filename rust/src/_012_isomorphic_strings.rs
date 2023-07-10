use std::collections::HashMap;

pub fn isomorphic_strings_caller() {
    println!("\n_012_isomorphic_strings");
    // let s: String = String::from("bdac");
    let s: String = String::from("paper");
    // let t: String = String::from("baba");
    let t: String = String::from("title");
    let are_isomorphic = are_isomorphic_strings(s.clone(), t.clone());
    println!("Are strings {} and {} are isomorphic? {}", s, t, are_isomorphic);
}

fn are_isomorphic_strings(s: String, t: String) -> bool {
    if s.len() != t.len() {
        return false;
    }
    let mut chars_map: HashMap<char, char> = HashMap::new();
    let t: Vec<char> = t.chars().collect();
    for (ind, ch) in s.chars().enumerate() {
        println!("{:?}", chars_map);
        if let Some(seen_map_char) = chars_map.get(&t[ind]) {
            if *seen_map_char != ch {
                return false;
            }
        }
        if let Some(seen_char_map) = chars_map.get(&ch) {
            if *seen_char_map != t[ind] {
                return false;
            }
        }
        chars_map.insert(t[ind], ch);
        chars_map.insert(ch, t[ind]);
    }

    true
}
