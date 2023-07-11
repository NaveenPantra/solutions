pub fn find_disappeared_numbers_caller() {
    println!("\n_018_find_disappeared_numbers");
    let nums = vec![4, 3, 2, 7, 8, 2, 3, 1];
    // let nums = vec![1, 1];
    let dis_nums = find_disappeared_numbers(nums.clone());
    println!("\nDisappeared element in {:?} are {:?}", nums, dis_nums);
}

// TODO: Do it in O(n) with O(1) space
fn find_disappeared_numbers(mut nums: Vec<i32>) -> Vec<i32> {
    if nums.len() <= 1 {
        return vec![];
    }

    let mut res: Vec<i32> = Vec::new();
    nums.sort_unstable();

    let mut prev = 0;
    let mut index: usize = 0;
    while index < nums.len() {
        let next = nums[index];
        if (prev + 1) != next {
            for n in (prev +1)..next {
                res.push(n);
            }
        }
        prev = next;
        index += 1;
    }

    if prev != nums.len() as i32 {
        for n in (prev +1)..=(nums.len() as i32) {
            res.push(n);
        }
    }

    res
}
