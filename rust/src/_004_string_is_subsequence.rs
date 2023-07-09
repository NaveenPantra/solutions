pub fn is_string_subsequence_caller() {
    println!("\n_004_string_is_subsequence");
    // let s = String::from("axc");
    let s = String::from("abc");
    let t = String::from("abhgdc");
    let is_subsequence_strings = is_subsequence(s.clone(), t.clone());
    println!("Is {s} sub sequence of {t}? {is_subsequence_strings}");
}

fn is_subsequence(s: String, t: String) -> bool {
    let s_len = s.len();
    let t_len = t.len();

    if s_len == 0 {
        return true;
    }

    if s_len > t_len {
        return false;
    }

    let s: Vec<char> = s.chars().collect();
    let mut counter: usize = 0;
    for ch in t.chars() {
        if ch == s[counter] {
            counter += 1;
        }

        if counter == s_len {
            return true;
        }
    }

    false
}