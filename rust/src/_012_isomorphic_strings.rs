use std::collections::HashMap;

pub fn isomorphic_strings_caller() {
    println!("\n_012_isomorphic_strings");
    // let s: String = String::from("bdac");
    // let s: String = String::from("foo");
    let s: String = String::from("paper");
    // let t: String = String::from("baba");
    let t: String = String::from("title");
    // let t: String = String::from("bar");
    let are_isomorphic = are_isomorphic_strings(s.clone(), t.clone());
    println!("Are strings {} and {} are isomorphic? {}", s, t, are_isomorphic);
}

fn are_isomorphic_strings(s: String, t: String) -> bool {
    if s.len() != t.len() {
        return false;
    }
    let mut chars_map: HashMap<char, char> = HashMap::new();

    let domain_chars: Vec<char> = s.chars().collect();
    let range_chars: Vec<char> = t.chars().collect();

    let mut index = 0;
    while index < domain_chars.len() {
        println!("{:?}", chars_map);
        if let Some(domain_char) = chars_map.get(&range_chars[index]) {
            if *domain_char != domain_chars[index] {
                return false;
            }
        }
        chars_map.insert(range_chars[index], domain_chars[index]);

        index += 1;
    }

    println!("{:?}", chars_map);

    true
}
