use std::collections::HashMap;

pub fn word_pattern_caller() {
    // let pattern = "abba".to_string();
    // let pattern = "aaaa".to_string();
    let pattern = "abc".to_string();
    // let s = "dog cat cat dog".to_string();
    // let s = "dog cat cat fish".to_string();
    // let s = "dog cat cat dog".to_string();
    let s = "b c a".to_string();
    let pattern = word_pattern(pattern.clone(), s.clone());
    dbg!(pattern);
}

// Drunk 🥴
// TODO: Optimize - Revisit
fn word_pattern(pattern: String, s: String) -> bool {
    let mut domain_map: HashMap<&str, &str> = HashMap::new();
    let mut range_map: HashMap<&str, &str> = HashMap::new();

    let domain: Vec<String> = pattern.chars().map(|ch| ch.to_string()).collect();
    let range: Vec<String> = s.split_whitespace().map(|st| st.to_string()).collect();

    if domain.len() != range.len() {
        return false;
    }

    let mut index = 0;
    while index < domain.len() {
        let mapped_range = domain_map.get(domain[index].as_str());
        let mapped_domain = range_map.get(range[index].as_str());
        match (mapped_range, mapped_domain) {
            (None, None) => {
                domain_map.insert(domain[index].as_str(), range[index].as_str());
                range_map.insert(range[index].as_str(), domain[index].as_str());
            }
            (None, Some(_)) | (Some(_), None) => {
                return false;
            }
            (Some(mapped_range_val), Some(mapped_domain_val)) => {
                if **mapped_range_val != range[index] || **mapped_domain_val != domain[index] {
                    return false
                }
            }
        };
        index += 1;
    }

    true
}