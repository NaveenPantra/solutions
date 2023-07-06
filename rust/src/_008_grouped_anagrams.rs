use std::collections::HashMap;

pub fn group_anagrams_caller() {
    let strings_list: Vec<&str> = vec!["eat", "tea", "tan", "ate", "nat", "bat"];
    let grouped_anagrams = group_anagrams(&strings_list);
    println!("Grouped Anagrams: for\n{:?}\nare\n{:?}", strings_list, grouped_anagrams);
}


fn group_anagrams<'a>(strings_list: &[&'a str]) -> Vec<Vec<&'a str>> {
    if strings_list.len() == 0 {
        return vec![];
    }
    let mut groups: HashMap<&'a str, Vec<&'a str>> = HashMap::new();
    groups.insert(strings_list.get(0).unwrap(), vec![]);
    let mut seen_words: Vec<&'a str> = vec![*strings_list.get(0).unwrap()];
    for &new_word in strings_list.iter().skip(1) {
        let mut flag = false;
        for &existing_word in &seen_words {
            if are_anagrams(new_word, existing_word) {
                flag = false;
                match groups.get_mut(existing_word) {
                    Some(existing_list) => {
                        existing_list.push(new_word);
                        break;
                    }
                    None => {
                        groups.insert(&existing_word, vec![]);
                    }
                }
            } else {
                flag = true;
            }
        }
        if flag {
            seen_words.push(new_word);
            groups.insert(new_word, vec![]);
        }
    }

    return get_groups(groups);
}

fn get_groups<'a>(groups: HashMap<&'a str, Vec<&'a str>>) -> Vec<Vec<&'a str>> {
    let mut groups_list: Vec<Vec<&'a str>> = Vec::new();
    for (main_word, other_words_list) in groups {
        let mut temp_list: Vec<&'a str> = Vec::new();
        temp_list.push(main_word);
        temp_list.extend(other_words_list);
        groups_list.push(temp_list);
    }

    groups_list
}

fn are_anagrams(word1: &str, word2: &str) -> bool {
    if word1.len() != word2.len() {
        return false;
    }
    let char_map_word1: HashMap<char, usize> = get_chars_count(word1);
    let char_map_word2: HashMap<char, usize> = get_chars_count(word2);

    if char_map_word2.keys().len() != char_map_word1.keys().len() {
        return false;
    }

    for (char, word1_char_count) in char_map_word1 {
        if let Some(word2_char_count) = char_map_word2.get(&char) {
            if *word2_char_count == word1_char_count {
                continue;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    true
}

fn get_chars_count(word: &str) -> HashMap<char, usize> {
    let mut char_map_str: HashMap<char, usize> = HashMap::new();
    for char in word.chars() {
        let existing_count = match char_map_str.get(&char) {
            Some(count) => count,
            None => &0,
        };
        char_map_str.insert(char, existing_count + 1);
    }
    return char_map_str;
}