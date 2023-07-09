pub fn largest_common_prefix_in_strings_caller() {
    println!("\n_007_largest_common_prefix_in_strings");
    // let strs: Vec<String> = vec!["flower".to_owned(), "flow".to_owned(), "flight".to_owned()];
    let strs: Vec<String> = vec!["ab".to_owned(), "a".to_owned()];
    // let strs: Vec<String> = vec!["dog".to_string(),"racecar".to_string(),"car".to_string()];
    let largest_prefix = largest_common_prefix(strs.clone());
    println!("Largest prefix for {:?} is?{}", strs, largest_prefix);
}


fn largest_common_prefix(mut strs: Vec<String>) -> String {
    if strs.len() == 0 {
        return String::new();
    } else if strs.len() == 1 {
        return strs[0].clone();
    }

    let fist_str_vec: Vec<char> = strs[0].clone().chars().collect();
    let strs = get_chas_vec(strs.iter().skip(1).collect());
    let mut counter: usize = 0;
    let mut result: Vec<char> = vec![];
    loop {
        if counter >= fist_str_vec.len() {
            return result.into_iter().collect();
        }
        let cur_char = fist_str_vec[counter];
        for s in &strs {
            if s.len() <= counter || s[counter] != cur_char {
                return result.into_iter().collect();
            }
        }
        result.push(cur_char);
        counter += 1;
    }
}

fn get_chas_vec(strs: Vec<&String>) -> Vec<Vec<char>> {
    let mut chars_vec = vec![];
    for s in strs {
        chars_vec.push(s.chars().collect());
    }
    chars_vec
}