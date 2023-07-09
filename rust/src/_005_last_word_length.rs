pub fn length_of_last_word_caller() {
    println!("\n_005_last_word_length");
    // let s: String = String::from("Hello World");
    // let s: String = String::from("   fly me   to   the moon  ");
    let s: String = String::from("luffy is still joyboy");
    let last_word_len = length_of_last_word(s.clone());
    println!("The length of last word in {s} is {last_word_len}");
}

fn length_of_last_word(s: String) -> i32 {
    let mut last_len: i32 = 0;
    let mut is_last_char_space: bool = false;

    for ch in s.chars() {
        if ch == ' ' {
            is_last_char_space = true
        } else {
            if is_last_char_space {
                last_len = 1;
                is_last_char_space = false;
            } else {
                last_len += 1;
            }
        }
    }

    last_len
}