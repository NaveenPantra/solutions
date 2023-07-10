use std::collections::HashSet;

pub fn unique_email_addresses_caller() {
    println!("\n_011_unique_email_addresses");
    let emails = vec![
        String::from("test.email+alex@leetcode.com"),
        String::from("test.e.mail+bob.cathy@leetcode.com"),
        String::from("testemail+david@lee.tcode.com"),
    ];
    let unique_emails_count = unique_email_addresses(emails.clone());
    println!("Unique emails addresses in {:?} are {unique_emails_count}", emails);
}

fn unique_email_addresses(emails: Vec<String>) -> i32 {
    let mut unique_emails: HashSet<String> = HashSet::new();

    for email in emails {
        let formatted_email = get_formatted_email_address(email);
        println!("formatted email is {}", formatted_email);
        unique_emails.insert(formatted_email);
    }

    unique_emails.len() as i32
}

fn get_formatted_email_address(email: String) -> String {
    let mut formatted_email: Vec<char> = Vec::new();
    let mut seen_plus = false;
    let mut domain_start_ind: usize = 0;
    for (ind, ch) in email.chars().enumerate() {
        if ch == '@' {
            domain_start_ind = ind;
            break;
        }
        if ch == '+' {
            seen_plus = true;
        }
        if seen_plus {
            continue;
        }
        if ch == '.' {
            continue;
        }
        formatted_email.push(ch);
    }
    formatted_email.extend(email.chars().skip(domain_start_ind));
    formatted_email.into_iter().collect()
}