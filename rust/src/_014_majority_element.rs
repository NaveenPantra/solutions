use std::collections::HashMap;

pub fn majority_element_caller() {
    println!("\n_014_majority_element");
    let nums = vec![2, 2, 3,];
    let maj_num = majority_element(nums.clone());
    println!("Majority number in {:?} is {maj_num}", nums);
}

// can be solved in O(n) and O(1)?
fn majority_element(nums: Vec<i32>) -> i32 {
    let mut nums_counter_map: HashMap<i32, usize> = HashMap::new();
    for num in &nums {
        nums_counter_map.insert(*num, match nums_counter_map.get(num) {
            Some(count) => count + 1,
            None => 1,
        });
    }
    for (key, value) in nums_counter_map {
        if value >= ((nums.len() / 2) + 1) {
            return key
        }
    }
    0
}
