pub fn find_pivot_index_caller() {
    println!("\n_016_pivot_index");
    let nums = vec![1, 7, 3, 6, 5, 6];
    // let nums = vec![2, 1, -1];
    // let nums = vec![1, 2, 3];
    let pivot = find_pivot_index(nums.clone());
    println!("Pivot index for {:?} is {pivot}", nums);
}

fn find_pivot_index(nums: Vec<i32>) -> i32 {
    let mut right_sum: i32 = nums.iter().sum();
    let mut left_sum: i32 = 0;

    for (ind, num) in nums.iter().enumerate() {
        right_sum -= *num;
        if right_sum == left_sum {
            return ind as i32;
        }
        left_sum += *num
    }
    -1
}
