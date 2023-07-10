use std::f32;

pub fn remove_element_caller() {
    println!("\n_0010_remove_element");
    // let mut nums = vec![3, 2, 2, 3];
    let mut nums = vec![0, 1, 2, 2, 3, 0, 4, 2];
    // let val = 3;
    let val = 2;
    let removed_ele_count = remove_element(&mut nums, val);
    println!("Vector after removal of {val} is {:?} and there are {removed_ele_count} values.", nums);
}

fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
    if nums.len() == 0 {
        return 0;
    }
    let mut counter: i32 = 0;
    let mut start: usize = 0;
    let mut last: usize = nums.len() - 1;
    while start <= last {
        if nums[start] == val {
            let temp = nums[start];
            nums[start] = nums[last];
            nums[last] = temp;
            if last == 0 {
                return counter;
            }
            last -= 1;
            continue;
        }
        counter += 1;
        start += 1;
    }
    counter
}