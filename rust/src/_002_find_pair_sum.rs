use std::collections::HashMap;

pub fn find_pair_sum_caller() {
    let vec = vec![1, 4, 3, 1, 3, 4, -2, -1, 5, 1, 4, -1, 3];
    let target_sum = -3;

    match find_pair_sum(&vec, target_sum) {
        Some((ind1, ind2)) => {
            println!("Items found in {ind1} {ind2} are {} {} for sum {}", vec[ind1], vec[ind2], target_sum);
        }
        None => {
            eprintln!("No items found for target sum {target_sum}");
        }
    }
}

fn find_pair_sum(nums: &[i32], target_sum: i32) -> Option<(usize, usize)> {
    let mut num_to_index_map: HashMap<i32, usize> = HashMap::new();

    for (index, num) in nums.iter().enumerate() {
        let remaining_sum = target_sum - num;
        if num_to_index_map.contains_key(&remaining_sum) {
            return Option::Some((
                *(num_to_index_map.get(&remaining_sum).unwrap()),
                index
            ));
        }
        num_to_index_map.insert(*num, index);
    }
    return Option::None;
}