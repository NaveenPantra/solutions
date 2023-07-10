use std::cmp::Ordering;

pub fn next_greater_element_caller() {
    println!("\n_015_next_greater_element");
    // nums1 should be subset of nums2
    let nums1 = vec![4, 1, 2];
    // let nums1 = vec![2, 4];
    let nums2 = vec![1, 3, 4, 2];
    // let nums2 = vec![1, 2, 3, 4];
    let next_greater_res = next_greater_element(nums1.clone(), nums2.clone());
    println!("Next greater element for {:?} with {:?} are {:?}", nums1, nums2, next_greater_res);
}


// TODO: solve this in O(nums1.length + nums2.length)
fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    let mut res: Vec<i32> = Vec::new();
    for num in nums1.iter() {
        let mut greater = -1;
        for num2 in nums2.iter().rev() {
            match num.cmp(num2) {
                Ordering::Equal => res.push(greater),
                Ordering::Less => greater = *num2,
                _ => continue,
            };
        }
    }
    res
}